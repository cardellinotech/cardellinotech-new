import { services } from "@/lib/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-[72px] py-[96px] px-4"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-on-background)] mb-4">
          What I Build
        </h2>
        <p className="text-[var(--color-on-surface-muted)] text-[18px] mb-12">
          Four disciplines. One point of contact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[var(--color-surface)] rounded-[var(--rounded-md)] p-8 border border-[var(--color-border)] flex flex-col gap-4 min-h-[280px]"
            >
              <h3 className="font-display text-[22px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
                {service.title}
              </h3>

              <p className="font-sans text-[16px] leading-[1.6] text-[var(--color-on-background)]">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-[var(--color-surface-raised)] text-[var(--color-on-surface-muted)] text-[14px] rounded-full px-[10px] py-[4px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <p className="font-sans text-[14px] text-[var(--color-on-surface-muted)] mt-auto">
                {service.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
