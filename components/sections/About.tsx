import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="scroll-mt-[72px] py-24 px-6" style={{ background: 'var(--color-surface)' }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 items-start">
          {/* Photo column */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/dominic.jpg"
              alt="Dominic Cardellino, Senior DevOps & SRE Engineer"
              width={200}
              height={200}
              className="rounded-[var(--rounded-lg)] object-cover"
            />
          </div>
          {/* Text column */}
          <div className="flex flex-col gap-6">
            <div className="mb-2">
              <div className="section-eyebrow">
                <div className="w-8 h-px" style={{ background: 'var(--color-accent)' }} />
                <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
                  About
                </span>
              </div>
              <h2 className="font-display text-[44px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-on-background)]">
                Who I Am
              </h2>
            </div>
            <p className="text-[16px] leading-[1.8] text-[var(--color-on-surface-muted)]">
              I&apos;ve spent 8+ years building and operating production infrastructure across startups at every stage — from seed-stage teams of 5 to Series C companies with 200 engineers. The same pattern repeats: product grows, infrastructure becomes an afterthought, and eventually the shortcuts compound into something that stops the team from shipping. I&apos;ve been the person called in to clean that up, and I&apos;ve been the person who built systems that quietly held up under pressure for years without incident.
            </p>
            <p className="text-[16px] leading-[1.8] text-[var(--color-on-surface-muted)]">
              I went freelance because the direct path works better. Working with one company at a time, as a senior engineer with full ownership rather than a consultant managing a relationship, gets better outcomes for everyone. There&apos;s no account manager, no junior doing the actual work, no PowerPoint strategy deck. There&apos;s me, your codebase, and a defined problem to solve.
            </p>
            <p className="text-[16px] leading-[1.8] text-[var(--color-on-surface-muted)]">
              What I care about is building infrastructure that the next engineer can understand — systems that are documented, opinionated for good reasons, and designed to hold up at 3am when something goes wrong. If you&apos;re at the point where infrastructure is slowing your team down or keeping you up at night, that&apos;s exactly the kind of problem I&apos;m here to fix.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
