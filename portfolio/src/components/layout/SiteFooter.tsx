import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="glass-card-static rounded-3xl p-10 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <span className="text-gradient-accent"> worth shipping.</span>
              </p>
              <p className="mt-4 max-w-md text-muted">{site.availability}</p>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-end sm:gap-12">
              <div>
                <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-accent-bright">Contact</p>
                <a href={`mailto:${site.email}`} className="link-underline mt-2 block text-lg hover:text-primary">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-accent-bright">Social</p>
                <div className="mt-2 flex flex-col gap-2">
                  <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline text-muted hover:text-primary">
                    LinkedIn
                  </a>
                  <a href={site.github} target="_blank" rel="noopener noreferrer" className="link-underline text-muted hover:text-primary">
                    GitHub · zeemal34401
                  </a>
                  <Link href="/work" className="link-underline text-muted hover:text-primary">
                    Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted">
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="font-mono-label text-[10px] uppercase tracking-[0.18em] text-muted">{site.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
