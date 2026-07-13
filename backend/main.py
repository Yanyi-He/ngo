from __future__ import annotations

import os
import time
from collections import defaultdict, deque
from typing import Deque, TypedDict

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from langgraph.graph import END, StateGraph
from openai import OpenAI
from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    question: str = Field(min_length=3, max_length=2000)
    consent_to_log: bool = False
    session_id: str | None = None


class ChatResponse(BaseModel):
    topic: str
    answer: str
    suggested_next_steps: list[str]
    disclaimer: str


class ChatState(TypedDict):
    question: str
    topic: str
    context: str
    answer: str


app = FastAPI(title="COAN Chatbot API")
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY")) if os.getenv("OPENAI_API_KEY") else None
requests_by_ip: dict[str, Deque[float]] = defaultdict(deque)

app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)


def rate_limit(request: Request) -> None:
    limit = int(os.getenv("RATE_LIMIT_PER_MINUTE", "20"))
    window = 60
    ip = request.client.host if request.client else "unknown"
    now = time.time()
    bucket = requests_by_ip[ip]

    while bucket and now - bucket[0] > window:
        bucket.popleft()

    if len(bucket) >= limit:
        raise HTTPException(status_code=429, detail="Rate limit exceeded")

    bucket.append(now)


def classify_topic(state: ChatState) -> ChatState:
    question = state["question"].lower()
    topic_map = {
        "rental": "rental issues",
        "lease": "rental issues",
        "doctor": "healthcare access",
        "clinic": "healthcare access",
        "tax": "tax and benefits",
        "benefit": "tax and benefits",
        "school": "newcomer settlement",
        "campus": "newcomer settlement",
        "law": "canadian laws and regulations",
    }
    topic = next(
        (value for key, value in topic_map.items() if key in question),
        "newcomer settlement",
    )
    return {**state, "topic": topic}


def retrieve_context(state: ChatState) -> ChatState:
    context = (
        "Use curated COAN resource content and official public-source next steps. "
        "Avoid definitive legal, medical, financial, tax, or immigration advice."
    )
    return {**state, "context": context}


def generate_answer(state: ChatState) -> ChatState:
    if client:
        response = client.responses.create(
            model=os.getenv("OPENAI_MODEL", "gpt-4.1-mini"),
            input=[
                {
                    "role": "system",
                    "content": (
                        "You are COAN's newcomer information assistant. Provide "
                        "general information, mention official sources, and refuse "
                        "professional advice."
                    ),
                },
                {
                    "role": "user",
                    "content": (
                        f"Topic: {state['topic']}\n"
                        f"Context: {state['context']}\n"
                        f"Question: {state['question']}"
                    ),
                },
            ],
        )
        answer = response.output_text
    else:
        answer = (
            "This is a backend scaffold response. In production, the LangGraph "
            "workflow will retrieve curated COAN resources and generate a careful "
            "answer with official next steps."
        )

    return {**state, "answer": answer}


graph = StateGraph(ChatState)
graph.add_node("classify_topic", classify_topic)
graph.add_node("retrieve_context", retrieve_context)
graph.add_node("generate_answer", generate_answer)
graph.set_entry_point("classify_topic")
graph.add_edge("classify_topic", "retrieve_context")
graph.add_edge("retrieve_context", "generate_answer")
graph.add_edge("generate_answer", END)
chat_workflow = graph.compile()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(payload: ChatRequest, request: Request) -> ChatResponse:
    rate_limit(request)
    result = chat_workflow.invoke(
        {
            "question": payload.question,
            "topic": "",
            "context": "",
            "answer": "",
        }
    )

    return ChatResponse(
        topic=result["topic"],
        answer=result["answer"],
        suggested_next_steps=[
            "Check official federal, provincial, municipal, or campus sources.",
            "Contact a qualified professional for legal, medical, financial, tax, or immigration decisions.",
            "Use COAN resources to prepare questions before seeking help.",
        ],
        disclaimer=(
            "General information only. Not legal, medical, financial, tax, or immigration advice."
        ),
    )
