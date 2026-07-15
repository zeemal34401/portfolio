"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { Reveal } from "@/components/motion/Reveal";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Reveal>
          <div className="group glass-card-static footer-card rounded-[18px] p-10 sm:p-14">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Let&apos;s build something
                  <span className="text-foreground"> worth shipping.</span>
                </p>
                <p className="footer-body mt-4 max-w-md">{site.availability}</p>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:justify-end sm:gap-[98px]">
                <div>
                  <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-soft">Contact</p>
                  <a href={`mailto:${site.email}`} className="footer-link mt-2 block text-lg">
                    {site.email}
                  </a>
                </div>
                <div>
                  <p className="font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-soft">Social</p>
                  <div className="mt-2 flex flex-col gap-2">
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                    >
                      GitHub · zeemal34401
                    </a>
                    <Link href="/work" className="footer-link">
                      Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-divider mt-12 flex flex-col gap-2 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="footer-meta font-mono-label text-[10px] uppercase">
                © {new Date().getFullYear()} {site.name}
              </p>
              <p className="footer-meta font-mono-label text-[10px] uppercase">{site.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
