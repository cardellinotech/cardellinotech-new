import { engagementModels } from "@/lib/data/engagementModels"

export default function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="scroll-mt-[72px] py-[96px] px-4 bg-[var(--color-surface)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-on-background)] mb-12">
          How I Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementModels.map((model) => (
            <div key={model.id} className="flex flex-col gap-4">
              <h3 className="font-display text-[22px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
                {model.title}
              </h3>

              <p className="font-sans text-[16px] leading-[1.6] text-[var(--color-on-background)]">
                {model.description}
              </p>

              <p className="font-sans text-[16px] text-[var(--color-on-surface-muted)]">
                <span className="text-[var(--color-accent)] font-semibold">
                  Best for:{" "}
                </span>
                {model.ideal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
