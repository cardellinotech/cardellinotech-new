import { caseStudies } from "@/lib/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-[72px] py-[96px] px-4">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-on-background)] mb-12">
          Case Studies
        </h2>

        <div className="flex flex-col gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-${study.id}`}
              className="bg-[var(--color-surface)] rounded-[var(--rounded-md)] p-8 border border-[var(--color-border)] flex flex-col gap-6"
            >
              {/* Industry badge */}
              <span className="inline-flex items-center bg-[var(--color-surface-raised)] text-[var(--color-on-surface-muted)] text-[13px] rounded-full px-[10px] py-[4px] w-fit">
                {study.industry}
              </span>

              {/* Card title */}
              <h3 className="font-display text-[22px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
                {study.title}
              </h3>

              {/* The Problem */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-on-surface-muted)] mb-1">
                  The Problem
                </p>
                <p className="font-sans text-[16px] leading-[1.6] text-[var(--color-on-background)]">
                  {study.challenge}
                </p>
              </div>

              <hr className="border-[var(--color-border)]" />

              {/* What I Did */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--color-on-surface-muted)] mb-1">
                  What I Did
                </p>
                <p className="font-sans text-[16px] leading-[1.6] text-[var(--color-on-background)]">
                  {study.solution}
                </p>
              </div>

              {/* Outcome block with amber left border */}
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <p className="font-sans text-[16px] leading-[1.6] text-[var(--color-on-background)] font-medium">
                  {study.outcome}
                </p>
              </div>

              {/* Tag badges */}
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[var(--color-surface-raised)] text-[var(--color-on-surface-muted)] text-[13px] rounded-full px-[10px] py-[4px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
