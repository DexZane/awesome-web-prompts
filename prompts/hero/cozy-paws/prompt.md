# CozyPaws — Prompt

```
## Prompt to Recreate CozyPaws Hero Section

**Build a single-page "CozyPaws" pet store hero section using React, Tailwind CSS, and Lucide React icons. The layout is viewport-height (h-screen), no scroll, with three responsive breakpoints (mobile, tablet md, desktop lg+). Use Vite + TypeScript.**

---

### Fonts (Google Fonts)
- **Inter** (weights: 400, 500, 600) — body/UI text
- **DM Serif Display** (weight: 400) — hero heading only

Load via `<link>` in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

Apply with CSS utility class `.font-serif-display { font-family: 'DM Serif Display', serif; }` and `body { font-family: 'Inter', sans-serif; }`

---

### Color Palette
- Background: `#EFFDF0` (light mint green)
- Primary dark green: `#1a3d1a`
- Hover green: `#2a5a2a`
- Orange accent: `#E86A10`
- Orange hover: `#d45e0d`

---

### Asset URLs (all external, do not download)

| Asset | URL |
|-------|-----|
| Logo SVG | `https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg` |
| Avatar | `https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128` |
| Product card (Cat House) | `https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png` |
| Video card (TikTok/YouTube) | `https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png` |
| Bottom left image | `https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png` |
| Bottom center image (tallest) | `https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024` |
| Bottom right image | `https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png` |

---

### Header
- Full-width, `px-12` on desktop, `py-4`, relative z-30
- **Left:** Logo image (205x52px desktop, 130x33px mobile)
- **Center nav (hidden below md):** Links "Home" (text-gray-900), "Shop", "Delivery and payment", "Brands", "Blog" (text-gray-600), text-sm font-medium, gap-8
- **Right:** Search button (circle, border, hidden below sm), Favorites button (orange circle, white star icon, badge "4"), Cart button (circle, border, cart icon, badge "1"), Avatar (circle, 40x40)
- Badges: absolute -top-1 -right-1, 20x20, bg-orange, border-2 border-background, white text 10px bold

---

### Desktop Hero Layout (lg+)

**Text layer (z-5):** Centered, `px-12 pt-[5.4rem]`
- Heading: `font-serif-display`, color `#1a3d1a`, `text-[clamp(60px,7.5vw,110px)]`, `leading-[0.95]`, tracking-tight
- Text reads: "Everything" (line 1), "Your Pets Love" (line 2)
- Each word is an `inline-block` with staggered `animate-word-pop` animation

**Left product card:** Absolutely positioned `top-[50px] left-12`
- Width: `clamp(160px,14vw,260px)`
- Image: aspect-ratio 260/257, rounded-2xl, overflow-hidden
- Arrow button bottom-right corner (dark green circle, ArrowUpRight icon)
- Text below: "Cozy Cat House" in gray-700, "$49.99" in dark green bold
- Responsive font sizes via clamp

**Right video card:** Absolutely positioned `top-[50px] right-12`
- Width: `clamp(120px,10vw,177px)`
- Image: aspect-ratio 177/287, rounded-2xl
- Play button (dark green circle) centered near bottom
- Text below play button: "Watch Product Reviews on TikTok and YouTube"

**Bottom 3 images:** Absolutely positioned `bottom-0 left-0 right-0`, z-10, flex items-end, no gaps
- Left image: `flex-1`, max-height `min(70vh, 55vw)`
- Center image: `flex-[1.265]` (wider), max-height `min(85vh, 70vw)`
- Right image: `flex-1`, max-height `min(70vh, 55vw)`
- All images: `w-full h-auto block`

**Overlays on bottom images:**
- Left: "98K+" stat with avatar stack (avatar + green circle with Plus icon)
- Center: "Best Products for Your Pet" white heading + "Explore Products" orange pill button with ArrowRight icon
- Right: "4.6" rating with orange filled Star icon
- All positioned with `bottom: clamp(20px, 4vh, 50px)`

---

### Tablet Layout (md to lg) — Similar to desktop but smaller
- Heading: text-7xl
- Side cards at `top-[80px]`, left-4/right-4, smaller fixed widths (160px/120px)
- Bottom images: same 3-panel flex, maxHeight 60vh/75vh/60vh

---

### Mobile Layout (below md)
- Top section: centered title (36px), subtitle, "Explore Products" button
- Two cards side-by-side (flex, gap-3): product card (aspect-square) + video card (aspect-3/4)
- Stats row: "98K+" with avatars left, divider, "4.6" star right
- Bottom images: same 3-panel flex, no max-height constraint

---

### Animations (CSS keyframes, custom classes)

| Class | Keyframe | Duration | Easing |
|-------|----------|----------|--------|
| `.animate-fade-up` | 0→30px translateY, 0→1 opacity | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-fade-in` | 0→1 opacity | 0.6s | ease-out |
| `.animate-slide-up` | 0→60px translateY | 0.9s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-slide-in-left` | -40px→0 translateX | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-slide-in-right` | 40px→0 translateX | 0.8s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-text-reveal` | translateY(40px) skewY(3deg) blur(4px) → none | 1s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-word-pop` | translateY(60px) scale(0.7) rotate(-4deg) blur(8px) → bounce overshoot → settle | 0.9s | cubic-bezier(0.34, 1.56, 0.64, 1) |
| `.animate-scale-in` | scale(0.85)→1 | 0.7s | cubic-bezier(0.16, 1, 0.3, 1) |
| `.animate-photo-reveal` | translateY(80px) scale(1.02) → normal | 1.1s | cubic-bezier(0.16, 1, 0.3, 1) |

All use `animation-fill-mode: both`. `.animate-word-pop` starts with `opacity: 0`.

**Delay classes:** `.delay-100` through `.delay-1200` in 100ms increments.

---

### Stagger Order
1. Header fades in (100-300ms)
2. Hero heading words pop in (200-600ms stagger)
3. Side cards slide in (600-700ms)
4. Bottom photos reveal upward (600-900ms stagger, center first)
5. Overlay stats/buttons pop in (1000-1200ms)

---

### Key Technical Details
- Container: `h-screen flex flex-col overflow-hidden` (no scrolling)
- Header: `shrink-0`
- Hero section: `flex-1 flex flex-col overflow-hidden`
- All responsive layouts use show/hide (`hidden lg:flex`, etc.), not CSS-only media queries
- Extensive use of `clamp()` for fluid typography and spacing
- Lucide icons used: Search, ShoppingCart, Star, ArrowUpRight, Play, ArrowRight, Plus
```
