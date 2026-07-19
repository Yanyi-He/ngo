import { Container, LinkButton, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section tone="white">
      <Container width="content">
        <div className="card-surface rounded-md border border-line bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-brand-red">Page not found</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-brand-blue sm:text-4xl">
            This COAN page is not available
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">
            The page may have moved, or the link may need to be checked. Start
            from the resource portal or return home.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/">Return home</LinkButton>
            <LinkButton href="/resources" variant="secondary">
              Browse resources
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  );
}
