"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border/60 bg-background/60 backdrop-blur-2xl backdrop-saturate-150"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-xl tracking-tight text-gradient">{site.shortName}</span>
          <span className="hidden font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted sm:inline">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-8 lg:gap-10">
          {links.map((link, i) => (
            <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
              <Link
                href={link.href}
                className="link-underline font-mono-label text-[11px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <Link
            href="/contact"
            className="btn-primary hidden rounded-full px-4 py-2 font-mono-label text-[10px] uppercase tracking-[0.14em] sm:inline-flex"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
