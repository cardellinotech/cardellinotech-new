import { engagementModels } from "@/lib/data/engagementModels";

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="scroll-mt-[72px] py-24 px-6"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-eyebrow">
            <div className="w-8 h-px" style={{ background: 'var(--color-accent)' }} />
            <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
              Engagement
            </span>
          </div>
          <h2 className="font-display text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-on-background)]">
            How I Work
          </h2>
        </div>

        {/* Models — divided grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'var(--color-border)' }}
        >
          {engagementModels.map((model) => (
            <div
              key={model.id}
              className="flex flex-col gap-5 p-8"
              style={{ background: 'var(--color-surface)' }}
            >
              {/* Title */}
              <h3 className="font-display text-[24px] font-bold text-[var(--color-on-background)]">
                {model.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-[1.8] flex-1" style={{ color: 'var(--color-on-surface-muted)' }}>
                {model.description}
              </p>

              {/* Data rows */}
              <div
                className="flex flex-col gap-2 pt-4"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--color-on-surface-muted)' }}>
                    Duration
                  </span>
                  <span className="font-mono text-[12px] text-[var(--color-on-background)]">{model.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--color-on-surface-muted)' }}>
                    Commitment
                  </span>
                  <span className="font-mono text-[12px] text-[var(--color-on-background)]">{model.commitment}</span>
                </div>
              </div>

              {/* Best for */}
              <div className="flex items-start gap-2">
                <span className="font-mono text-[13px] shrink-0" style={{ color: 'var(--color-accent)' }}>→</span>
                <p className="text-[13px] leading-[1.65]" style={{ color: 'var(--color-on-surface-muted)' }}>
                  {model.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
