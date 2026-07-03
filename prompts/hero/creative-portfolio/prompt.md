# Creative Portfolio Hero — Prompt

```
## Prompt to Recreate This Hero Section

Build a full-screen hero section for a creative portfolio using React, Vite, Tailwind CSS, and the Figtree Google Font. The page has two components: a **Navbar** and a **Hero**. No additional packages beyond `lucide-react` (though it's not used here). The entire page is black background with white text.

---

### Setup

- **Font:** Figtree (400, 500, 600) from Google Fonts, loaded in `index.html`
- **Tailwind custom breakpoints (max-width based):**
  - `mobile`: max 809.98px
  - `md-tablet`: min 810px, max 1199.98px
- **CSS variable:** `--ease-spring: cubic-bezier(0.16, 1, 0.3, 1)`

---

### Video Background

Three full-screen looping videos (muted, autoPlay, playsInline, loop) stacked absolutely with crossfade switching. All three render simultaneously; only the active one has `opacity-100`, the others have `opacity-0` with `transition-opacity duration-[1200ms] ease-in-out`.

**Video URLs (CloudFront):**
1. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_030107_874273ea-684a-4e90-bb96-8fdfde48d53d.mp4`
2. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260629_032424_3c9c2a9d-807b-4482-80e6-dd6d9dfd4545.mp4`
3. `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260627_094019_4214ea73-b963-46a4-8327-61489192de99.mp4`

**Preloading:** On mount, fetch all videos as blobs and create object URLs for instant playback. Fall back to original URL on failure.

A `bg-black/10` overlay sits above videos at `z-[1]`.

---

### Navbar (absolute positioned, z-10, on top of hero)

- **Layout:** Centered container, max-width 1340px, `py-9 px-[15px]`
- **Left side:** Navigation items formatted as `01 / Works`, `02 / Services`, `03 / About`, `04 / Contact`
  - Index number: `text-[8px] leading-3 tracking-[-0.08px] font-medium uppercase`
  - Label: `text-xs leading-4 tracking-[-0.12px] font-medium uppercase`
  - Each link has a `.nav-link-underline` effect (underline slides in from right on hover via `scaleX` transform)
- **Right side (aligned right):** Email `Davies@gmail.com` and live clock showing `CUP HH:MM:SS` (24h format, updates every second using `Intl.DateTimeFormat('en-GB')`)
- **Mobile:** Nav items hidden, replaced by a `Menu`/`Close` toggle button. Mobile panel uses CSS Grid `grid-rows-[0fr]`/`grid-rows-[1fr]` transition (420ms, spring ease) for smooth expand/collapse. Mobile nav links are large: `text-[28px] leading-8 tracking-[-0.84px]`

---

### Hero Content (z-[2], relative)

Container: `max-w-[1340px]`, full height, flex column, `justify-end items-end`, `gap-[150px]`, `pt-[190px] px-[15px]`

**Section 1 - Video Switcher + Availability (upper area):**
- Left column (`flex-[4]`): Three buttons labeled `01 / WATER WAVE`, `02 / GRIDWAVE`, `03 / LIGHT TUNNEL`. Active button is full opacity, inactive is `opacity-55` with `hover:opacity-75`. On click, sets `activeIndex` to crossfade videos. Each has a `.role-link` class that translates 4px right on hover.
- Right column (`flex-1`): Pulsing dot + "Available for work" text. Dot is 7px circle with glow shadow and infinite pulse animation (scale 1 to 1.45, opacity 1 to 0.45, 1.6s). On slide 1, dot is `#F598F2` pink with pink glow. On slides 2-3, dot is white with white glow.

**Section 2 - Name + CTA (bottom area, pb-[60px]):**
- Left column (`flex-[2]`): Giant name "Viktor." in `text-[200px] leading-[81%] tracking-[-6px] font-medium uppercase`. The period is accent-colored: pink `#F598F2` on slide 1, white on slides 2-3. Animate in with `revealUp` (translateY 80px to 0, 0.9s spring ease).
- Right column (`flex-1`, `pl-[50px]`): Paragraph text ("I craft bold brands and modern websites with purpose...") at `text-base leading-6 tracking-[-0.16px] font-medium`. Below it, a "start a project" button (lowercase) with white border. Button has a fill-up hover effect: `::before` pseudo-element with `#F598F2` background that translateY from 101% to 0 on hover, text turns black, border turns pink. Both animate in with `revealRight` (translateX 100px to 0, 0.9s spring ease), button delayed by 0.08s.

**Reveal animations** trigger once via IntersectionObserver at 0.35 threshold.

---

### Responsive Tablet (810px-1199px)
- Navbar: `py-[30px] px-[18px]`, nav gaps shrink to `gap-4`
- Hero name: `text-[129.6px] leading-[113.4px] tracking-[-7.7px]`
- Bottom section: gap 28px, pb 52px, left padding 24px

### Responsive Mobile (<810px)
- Navbar: `py-6 px-[18px]`, desktop nav hidden, hamburger menu shown
- Hero content: `justify-end items-start gap-[72px] pt-[140px] px-[18px]`
- Switcher + availability stack vertically with `gap-7`
- Bottom section: column layout, `gap-8 pb-11`
- Name: `text-[clamp(68px,21vw,80px)] leading-[96px] tracking-[-4.8px]`
- Paragraph: `max-w-[420px]`

---

### Custom CSS Animations

```css
@keyframes videoFadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes revealUp { from { opacity: 0; transform: translateY(80px) } to { opacity: 1; transform: translateY(0) } }
@keyframes revealRight { from { opacity: 0; transform: translateX(100px) } to { opacity: 1; transform: translateX(0) } }
@keyframes dotPulse { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:0.45; transform:scale(1.45) } }
```

### Accessibility
- `prefers-reduced-motion: reduce` disables all animations
- Semantic landmarks: `<header>`, `<main>`, `<nav>`, `<section>`
- ARIA labels on navigation regions and status elements
- Videos are `aria-hidden="true"`
```
