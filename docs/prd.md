# PRD — cardellino.tech

> **Note:** Visual design tokens (colors, typography, spacing, components) live in `docs/design.md`. Run `/plaid design` with image references before implementation begins to generate that file. All component styling references in this PRD assume `docs/design.md` exists.

## 1. Overview

### Product Summary

**cardellino.tech** is a professional landing page for Dominic Cardellino's freelance DevOps & SRE business. It presents Dominic's services, credibility signals, and engagement models to startup CTOs and VPs Engineering who need senior infrastructure expertise. The single goal of the page is to convert qualified visitors into contact form submissions.

### Objective

This PRD covers the complete MVP landing page: seven sections (Hero, Services, How I Work, Case Studies, About, Tech Badges, Contact Form), a working Resend-powered contact form API route, full mobile responsiveness, SEO basics, and deployment to Vercel at cardellino.tech.

No authentication, no database, no backend beyond a single Next.js API route for email delivery.

### Market Differentiation

The page must signal senior, direct, hands-on expertise to a skeptical technical buyer — not generic DevOps services. Service descriptions must name specific tools and outcomes. Case studies must describe real technical problems and measurable results. The "About" section must feel personal and direct, not corporate. A technically shallow page loses the target audience immediately.

### Magic Moment

A startup CTO reads a case study that mirrors their exact infrastructure problem, then immediately scrolls up to fill out the contact form. To enable this: case studies must be technically specific with recognizable problem patterns, the contact form must be within one visible scroll of the case studies section, and the form must be frictionless (5 fields, instant feedback on submission).

### Success Criteria

- All 7 sections rendered correctly on mobile (375px) and desktop (1280px+)
- Contact form delivers submission to `dominic.cardellino@googlemail.com` via Resend within 30 seconds
- Page Lighthouse scores: Performance ≥ 90, SEO ≥ 95, Accessibility ≥ 90
- Largest Contentful Paint < 2s on desktop, < 3s on mobile
- Zero JavaScript errors in production console
- Deployed to Vercel, accessible at cardellino.tech

---

## 2. Technical Architecture

### Architecture Overview

```mermaid
graph LR
    A[Visitor Browser] --> B[Next.js 15 App<br/>Static Generation]
    B --> C[Vercel CDN<br/>Edge Network]
    A --> D[/api/contact<br/>Next.js API Route]
    D --> E[Resend API<br/>Email Delivery]
    E --> F[Dominic's Email<br/>dominic.cardellino@googlemail.com]
```

The app is a statically generated Next.js site. All sections except the contact form are rendered at build time and served from Vercel's CDN edge network. The contact form submits a POST request to a Next.js API route (`/api/contact`) which calls the Resend API to deliver the submission as an email.

### Chosen Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | Static generation for fast load times and SEO, App Router for modern patterns, deploys seamlessly to Vercel |
| Styling | Tailwind CSS v4 | Utility-first, fast iteration, excellent shadcn/ui integration |
| UI Components | shadcn/ui | Polished, accessible components out of the box — no need to build buttons, inputs, cards from scratch |
| Deployment | Vercel | Zero-config, CDN, custom domain, environment variable management, Preview deployments |
| Email / Contact Form | Resend | Modern email API, generous free tier (3,000 emails/month), excellent Next.js integration |
| Icons | Lucide React | Ships with shadcn/ui, consistent icon set |
| Analytics | Vercel Analytics | Zero-config, GDPR-compliant, sufficient for early-stage traffic monitoring |

### Stack Integration Guide

**Setup order:**
1. Initialize Next.js 15 project with App Router and TypeScript
2. Install and configure Tailwind CSS v4
3. Initialize shadcn/ui (`npx shadcn@latest init`)
4. Install Resend SDK (`npm install resend`)
5. Configure Vercel project and connect to GitHub repository
6. Set `RESEND_API_KEY` environment variable in Vercel dashboard and local `.env.local`
7. Set `CONTACT_EMAIL` environment variable (recipient address)

