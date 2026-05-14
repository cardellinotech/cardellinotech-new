---
version: alpha
name: cardellino.tech Design System
description: Dark, expert, grounded design system for a senior DevOps & SRE freelancer targeting startup CTOs and engineering leaders.

colors:
  background: "#0F172A"
  surface: "#1E293B"
  surface-raised: "#293548"
  border: "#334155"
  border-strong: "#475569"
  on-background: "#F1F5F9"
  on-surface-muted: "#94A3B8"
  accent: "#F59E0B"
  on-accent: "#0F172A"
  error: "#EF4444"
  success: "#10B981"
  warning: "#F97316"

typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "60px"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  h1:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "44px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.3
  body-lg:
    fontFamily: "Geist, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Geist, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Geist, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "Geist Mono, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6

rounded:
  none: "0px"
  sm: "4px"
  md: "6px"
  lg: "8px"
  full: "9999px"

spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"

components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    fontWeight: 600
  button-primary-hover:
    backgroundColor: "#D97706"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-primary-disabled:
    backgroundColor: "{colors.border}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  button-ghost-hover:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "44px"
  input-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "44px"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "44px"
  textarea:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  textarea-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  badge-default:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  badge-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.caption}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
  label:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "0"
---

# cardellino.tech Design System

## Overview

cardellino.tech is the online presence of Dominic Cardellino, a senior DevOps and SRE engineer who works directly with technical founders and engineering leaders at Series A–C startups. The design must signal three things simultaneously: expertise earned through years of hands-on infrastructure work, groundedness that separates a real practitioner from a consultant who pitches slides, and force — the quiet confidence of someone who has fixed production at 3am and knows it.

The audience reads code more than marketing copy. They have strong bullshit detectors and immediate pattern recognition for agency templates, portfolio theatrics, and LinkedIn self-promotion. This design avoids all three. There are no gradient blobs, no animated hero counters, no "I help teams move faster" platitudes. The aesthetic says: I built the things that let your product run.

Anti-patterns this system must resist: agency polish (Dribbble-gradient backgrounds, illustration-heavy layouts), social media personal brand aesthetics (quote cards, testimonial carousels, stock imagery), and engineering portfolio overkill (interactive terminal demos, scroll-jacked animations, WebGL backgrounds). Constraint is the message.

## Colors

The palette is anchored on deep Slate blue-gray (`#0F172A`) — a color that reads as technical, premium, and considered rather than black (too harsh) or navy (too corporate). Cards and interactive surfaces sit at `#1E293B`, creating visible but subtle depth without shadows. Hover states use `#293548` to signal interactivity with restraint.

The single accent is Amber `#F59E0B`. Warm against the cold base, it functions as a focal point without screaming. It appears on primary CTAs, key labels, and hover-emphasis — never decoratively. `on-accent` is the same dark background color, ensuring sufficient contrast (the amber-on-dark pairing exceeds WCAG AA for large text; `on-accent` text on amber exceeds AA for normal text at the button sizes used).

All body text (`#F1F5F9`) meets WCAG AA against the background. Muted text (`#94A3B8`) is used only for non-essential metadata — never for primary readable content — to avoid contrast failures. Error, success, and warning are standard semantic hues chosen for recognizability, not brand alignment.

## Typography

Bricolage Grotesque carries the headlines. It is a variable grotesque with deliberate optical irregularities — slightly uneven stroke terminations, a hint of humanist texture — that give it personality without whimsy. At display and h1 sizes it reads as authoritative and distinctive. At h2–h3 it settles into clean professionalism. It is never used for body text; below 18px its character becomes noise.

Geist handles everything else. Built by Vercel for developer tooling, it is exceptionally legible at small sizes on screens, technically coherent in context, and already installed in the project. Geist Mono is used sparingly for code snippets or tool references where monospace carries semantic meaning — not as decoration.

Type scale is strict: `display` only for the hero headline; `h1` for section introductions; `h2` for subsection headers; `h3` for card titles and labels; `body-lg` for lead paragraphs and key supporting copy; `body` for all other prose; `caption` for meta, timestamps, and labels. Tight negative letter-spacing at display sizes (-0.03em) prevents the large type from feeling loose; it relaxes to neutral at body sizes.

## Layout

