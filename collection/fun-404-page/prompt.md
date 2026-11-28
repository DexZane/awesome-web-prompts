# Fun 404 Page — Prompt

```
Build a full-screen animated 404 error page for a children's brand called "TinyTrails" using React, Tailwind CSS, and Lucide React icons. The page must be a single `App.tsx` component. Use the Inter font (weights 400–900) loaded from Google Fonts. The page is a single viewport-height screen with no scrolling.

---

**LAYOUT & BACKGROUND:**

- The full page is `w-full h-screen overflow-hidden flex flex-col` with a CSS linear gradient background from `#FF8233` (top) to `#FDAC55` (bottom).

---

**BACKGROUND "404" TEXT EFFECT:**

- Behind everything, centered in the viewport, render the text "404" in white (`#FFFFFF`), `font-black`, `leading-none`, `tracking-tighter`, `whitespace-nowrap`.
- Font size: `clamp(200px, 48vw, 800px)`.
- The text is scaled horizontally by `1.15` and vertically dynamically: on mount (and resize), measure the text element's `offsetHeight`, divide `window.innerHeight` by that height, and multiply by `1.4` to get the Y scale. Apply via `transform: scale(1.15, ${scaleY * 1.4})`.
- Over the "404" text (same centered container), render a white (`#FFFFFF`) oval: a `div` with `rounded-full`, height `h-[22vh] sm:h-[26vh] md:h-[50vh]`, width `clamp(120px, 20vw, 400px)`, scaled vertically by the same dynamic `scaleY` value with `transformOrigin: center`.
- The entire background layer (text + oval) is wrapped in a container with `opacity: 0.8` and a CSS mask that fades to transparent at the bottom: `mask-image: linear-gradient(to bottom, black 40%, transparent 95%)` (with `-webkit-mask-image` for Safari).
- This layer is `absolute inset-0 pointer-events-none`.

---

**NAVIGATION BAR:**

- `relative z-20`, flex row, items centered, `justify-between`, padding `px-4 sm:px-6 md:px-12 py-4 sm:py-5`.
- **Logo (left):** A 2x2 grid of white circles (`grid-cols-2 gap-0.5`), each circle `w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white rounded-full`. Next to it, the text "TinyTrails" in `text-white font-bold text-lg sm:text-xl ml-1`.
- **Desktop nav links (center/right):** Hidden on mobile (`hidden md:flex`), a row of pill buttons with `gap-1`. Items: "About Us", "Programs", "Reviews", "FAQ", "Contacts". Each is an `<a>` with `px-4 py-1.5 text-sm font-medium rounded-full bg-white` and text color `#F16524`, with `hover:opacity-90 transition-colors`.
- **Menu button (right):** A pill button with `px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white` and background color `#F16524`. Contains a Lucide `Menu` icon (`w-4 h-4`) and the text "Menu" (`text-sm font-medium hidden sm:inline`). Has `hover:opacity-90 transition-colors`.

---

**MOBILE MENU OVERLAY:**

- Fixed fullscreen (`fixed inset-0 z-50`), with visibility toggled. Transition: `duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`.
- **Backdrop:** `absolute inset-0 bg-black/40 backdrop-blur-sm`, fades in/out with `opacity` transition over 500ms. Clicking it closes the menu.
- **Panel:** Slides in from right. `absolute top-0 right-0 h-full w-full sm:w-[380px]`, translates between `translate-x-full` (closed) and `translate-x-0` (open). Background: `linear-gradient(135deg, #FF6B1A 0%, #FF9642 100%)`.
  - **Panel header:** Same logo as nav (2x2 white dots + "TinyTrails" bold white text). Close button: `w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30` with Lucide `X` icon (`w-5 h-5`).
  - **Menu items:** Staggered animation. Each item is `px-6 py-4 text-lg font-semibold text-white rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300`. When open: `opacity-100 translate-y-0`; when closed: `opacity-0 translate-y-4`. Transition delay per item: `150 + i * 60`ms when opening, `0ms` when closing.
  - **Bottom CTA:** Absolutely positioned at bottom (`absolute bottom-0 left-0 right-0 p-6`). A pill link: `w-full py-4 rounded-full bg-white font-semibold text-base` with text color `#F16524`, `hover:scale-[1.02]`. Contains Lucide `ArrowLeft` icon + "Back to Home". Fades in with 450ms delay when opening.
- Body scroll is locked (`overflow: hidden`) when menu is open.

---

**CENTER VIDEO:**

- An absolutely positioned container (`absolute inset-0 flex items-center justify-center pointer-events-none`) with `margin-top: calc(-6vh - 40px)` to shift it upward.
- Inside, a responsive container: `w-[120vw] h-[85vh] sm:w-[70vw] sm:h-[70vh] md:w-[62vw] md:h-[78vh]`.
- Contains a `<video>` element with `autoPlay loop muted playsInline`, class `w-full h-full object-contain pointer-events-none mix-blend-darken`.
- **Video source URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4`

---

**BOTTOM CONTENT:**

- `relative z-30 mt-auto pb-8 sm:pb-16 flex flex-col items-center text-center px-4`.
- Heading: "Oops, something went wrong!" in `text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4`.
- Button/link: An `<a href="/">` pill with `inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base` and background `#F16524`. Has `hover:scale-105 hover:shadow-lg transition-all`. Contains Lucide `ArrowLeft` icon (`w-4 h-4 sm:w-5 sm:h-5`) + "Back to Home".

---

**GLOBAL CSS (`index.css`):**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

**HTML HEAD:**

- Load Inter font from Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap` with preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`.
- Title: "404 - Page Not Found".

---

**KEY COLOR PALETTE:**
- Page gradient: `#FF8233` to `#FDAC55`
- Accent/buttons: `#F16524`
- Text & shapes: `#FFFFFF`
- Menu gradient: `#FF6B1A` to `#FF9642`
- Menu overlay backdrop: `black/40` with `backdrop-blur-sm`
- Menu item backgrounds: `white/10`, `white/20` on hover

---

**DEPENDENCIES:** React, Tailwind CSS, Lucide React (`ArrowLeft`, `Menu`, `X` icons). Vite build system. No other libraries.
```