**Key integration notes:**
- shadcn/ui requires Tailwind CSS to be configured first before `shadcn init` runs
- Next.js API routes in App Router live in `app/api/[route]/route.ts` (not the legacy `pages/api/`)
- Resend requires domain verification for production sending. For MVP, sending from `onboarding@resend.dev` is allowed without domain verification; set up domain sending (`hi@cardellino.tech`) before public launch
- Vercel automatically handles static generation — no special configuration needed for a pure landing page
- `next/image` must be used for all images to get WebP optimization and lazy loading

**Required environment variables:**
```
RESEND_API_KEY=re_xxxxxxxxxxxx         # From Resend dashboard
CONTACT_EMAIL=dominic.cardellino@googlemail.com  # Recipient for contact form submissions
RESEND_FROM_EMAIL=hi@cardellino.tech   # Sender address (requires domain verification)
```

**Known gotchas:**
- Resend domain verification takes 24–48 hours — plan this before launch day
- shadcn/ui components import from `@/components/ui/` — ensure path aliases are configured in `tsconfig.json`
- Next.js 15 has React 19 — some third-party packages may have peer dependency warnings, safe to ignore for this stack

### Repository Structure

```
cardellinotech-new/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, body wrapper
│   ├── page.tsx                # Main landing page — imports all section components
│   ├── globals.css             # Tailwind base + design token CSS variables
│   └── api/
│       └── contact/
│           └── route.ts        # POST handler — validates input, calls Resend API
├── components/
│   ├── ui/                     # shadcn/ui primitives (Button, Input, Textarea, Card, etc.)
│   └── sections/
│       ├── Hero.tsx            # Hero section with headline and CTA
│       ├── Services.tsx        # 4 service area cards
│       ├── HowIWork.tsx        # 3 engagement model descriptions
│       ├── CaseStudies.tsx     # Case study cards with anchor IDs
│       ├── About.tsx           # Personal bio section with photo
│       ├── TechBadges.tsx      # Logo grid of tools/technologies
│       └── ContactForm.tsx     # Contact form with react-hook-form + Resend
├── lib/
│   └── utils.ts                # cn() utility and any shared helpers
├── public/
│   ├── images/
│   │   └── dominic.jpg         # Founder photo
│   └── logos/                  # Tech badge SVG/PNG logos
├── docs/                       # PLAID documents (this directory)
├── vision.json                 # PLAID vision data
├── .env.local                  # Local environment variables (gitignored)
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

### Infrastructure & Deployment

**Platform:** Vercel (free tier sufficient for this traffic level)

**Deployment flow:**
1. Push to `main` branch → automatic production deployment to cardellino.tech
2. Push to any other branch → Preview deployment at `branch-name.cardellino.tech`

**Custom domain setup:**
1. Add `cardellino.tech` in Vercel project settings → Domains
2. Add A record (76.76.21.21) and CNAME (cname.vercel-dns.com) at domain registrar
3. Vercel auto-provisions SSL certificate

**Environment variables:** Set in Vercel project settings → Environment Variables. Never commit `.env.local` to git.

**CI/CD:** Vercel handles build and deployment on every git push. No additional CI configuration required for MVP. For post-MVP, consider adding GitHub Actions for linting before merge.

### Security Considerations

**Contact form:**
- Server-side validation in API route using zod (validate all fields before calling Resend)
- Rate limiting: Next.js API routes on Vercel free tier have built-in rate limiting at the platform level; for additional protection, add `@upstash/ratelimit` if spam becomes an issue post-launch
- Honeypot field: Add a hidden `website` field to the form; if it's filled in, reject the submission server-side without error (spam bots fill all fields)
- No sensitive data stored — form submissions go directly to email, nothing persisted

**General:**
- All environment variables stored in Vercel, never in code
- Content Security Policy headers via `next.config.ts` headers configuration
- No user-uploaded content, no cookies except Vercel Analytics (GDPR-compliant)

### Cost Estimate

| Service | Free Tier | Expected Usage | Monthly Cost |
|---|---|---|---|
| Vercel | 100GB bandwidth, unlimited deployments | < 1GB | $0 |
| Resend | 3,000 emails/month | < 50 emails/month | $0 |
| Vercel Analytics | 2,500 events/month | < 500 events/month | $0 |
| Domain (cardellino.tech) | — | Annual | ~€15/year |

**Total: ~€0/month** (domain renewal aside)

---

## 3. Data Model

This is a statically generated landing page with no database. The only "data" is:

1. **Contact form submissions** — sent as email via Resend, not persisted
2. **Page content** — hardcoded in component files (or optionally in a `content/` data directory for easy updates)

### Content Data Structure

To make case studies and services easy to update without touching component markup, store content in TypeScript data files:

```typescript
// lib/data/services.ts
export interface Service {
  id: string;
  title: string;
  description: string;
  tools: string[];        // e.g. ["GitHub Actions", "GitLab CI", "ArgoCD"]
  outcome: string;        // One-line outcome statement
}

