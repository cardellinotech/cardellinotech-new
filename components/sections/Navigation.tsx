"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services",    href: "#services" },
  { label: "How I Work",  href: "#how-i-work" },
  { label: "Case Studies",href: "#case-studies" },
  { label: "About",       href: "#about" },
  { label: "Contact",     href: "#contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Navigation() {
  const [scrolled, setScrolled]           = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 60);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { threshold: 0.4 }
    );

    const observer = observerRef.current;
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#06080C]/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-8">

        {/* Logo */}
        <a href="#" className="font-mono text-[14px] font-medium shrink-0">
          <span style={{ color: 'var(--color-accent)' }}>~/</span>
          <span style={{ color: 'var(--color-on-background)' }}>cardellino.tech</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-5 flex-1 justify-center">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1);
            const isActive  = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "text-[13px] font-medium transition-colors",
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-on-surface-muted)] hover:text-[var(--color-on-background)]"
                )}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Right: availability + CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden lg:flex items-center gap-1.5">
            <span
              className="w-[6px] h-[6px] rounded-full shrink-0"
              style={{
                background: 'var(--color-accent)',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <span className="font-mono text-[11px] text-[var(--color-on-surface-muted)]">Available</span>
          </div>
          <a
            href="#contact"
            className="font-semibold text-[13px] px-4 py-2.5 rounded-[var(--rounded-lg)] text-white transition-colors"
            style={{ background: 'var(--color-cta)' }}
            onMouseOver={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-cta-hover)'; }}
            onMouseOut={(e)  => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-cta)'; }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
