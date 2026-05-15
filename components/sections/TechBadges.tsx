import { techBadges } from "@/lib/data/techBadges"

export default function TechBadges() {
  return (
    <section id="tools" className="scroll-mt-[72px] py-[96px] px-4 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-on-background)] mb-12 text-center">
          Tools &amp; Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {techBadges.map((badge) => (
            <div key={badge.name} className="flex flex-col items-center gap-2">
              <img
                src={badge.logoPath}
                alt={badge.altText}
                className="h-10 w-auto md:h-10 object-contain"
              />
              <span className="font-sans text-[12px] text-[var(--color-on-surface-muted)]">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
