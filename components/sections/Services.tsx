import { services } from "@/lib/data/services";

const NUM = ["01", "02", "03", "04"];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-[72px] py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-eyebrow">
            <div className="w-8 h-px" style={{ background: 'var(--color-accent)' }} />
            <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
              Services
            </span>
          </div>
          <h2 className="font-display text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-on-background)]">
            What I Build
          </h2>
          <p className="text-[17px] mt-3 text-[var(--color-on-surface-muted)]">
            Four disciplines. One point of contact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div key={service.id} className="service-card">

              {/* Background display number */}
              <span
                className="absolute top-1 right-3 font-display font-bold leading-none tracking-[-0.04em] select-none pointer-events-none"
                style={{ fontSize: '110px', color: 'rgba(255,255,255,0.024)' }}
              >
                {NUM[i]}
              </span>

              {/* Ordinal label */}
              <span className="font-mono text-[11px] tracking-widest" style={{ color: 'var(--color-on-surface-muted)' }}>
                {NUM[i]}
              </span>

              {/* Title */}
              <h3 className="font-display text-[20px] font-semibold leading-[1.25] text-[var(--color-on-background)]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] leading-[1.75] text-[var(--color-on-surface-muted)]">
                {service.description}
              </p>

              {/* Tool badges */}
              <div className="flex flex-wrap gap-1.5">
                {service.tools.map((tool) => (
                  <span key={tool} className="tool-badge">{tool}</span>
                ))}
              </div>

              {/* Outcome */}
              <div
                className="flex items-start gap-2 mt-auto pt-4"
                style={{ borderTop: '1px solid var(--color-border)' }}
              >
                <span className="font-mono text-[13px] shrink-0" style={{ color: 'var(--color-accent)' }}>→</span>
                <p className="text-[13px] leading-[1.65] text-[var(--color-on-surface-muted)]">
                  {service.outcome}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