export const services: Service[] = [ ... ]
```

```typescript
// lib/data/caseStudies.ts
export interface CaseStudy {
  id: string;             // Used as anchor: #case-study-{id}
  companyContext: string; // e.g. "Series B SaaS, 40 engineers"
  problem: string;        // 2–3 sentences, technically specific
  solution: string;       // What was built, which tools
  outcome: string;        // Measurable result
  tags: string[];         // e.g. ["Kubernetes", "CI/CD", "AWS"]
}

export const caseStudies: CaseStudy[] = [ ... ]
```

```typescript
// lib/data/engagementModels.ts
export interface EngagementModel {
  name: string;           // "Project", "Retainer", "Advisory"
  description: string;
  typicalDuration: string;
  bestFor: string;
}
```

### Contact Form Submission Shape

Validated server-side by zod before processing:

```typescript
const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  website: z.string().max(0),   // Honeypot — must be empty
})

type ContactFormData = z.infer<typeof contactFormSchema>
```

---

## 4. API Specification

### API Design Philosophy

Single endpoint: `POST /api/contact`. Validates input with zod, sends email via Resend, returns success/error JSON. No auth required (public endpoint). Rate limiting at Vercel platform level.

### Endpoints

```
POST /api/contact
Auth: None
Content-Type: application/json

Body:
{
  name: string        // min 2, max 100 chars
  company: string     // min 1, max 100 chars
  email: string       // valid email format
  message: string     // min 10, max 2000 chars
  website: string     // honeypot — must be empty string
}

Response 200:
{
  success: true
}

Response 400 (validation error):
{
  success: false,
  error: "Invalid form data",
  details: ZodError.issues
}

Response 400 (honeypot triggered):
{
  success: false,
  error: "Submission rejected"
}

Response 500 (Resend error):
{
  success: false,
  error: "Failed to send message. Please try again or email directly."
}
```

**Email format sent to Dominic:**

```
From: "cardellino.tech Contact Form" <hi@cardellino.tech>
To: dominic.cardellino@googlemail.com
Reply-To: {submitter email}
Subject: New inquiry from {name} at {company}

Body:
Name: {name}
Company: {company}
Email: {email}

Message:
{message}

