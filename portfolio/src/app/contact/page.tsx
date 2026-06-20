export const metadata = {
  title: "Contact — Your Name",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
      <p className="prose-narrow mt-4 text-lg text-muted">
        Open to senior product design roles and select contract work. Replace placeholders below with your details.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        <a
          href="mailto:hello@example.com"
          className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:screen-shadow"
        >
          <p className="text-sm text-muted">Email</p>
          <p className="mt-2 text-xl font-semibold">hello@example.com</p>
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:screen-shadow"
        >
          <p className="text-sm text-muted">LinkedIn</p>
          <p className="mt-2 text-xl font-semibold">linkedin.com/in/yourprofile</p>
        </a>
      </div>
    </div>
  );
}
