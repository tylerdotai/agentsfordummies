# Agents for Dummies 🦞

> The friendly guide to AI agents — beginner to intermediate. Built for humans, not engineers.

![Agents for Dummies — Hero Banner](./public/og-image.png)

**Live site:** [agentsfordummies.vercel.app](https://agentsfordummies.vercel.app)

---

## What Is This?

A scroll-triggered, animated guide designed to take someone who's only used ChatGPT through the browser and help them:

1. **Understand** what AI agents are and why they matter
2. **Get started** with cloud-hosted agent services (no setup required)
3. **Go deeper** with local PC installation guides and hardware recommendations
4. **Apply it** with real beginner → intermediate use cases they can try today

The site is opinionated: warm design, non-technical tone, encouraging voice, zero jargon without explanation.

---

## Design

See [DESIGN.md](./DESIGN.md) for the full design system, color palette, typography, motion principles, and component inventory.

**Quick facts:**
- **Palette:** Dusty Blue & Cream (`#6B8FAD` accent on `#F7F5F0` warm off-white)
- **Typography:** Inter (headings/UI) + JetBrains Mono (code)
- **Animations:** GSAP + ScrollTrigger (desktop); reduced-motion safe on mobile
- **Icons:** Lucide React
- **Design goal:** Encouraging and empowering — never intimidating

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | GSAP + ScrollTrigger |
| Micro-interactions | Framer Motion |
| Deployment | Vercel |
| Icons | Lucide React |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/tylerdotai/agentsfordummies.git
cd agentsfordummies

# Install dependencies
npm install

# Start dev server
npm run dev

# Run typecheck
npm run typecheck

# Run lint
npm run lint
```

---

## Build Rules (Flume SaaS Factory)

All PRs must pass these checks before merge:

```bash
npm run build        # Next.js production build succeeds
npm run typecheck    # TypeScript compiles without errors
npm run lint         # ESLint passes
npm run format:check # Prettier passes
```

---

## Project Structure

```
agentsfordummies/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout (fonts, navbar, footer)
│   │   └── page.tsx         # Single-page scroll experience
│   ├── components/
│   │   ├── Navbar.tsx       # OpenAI-style fullscreen overlay nav
│   │   ├── ScrollProgress.tsx  # Top scroll progress bar
│   │   ├── Footer.tsx       # Social icons footer
│   │   ├── HeroSection.tsx  # Hero with GSAP pin + text reveal
│   │   ├── WhatIsSection.tsx
│   │   ├── WhyCareSection.tsx
│   │   ├── SetupCloudSection.tsx
│   │   ├── SetupLocalSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   └── ResourcesSection.tsx
│   ├── styles/
│   │   └── globals.css      # Tailwind + CSS custom properties
│   └── lib/
│       └── utils.ts        # cn() utility
├── public/
│   └── favicon.svg
├── .gitignore
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── prettier.config.mjs
```

---

## Author

**Tyler Delano** — [@tylerdotai](https://x.com/tylerdotai) · [GitHub](https://github.com/tylerdotai) · [LinkedIn](https://linkedin.com/in/tylerpdelano) · [flumeusa.com](https://flumeusa.com)

Built with 🦞 by Tyler + AI agents.
