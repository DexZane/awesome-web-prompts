# Luxury Hero — Prompt

```
Build a scroll-driven hero landing page in React + TypeScript + Vite + Tailwind CSS v4. The page has a black background, white text, and 3 main elements: a scroll-scrubbed background video, a floating text overlay that animates out on scroll, a pill-shaped navigation bar, and a glass panel that slides up from below.

---

## VIDEO (Background, scroll-scrubbed)

**URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_055342_32b0f5da-a9f6-4e7b-82b2-891b700fa6d9.mp4`

- Fixed position, full viewport, z-index 0, scaled 1.05 at the wrapper and 1.35 on the video element itself (for parallax mouse effect coverage).
- Video is always paused; time is controlled manually via scroll.
- Uses HLS.js if the source is `.m3u8`, otherwise native `<video>`.
- Scroll-scrubbing logic uses `requestAnimationFrame` loop:
- Calculates `scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)`, clamped 0-1.
- `targetTime = progress * (video.duration - 0.05)`
- Smooth interpolation: `currentTime += (targetTime - currentTime) * 0.08`
- Back-pressure guard: only sets `video.currentTime` when `!video.seeking` and delta > 0.01.
- Mouse parallax on the wrapper: on `mousemove`, GSAP tweens `x` and `y` by +/-30px based on normalized mouse position, duration 1.5s, `power2.out` ease.
- Shows a loading overlay ("Loading... X%") until `canplay` fires, with buffer progress tracked.

---

## SCROLL FLOAT TEXT

**Text:** "Unleash The\nFull Power" (two lines)

**Font:** Custom "Dirtyline 36 Days of Type 2022" loaded from `/Dirtyline-36daysoftype-2022.woff2` via `
@font
-face`. Registered as Tailwind font `font-dirtyline`.

- Fixed position, full viewport, flex column, `justify-end`, padding `p-4 md:p-8`, `pointer-events-none`, z-10.
- Font size: `clamp(4rem, 15vw, 317px)`, line-height: 0.85, letter-spacing: 0%.
- Each character is wrapped in a `<span class="char">` with `display: inline-block`. Words are wrapped in inline-block spans to prevent mid-word breaks.
- GSAP ScrollTrigger animation on all `.char` elements:
- From: `opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1, transformOrigin: '50% 0%'`
- To: `opacity: 0, yPercent: 250, scaleY: 1.2, scaleX: 0.9`
- Stagger: 0.05, ease: `power2.inOut`, duration: 1
- ScrollTrigger: trigger `document.body`, start `top top`, end `+=600`, scrub: 1.5

---

## PILL NAVIGATION

- Fixed, centered horizontally, `top: 24px`, z-100.
- Font: Manrope (Google Fonts), 600 weight, 14px, uppercase, 0.05em tracking.
- Structure: circular logo pill (48x48px, black bg, white SVG 4-petal flower icon) + adjacent rounded pill bar containing nav items.
- Nav items: HOME, ABOUT, SERVICES, CONTACT. Each pill has `#f0f0f0` background, black text, `border-radius: 50px`, padding `8px 24px`.
- Hover animation (GSAP timeline per pill):
- A hidden circle element positioned at bottom expands (`scale: 3`) to fill the pill with black.
- Label text slides up (`yPercent: -100`) and a duplicate white label slides in from below (`yPercent: 100 -> 0`).
- On leave, reverses.
- Entry animation: logo scales from 0 with `back.out(1.7)` ease; nav items width animates from 0 with 0.2s delay.
- Logo spins 360 degrees on hover (GSAP `rotation: +=360`, duration 0.2).
- HOME click: GSAP `scrollTo: 0`, duration 3s, `power3.inOut`.
- ABOUT click: GSAP `scrollTo: document.body.scrollHeight`, duration 3s, `power3.inOut`.
- Mobile (<768px): nav items hidden, replaced with hamburger (two white lines that animate to X on click), popover dropdown menu.

---

## GLASS PANEL (Second Section)

- Positioned `absolute bottom-0` of a 350vh tall relative container.
- Slides up from below viewport using GSAP ScrollTrigger: `y: '100%'` to `y: '0%'`, trigger is the section itself, start `top bottom`, end `bottom bottom`, scrub 1.5, ease `none`.
- Mouse parallax: `x/y` +/-20px, plus `rotationY` +/-4deg and `rotationX` +/-4deg based on mouse, `power3.out` ease, 1s duration.
- Panel dimensions: `max-w-[1250px]`, `h-[900px]`, `max-h-[85vh]`, `mb-8`, `perspective: 1000px`.
- Glass effect: `background-color: rgba(0, 0, 0, 0.16)`, `backdrop-filter: blur(160px)`, `border: 1px solid rgba(255, 255, 255, 0.1)`, `border-radius: 1.5rem`, `transformStyle: preserve-3d`, `willChange: transform`.
- Content inside:
- Centered text: "About Us" in italic serif (Instrument Serif from Google Fonts), `text-white/70`, `text-base md:text-lg`.
- Large heading (Instrument Serif): "We transform sterile concrete into thriving *urban* jungles. Our innovative designs bring wild *nature* back to modern cities. Experience the *bloom*" -- italic words are `<span class="italic">`. Font size `text-4xl md:text-6xl lg:text-[96px]`, leading `1.1 / lg:92.6px`, tracking-tight, max-w-[1000px].
- Bottom marquee: brands VOICEFLOW, ZENDESK, PENDO, GLIDE, CANVA repeated 4x, `border-t border-white/10`, infinite horizontal scroll animation (`translateX(-50%)` over 20s linear), `opacity-40 hover:opacity-100`, uppercase, semibold, `text-sm`, `tracking-widest`, `px-8`.

---

## GLOBAL CSS / FONTS

- Google Fonts: `Manrope` (400-700) and `Instrument Serif` (normal + italic).
- Custom font: `Dirtyline36Daysoftype2022` from `/Dirtyline-36daysoftype-2022.woff2`.
- Tailwind v4 `
@theme
` block defines `--font-sans`, `--font-serif`, `--font-dirtyline`, and `--animate-marquee` keyframes.
- Body: `background-color: black; color: white;`

---

## PAGE STRUCTURE (App.tsx)

```
<ScrollVideo src={VIDEO_SRC} />  (fixed fullscreen)
<PillNav />  (fixed top center)
<div style="position: relative; height: 350vh">
<ScrollFloat>Unleash The\nFull Power</ScrollFloat> (fixed overlay)
<GlassPanel /> (absolute bottom-0)
</div>
```

---

## DEPENDENCIES

- `react`, `react-dom` (v19)
- `gsap` (v3.12+) with ScrollTrigger and ScrollToPlugin
- `hls.js` (v1.5+)
- `tailwindcss` v4 with `@tailwindcss/vite`
- `lucide-react`
- `motion` (v12, installed but not actively used)
- `react-router-dom` (v7, installed but not actively used)
```
