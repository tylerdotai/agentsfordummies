# DESIGN.md — Agents for Dummies

## Design Philosophy

Agents for Dummies exists to demystify AI agents for people who've never touched a terminal. The design must be:

- **Encouraging, not intimidating** — warm, human, approachable
- **Visual-first** — animations and layout communicate before text does
- **Scannable** — non-technical readers skim; hierarchy guides them
- **Uncorporate** — nothing about this should feel like enterprise software

---

## Color Palette

### Primary — Dusty Blue & Cream

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#F7F5F0` | Page background (warm off-white) |
| `--color-bg-secondary` | `#EFEFEA` | Section alternates, code blocks |
| `--color-surface` | `#FFFFFF` | Card backgrounds |
| `--color-accent` | `#6B8FAD` | Primary CTA, headings, highlights (dusty slate blue) |
| `--color-accent-hover` | `#5A7A96` | Hover states |
| `--color-text` | `#2D2D2D` | Body text |
| `--color-text-muted` | `#6B6B6B` | Secondary text, captions |
| `--color-border` | `#E0DDD6` | Borders, dividers |

### Why These Colors?

- Blue is associated with trust and intelligence without the coldness of pure tech blue
- Warm cream backgrounds avoid the clinical feel of white
- High contrast text is accessible (WCAG AA minimum)

---

## Typography

### Font Stack

| Role | Font | Weight |
|------|------|--------|
| Headings | Inter | 700, 800 |
| Body | Inter | 400, 500, 600 |
| UI labels | Inter | 600 (uppercase tracked) |
| Code | JetBrains Mono | 400, 500 |

### Scale

- Hero heading: `clamp(3rem, 8vw, 6rem)` / weight 800
- Section heading: `clamp(2rem, 5vw, 3rem)` / weight 800
- Card heading: `1.25rem` / weight 700
- Body: `1rem` / weight 400
- Caption/meta: `0.875rem` / weight 400–500

---

## Motion Philosophy

Animations serve comprehension, not decoration.

### GSAP ScrollTrigger

- **Desktop only** — `matchMedia("(min-width: 768px)")` gates all GSAP
- **Mobile fallback** — simple `opacity` transitions via CSS; no scroll-jacking
- **Reduced motion** — `prefers-reduced-motion` disables all GSAP animations

### Animation Types

| Pattern | When Used |
|---------|-----------|
| Pin + scrub | Hero section (full viewport pin, text reveals on scroll) |
| Stagger from opacity:0, y:60 | Card grids (staggered entrance) |
| Slide in from side | List items in "Why Care" section |
| Scale + fade | Use case cards |

### Principles

- Duration: 0.7–1.2s for primary reveals, 0.3–0.5s for micro-interactions
- Ease: `power3.out` for entrances, `power2.inOut` for scrubs
- Never animate layout properties (width, height) — only transform/opacity

---

## Components

### Navbar
- **Default:** Transparent, hamburger icon top-right
- **Open:** Fullscreen overlay, cream background, centered nav links, animated stagger entrance, X close button
- **Link click:** Closes menu, smooth-scrolls to anchor
- **ESC key:** Closes menu

### ScrollProgress
- 3px bar fixed at top of viewport
- Accent-colored (`--color-accent`)
- Tracks full page scroll progress via GSAP ScrollTrigger

### Footer
- `var(--color-bg-secondary)` background
- Social icons (Twitter/X, GitHub, LinkedIn, website) with hover color transition
- Copyright line

### Cards
- White surface on cream background
- 1px border `var(--color-border)`
- `var(--radius-lg)` corners
- Hover: subtle border color shift to accent

### Code Blocks
- Background: `var(--color-bg-secondary)`
- Border: 1px solid `var(--color-border)`
- `var(--radius-md)` corners
- JetBrains Mono font

---

## Accessibility

- Skip-to-content link visible on focus
- All interactive elements keyboard-navigable
- Focus states: 2px accent outline with 2px offset
- `aria-label` on all icon-only buttons
- `aria-expanded` on hamburger menu button
- Color contrast: all text passes WCAG AA

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| < 768px | GSAP animations disabled; simple CSS fades; hamburger nav |
| >= 768px | Full GSAP ScrollTrigger animations; pinned sections |

---

## Browser Support

Modern evergreen browsers only (Chrome, Firefox, Safari, Edge — last 2 versions).
