# CardellinoTech — bilingual one-pager

A fresh landing page built with Next.js App Router, React, TypeScript and plain CSS. No previous UI, contact endpoint, analytics or business copy is reused.

## Run

```sh
npm ci
npm run dev
```

German: `/de`, English: `/en`. `/` redirects to `/de`. Both language pages are statically generated; invalid language routes return 404.

```sh
npm run lint
npm run build
npm start
```

All inquiry buttons are intentionally inactive (`aria-disabled`) and have no link or submission behavior. Navigation, language links, the mobile menu and FAQ accordions work. Pricing is scoped through a written proposal rather than invented figures. Legal pages and the inquiry flow are follow-up work before publishing.

Research, positioning and screenshot interpretation: [docs/positioning-research.md](docs/positioning-research.md).
