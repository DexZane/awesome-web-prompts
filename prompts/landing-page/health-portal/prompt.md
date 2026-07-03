# Health Portal (Dental Health) — Prompt

```
## PROMPT: Recreate Dental Health Landing Page

Create a single-page dental clinic landing page using **React + Vite + TypeScript + Tailwind CSS**. No external UI libraries, no icon libraries. Everything lives in one `App.tsx` file. The page has 3 full-screen sections, a splash screen, and a fixed navbar.

---

### SETUP

**Font:** "Open Sauce One" loaded via these exact links in `index.html` `<head>`:
<link href="https://db.onlinewebfonts.com/c/1cd1e7d71e048159076fd90b39846902?family=Open+Sauce+One" rel="stylesheet">
<link href="https://db.onlinewebfonts.com/c/42acf9aa4a6dc2f2886a3f682e337ead?family=Open+Sauce+One+Bold" rel="stylesheet">

**Title:** "Dental Health - Quality Healthcare"

**Global CSS (index.css):**
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
html, body, #root {
height: 100%;
margin: 0;
padding: 0;
}
body {
font-family: 'Open Sauce One', -apple-system, BlinkMacSystemFont, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
}

**Tailwind config:** Default, no extensions. Content: `['./index.html', './src/**/*.{js,ts,jsx,tsx}']`.

---

### IMAGE URLS (use these EXACT URLs)

const HERO_IMAGE = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_113640_ccf3cf97-d447-425b-a134-d7b09fc743fc.png&w=1280&q=85';

const SECTION2_IMAGE = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_114219_414dfe80-f15c-4e25-bf52-b13721f4bd88.png&w=1280&q=85';

const SECTION3_IMG1 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_115253_c19ab167-8dd5-48b4-967d-b9f0d9d6e8fb.png&w=1280&q=85';

const SECTION3_IMG2 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_115237_fc519057-6e87-4abf-999a-9610b8b085b4.png&w=1280&q=85';

const SECTION3_BG = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_114355_752ba9e6-0942-4abb-9047-5d9bb16632e9.png&w=1280&q=85';

---

### DATA CONSTANTS

const featureBars = ['Advanced Dentistry', 'High Quality Equipment', 'Friendly Staff'];

const services = [
{ name: 'Dental\nVeneers', num: '01', active: true },
{ name: 'Dental\nCrowns', num: '02', active: false },
{ name: 'Teeth\nWhitening', num: '03', active: false },
{ name: 'Dental\nImplants', num: null, active: false },
];

---

### CORE TECHNICAL CONCEPT: "MASKED CARDS"

Sections 1 and 2 use a single large background image shared across multiple cards. Each card shows a different "window" into the same image, creating a cohesive mosaic effect. Implementation:

**`useMaskPositions` hook:**
- Takes a ref to the section container and a ref to an array of card elements.
- Uses `ResizeObserver` on the section container.
- For each card, computes `{ x, y, sw, sh }` where x/y is the card's top-left offset relative to the section, sw/sh is the section's width/height.

**`useImageWidth` hook:**
- Loads the image in a `new Image()` object.
- Calculates: `renderWidth = img.naturalWidth * (sectionHeight / img.naturalHeight)`.
- Returns how wide the image would be if scaled to fill the section height.

**`MaskedCard` component:**
- Props: `bgImage`, `position` (from useMaskPositions), `imageWidth` (from useImageWidth), `focalX` (0-1 float), `className`, `children`, `cardRef`, `style`.
- Calculates `overflow = imageWidth > position.sw ? imageWidth - position.sw : 0`, then `focalOffset = overflow * focalX`.
- Applies inline style:
backgroundImage: url(bgImage)
backgroundSize: auto [http://position.sh]px
backgroundPosition: -[position.x + focalOffset]px -[position.y]px
backgroundRepeat: no-repeat
- `focalX` values: Section 1 mobile=0.7, desktop=0.8. Section 2 mobile=0.65, desktop=0.8.

**`useIsMobile` hook:**
- Listens to `window.matchMedia('(max-width: 767px)')` change events.
- Returns boolean.

---

### ANIMATION: `useStaggeredReveal` hook

- Takes `count` (number of elements) and `threshold` (IntersectionObserver threshold, default 0.15).
- Returns `{ containerRef, getAnimStyle }`.
- `containerRef` is attached to the section; when it crosses the threshold, `visible` becomes true (fires once).
- `getAnimStyle(index)` returns:
opacity: visible ? 1 : 0
transform: visible ? 'translateY(0)' : 'translateY(24px)'
transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1) [index*120]ms,
transform 0.6s cubic-bezier(0.16,1,0.3,1) [index*120]ms

---

### SPLASH SCREEN

- Fixed overlay covering viewport, `z-[100]`, white background.
- Number counter displayed at **bottom-left** (`items-end justify-start`).
- Counter style: `text-7xl md:text-9xl font-bold tabular-nums p-6 md:p-10 leading-none`, black text.
- Counts from 0 to 100 over exactly 2000ms (20ms per step, 100 steps).
- After reaching 100: wait 200ms, then set `exiting=true` which triggers `opacity-0` with `transition-opacity duration-700`.
- After 900ms total from reaching 100, call `onComplete()` which removes splash from DOM.

---

### NAVBAR

**Container:** `fixed top-0 left-0 right-0 z-50`, `flex items-center justify-between`, `px-4 md:px-6 py-2 md:py-3`, `bg-white/80 backdrop-blur-md`.

**Logo (left side):**
- Two lines stacked: "Dental" and "Health"
- Wrapper: `flex flex-col`
- Text: `text-xl md:text-2xl font-extrabold uppercase tracking-tight leading-none`
- Second line has `-mt-1.5 md:-mt-2` for tight spacing
- Below logo text: "quality healthcare" in `text-[8px] md:text-[9px] font-medium leading-none mt-1.5 md:mt-2`

**Desktop nav (hidden on mobile with `hidden md:block`):**
- "Menu" button: `px-6 py-3 bg-white rounded-full border border-black text-sm font-semibold`, hover: `hover:bg-black hover:text-white transition-colors duration-200`
- "Dental Emergency" text: `text-sm font-semibold text-black`

**Mobile hamburger (visible only on mobile with `md:hidden`):**
- Container: `w-10 h-10 flex items-center justify-center`, `relative`
- 3 spans, each: `absolute h-0.5 w-6 bg-black rounded-full`
- Transition: `transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]`
- Closed state: top span `-translate-y-2`, middle `opacity-100 scale-x-100`, bottom `translate-y-2`
- Open state: top `rotate-45 translate-y-0`, middle `opacity-0 scale-x-0`, bottom `-rotate-45 translate-y-0`

**Mobile menu overlay (`md:hidden`):**
- Outer: `fixed inset-0 z-40`, pointer-events toggled based on open state
- Backdrop: `absolute inset-0 bg-black/20 backdrop-blur-sm`, fades opacity. Clicking closes menu.
- Panel: `absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl`, slides with `translate-x-0` (open) / `translate-x-full` (closed), `duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]`
- Content: `flex flex-col justify-center h-full px-8 gap-1`
- Nav links: ['Home', 'Services', 'About', 'Gallery', 'Contact']
- Each: `text-4xl font-bold text-black hover:text-neutral-500`
- Staggered entrance: `opacity-0 translate-x-8` -> `opacity-100 translate-x-0`, `transitionDelay: ${100 + i * 60}ms` when open
- `transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]`
- Bottom section: `mt-8 pt-8 border-t border-neutral-200`, delayed 450ms
- "Dental Emergency" text: `text-sm font-semibold text-black mb-4`
- Button: `w-full px-6 py-4 bg-black rounded-full text-white text-sm font-semibold hover:bg-neutral-800 transition-colors duration-200`, text "Book Appointment"
- When open: `document.body.style.overflow = 'hidden'`. Cleanup on unmount.

---

### SECTION 1 - HERO

**Container:** `<section>`, `h-screen w-full overflow-hidden flex flex-col`, `pt-24 md:pt-24 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2`

Attach both `section1Ref` and `s1Reveal.containerRef` to this element.

Uses `HERO_IMAGE` as shared background via MaskedCard technique.

**3 Feature Bars** (mapped from `featureBars` array):
- Each is a `MaskedCard` with: `w-full h-14 md:h-20 shrink-0 rounded-xl md:rounded-2xl overflow-hidden relative`
- Animated with `s1Reveal.getAnimStyle(i)` for i=0,1,2
- Content: `<span>` centered vertically and horizontally (`flex items-center justify-center h-full`), `text-black text-lg md:text-3xl font-bold text-center`, `relative z-10`

**Main Hero Card** (4th card, index 3):
- `MaskedCard`: `w-full flex-1 min-h-0 rounded-xl md:rounded-2xl overflow-hidden relative`
- Animated with `s1Reveal.getAnimStyle(3)`
- **Top-left text:** `absolute top-4 left-4 md:top-7 md:left-7`, `text-black text-xs md:text-sm font-semibold leading-4 md:leading-5 max-w-[200px] md:max-w-[300px] z-10`
- Content: "We wish to provide professional dental services" `<br/>` "that match the current technologies"
- **Bottom-left block:** `absolute bottom-5 left-3 md:bottom-8 md:left-4 z-10`
- Label: `block text-black text-xs md:text-sm font-semibold mb-1 md:mb-2`, text "Trusted Dentist in West New York"
- Heading: `<h1>` with `text-black text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.79] tracking-tight`, content: "Dental" `<br/>` "Care"
- **Bottom-right text:** `absolute bottom-6 right-4 md:bottom-10 md:right-8`, `text-white text-xs md:text-sm font-semibold z-10`, content: "Free Consultation"

---

### SECTION 2 - SMILE GALLERY

**Container:** `<section>`, `min-h-screen md:h-screen w-full overflow-hidden flex flex-col`, `pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2`

Attach both `section2Ref` and `s2Reveal.containerRef` to this element.

Uses `SECTION2_IMAGE` as shared background via MaskedCard technique.

**Grid container:** `flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto_auto_auto] md:grid-rows-[1fr_1fr_0.8fr] gap-1.5 md:gap-2`

**Card 0 - Top Left ("Smile Gallery"):**
- `MaskedCard`: `rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(0)`
- Heading: `absolute top-4 left-5 md:top-6 md:left-7`, `text-white md:text-black text-2xl md:text-3xl font-bold z-10`, text "Smile Gallery"
- Subtitle: `absolute bottom-4 left-5 md:bottom-6 md:left-7`, `text-white md:text-black text-xs md:text-sm font-semibold z-10`, text "Our cosmetic dental work"

**Card 1 - Top Right (spans 2 rows on desktop):**
- `MaskedCard`: `md:row-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(1)`
- Text: `absolute bottom-16 left-5 md:bottom-20 md:left-7`, `text-white text-xs md:text-sm font-semibold leading-4 md:leading-5 z-10`, content: "If you want a gorgeous smile," `<br/>` "call us to ask about a smile makeover."
- Button: `absolute bottom-4 right-4 md:bottom-6 md:right-6`, `px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold z-10 hover:scale-105 transition-transform`, text "Call Us"

**Card 2 - Bottom Left ("Smile makeover"):**
- `MaskedCard`: `rounded-xl md:rounded-2xl overflow-hidden relative min-h-[160px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(2)`
- Heading: `absolute top-4 left-5 md:top-6 md:left-7`, `text-white md:text-black text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] z-10`, content: "Smile" `<br/>` "makeover"

**Card 3 - Bottom Full Width (Services):**
- `MaskedCard`: `col-span-1 md:col-span-2 rounded-xl md:rounded-2xl overflow-hidden relative min-h-[200px] md:min-h-0`
- Animated: `s2Reveal.getAnimStyle(3)`
- Inner container: `absolute inset-0 z-10 flex flex-wrap md:flex-nowrap gap-1.5 md:gap-2 p-2 md:p-3`
- 4 service sub-cards mapped from `services` array:
- Container: `flex-1 min-w-[calc(50%-4px)] md:min-w-0 rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between`
- Active: `bg-white/90 backdrop-blur-md`
- Inactive: `bg-white/20 backdrop-blur-xl`
- Service name: `<h3>` with `text-xl md:text-4xl font-bold leading-[1.05] whitespace-pre-line`, color: active=`text-black`, inactive=`text-white`
- Number badge (if `svc.num` exists): `self-end w-8 h-8 md:w-12 md:h-12 rounded-full border flex items-center justify-center text-xs md:text-sm font-semibold`
- Active: `border-black text-black`
- Inactive: `border-white text-white`

---

### SECTION 3 - IMPLANT DENTISTRY

**Container:** `<section>`, `min-h-screen md:h-screen w-full overflow-hidden flex flex-col`, `pt-1.5 md:pt-2 px-3 md:px-5 pb-1.5 md:pb-2 gap-1.5 md:gap-2`

Attach `s3Reveal.containerRef` to this element.

Does NOT use MaskedCard technique. Uses regular `<img>` tags and solid backgrounds.

**Grid:** `flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2`

#### LEFT COLUMN: `flex flex-col gap-1.5 md:gap-2`

**1. Heading Card:**
- `<div>`: `rounded-xl md:rounded-2xl bg-stone-50 p-5 md:p-7 flex flex-col justify-between flex-[1.2] min-h-[180px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(0)`
- Heading: `<h2>` with `text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.95] text-black`, content: "Implant" `<br/>` "Dentistry"
- Subtitle: `<p>` with `text-xs md:text-sm font-semibold text-black`, text "Restore Missing Teeth"

**2. Two Image Cards (side by side):**
- Wrapper: `<div>` with `flex gap-1.5 md:gap-2 flex-1 min-h-[140px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(1)`
- Left image: `<div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden"><img src={SECTION3_IMG1} alt="Dental implant procedure" className="w-full h-full object-cover" /></div>`
- Right image: `<div className="flex-1 rounded-xl md:rounded-2xl overflow-hidden"><img src={SECTION3_IMG2} alt="Dental restoration" className="w-full h-full object-cover" /></div>`

**3. Consultation Card:**
- `<div>`: `rounded-xl md:rounded-2xl bg-zinc-200 p-5 md:p-7 flex items-end justify-between flex-[0.8] min-h-[160px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(2)`
- Left content block:
- Label: `<p>` with `text-xs md:text-sm font-semibold text-black mb-2 md:mb-3`, text "Consultation"
- Heading: `<h3>` with `text-xl md:text-3xl font-bold text-black leading-6 md:leading-8`, content: "Dental" `<br/>` "Restoration" `<br/>` "Services"
- Button: `px-5 py-3 md:px-8 md:py-5 bg-white rounded-full text-black text-base md:text-xl font-bold hover:scale-105 transition-transform`, text "Book Online"

#### RIGHT COLUMN: Single tall image card

- `<div>`: `rounded-xl md:rounded-2xl overflow-hidden relative min-h-[350px] md:min-h-0`
- Animated: `s3Reveal.getAnimStyle(3)`
- Background image: `<img src={SECTION3_BG} alt="Smiling patient" className="w-full h-full object-cover" />`
- **Overlay container:** `absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-5 flex gap-1.5 md:gap-2`

**Overlay Card 1 (white, left):**
- `flex-1 bg-white rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52`
- Heading: `<h4>` with `text-lg md:text-2xl font-bold text-black leading-5 md:leading-7`, content: "The Process" `<br/>` "of Installing" `<br/>` "Implants"
- Arrow icon: `self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center`
- SVG: `width="14" height="14" viewBox="0 0 14 14" fill="none"`, class `rotate-[-45deg]`
- Path: `d="M1 7h12m0 0L8 2m5 5L8 12"` with `stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"`

**Overlay Card 2 (glass, right):**
- `flex-1 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl p-3 md:p-5 flex flex-col justify-between h-36 md:h-52`
- Heading: `<h4>` with `text-lg md:text-2xl font-bold text-white leading-5 md:leading-7`, content: "Caring" `<br/>` "for Dental" `<br/>` "Implants"
- Arrow icon: `self-end w-9 h-9 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center`
- Same SVG as above but with added class `text-white`

---

### OUTER WRAPPER

The entire app is wrapped in `<div className="bg-white">` containing:
1. `{showSplash && <SplashScreen />}` (conditionally rendered)
2. `<Navbar />`
3. Section 1
4. Section 2
5. Section 3

---

### KEY DESIGN RULES

- **Spacing between sections:** Only `pb-1.5 md:pb-2` on each section and `pt-1.5 md:pt-2` on sections 2 and 3 -- virtually seamless.
- **Border radius:** All cards use `rounded-xl md:rounded-2xl` with `overflow-hidden`.
- **Color palette:** Strictly black, white, and translucent white (`bg-white/20`, `bg-white/90`) with `backdrop-blur-md` or `backdrop-blur-xl`.
- **Background fills:** `bg-stone-50` and `bg-zinc-200` for Section 3 solid cards.
- **Typography:** Heavy bold/extrabold, `clamp()` for responsive headings, extremely tight leading (0.79, 0.9, 0.95, 1.05).
- **Interactions:** `hover:scale-105 transition-transform` on CTA buttons.
- **Responsive:** Single `md:` (768px) breakpoint. Stacked on mobile, grid on desktop.
- **No external packages** beyond React and Tailwind.
```
