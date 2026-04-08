# DESIGN.md — Agents for Dummies 🦞

## Design Philosophy

Agents for Dummies exists to demystify AI agents for people who've only used ChatGPT through a browser. The design must be:

- **Energetic, not intimidating** — lobster energy, not corporate SaaS
- **Dark and bold** — the OpenClaw aesthetic: dark backgrounds, bright orange accent
- **Encouraging voice** — non-technical tone, real examples, no jargon without explanation
- **Motion-forward** — GSAP ScrollTrigger animations make content feel alive

---

## Color Palette — OpenClaw Dark Theme

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#0a0a0a` | Page background |
| `--color-bg-secondary` | `#141414` | Section alternates |
| `--color-surface` | `#1c1c1c` | Card backgrounds |
| `--color-surface-hover` | `#232323` | Card hover |
| `--color-accent` | `#ff3d00` | Primary CTA, highlights, active states |
| `--color-accent-hover` | `#ff6a00` | Hover on accent |
| `--color-accent-muted` | `rgba(255,61,0,0.12)` | Accent backgrounds |
| `--color-text` | `#f5f5f5` | Body text |
| `--color-text-muted` | `#888888` | Secondary text |
| `--color-border` | `#2a2a2a` | Borders |
| `--color-border-bright` | `#3a3a3a` | Hover borders |

### Why This Palette?

OpenClaw's brand is dark + orange. We lean into that fully — it signals "this is for builders and agents" without saying it. High contrast, readable, energetic.

---

## Typography

| Role | Font | Weight |
|------|------|--------|
| Headings | Inter | 700, 800, 900 |
| Body | Inter | 400, 500, 600 |
| UI labels | Inter | 600 (uppercase tracked) |
| Code / stats | JetBrains Mono | 400, 500 |

### Scale

- Hero: `clamp(3rem, 9vw, 7rem)` / weight 900
- Section heading: `clamp(2rem, 5vw, 3rem)` / weight 800
- Card heading: `1.1–1.5rem` / weight 700
- Body: `1rem` / weight 400
- Caption/meta: `0.8–0.875rem` / weight 400–500

---

## Motion Philosophy

GSAP ScrollTrigger powers all scroll-based animations. Desktop only (`matchMedia` gates). Reduced motion respected.

### Animation Patterns

| Pattern | GSAP | Where |
|---------|------|-------|
| Hero pin + scrub | `ScrollTrigger` with `scrub: 0.6` | Hero |
| Clip-path text reveal | `clipPath: "inset(0 0 100% 0)" → "inset(0 0 0% 0)"` | Hero heading |
| Stagger fade + translate | `autoAlpha: 0 → 1, y: 50 → 0` | Cards, list items |
| Left/right alternating | `x: -70 → 0 / x: 70 → 0` | Why Care section |
| Scale + fade entrance | `scale: 0.95 → 1, autoAlpha: 0 → 1` | Buttons, badges |
| Back ease | `ease: "back.out(1.4)"` | CTA button |
| Section-level scroll tracking | `ScrollTrigger.onEnter/onEnterBack` | Active nav pill |

### Principles

- `autoAlpha` (opacity + visibility) over `opacity` alone — cleaner
- `scrub: 0.6` for smooth, non-janky scrub feel
- Stagger: `0.08–0.18` delay between items
- Duration: `0.5–1.2s` for primary animations
- `will-change: transform, opacity` on animated elements
- `matchMedia("(min-width: 768px)")` gates all GSAP

---

## Components

### Navbar
- **Desktop:** Fixed horizontal pill nav with `backdrop-filter: blur(12px)`. GSAP `layoutId` animated active pill highlights current section in orange.
- **Mobile:** Hamburger → full-screen dark overlay with staggered link entrance. Framer Motion `AnimatePresence` for overlay.
- **ESC key** closes menu
- **Link click:** Closes menu, smooth-scrolls to section

### ScrollProgress
- 3px gradient bar (`#ff3d00` → `#ff6a00`) fixed at top
- Tracks full page scroll via `ScrollTrigger.onUpdate`

### Sections
- **Hero:** Full viewport pin, text reveals on scrub, dual CTA buttons, clip-path heading animation
- **What Is:** 4-card grid with color-coded top borders and icon + text
- **Why Care:** Alternating left/right slide-in rows with large stat counters (GSAP number animation)
- **Setup (Cloud):** 3 agent cards — OpenClaw, Hermes Agent, KiloClaw. Each with icon, tagline, description, pros list, Get Started + Docs CTAs
- **Use Cases:** Beginner + Intermediate groups, each with prompt examples in styled code-like blocks
- **Resources:** MiniMax referral section, YouTube creators, X/Twitter accounts grid, official docs

### Footer
- Dark background (`#141414`)
- Social icon links: X, GitHub, LinkedIn, website — Lucide icons, icon-only buttons with hover color

---

## Accessibility

- Skip-to-content link
- `aria-label` on all icon-only buttons
- `aria-current="page"` on active nav link
- `aria-expanded` on hamburger
- Focus states: 2px orange (`--color-accent`) outline, 2px offset
- `prefers-reduced-motion` disables all GSAP

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| < 768px | GSAP disabled; CSS-only fade transitions; hamburger nav |
| >= 768px | Full GSAP ScrollTrigger; desktop pill nav active tracking |

---

## Browser Support

Modern evergreen browsers only (Chrome, Firefox, Safari, Edge — last 2 versions).
