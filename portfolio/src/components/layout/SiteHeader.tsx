"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { site } from "@/lib/site";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut, transitionHover } from "@/lib/motion";

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
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 24);
  });

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: easeOut }}
      className={`sticky top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-[rgba(42,35,28,0.12)] bg-background/75 shadow-[0_8px_30px_rgba(42,35,28,0.06)] backdrop-blur-2xl backdrop-saturate-150"
          : "border-[rgba(42,35,28,0.08)] bg-background/40 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex items-baseline gap-3" onClick={() => setMenuOpen(false)}>
          <span className="font-display text-xl tracking-tight text-foreground">{site.shortName}</span>
          <span className="hidden font-mono-label text-[10px] uppercase tracking-[0.2em] text-[#4a433c] sm:inline">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link, i) => {
            const active = isActive(link.href, pathname);

            return (
              <motion.div
                key={link.href}
                initial={reduceMotion ? false : { opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.45, ease: easeOut }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className={`group/nav font-mono-label relative inline-block pb-1 text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active ? "text-primary" : "text-[#4a433c] hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 h-px w-full bg-primary"
                      transition={transitionHover}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[rgba(42,35,28,0.4)] transition-transform duration-300 ease-out group-hover/nav:scale-x-100" />
                  )}
                </Link>
              </motion.div>
            );
          })}
          <Link
            href="/contact"
            className="btn-primary inline-flex rounded-[14px] px-4 py-2 font-mono-label text-[10px] uppercase tracking-[0.14em] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Hire me
          </Link>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-[12px] border border-border bg-card md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <motion.span
            className="absolute h-px w-4 bg-foreground"
            animate={menuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
            transition={transitionHover}
          />
          <motion.span
            className="absolute h-px w-4 bg-foreground"
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={transitionHover}
          />
          <motion.span
            className="absolute h-px w-4 bg-foreground"
            animate={menuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
            transition={transitionHover}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
              {links.map((link, i) => {
                const active = isActive(link.href, pathname);
                return (
                  <motion.div
                    key={link.href}
                    initial={reduceMotion ? false : { x: 16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.35, ease: easeOut }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-[12px] px-3 py-3 font-mono-label text-[12px] uppercase tracking-[0.16em] ${
                        active ? "bg-primary/10 text-primary" : "text-[#4a433c]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2 inline-flex justify-center rounded-[14px] px-4 py-3 font-mono-label text-[10px] uppercase tracking-[0.14em]"
              >
                Hire me
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