---
Submitted via cardellino.tech
```

---

## 5. User Stories

### Epic: Visitor Evaluates and Contacts

**US-001: Hero Engagement**
As Alex (startup CTO), I want to immediately understand what Dominic does and who he helps, so I can decide whether to keep reading.

Acceptance Criteria:
- [ ] Given I land on the page, I see a headline that communicates the value prop within 3 seconds
- [ ] Given I see the headline, I understand this is a senior individual (not an agency)
- [ ] Given I want to take action, there is a visible CTA button that scrolls to the contact form

**US-002: Service Validation**
As Alex, I want to see whether my specific infrastructure problem is covered, so I don't have to guess whether Dominic can help.

Acceptance Criteria:
- [ ] Given I scroll to Services, I see 4 clearly described service areas
- [ ] Given I read a service description, it names specific tools (not just categories)
- [ ] Given I read a service description, it ends with a concrete outcome statement

**US-003: Trust Building via Case Studies**
As Alex, I want to read case studies that mirror my situation, so I can trust that Dominic has solved this before.

Acceptance Criteria:
- [ ] Given I scroll to Case Studies, I see at least 2 case studies
- [ ] Given I read a case study, it describes a specific technical problem (not generic)
- [ ] Given I read a case study, it includes measurable outcomes
- [ ] Given I am sharing a specific case study with a colleague, each case study has an anchor link

**US-004: Understanding the Engagement Model**
As Alex, I want to understand how an engagement works before I reach out, so I'm not uncertain about what I'm getting into.

Acceptance Criteria:
- [ ] Given I scroll to "How I Work", I see 3 distinct engagement models
- [ ] Given I read an engagement model, I understand its scope and typical use case
- [ ] Given no pricing is shown, I understand I need to contact to discuss pricing

**US-005: Submitting Contact Form**
As Alex, I want to send a brief description of my problem without commitment, so I can explore fit before investing time.

Acceptance Criteria:
- [ ] Given I navigate to the contact form, I see: Name, Company, Email, Message fields + Submit button
- [ ] Given I submit with valid data, I see a confirmation message within 3 seconds
- [ ] Given I submit with invalid data (empty required field, invalid email), I see inline validation errors
- [ ] Given the API call fails, I see an error message with the option to email directly
- [ ] Given Dominic receives the submission, the email includes all 4 fields and has Reply-To set to the submitter's email

**US-006: Mobile Experience**
As Alex checking the page on his phone after a colleague shared it, I want the page to be usable on mobile, so I can evaluate the service without waiting to get to a desktop.

Acceptance Criteria:
- [ ] Given I view the page at 375px width, all sections are readable without horizontal scrolling
- [ ] Given I use the contact form on mobile, all fields are easy to tap and the keyboard doesn't cover the submit button
- [ ] Given I view images on mobile, they are properly sized and not distorted

---

## 6. Functional Requirements

**FR-001: Hero Section**
Priority: P0
Description: Full-viewport (or near-full) hero section with headline, subheadline, a brief description of the USP, and a CTA button that smoothly scrolls to the contact form section.
Acceptance Criteria:
- Headline and subheadline visible without scrolling on 1280px desktop
- CTA button triggers smooth scroll to `#contact` section
- Section is visually distinct and sets the tone for the brand
Related Stories: US-001

**FR-002: Services Section**
Priority: P0
Description: Grid of 4 service cards. Each card: service name, 2–3 sentence description with specific tools named, and a one-line outcome statement.
Acceptance Criteria:
- 2-column grid on desktop, 1-column on mobile
- Service descriptions mention at minimum one specific tool per service
- Each card has a consistent visual structure
Related Stories: US-002

**FR-003: How I Work Section**
Priority: P0
Description: 3 engagement model descriptions — Project, Retainer, Advisory. Each: name, 2–3 sentence description, "Best for:" line.
Acceptance Criteria:
- 3-column grid on desktop, 1-column on mobile
- No pricing mentioned — description only
- "Best for:" line helps visitors self-select the right engagement type
Related Stories: US-004

**FR-004: Case Studies Section**
Priority: P0
Description: Minimum 2 case study cards. Each: company context, problem description, solution summary, outcome. Cards have anchor IDs for deep linking.
Acceptance Criteria:
- Each case study card has an `id` attribute (e.g. `id="case-study-kubernetes-migration"`)
- Problem description uses specific technical terminology
- Outcome includes at least one measurable result
Related Stories: US-003

**FR-005: About Section**
Priority: P0
Description: Personal bio section with founder photo, 2–3 paragraphs of professional background and personal voice, and optionally a list of key career highlights.
Acceptance Criteria:
- Photo renders correctly using `next/image` (WebP format, lazy loaded)
- Photo has appropriate `alt` text for accessibility
- Text is personal and direct — not a LinkedIn bio
Related Stories: US-001

**FR-006: Tech Badges Section**
Priority: P0
Description: Logo grid displaying proficiency in core tools. Logos: AWS, GCP, Azure, Kubernetes, Terraform, Pulumi, GitHub Actions, GitLab CI, ArgoCD, Helm, Prometheus, Grafana, Datadog.
Acceptance Criteria:
- Logos displayed at consistent size (32–48px height)
- All logos have appropriate `alt` text
- Uses SVG where available for crisp rendering at all DPR
- Responsive: wraps naturally on mobile
Related Stories: US-002

