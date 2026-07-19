import { chatbotContent } from "@/lib/content";
import { ChatbotResponseSkeleton } from "@/components/skeletons/chatbot-response-skeleton";
import { Bot, RotateCcw, Send, ShieldCheck } from "lucide-react";
import {
  Button,
  Container,
  Field,
  Notice,
  PageHero,
  Section,
  SectionHeader,
  StatusBadge,
} from "@/components/ui";

export const metadata = {
  title: "AI Chatbot",
  description:
    "Use COAN's public-service information assistant for general newcomer questions with disclaimers and official-source orientation.",
};

export default function ChatbotPage() {
  return (
    <>
      <PageHero
        eyebrow="AI information assistant"
        title="Ask general questions and get source-oriented next steps"
        description="Designed as a careful public-service assistant, the chatbot helps users prepare questions, understand broad systems, and find official sources."
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="grid gap-6">
              <Notice title="Important disclaimer" tone="warning">
                This chatbot provides general information only. It is not legal,
                medical, financial, tax, or immigration advice. For decisions
                affecting your rights, health, finances, or status, consult
                official sources or a qualified professional.
              </Notice>

              <section className="card-surface rounded-md border border-line bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-brand-blue">Topics</h2>
                <ul className="mt-5 grid gap-3">
                  {chatbotContent.topics.map((topic) => (
                    <li key={topic} className="rounded-md bg-muted px-4 py-3 text-sm">
                      {topic}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="notice-surface rounded-md border border-brand-blue/20 bg-brand-blue-soft p-6">
                <ShieldCheck className="h-6 w-6 text-brand-blue" aria-hidden="true" />
                <h2 className="mt-3 text-base font-semibold text-brand-blue">
                  Preview status
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  This page shows the intended public-service interface. Live
                  backend responses should connect only after source retrieval,
                  consent logging, and safety handling are ready.
                </p>
              </section>
            </aside>

            <section className="card-surface rounded-md border border-line bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-line p-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-blue text-white">
                      <Bot className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h2 className="text-xl font-semibold text-brand-blue">
                      COAN information assistant
                    </h2>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Ask one practical question at a time. The assistant is a
                    source-oriented preview for general newcomer information.
                  </p>
                </div>
                <button
                  type="button"
                  className="motion-button inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-sm font-semibold text-brand-blue hover:bg-brand-blue-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Reset
                </button>
              </div>

              <div className="grid gap-5 p-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Suggested questions
                  </h3>
                  <div className="mt-3 grid gap-2">
                    {chatbotContent.suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        className="motion-card rounded-md border border-line bg-white px-4 py-3 text-left text-sm font-medium text-brand-blue hover:border-brand-blue hover:bg-brand-blue-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="chatbot-preview rounded-md border border-line bg-muted p-5" data-state="active">
                  <StatusBadge>Source-oriented answer example</StatusBadge>
                  <div className="chatbot-preview__message chatbot-preview__message--user mt-4 rounded-md bg-white p-4 text-sm font-medium text-brand-blue shadow-sm">
                    How can I avoid rental scams in Ontario?
                  </div>
                  <p className="chatbot-preview__message chatbot-preview__message--assistant mt-3 text-sm leading-6 text-slate-800">
                    {chatbotContent.exampleAnswer}
                  </p>
                  <div className="chatbot-preview__message chatbot-preview__message--assistant mt-5 border-t border-line pt-4">
                    <h3 className="text-sm font-semibold text-brand-blue">
                      Sources to verify
                    </h3>
                    <ul className="mt-2 grid gap-2 text-sm text-slate-700">
                      {chatbotContent.answerSources.map((source) => (
                        <li key={source}>{source}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-semibold text-slate-800">
                    Future response loading state
                  </h3>
                  <ChatbotResponseSkeleton />
                </div>

                <form>
                  <Field
                    label="Your question"
                    textarea
                    placeholder="Ask about housing, healthcare, tax, benefits, public services, or community life"
                  />
                  <label className="mt-4 flex gap-3 text-sm text-slate-700">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-line text-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                    />
                    I consent
                    to storing this chat for service improvement.
                  </label>
                  <div className="mt-5">
                    <Button>
                      <span className="inline-flex items-center gap-2">
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send question
                      </span>
                    </Button>
                  </div>
                </form>
                <Notice title="Unavailable state" tone="warning">
                  If the assistant is offline or retrieval fails, the interface
                  should explain that answers are temporarily unavailable and
                  route users to resources, events, or qualified support.
                </Notice>
              </div>
            </section>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeader
            title="How to use the assistant responsibly"
            description="Use chatbot answers as a starting point for understanding a topic. For decisions that affect your rights, health, finances, taxes, immigration status, or housing security, verify information through official sources or qualified professionals."
          />
        </Container>
      </Section>
    </>
  );
}
