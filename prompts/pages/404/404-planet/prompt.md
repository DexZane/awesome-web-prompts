<!-- 在下方粘贴提示词原文 -->

# 提示词

```text
Build a full-page 404 error page for a hosting company called "NEXOVA". The entire page is a single viewport-height layout with a looping background video, a navigation bar, a centered hero/404 section, and a multi-column footer. Use React + Tailwind CSS + Lucide React icons. No other UI libraries.

---

**FONT**

Load "Helvetica Now Var" via this stylesheet in `index.html`:
```
<link href="https://db.onlinewebfonts.com/c/e66905e07608167a84e6ad52f638c3c6?family=Helvetica+Now+Var" rel="stylesheet">
```
Apply it globally on the root container via inline style:
```
fontFamily: '"Helvetica Now Var", Helvetica, Arial, sans-serif'
```

---

**BACKGROUND VIDEO**

A `<video>` element with `autoPlay muted loop playsInline`, positioned `absolute inset-0 w-full h-full object-cover` behind all content. The video source URL is:
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4
```
This is a cinematic dark-blue Earth-from-space shot.

---

**LAYOUT STRUCTURE**

The root is `relative min-h-screen flex flex-col`. Inside it:
1. The background `<video>` (absolute, behind everything)
2. A content wrapper `relative z-10 flex flex-col min-h-screen` containing nav, hero, and footer

---

**NAVIGATION BAR**

- Flex row, `items-center justify-between`, padding `px-6 md:px-12 lg:px-16 py-5`
- **Logo (left):** A custom SVG icon (4 quarter-circle leaf shapes forming a circle, white fill, `w-8 h-8`) next to the text "NEXOVA" in `text-white text-xl font-bold tracking-wider`. The exact SVG path is:
  ```
  M480 240a240 240 0 0 0-240 240 240 240 0 0 0 240-240Z
  M240 0A240 240 0 0 0 0 240 240 240 0 0 0 240 0Z
  M480 240A240 240 0 0 0 240 0a240 240 0 0 0 240 240Z
  M240 480A240 240 0 0 0 0 240a240 240 0 0 0 240 240Z
  ```
  viewBox `0 0 480 480`
- **Desktop nav links (center):** Hidden below `lg`. Links: Domain, Servers, Cloud, Managed, Email, Privacy. Styled `text-white/80 hover:text-white text-sm tracking-wide` with 200ms color transition, `gap-8`.
- **Login button (right):** Hidden below `lg`. Gradient button `bg-gradient-to-r from-emerald-400 to-cyan-500`, white text, `text-sm font-semibold px-6 py-2.5 rounded-full`. Text "LOG IN" with a Lucide `ArrowRight` icon (w-4 h-4) beside it.
- **Mobile hamburger:** Visible below `lg` breakpoint. A button with `z-[60]` showing Lucide `Menu` / `X` icons that cross-fade with rotation: the active icon is `opacity-100 rotate-0 scale-100`, the inactive is `opacity-0 rotate-90 scale-75` (or `-rotate-90`), all with `transition-all duration-300`.

---

**MOBILE MENU**

Uses two state variables: `mobileMenuOpen` (controls mount) and `menuVisible` (controls animation). When opening, `mobileMenuOpen` is set true, then `menuVisible` becomes true via `useEffect`. When closing, `menuVisible` is set false first, then after a 500ms timeout `mobileMenuOpen` is set false.

- **Backdrop:** Fixed overlay `inset-0 z-40 bg-black/40 backdrop-blur-md`, fades in/out with 400ms opacity transition. Clicking it closes the menu.
- **Menu panel:** Absolutely positioned `left-0 right-0 top-[68px] z-50`. Contains a backdrop-only blur layer (`backdrop-blur-xl`, no background color, `rounded-b-2xl`) and content on top (`relative z-10`).
- **Menu items:** Each nav link is centered, `text-lg sm:text-xl font-light tracking-[0.08em]`, `text-white/80 hover:text-white`. They stagger-animate in: each link has a `transitionDelay` of `350 + (index * 50)ms` when appearing (0ms when disappearing), transitioning opacity 0->1 and translateY 12px->0 over 400ms with `ease-out`.
- **Login button:** Same gradient style as desktop, appears last in the stagger sequence with delay `350 + (linkCount * 50)ms`.

---

**HERO / 404 SECTION**

Centered vertically and horizontally in the remaining space: `flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 sm:py-16 md:py-0`.

1. **Subtitle lines (two h1 tags):**
   - "This page seems to have" and "slipped beyond our reach :/"
   - Both: `text-white/80 text-lg xs:text-2xl sm:text-3xl md:text-5xl font-light leading-snug tracking-tight`
   - First line: `mb-1 sm:mb-2`, second line: `mb-8 sm:mb-12`

2. **Giant "404" text:**
   - Wrapped in a `relative mb-8 sm:mb-12 w-full flex justify-center overflow-visible` div
   - The `<span>`: `text-[80px] xs:text-[100px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-black text-white leading-none tracking-tighter select-none`
   - Has class `four-oh-four` which applies this CSS glow:
     ```css
     .four-oh-four {
       text-shadow: 0 0 80px rgba(255,255,255,0.3), 0 0 160px rgba(255,255,255,0.1);
     }
     ```

3. **"Return to Main Page" button:**
   - An `<a>` tag with class `liquid-glass` (glassmorphism effect) + `text-white text-[10px] xs:text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full uppercase`
   - The `liquid-glass` CSS class:
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
     ```

---

**FOOTER**

Positioned at the bottom: `relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 pb-8 sm:pb-10 pt-10 sm:pt-16`.

Grid: `grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6`.

**4 link columns** (iterated from data):
- SERVERS: Web Servers, VPS Servers, Cloud Servers, Managed Instances, Bare Metal
- DOMAINS: Find Domain, Move Domains, DNS Manager, Domain Costs
- HELP US: Open a Ticket, FAQs, Docs, Tutorials, Forum
- ABOUT: Our Story, Leadership Team, Press Room, We Hire, Alliance, Blog

Each column title: `text-white text-[10px] sm:text-xs font-bold tracking-[0.15em] mb-3 sm:mb-4`. Links: `text-white/50 hover:text-white/80 text-[10px] sm:text-xs` with 200ms transition, in a `space-y-2 sm:space-y-2.5` list.

**Newsletter + Social column** (`col-span-2 lg:col-span-2`):
- Heading "JOIN FOR EXCLUSIVE DEALS" (same title style)
- Email input + "SEND IT" button side by side in a flex row, `max-w-sm`. Input: white bg, `rounded-l-md`, placeholder "Type your email to sign up". Button: same emerald-to-cyan gradient, `rounded-r-md`, `font-bold tracking-wider`.
- Heading "CONNECT" with `mt-5 sm:mt-6 mb-3`
- 6 social icons (Lucide: Facebook, Twitter, Dribbble, Youtube, Linkedin, Instagram), each `w-4 h-4`, `text-white/50 hover:text-white`, `gap-3`.

---

**RESPONSIVE BREAKPOINTS**
- `xs` is not a default Tailwind breakpoint -- if used, it needs to be added, or replaced with `sm`. The design uses mobile-first sizing that scales up at `sm` (640px), `md` (768px), and `lg` (1024px).
- Mobile: 2-col footer grid, hamburger menu, smaller text sizes
- Tablet (md): 4-col footer grid so newsletter sits beside the last link column
- Desktop (lg): 6-col footer grid, full horizontal nav, login button visible
```
