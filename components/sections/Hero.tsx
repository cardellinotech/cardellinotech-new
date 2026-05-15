export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-[72px] min-h-[90vh] scroll-mt-[72px] flex items-center justify-center"
    >
      <div className="max-w-[700px] mx-auto text-center px-4 flex flex-col gap-6">
        {/* Headline */}
        <h1 className="font-display text-[44px] md:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--color-on-background)]">
          Your infrastructure. Built to last.
        </h1>

        {/* Subheadline */}
        <h2 className="font-display text-[22px] md:text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-[var(--color-on-background)]">
          Senior DevOps & SRE for Series A–C startups.
        </h2>

        {/* USP Statement */}
        <p className="font-sans text-[18px] leading-[1.6] text-[var(--color-on-surface-muted)]">
          End-to-end infrastructure ownership — CI/CD, Kubernetes, platform engineering. No agencies. No junior handoffs.
        </p>

        <a
          href="#contact"
          className="inline-block bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:bg-[#D97706] rounded-[var(--rounded-lg)] px-8 py-3.5 text-base font-semibold transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
