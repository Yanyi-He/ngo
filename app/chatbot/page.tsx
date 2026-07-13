import { chatbotContent } from "@/lib/content";
import { ChatbotResponseSkeleton } from "@/components/skeletons/chatbot-response-skeleton";
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

              <section className="rounded-md border border-line bg-white p-6">
                <h2 className="text-xl font-semibold text-brand-blue">Topics</h2>
                <ul className="mt-5 grid gap-3">
                  {chatbotContent.topics.map((topic) => (
                    <li key={topic} className="rounded-md bg-muted px-4 py-3 text-sm">
                      {topic}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>

            <section className="rounded-md border border-line bg-white">
              <div className="border-b border-line p-5">
                <h2 className="text-xl font-semibold text-brand-blue">
                  COAN information assistant
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Ask one practical question at a time. COAN’s assistant is
                  designed to encourage careful reading, official-source
                  verification, and respectful use of community information.
                </p>
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
                    <Button>Send question</Button>
                  </div>
                </form>
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
