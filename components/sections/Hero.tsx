export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated dot-grid background */}
      <div className="absolute inset-0 hero-dots-bg" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 hero-fade-bottom" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="flex flex-col gap-7 max-w-[580px]">

            {/* Label row */}
            <div className="flex items-center gap-3 anim-fade-up" style={{ animationDelay: '0.05s' }}>
              <span className="font-mono text-xs text-[var(--color-on-surface-muted)] tracking-[0.15em]">&gt;_</span>
              <span className="font-mono text-xs text-[var(--color-on-surface-muted)] tracking-[0.1em] uppercase">
                Senior DevOps &amp; SRE
              </span>
              <span className="flex items-center gap-1.5 ml-1">
                <span
                  className="w-[6px] h-[6px] rounded-full bg-[var(--color-accent)] shrink-0"
                  style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
                />
                <span className="font-mono text-xs text-[var(--color-accent)]">Available</span>
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold leading-[0.95] tracking-[-0.03em] text-[var(--color-on-background)] anim-fade-up"
              style={{
                fontSize: 'clamp(48px, 7vw, 80px)',
                animationDelay: '0.15s',
              }}
            >
              Infrastructure<br />
              that doesn&apos;t<br />
              <span style={{ color: 'var(--color-accent)' }}>break.</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-[17px] leading-[1.75] text-[var(--color-on-surface-muted)] anim-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              Senior DevOps &amp; SRE for Series A–C startups.<br />
              End-to-end infrastructure ownership — no agencies, no junior handoffs.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 anim-fade-up"
              style={{ animationDelay: '0.35s' }}
            >
              <a href="#contact" className="cta-primary">Get in Touch →</a>
              <a href="#case-studies" className="cta-secondary">View Case Studies</a>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-8 pt-5 anim-fade-up"
              style={{
                borderTop: '1px solid var(--color-border)',
                animationDelay: '0.45s',
              }}
            >
              {[
                { value: '8+',         label: 'Years exp.' },
                { value: 'A–C',        label: 'Series' },
                { value: 'AWS · GCP · Azure', label: 'Clouds' },
                { value: 'EU',         label: 'Based' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-mono text-[20px] font-medium text-[var(--color-on-background)]">{value}</div>
                  <div className="font-mono text-[10px] text-[var(--color-on-surface-muted)] uppercase tracking-widest mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Terminal widget ── */}
          <div
            className="terminal-card w-full lg:w-[390px] shrink-0 anim-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            {/* macOS-style header */}
            <div className="terminal-header">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
              </div>
              <span className="font-mono text-[11px] text-[var(--color-on-surface-muted)]">
                deployment.log
              </span>
              <div className="w-14" />
            </div>

            {/* Log body */}
            <div className="terminal-body">

              {/* Completed steps */}
              {[
                { icon: '✓', color: 'var(--color-accent)', label: 'build',             time: '2m 12s' },
                { icon: '✓', color: 'var(--color-accent)', label: 'tests (412/412)',    time: '3m 48s' },
                { icon: '✓', color: 'var(--color-accent)', label: 'security scan',      time: '0m 44s' },
              ].map(({ icon, color, label, time }) => (
                <div key={label} className="terminal-log-row">
                  <span className="font-mono text-[12px] w-4 shrink-0" style={{ color }}>{icon}</span>
                  <span className="font-mono text-[12px] text-[var(--color-on-background)] flex-1">{label}</span>
                  <span className="font-mono text-[12px] text-[var(--color-on-surface-muted)]">{time}</span>
                </div>
              ))}

              {/* Rolling update */}
              <div className="terminal-log-row mt-1">
                <span className="font-mono text-[12px] w-4 shrink-0" style={{ color: 'var(--color-cta)' }}>↑</span>
                <span className="font-mono text-[12px] text-[var(--color-on-background)] flex-1">rolling update</span>
                <span className="font-mono text-[12px] text-[var(--color-on-surface-muted)]">4/5</span>
              </div>

              {/* Animated progress bar */}
              <div
                className="h-[3px] rounded-full overflow-hidden"
                style={{ background: 'var(--color-border)' }}
              >
                <div className="progress-bar-fill" />
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--color-border)', margin: '2px 0' }} />

              {/* Status row */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-[5px] h-[5px] rounded-full shrink-0"
                    style={{ background: 'var(--color-accent)', animation: 'pulse-dot 2.5s ease-in-out infinite' }}
                  />
                  <span className="font-mono text-[11px] text-[var(--color-on-surface-muted)]">3/3 pods ready</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[11px] text-[var(--color-on-surface-muted)]">p99</span>
                  <span className="font-mono text-[11px] text-[var(--color-on-background)]">142ms</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-mono text-[11px] text-[var(--color-on-surface-muted)]">uptime</span>
                  <span className="font-mono text-[11px]" style={{ color: 'var(--color-accent)' }}>99.98%</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