**FR-007: Contact Form**
Priority: P0
Description: Contact form section with fields: Name (text), Company (text), Email (email), Message (textarea), plus honeypot field (hidden). Submit button. Success and error states.
Acceptance Criteria:
- All required fields validated client-side before submit (react-hook-form + zod)
- Submit button disabled while submission is in flight
- Success state: confirmation message replacing or overlaying the form
- Error state: error message with fallback email address
- Honeypot field: `name="website"` with `display: none` via CSS (not `type="hidden"`)
Related Stories: US-005

**FR-008: Contact Form API Route**
Priority: P0
Description: Next.js API route at `POST /api/contact` that validates input server-side, checks honeypot, and sends email via Resend.
Acceptance Criteria:
- Validates all fields with zod before sending
- Rejects honeypot-triggered submissions with 400 (no error message to not tip off bots)
- Sends formatted email with Reply-To set to submitter's email
- Returns structured JSON for both success and error cases
Related Stories: US-005

**FR-009: Navigation**
Priority: P1
Description: Sticky header with site name/logo and anchor navigation links to each section. Smooth scroll behavior. On mobile: hamburger menu or simplified header with only the CTA.
Acceptance Criteria:
- Navigation links: Services, How I Work, Case Studies, About, Contact
- Active link highlighted based on scroll position (IntersectionObserver)
- On mobile (< 768px): simplified header, no expanded nav links (CTA button only is acceptable)
- Header does not obscure section headings when scrolling to anchors (offset scroll)

**FR-010: SEO Basics**
Priority: P1
Description: Meta tags, Open Graph tags, page title, and sitemap for search engine indexing.
Acceptance Criteria:
- `<title>` set to "Dominic Cardellino — Senior DevOps & SRE Freelancer"
- Meta description: 150–160 characters summarizing the value prop
- Open Graph: `og:title`, `og:description`, `og:image` (1200x630 image)
- `robots.txt` allows all crawlers
- `sitemap.xml` includes the landing page URL
- `lang="en"` on `<html>` element

**FR-011: Performance**
Priority: P1
Description: Page meets minimum performance thresholds for professional credibility and SEO.
Acceptance Criteria:
- All images use `next/image` with appropriate sizes
- No render-blocking resources
- Fonts loaded with `font-display: swap`
- Lighthouse Performance score ≥ 90 in production

---

## 7. Non-Functional Requirements

### Performance

- **Largest Contentful Paint (LCP):** < 2.0s on desktop (fast connection), < 3.5s on mobile (slow 3G simulation)
- **First Contentful Paint (FCP):** < 1.0s
- **Time to Interactive (TTI):** < 3.0s
- **Cumulative Layout Shift (CLS):** < 0.1 (reserve space for images with width/height attributes)
- **Bundle size:** < 150KB initial JavaScript (gzipped). Next.js static generation minimizes JS for landing pages.
- **Image optimization:** All images served as WebP via `next/image`. Hero image < 200KB. Photo < 150KB. Logos served as SVG where available.

### Security

- **Input validation:** All form inputs validated server-side with zod before processing
- **No secrets in frontend:** Resend API key never exposed in client-side code
- **Content Security Policy:** Configured in `next.config.ts` headers — restrict `script-src` to `'self'` and Vercel Analytics domain
- **Honeypot spam protection:** Hidden `website` field in contact form, server-side rejection if populated
- **HTTPS:** Enforced by Vercel — all HTTP requests redirected to HTTPS automatically

### Accessibility

- **Standard:** WCAG 2.1 AA compliance
- **Color contrast:** Minimum 4.5:1 for normal text, 3:1 for large text (enforced by design token choices)
- **Keyboard navigation:** All interactive elements (buttons, form fields, navigation links) reachable and operable via keyboard
- **Screen reader:** All images have descriptive `alt` text. Form fields have associated `<label>` elements. Semantic HTML structure (h1, h2, nav, main, section, footer).
- **Focus indicators:** Visible focus ring on all interactive elements — not suppressed

