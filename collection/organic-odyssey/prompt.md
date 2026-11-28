# Organic Odyssey Hero — Prompt

```
Create a full-screen cinematic hero section using React, Tailwind CSS, and Framer Motion. Use Vite with TypeScript. The dependencies required are: `react`, `react-dom`, `framer-motion`, `lucide-react`, and `tailwindcss`.

**VIDEO BACKGROUND:**
- Full-screen looping background video, absolutely positioned to fill the viewport
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4`
- Properties: autoPlay, muted, loop, playsInline, object-cover, object-center
- Page background: `#010101`, full viewport height, overflow hidden

**FONTS (load via index.html link tags):**
- Garamond from: `https://db.onlinewebfonts.com/c/2bf40ab72ea4897a3fd9b6e48b233a19?family=Garamond`
- Geist from Google Fonts: weights 300, 400, 500
- Body font: `'Geist', -apple-system, BlinkMacSystemFont, sans-serif`
- Heading font class `.font-garamond`: `'Garamond', 'Times New Roman', serif`

**NAVIGATION:**
- Relative positioned, z-20, flexbox centered on desktop, space-between on mobile
- Brand name "Organic Visions" -- white, uppercase, letter-spacing 0.25em (mobile) / 0.3em (desktop), font-light
- Desktop nav links: "Wander", "Archive", "Story", "Connect" -- white/80, uppercase, 0.2em tracking, hover to white, 300ms transition
- Mobile: hamburger toggle using lucide-react `Menu` and `X` icons (size 22)

**MOBILE MENU (hamburger dropdown):**
- Fixed position, top-16, left-4, right-4, z-50, hidden on md+
- Uses `AnimatePresence` from framer-motion for mount/unmount animation
- Animation: fade in from y:-10 to y:0, duration 0.3s, ease 'easeOut'; reverse on exit
- Each link staggers in with opacity 0 to 1, y:-8 to 0, delay 0.05 + index*0.06
- Links: white/90, 0.25em tracking, uppercase, font-light, hover to white
- Custom glass class `.mobile-menu-glass`:
  ```css
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  ```
- Rounded-2xl, py-8, gap-5, flex-col centered

**HERO CONTENT:**
- Relative z-10, flex-col centered, text-center
- Padding: px-5 (sm:px-8), pt-12 (sm:pt-16, md:pt-24)
- Heading: Two lines -- "WITNESS THE" and "HIDDEN REALM"
- Font: Garamond, sizes 4xl/6xl/8xl/9xl responsive, font-normal, white, line-height 1.08, tracking-tight, mb-6 (sm:mb-8)
- Each line uses a `StaggeredFade` component that splits text into individual characters and animates each with 0.07s stagger delay (opacity 0 to 1), triggered once when in view

**STAGGERED FADE COMPONENT:**
- Accepts `text` string prop
- Splits into individual `<motion.span>` characters
- Uses `useInView` hook (once: true) to trigger animation
- Variants: hidden = opacity 0; show = opacity 1, y:0, with delay `i * 0.07` per character

**SUBTITLE:**
- Framer Motion animated paragraph, initial opacity:0 y:20, animate opacity:1 y:0, duration 0.8s, delay 1.6s
- Text: "An odyssey through delicate living forms," (line break hidden on mobile, visible sm+) "revealed by lens and curiosity."
- White/70, font-light, leading-relaxed, max-w-xs (sm:max-w-md), mb-8 (sm:mb-10)
- Responsive sizes: text-sm / text-base / text-lg

**CTA BUTTON:**
- Framer Motion animated, initial opacity:0 y:20, animate opacity:1 y:0, duration 0.8s, delay 2.0s
- Text: "Begin the Experience"
- Uses `.liquid-glass` class, rounded-full, responsive padding px-7/px-10 py-3.5/py-4
- White/90, uppercase, tracking 0.18em/0.2em responsive

**LIQUID GLASS CSS (.liquid-glass):**
```css
.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.liquid-glass:hover {
  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.15);
}

.liquid-glass:active {
  transform: scale(0.98);
}
```

**GLOBAL CSS:**
- Reset: margin 0, padding 0, box-sizing border-box on all elements
- Body: antialiased font smoothing, white text, #010101 background
- Uses Tailwind directives: @tailwind base/components/utilities

**PAGE TITLE:** "Synthetic Nature"
```
