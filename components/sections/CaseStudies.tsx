import { caseStudies } from "@/lib/data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-[72px] py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Section header */}
        <div className="mb-14">
          <div className="section-eyebrow">
            <div className="w-8 h-px" style={{ background: 'var(--color-accent)' }} />
            <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
              Case Studies
            </span>
          </div>
          <h2 className="font-display text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-on-background)]">
            Proven Results
          </h2>
          <p className="text-[17px] mt-3 text-[var(--color-on-surface-muted)]">
            Real problems. Real solutions. Measurable outcomes.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-${study.id}`}
              className="bg-[var(--color-surface)] rounded-[var(--rounded-lg)] p-8 border border-[var(--color-border)] flex flex-col gap-6"
            >
              {/* Industry badge */}
              <span className="tool-badge w-fit">{study.industry}</span>

              {/* Card title */}
              <h3 className="font-display text-[22px] font-semibold leading-[1.3] text-[var(--color-on-background)]">
                {study.title}
              </h3>

              {/* The Problem */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--color-on-surface-muted)' }}>
                  The Problem
                </p>
                <p className="text-[15px] leading-[1.75] text-[var(--color-on-surface-muted)]">
                  {study.challenge}
                </p>
              </div>

              <hr style={{ borderColor: 'var(--color-border)' }} />

              {/* What I Did */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: 'var(--color-on-surface-muted)' }}>
                  What I Did
                </p>
                <p className="text-[15px] leading-[1.75] text-[var(--color-on-surface-muted)]">
                  {study.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="flex items-start gap-3 pl-4" style={{ borderLeft: '2px solid var(--color-accent)' }}>
                <p className="text-[15px] leading-[1.75] text-[var(--color-on-background)] font-medium">
                  {study.outcome}
                </p>
              </div>

              {/* Tag badges */}
              <div className="flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span key={tag} className="tool-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