### Scalability

This is a static landing page — scalability is not a concern in the traditional sense. Vercel's CDN handles traffic spikes globally. The only scalable concern is the Resend API rate limit (3,000 emails/month on free tier), which is far above expected contact form volume.

### Reliability

- **Uptime:** Vercel free tier SLA is 99.99% — sufficient
- **Contact form degradation:** If Resend API is unavailable, the error state shows Dominic's direct email address so visitors can reach out manually
- **Static content:** All page content is static — if the API route fails, the page still loads and displays correctly

---

## 8. UI/UX Requirements

> Visual tokens (colors, typography, spacing, components, motion) are defined in `docs/design.md`. Run `/plaid design` before implementation. All component styling references below assume `docs/design.md` exists and tokens are configured.

### Screen: Landing Page

**Route:** `/`
**Purpose:** Single-page experience — visitor reads, evaluates, and contacts.
**Layout:** Single-column, full-width sections stacked vertically. Sticky navigation header at top. No sidebar.

---

### Section: Navigation Header

**Layout:** Sticky header, full-width. Left: logo/name ("cardellino.tech" or wordmark). Right: navigation links + "Get in Touch" CTA button.
**Behavior:** Sticks to top on scroll. Background becomes opaque (with backdrop blur) once the user scrolls past the hero.
**Mobile:** Simplified — logo only on left, "Get in Touch" button on right. No hamburger menu required if nav links are omitted.

---

### Section: Hero

**Route anchor:** `#hero`
**Purpose:** Immediately communicate value prop and prompt action.

**States:**
- **Default:** Headline, subheadline (one line), brief USP statement (1–2 sentences), CTA button. Optional: subtle background pattern or gradient.

**Layout:**
- Centered text layout on desktop (max-width ~700px)
- Full viewport height (100vh) or near-full (90vh)
- CTA button below the text block, centered

**Key Interactions:**
- CTA button click → smooth scroll to `#contact`

**Components used:** (from docs/design.md) heading-xl, body-lg, button-primary

---

### Section: Services

**Route anchor:** `#services`
**Purpose:** Validate that the visitor's specific problem is covered.

**States:**
- **Default:** Section heading, 2×2 grid of service cards on desktop, 1-column on mobile.

**Layout:**
- Section: max-width container, standard vertical padding
- Cards: consistent height, icon (optional), title, 2–3 sentence description, tools list as small tags, outcome statement in lighter text

**Components used:** card, tag/badge, heading-sm, body-sm

---

### Section: How I Work

**Route anchor:** `#how-i-work`
**Purpose:** Reduce uncertainty about engagement structure before contact.

**States:**
- **Default:** Section heading, 3-column grid on desktop (1-column mobile), each column: engagement model name, description, "Best for:" line.

**Layout:**
- Slightly different background color from adjacent sections to create visual separation
- No pricing text anywhere in this section

**Components used:** heading-sm, body-sm, divider

---

### Section: Case Studies

**Route anchor:** `#case-studies`
**Purpose:** Build trust via specific, recognizable problem-solution examples.

**States:**
- **Default:** Section heading, 2 or 3 case study cards in a vertical stack or 2-column grid.

**Layout:**
- Each card: company context badge (e.g. "Series B · 40 engineers"), problem section, solution summary, outcome highlight (visually distinct — e.g. bold or highlighted text), tags (Kubernetes, CI/CD, AWS).

**Key Interactions:**
- Each card has a named anchor ID for deep linking (e.g. `id="case-kubernetes-migration"`)

**Components used:** card, badge, body-md, body-sm, tag

---

### Section: About

**Route anchor:** `#about`
**Purpose:** Create personal connection and calibrate seniority.

**States:**
- **Default:** Two-column layout on desktop (photo left, text right), stacked on mobile (photo centered, text below).

**Layout:**
- Photo: circular crop, professional, 200px × 200px on desktop
- Text: 2–3 paragraphs, first-person voice
- Optional: small list of career highlights or tech facts (years of experience, major cloud platforms, etc.)

