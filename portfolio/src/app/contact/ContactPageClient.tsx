"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { LiveDot } from "@/components/motion/Effects";
import { SectionLabel } from "@/components/ui/SiteUi";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut, transitionHover } from "@/lib/motion";
import { site } from "@/lib/site";

function ContactCard({
  href,
  label,
  title,
  body,
  external,
  delay = 0,
}: {
  href: string;
  label: string;
  title: string;
  body: string;
  external?: boolean;
  delay?: number;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const [focused, setFocused] = useState(false);

  return (
    <Reveal delay={delay}>
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
        whileHover={reduceMotion ? undefined : { y: -6 }}
        whileTap={reduceMotion ? undefined : { scale: 0.985 }}
        transition={transitionHover}
        className="glass-card card-shine group block h-full rounded-[18px] p-10 outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        style={{
          boxShadow: focused
            ? "0 18px 40px rgba(42, 35, 28, 0.12), 0 0 0 1px rgba(209, 125, 80, 0.25)"
            : undefined,
        }}
      >
        <SectionLabel>{label}</SectionLabel>
        <p className="font-display mt-4 text-2xl tracking-tight text-foreground transition-colors group-hover:text-foreground-subtle sm:text-3xl">
          {title}
        </p>
        <p className="mt-4 text-sm text-muted">{body}</p>
      </motion.a>
    </Reveal>
  );
}

function InquiryButton() {
  const reduceMotion = usePrefersReducedMotion();
  const [sent, setSent] = useState(false);

  return (
    <motion.a
      href={`mailto:${site.email}`}
      className="btn-primary inline-flex items-center gap-3 rounded-[14px] px-6 py-3.5 text-sm font-medium"
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      animate={sent && !reduceMotion ? { scale: [1, 1.04, 1] } : undefined}
      transition={transitionHover}
      onClick={() => {
        setSent(true);
        window.setTimeout(() => setSent(false), 1600);
      }}
    >
      <motion.span
        key={sent ? "sent" : "idle"}
        initial={reduceMotion ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: easeOut }}
      >
        {sent ? "Opening mail…" : "Send project inquiry"}
      </motion.span>
    </motion.a>
  );
}

export function ContactPageClient() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <Reveal>
        <SectionLabel>Contact</SectionLabel>
        <h1 className="font-display mt-4 text-5xl tracking-tight text-foreground sm:text-6xl">
          Let&apos;s build your next product.
        </h1>
        <p className="prose-narrow mt-6 flex items-center gap-2 text-lg text-muted">
          <LiveDot />
          {site.availability}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <ContactCard
          href={`mailto:${site.email}?subject=Project%20Inquiry%20—%20UI%2FUX%20Design`}
          label="Email — fastest response"
          title={site.email}
          body="Send a brief about your product, timeline, and budget. I respond to all serious inquiries."
          delay={0.1}
        />
        <ContactCard
          href={site.linkedin}
          label="LinkedIn"
          title="Zeemal Ejaz"
          body="Connect for roles, collaborations, and professional references."
          external
          delay={0.2}
        />
      </div>

      <Reveal className="mt-12" delay={0.3}>
        <div className="glass-card-static rounded-[18px] p-8 sm:p-10">
          <SectionLabel>What to include</SectionLabel>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "What you're building (app, web, dashboard, landing page)",
              "Current stage (idea, MVP, redesign, scale)",
              "Timeline and engagement type",
              "Links to references or competitors you admire",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted">
                <span className="text-muted-soft">→</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <InquiryButton />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
