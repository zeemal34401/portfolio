"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { easeOut } from "@/lib/motion";

function CountValue({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = usePrefersReducedMotion();
  const match = value.match(/^([\d,.]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : NaN;
  const suffix = match?.[2] ?? "";
  const [display, setDisplay] = useState(reduceMotion || Number.isNaN(target) ? value : "0");

  useEffect(() => {
    if (reduceMotion || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 900);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${Math.round(target * eased)}${suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, suffix, target, value]);

  return <span ref={ref}>{display}</span>;
}

export function MetricCards({
  metrics,
}: {
  metrics: { label: string; value: string; detail?: string }[];
}) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className="glass-card card-shine rounded-[18px] p-6"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: i * 0.1, ease: easeOut }}
        >
          <p className="font-display text-3xl tracking-tight text-foreground">
            <CountValue value={m.value} />
          </p>
          <p className="mt-2 font-medium">{m.label}</p>
          {m.detail && <p className="mt-1 text-sm text-muted">{m.detail}</p>}
        </motion.div>
      ))}
    </div>
  );
}
