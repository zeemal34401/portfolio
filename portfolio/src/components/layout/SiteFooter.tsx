import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium">Your Name</p>
          <p className="text-sm text-muted">Senior Product Designer · Open to opportunities</p>
        </div>
        <div className="flex gap-6 text-sm text-muted">
          <Link href="mailto:hello@example.com" className="hover:text-foreground">
            Email
          </Link>
          <Link href="https://linkedin.com" className="hover:text-foreground">
            LinkedIn
          </Link>
          <Link href="/work" className="hover:text-foreground">
            Work
          </Link>
        </div>
      </div>
    </footer>
  );
}
