# CardellinoTech — bilingual one-pager

A landing page built with Next.js App Router, React, TypeScript and plain CSS. It has no analytics, external font requests, database or email API.

## Run

Use Node.js 22.18 or later (Node.js 24 is used for verification).

```sh
npm ci
npm run dev
```

German: `/de`, English: `/en`. `/` redirects to `/de`. Both language pages are statically generated; invalid language routes return 404.

```sh
npm run test
npm run lint
npm run build
npm run typecheck
npm start
```

## Inquiries

General inquiry links lead to the contact section. Package links prepare a localized email to `hello@cardellino.tech`, with the selected package in the subject and message. Visitors send the message from their own email app. The site does not send, store or confirm delivery of messages. The address remains visible for copying.

## Legal pages

`/de/imprint`, `/en/imprint`, `/de/privacy` and `/en/privacy` use public business details in `lib/business.mjs`. Hosting is handled in a separate PR. The privacy notice is visibly a draft until actual hosting, log retention and any international data transfers have been reviewed. Set `hostingPrivacyReviewed` only after updating and reviewing the final notice. Legal pages currently use `noindex`.

[Contact and legal handover](docs/contact-and-legal.md) lists outstanding confirmations. [Launch checklist](docs/launch-checklist.md) covers deployment work. [Positioning research](docs/positioning-research.md) documents the content decisions.
