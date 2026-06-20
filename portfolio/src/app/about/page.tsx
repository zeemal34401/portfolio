export const metadata = {
  title: "About — Your Name",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">About</h1>
      <div className="prose-narrow mt-8 space-y-6 text-muted">
        <p className="text-lg text-foreground">
          I&apos;m a senior product designer who turns ambiguous business problems into shippable, trustworthy experiences.
        </p>
        <p>
          My work spans B2B SaaS dashboards, mobile field tools, enterprise design systems, AI copilots, and fintech flows
          where clarity and trust are non-negotiable. I partner closely with product and engineering — from discovery through
          dev handoff — and I measure success in outcomes, not screen count.
        </p>
        <p>
          <strong className="text-foreground">Strengths:</strong> information architecture, complex data UI, design systems,
          AI/trust UX, accessibility, and case-study storytelling that helps hiring teams decide quickly.
        </p>
        <p>
          <strong className="text-foreground">Tools:</strong> Figma (variables, auto layout, dev mode), FigJam, prototyping,
          user interviews, and lightweight usability testing.
        </p>
      </div>
    </div>
  );
}
