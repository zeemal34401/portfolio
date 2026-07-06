"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.05)] bg-background/30 backdrop-blur-2xl backdrop-saturate-150"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-xl tracking-tight text-foreground">{site.shortName}</span>
          <span className="hidden font-mono-label text-[10px] uppercase tracking-[0.2em] text-muted-soft sm:inline">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-8 lg:gap-10">
          {links.map((link, i) => {
            const active = isActive(link.href, pathname);

            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`font-mono-label text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active ? "text-primary" : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary hidden rounded-[14px] px-4 py-2 font-mono-label text-[10px] uppercase tracking-[0.14em] sm:inline-flex"
          >
            Hire me
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
