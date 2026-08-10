**Recreate this exact landing page pixel-for-pixel.**

## Tech stack
React + Vite + TypeScript + Tailwind CSS. Single page: `<Hero />` then `<Marquee />`. No router, no extra sections. Body: `font-family: 'Inter', sans-serif`, `background: #000`, `overflow-x: hidden`. `html { scroll-behavior: smooth }`. Page title: `Beyond Hero`.

## Fonts (exact URLs)
Load in `<head>`:

1. **Bamboly Demo** (display / title / marquee):
```html
<link href="https://db.onlinewebfonts.com/c/58ee300970307a1cc399e6bebd7617ce?family=Bamboly+Demo" rel="stylesheet">
```
Direct files if needed:
- `https://db.onlinewebfonts.com/t/58ee300970307a1cc399e6bebd7617ce.woff2`
- `https://db.onlinewebfonts.com/t/58ee300970307a1cc399e6bebd7617ce.woff`
- `https://db.onlinewebfonts.com/t/58ee300970307a1cc399e6bebd7617ce.ttf`  
`font-family: "Bamboly Demo", sans-serif` · letter-spacing `0.02em` on the heading helper class.

2. **Inter + Poppins** (Google Fonts):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```
- Inter = body default only  
- Poppins weight **500** = side word columns  

## Color palette
| Role | Hex |
|------|-----|
| Hero background | `#EC612C` |
| BEYOND front layer | `#FFFFFF` |
| BEYOND layer (green) | `#90EE90` |
| BEYOND layer (orange gap, same as bg) | `#EC612C` |
| BEYOND back layer (blue) | `#89CFF0` |
| Side words | `white` at `opacity` via column (base class `text-white/80`) |
| Marquee background | `#FFFFFF` |
| Marquee text | `#EC612C` |
| Body page bg | `#000000` |

## Asset — character image (exact URL used in code)
```
https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260801_104316_80b428ea-dc99-4399-afb3-8ccb7b34b2d0.png&w=1280&q=85
```
Original PNG source behind the proxy:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_104316_80b428ea-dc99-4399-afb3-8ccb7b34b2d0.png
```
Subject: 3D bust of a young Black man, electric-blue braids with silver beads, bright blue eyes looking upward, neon-green ribbed turtleneck, transparent/orange-cutout background. Centered, chest-up.  
*(Local unused files exist at `/public/images/{0B435C65-A382-4437-BCE3-E275271AEB12}.png` and `{A01C6A0D-C4E6-496C-BC3D-D942405C2DBB}.png` — do not use them; the live page uses the Higgs URL above.)*

---

## SECTION 1 — Hero

### Structure & layout
- `<section>` height **`120vh`**, `backgroundColor: #EC612C`, `relative w-full overflow-hidden`.
- Two layers:

**A. Character (z-index 10)** — absolute `inset-0`, `pointer-events-none`:
- `<img>` `absolute bottom-0 left-1/2 -translate-x-1/2`
- `w-auto max-w-none block`
- inline style: `height: 115%`, `maxHeight: 115%`, `minHeight: 80%`
- Sits in front of the title (covers center of “BEYOND”).

**B. Sticky text overlay (z-index 5)** — `sticky top-0 h-screen w-full`:

### “BEYOND” stacked title
- Top-centered: `absolute inset-0 flex items-start justify-center pt-[2vh] md:pt-[3vh]`
- Four absolutely stacked `<h1>` layers (except front layer `position: relative`), all text `BEYOND`, same box, `leading-[0.85] tracking-tight select-none`
- Font: `"Bamboly Demo", sans-serif`
- Size: `clamp(7.5rem, 30vw, 28rem)`
- Stack order (render back→front), each with `transform: translateY(offset)`:

| Layer | Color | Desktop offset | Mobile (`<768px`) offset |
|-------|-------|----------------|---------------------------|
| 0 (back) | `#89CFF0` | `36px` | `18px` |
| 1 | `#EC612C` | `24px` | `12px` |
| 2 | `#90EE90` | `12px` | `6px` |
| 3 (front) | `#FFFFFF` | `0` | `0` |

Visual effect: white “BEYOND” with green → orange-gap → baby-blue stripes peeking downward under the letters (retro stacked drop).

### Side word columns
- Arrays (source lowercase; CSS `uppercase`):
  - Left: `spark`, `imagine`, `evolve`, `render`
  - Right: `blaze`, `genesis`, `purpose`, `ignite`
- Container: `absolute inset-0 flex items-end justify-between px-[3vw] md:px-[6vw]`, `bottom: -8vh`, `pointer-events-none`
- Left column: `flex flex-col gap-1 md:gap-2`
- Right column: same + `items-end`, words `text-right`
- Each word: `"Poppins", sans-serif`, `fontWeight: 500`, `fontSize: clamp(1.6rem, 7vw, 9rem)`, `lineHeight: 1.1`, `text-white/80`, `select-none`, `transition: transform 0.05s linear`

### Scroll-driven animation (exact math)
Track scroll progress on the 120vh section:
```
progress = clamp(0..1, -rect.top / (sectionHeight - window.innerHeight))
```
`scaleFactor = window.innerWidth < 768 ? 0.5 : 1`

**Horizontal offsets** (at progress `0` = start; progress `1` = fully scrolled through sticky range):
```
leftOffset[i]  = -(60 + i * 40) * scaleFactor * (1 - progress)
rightOffset[i] = +(60 + i * 40) * scaleFactor * (1 - progress)
```
Desktop start offsets by index: ±60, ±100, ±140, ±180 px. Mobile half of that. As user scrolls, words slide inward to `0`.

**Opacity** (both columns):
```
opacity = 0.35 + progress * 0.65   // 0.35 → 1.0
```
Listeners: `scroll` (passive) + `resize`. Sticky text stays pinned for the ~20vh scroll range while the tall section scrolls underneath.

---

## SECTION 2 — Marquee

- Full-width white band: `w-full bg-white overflow-hidden py-6 md:py-8`
- Track class `marquee-track`: `display flex`, `whitespace-nowrap`
- CSS animation:
```css
@keyframes marquee-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee-scroll 18s linear infinite;
}
```
- Exact string (middle dots = `\u00B7` / `·`):
```
SPARK · RENDER · IGNITE · UNFOLD · GENESIS · EVOLVE · PURPOSE · BEYOND · 
```
- Render **4 identical copies** of that string side-by-side (`shrink-0`) so `-50%` loops seamlessly.
- Style: `"Bamboly Demo", sans-serif`, `uppercase`, `color: #EC612C`, `fontSize: clamp(2.5rem, 6vw, 5rem)`, `lineHeight: 1`, `paddingRight: 0.25em`, `select-none`

---

## Composition / z-order summary
1. Orange `#EC612C` hero plane (120vh)  
2. Sticky white/colored typography (z5) — BEYOND top, word columns bottom-left/right  
3. Character image (z10) centered, bottom-anchored, height 115% — overlaps title and sits between the word columns  
4. White marquee strip below hero, infinite horizontal scroll of brand words in Bamboly orange  

## Responsive breakpoints
- Mobile `<768px`: half scroll offsets, half BEYOND layer offsets, tighter padding (`px-[3vw]`, `pt-[2vh]`, smaller marquee py).
- Desktop: full offsets, `px-[6vw]`, `pt-[3vh]`.

## Do not add
No nav, cards, CTAs, stats, purple gradients, Inter for the hero display, or the unused local PNGs. Match fonts, colors, asset URL, scroll math, and marquee string/timing exactly as above.
