export default function Footer() {
  return (
    <footer className="px-4 py-8 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-2 text-center">
        <p className="font-sans text-[14px] text-[var(--color-on-surface-muted)]">
          © 2025 Dominic Cardellino · cardellino.tech ·{" "}
          <a
            href="mailto:hi@cardellino.tech"
            className="hover:text-[var(--color-on-background)] transition-colors"
          >
            hi@cardellino.tech
          </a>
        </p>
      </div>
    </footer>
  )
}