Spacing follows a 4px base unit. The comfortable density choice means section padding sits at `3xl` (64px) to `4xl` (96px) — enough breathing room that the dark background reads as intentional rather than claustrophobic. Internal component spacing (card padding, input padding) uses `lg` (24px) and `xl` (32px) to give content room to exist without crowding.

Maximum content width is 1200px, centered. A single-column layout with full-width section breaks keeps the page readable on all viewports without a complex grid. The contact form and case study cards may use a 2-column layout above 768px. No sidebar. No multi-column hero.

On mobile, section padding reduces to `2xl` (48px) vertical and `md` (16px) horizontal. Type scale reduces by roughly one step: display maps to h1 sizing, h1 to h2. The goal is comfortable reading density — not pixel-perfect adaptation.

## Elevation & Depth

This system uses borders exclusively for separation — no box shadows anywhere. A `1px solid border` (`#334155`) delineates cards, form fields, and section boundaries. Interactive elements that need stronger delineation use `border-strong` (`#475569`).

The reasoning is aesthetic and technical: shadows on dark backgrounds require precise opacity tuning to avoid looking muddy or cheap. Borders are consistent, predictable, and render identically across screens. They reinforce the technical, terminal-adjacent character of the design — borders feel like structure; shadows feel like marketing.

When an element is hovered, background color shifts to `surface-raised` (`#293548`). That is the only depth signal used for interactivity. Focus rings use the accent color as a 2px outline offset, providing clear keyboard navigation feedback.

## Shapes

Corner radius is deliberately restrained. Cards and structural containers use `md` (6px) — enough to soften the dark rectangles without rounding them into friendliness. Buttons and form inputs use `lg` (8px). Small interactive chips and badges use `full` (9999px) — the contrast between the pill badge and the slightly-rounded card creates visual hierarchy without requiring additional color variation.

Sharp corners (`none`) are used for dividers, horizontal rules, and code blocks. The shape grammar communicates function: sharp means structural/non-interactive; slightly rounded means content container; more rounded means interactive component; pill means a tag or status indicator.

No border-radius variation is used within a single component class. All cards are `md`. All buttons are `lg`. Consistency here makes the system learnable and prevents ad-hoc rounding decisions from creeping in.

## Components

**Buttons:** The primary button uses Amber background with dark text — high contrast, unmissable. Font weight 600 ensures the label reads clearly. The hover state darkens the amber to `#D97706` (a 1-step shift down the amber scale). Disabled state uses the border color as background and muted text to indicate unavailability without using opacity (which reduces contrast). The ghost button is transparent with a `surface-raised` hover — used for secondary actions where Amber would compete.

**Form fields (Input, Textarea):** Surface-colored with a `border` ring. On focus, the ring upgrades to `accent` color (2px). On error, the ring becomes `error` color with no other change — the form label carries the error message in `error` color below the field. Height is standardized at 44px for inputs (mobile touch target compliance). Textarea has no fixed height — it expands with content.

**Cards:** Surface background, `md` rounded, `xl` padding, `border` ring. Cards are the primary content container for services, case studies, and engagement models. They do not have hover states unless they are clickable — non-interactive cards get no hover treatment.

**Badges:** Two variants. `badge-default` uses `surface-raised` background and muted text — for tool names, tech labels, and neutral tags. `badge-accent` uses Amber — reserved for status indicators or key differentiators (e.g., "Available for projects"). Do not use `badge-accent` more than once per visible viewport section.

**Labels:** Transparent, muted text, caption size. Paired above form inputs and beside data fields. No background.

## Do's and Don'ts

**Do:**
- Use Amber exclusively for primary CTAs and one high-signal label per section
- Use `border` and `border-strong` to structure layout — let borders do the work of shadows
- Use generous section spacing (`3xl`–`4xl`) to let the dark background breathe
- Use Bricolage Grotesque only for headings (h3 and above) — never for body text or captions
- Use specific, measurable language in copy ("reduced deploy time from 40 minutes to 4" beats "improved CI/CD")

**Don't:**
- Never add gradient backgrounds, blob shapes, or decorative illustration to any section
- Never use more than one accent-colored element per visible section — Amber loses meaning if overused
- Never add entrance animations, scroll-triggered reveals, or parallax effects — performance and professionalism over theatre
- Never use stock photography or generic "team at laptop" imagery — use real infrastructure diagrams, terminal output, or no imagery
- Never truncate typography with ellipsis in cards — size the card or reduce the copy