**Accessibility:** `alt` text on photo must be "Dominic Cardellino, Senior DevOps & SRE Engineer"

**Components used:** heading-md, body-md, image (next/image)

---

### Section: Tech Badges

**Route anchor:** `#tools`
**Purpose:** Quick visual credibility — visitors recognize familiar logos.

**States:**
- **Default:** Section heading ("Tools & Technologies"), logo grid, all logos at consistent size.

**Layout:**
- Logo grid: flex-wrap, logos at 40px height, 32px gap
- On mobile: same flex-wrap behavior, logos may be slightly smaller (32px)
- No hover effects needed in MVP

**Accessibility:** Each logo `<img>` has descriptive `alt` text (e.g. `alt="Kubernetes"`)

**Components used:** logo images (next/image or `<img>` for SVGs)

---

### Section: Contact Form

**Route anchor:** `#contact`
**Purpose:** Convert evaluated visitors into leads.

**States:**
- **Default:** Section heading, subheading ("Tell me what you're building"), form with 4 visible fields + submit button.
- **Submitting:** Submit button shows loading state (spinner or "Sending..." text). Fields remain visible but disabled.
- **Success:** Form replaced by (or overlaid with) confirmation message: "Got it — I'll be in touch within 24 hours."
- **Error:** Error message below submit button: "Something went wrong. Please try again, or email me directly at [email link]."

**Layout:**
- Centered, max-width ~600px
- Fields stacked vertically: Name, Company, Email, Message (textarea, 4 rows minimum)
- Submit button full-width of form, prominent
- Honeypot field: `<input name="website" type="text" />` with `className="sr-only"` (visually hidden but not `display:none` — some bots detect that)

