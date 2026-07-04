export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="animate-float absolute -left-24 top-24 h-80 w-80 rounded-full bg-primary/20 blur-[100px]" />
      <div className="animate-float-slow absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />
      <div className="animate-pulse-glow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-secondary/20 blur-[90px]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.35) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
