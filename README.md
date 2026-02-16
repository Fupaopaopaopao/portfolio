# Portfolio

A single-page portfolio site built with React and Vite, focused on **responsive layout** and **CSS-driven animation**.

---

## Tech Stack

- **React 19** + **Vite 7**
- **Tailwind CSS** (v4, `@tailwindcss/vite`)
- **EmailJS** for the contact form (no backend)
- **Lucide React** for icons

---

## Animation

All motion is implemented with **plain CSS** (no animation libraries) for small bundle size and smooth performance.

| Technique | Where | Description |
|-----------|--------|-------------|
| **Fade-in** | Hero, sections, mobile menu | `fade-in` keyframes: opacity, `translateY`, and blur; staggered via `animation-delay` (100ms–800ms). |
| **Slow drift** | Hero background | 30 dots with `slow-drift` keyframes; random duration (15–35s) and delay for ambient motion. |
| **Marquee** | Hero skills strip | Infinite horizontal scroll (`translateX(-50%)`) with gradient masks on both sides. |
| **Bounce** | Hero scroll cue | Native `animate-bounce` on the chevron. |
| **Animated border** | Download CV button | SVG path with `stroke-dasharray` / `stroke-dashoffset`; `animated-border` keyframes on hover. |
| **Glass transition** | Navbar | Scroll state toggles `glass-strong` vs transparent; `transition-all duration-500`. |
| **Hover feedback** | Cards, nav links, buttons | Scale, opacity, color, and border transitions; project cards reveal links on hover. |
| **Ping** | Experience timeline | `animate-ping` on the current role dot. |

Utility classes live in `src/index.css`: `animate-fade-in`, `animate-marquee`, `animation-delay-*`, and the `.animated-border-path` / `.animated-border` hover behavior.

---

## Layout

Layout is **responsive** and implemented with **Tailwind** breakpoints (`md:`, `lg:`), a shared **container**, and section-based structure.

| Area | Layout approach |
|------|------------------|
| **Navbar** | Fixed, full-width. Desktop: inline nav + pill (`glass`) + CTA. Mobile: hamburger toggles a full-width dropdown (`glass-strong`, `animate-fade-in`). |
| **Hero** | Full-viewport section; content in `container`; background image + gradient overlay + drifting dots. |
| **About** | `grid lg:grid-cols-2`; copy on the left, highlight cards in `grid sm:grid-cols-2` on the right. |
| **Projects** | Centered section header; `grid md:grid-cols-2 gap-8` for cards; aspect-video thumbnails, overlay and links on hover. |
| **Experiences** | Vertical timeline: central line (`md:left-1/2`), alternating left/right cards via `grid md:grid-cols-2` and conditional `md:pl-*` / `md:pr-*` and `md:text-right`. |
| **Contact** | `grid lg:grid-cols-2` (form + contact info); cards use `glass` and borders. |

Global layout choices:

- **Container**: `container mx-auto px-4` / `px-6` for consistent width and padding.
- **Sections**: `py-32`, `relative` + `overflow-hidden` where needed for blur orbs.
- **Z-index**: Fixed navbar `z-50`; section content `relative z-10` above decorative backgrounds.

---

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

---

## Deploy (Vercel)

- Set **Root Directory** to `portfolio` if the repo root is the monorepo root.
- Add env vars for EmailJS: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
