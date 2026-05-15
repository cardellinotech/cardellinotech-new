import { techBadges } from "@/lib/data/techBadges"

export default function TechBadges() {
  return (
    <section id="tools" className="scroll-mt-[72px] py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-eyebrow">
            <div className="w-8 h-px" style={{ background: 'var(--color-accent)' }} />
            <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
              Stack
            </span>
          </div>
          <h2 className="font-display text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-on-background)]">
            Tools &amp; Technologies
          </h2>
        </div>

        <div className="flex flex-wrap gap-10">
          {techBadges.map((badge) => (
            <div key={badge.name} className="flex flex-col items-center gap-2">
              <img
                src={badge.logoPath}
                alt={badge.altText}
                className="h-10 w-auto object-contain"
              />
              <span className="font-mono text-[11px] text-[var(--color-on-surface-muted)]">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