**Key Interactions:**
- Real-time validation feedback as user leaves each field (onBlur)
- Error messages appear inline below each field
- Form remembers values if submission fails (don't clear fields on error)

**Components used:** form, input-text, textarea, button-primary, form-error, label

---

### Section: Footer

**Layout:** Simple footer — site name, copyright line, optional email link.
**Content:** "© 2025 Dominic Cardellino · cardellino.tech · [email]"
**No secondary navigation needed.**

---

## 9. Auth Implementation

This site does not require authentication. No login, no user accounts, no protected routes. If auth is added later (e.g. for a client portal or CMS), revisit this section.

---

## 10. Payment Integration

This site does not require payment integration. Revenue comes from off-site engagement agreements. No billing, no subscription gating.

---

## 11. Edge Cases & Error Handling

### Feature: Contact Form

| Scenario | Expected Behavior | Priority |
|---|---|---|
| User submits with empty required field | Inline validation error below the field. Form not submitted. | P0 |
| User submits with invalid email format | Inline error: "Please enter a valid email address." | P0 |
| User submits message < 10 characters | Inline error: "Please tell me a bit more about your situation." | P0 |
| Honeypot field is populated | API returns 400 silently. Frontend shows generic success to not tip off bots. | P0 |
| Resend API key is invalid or expired | Console error logged server-side. User sees error state with direct email fallback. | P0 |
| Resend API is down | User sees error state with direct email fallback. No retry needed in MVP. | P1 |
| User submits successfully, then tries to submit again | Success state persists. No re-submission possible without page reload. | P1 |
| User is on very slow connection (2G) | Submit button shows clear loading state. No timeout in MVP — let request complete. | P1 |
| User has JavaScript disabled | Form does not function (JS required for validation). Consider `<noscript>` message with direct email. | P2 |

### Feature: Navigation

| Scenario | Expected Behavior | Priority |
|---|---|---|
| User clicks nav link while already at that section | No visible change. No error. | P2 |
| Page loaded with a hash anchor in URL (e.g. `/#contact`) | Browser jumps to section. No layout jump if header offset handled correctly. | P1 |

### Feature: Images

| Scenario | Expected Behavior | Priority |
|---|---|---|
| Founder photo fails to load | Alt text displayed. Page layout not broken. | P1 |
| Logo SVG fails to load | Alt text displayed. Grid maintains consistent spacing. | P2 |

---

## 12. Dependencies & Integrations

### Core Dependencies

```json
{
  "next": "latest",
  "react": "latest",
  "react-dom": "latest",
  "resend": "latest",
  "react-hook-form": "latest",
  "@hookform/resolvers": "latest",
  "zod": "latest",
  "lucide-react": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest",
  "class-variance-authority": "latest"
}
```

### Development Dependencies

```json
{
  "typescript": "latest",
  "@types/node": "latest",
  "@types/react": "latest",
  "@types/react-dom": "latest",
  "eslint": "latest",
  "eslint-config-next": "latest",
  "@tailwindcss/postcss": "latest"
}
```

### Third-Party Services

| Service | Purpose | Tier | API Key Required | Rate Limits |
|---|---|---|---|---|
| Vercel | Hosting, CDN, deployments | Free (Hobby) | No (linked via CLI/GitHub) | 100GB bandwidth/month |
| Resend | Contact form email delivery | Free | Yes (`RESEND_API_KEY`) | 3,000 emails/month, 100/day |
| Vercel Analytics | Page view analytics | Free | No (enabled in next.config.ts) | 2,500 events/month |

---

## 13. Out of Scope

**Blog / content section.** Valuable for SEO but requires ongoing content creation. Revisit at 3–6 months post-launch if organic search is a primary acquisition focus. Implementation would require a lightweight CMS (Contentful or Sanity) or MDX file-based blogging.

**Testimonials section.** Requires collecting written testimonials from clients, which takes time. MVP uses case studies as trust signals. Add a testimonials section when 2–3 written testimonials are available.

**German language version.** English first for maximum reach. German version would require a `/de` route or subdomain, translated copy, and ongoing maintenance. Revisit if analytics show significant German-speaking traffic converting at higher rates.

**Direct booking integration (Calendly/Cal.com).** Adds friction to the setup process (requires Dominic's calendar management) and changes the conversion flow. The contact form → email → call flow is more controllable for an early-stage freelance pipeline. Add after the first 5–10 engagements establish the qualification process.

**CMS integration.** Not needed when content changes are infrequent. Add if case study updates or service descriptions require frequent non-code updates.

**Advanced analytics.** Vercel Analytics is sufficient for early-stage monitoring. Add Plausible or PostHog when traffic volume makes segmentation meaningful.

**Dark mode.** Not a priority for a professional services page. Can be added post-launch as a CSS-level feature with `prefers-color-scheme` media query.

---

## 14. Open Questions

**OQ-001: Founder photo availability.**
Does a professional photo exist? If not, a placeholder can be used for MVP and the photo added before/after launch. Decision needed before the About section is implemented.
*Recommended default:* Use a placeholder initially, replace before launch.

**OQ-002: Case study content.**
Two case studies are required for MVP. Content needs to be written from memory if no prior documentation exists. Client names can be anonymized.
*Recommended default:* Write two detailed anonymized case studies covering the most common engagement types (e.g. Kubernetes migration for a Series B startup, CI/CD pipeline rebuild for an early-stage company).

**OQ-003: Resend domain verification timing.**
Sending from `hi@cardellino.tech` requires domain verification in Resend, which takes 24–48 hours. During development and staging, using `onboarding@resend.dev` is acceptable. For production launch, domain verification must be completed in advance.
*Recommended default:* Set up Resend domain verification as one of the first pre-launch tasks, before the domain setup task in Phase 0.

**OQ-004: Analytics opt-in.**
Vercel Analytics is GDPR-compliant and cookie-free. However, for completeness, consider whether a minimal privacy policy page is needed. Given the target audience (EU startups), this is worth addressing.
*Recommended default:* Add a simple one-paragraph Privacy Policy note in the footer for MVP. Full privacy policy page is post-MVP.

**OQ-005: Contact form recipient email.**
The PRD uses `dominic.cardellino@googlemail.com` as the recipient. Confirm this is the preferred inbox, or whether a `hi@cardellino.tech` inbox should be set up for professional consistency.
*Recommended default:* Use `hi@cardellino.tech` as the recipient — set up email forwarding from this address to the Gmail inbox.
