import { Container, Section } from "@/components/ui";
import { ChatbotResponseSkeleton } from "@/components/skeletons/chatbot-response-skeleton";

export default function ChatbotLoading() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="skeleton-block h-60 w-full" />
          <ChatbotResponseSkeleton />
        </div>
      </Container>
    </Section>
  );
}
