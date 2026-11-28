# Bio-Age Dashboard — Prompt

```
## Prompt to Recreate the Hero Section

**Tech Stack:** Vite + React + TypeScript + Tailwind CSS + Lucide React icons. Font: Inter (imported from Google Fonts with weights 300-900).

---

### Background Video

Full-screen background video covering the entire viewport, auto-playing, looping, muted, inline. Fades in over 1500ms on load.

URL: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_044635_8daabe05-1a5c-491c-920f-4b0bd8f04812.mp4

Positioned `absolute inset-0 w-full h-full object-cover z-0`.

---

### Navigation Bar

Positioned at top with `px-5 sm:px-8 lg:px-12 pt-6 sm:pt-8 relative z-10`, using `flex items-start justify-between`.

**Left:** Logo SVG image:
https://polo-pecan-73837341.figma.site/_assets/v11/f73360d8fc2d33f2b5a4bfb1fa4935fca355946f.svg
Size: 160x40px.

**Center:** A help button (HelpCircle icon, 18px, strokeWidth 1.5) in a 36-40px round button with `bg-black/20`, absolutely positioned `left-1/2 top-8 sm:top-10 -translate-x-1/2`.

**Right:** User name "Benjamin Carter" (text-xl sm:text-3xl lg:text-[42px] font-bold, right-aligned, hidden on mobile `hidden md:block`) + a circular profile avatar (44px / 64px / 72px responsive) with image:
https://polo-pecan-73837341.figma.site/_assets/v11/745de561b3ebfa8634a3483efc95f21feedd96c9.png

---

### Layout (Content Wrapper)

`flex flex-col xl:flex-row xl:items-end xl:justify-between` positioned at bottom on XL screens (`xl:absolute xl:bottom-0 xl:left-0 xl:right-0`), with padding `px-5 sm:px-8 lg:px-12 pb-6 sm:pb-8 lg:pb-12`.

---

### Left Side: Main Age Card

**Card container:** `rounded-[24px] sm:rounded-[32px] lg:rounded-[40px]`, size `w-full sm:w-[520px] lg:w-[620px] h-[420px] sm:h-[500px] lg:h-[550px]`, centered content, `relative overflow-hidden`.

**Rotating background:** An inner div with `absolute inset-[-5%]` (overflows slightly for seamless rotation) with CSS animation `spin-slow 30s linear infinite` (full 360deg rotation). Background image:
https://polo-pecan-73837341.figma.site/_assets/v11/d8d9bd498347ea96ca4d675a624c8d90e06786e7.png
`background-size: cover; background-position: center;`

**Text overlay (z-10, centered):**
- "Estimated" + "Biological Age" - `text-gray-200 text-base sm:text-lg md:text-[22px] font-medium`
- Large count-up number starting at 0, animating to 28 over 1.8 seconds (40 steps), then incrementing by 1 every 6 seconds indefinitely. Font: `text-[72px] sm:text-[100px] lg:text-[132px] font-semibold leading-[0.85] tracking-tight font-['Inter'] tabular-nums`

---

### Below Age Card: Badge + Ruler Ticker

**Badge:** `"3 Years Younger"` in a pill shape with `border border-[#EFCE96]/50 bg-[#EFCE96]/20 text-white text-xs sm:text-sm font-medium tracking-wide px-4 sm:px-6 py-2 rounded-full`.

**Ruler Ticker:** Infinite horizontal scrolling ruler with gold-colored ticks:
- 61 ticks per set (duplicated for seamless loop)
- Every 10th tick: 26px tall. Every 5th tick: 26px tall. Others: 18px tall.
- Tick color: `rgba(239, 206, 150, 0.5)`, width 1px, rounded.
- Static center indicator tick: 40px tall, 2px wide, color `#EFCE96`, absolutely centered.
- Edge fade mask: `linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)`
- Animation: `ticker 12s linear infinite` (translateX 0 to -50%)
- Container: `max-w-[620px] h-[40px] mt-2`

---

### Right Side: 4 Info Cards (2x2 grid)

Layout: `flex flex-col gap-4 sm:gap-[20px]`. On mobile, cards stack in pairs (2 per row via `flex-col sm:flex-row`). On XL, they stack vertically aligned right.

All cards: `w-full xl:w-[260px] h-[130px] sm:h-[144px] rounded-[16px] sm:rounded-[20px] p-4 sm:p-5 flex flex-col justify-between`.

**1. Upcoming Activities** - `bg-[#2F2F2F]/60 backdrop-blur-[52px]`, hover: `bg-[#2F2F2F]/70`.
- Title: "Upcoming Activities" (white, text-base sm:text-lg, font-semibold)
- Bottom: "4 events" (text-white/55, text-[11px] sm:text-[12px]) + black circle with ArrowRight icon

**2. Your Insights** - Background image card:
https://polo-pecan-73837341.figma.site/_assets/v11/94903fdf21e145cd4ba873c15fc03251c0600ee5.png
`background-size: cover; background-position: center;` with `hover:brightness-110`.
- Title: "Your Insights" (white)
- Bottom: "8 Risks" pill (white bg, black text, rounded-full, px-3, h-6 sm:h-7, text-[12px] sm:text-[14px]) + white circle with black ArrowRight

**3. Your Health Snapshot** - Expandable card.
- Default state: `bg-[#2F2F2F]/60 backdrop-blur-[52px]`, white text, shows title + "Recommendations" subtitle + ArrowUp in black circle.
- Expanded state (hover on desktop, click on mobile): `bg-white`, black text, height grows to 280px (desktop) or auto (mobile). Shows full recommendation text: "With a biological age of 28, your body is performing like a young, energetic you. Keep fueling it with movement, nourishing food, quality rest, and a calm mind - so you can stay strong, sharp, and unstoppable." + ArrowDown icon in `bg-[#F0F0F0]` circle. Transition: 300ms ease-in-out on all color/size changes.

**4. Action Plan** - Background image card:
https://polo-pecan-73837341.figma.site/_assets/v11/0c38fdb8a933b0da384a5a3f8b0d9986bb919838.png
`background-size: cover; background-position: center;` with `hover:brightness-110`.
- Title: "Action Plan" (white)
- Bottom: "Details" pill (white bg, black text) + white circle with black ArrowRight

---

### Animations (Intersection Observer based)

Custom `AnimatedElement` component using IntersectionObserver (threshold 0.1). Elements start invisible with a 40px offset in their specified direction (up/down/left/right) or scale(0.9), then animate to final position with:
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (spring-like)
- Duration: 0.8s
- Staggered delays: Nav 100-200ms, Age card 300ms, text 600ms, number 800ms, badge 1000ms, cards 500/650/800/950ms

---

### CSS Keyframes (in index.css)

```css
@keyframes
 ticker {
 0% { transform: translateX(0); }
 100% { transform: translateX(-50%); }
}
.animate-ticker { animation: ticker 12s linear infinite; }

@keyframes
 spin-slow {
 0% { transform: rotate(0deg); }
 100% { transform: rotate(360deg); }
}
.animate-spin-bg { animation: spin-slow 30s linear infinite; }
```

---

### Tailwind Config Additions

```js
colors: {
 surface: { 900: '#0a0a0a', 800: '#1a1a1a', 700: '#2a2a2a', 600: '#3a3a3a' },
 gold: { 400: '#c9a96e', 500: '#b8944d', 600: '#a07d3a' },
},
fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
```

---

### Global Styles

```css
@import
 url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
body { background-color: #0a0a0a; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
```

---

### Dependencies

- `react` ^18.3.1
- `lucide-react` ^0.344.0 (icons used: ArrowDown, ArrowRight, ArrowUp, HelpCircle)
- `tailwindcss` ^3.4.1
- Vite + React plugin
```
