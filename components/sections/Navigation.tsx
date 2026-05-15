"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How I Work", href: "#how-i-work" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track scroll position to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-[var(--color-background)]/95 backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-lg font-semibold text-[var(--color-on-background)] tracking-tight"
        >
          cardellino.tech
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors",
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

        {/* CTA button — always visible */}
        <a
          href="#contact"
          className="bg-[var(--color-accent)] text-[var(--color-on-accent)] hover:bg-[#D97706] rounded-[var(--rounded-lg)] px-6 py-2.5 text-sm font-semibold transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
