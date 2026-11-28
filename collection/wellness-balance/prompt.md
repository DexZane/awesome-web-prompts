# Wellness Balance — Prompt

```
Create a single-page hero landing for a wellness/supplements brand called "TerraElix" using React + Tailwind CSS + Lucide React icons. The page is a full-viewport hero with a background image, navbar, headline with word-by-word reveal animations, CTA section, and a 3-panel footer strip. It must be fully responsive (mobile, tablet, desktop).

---

## Fonts

Import from Google Fonts:
- **DM Sans** (weights 400, 500) -- used for brand name, nav links, headline, panel 1 text
- **Inter** (weights 400, 500) -- used for buttons, body text, panel 2/3 text

---

## Background

Full-screen background image covering the entire viewport:
```css
url: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_110248_b62f758d-f68c-4045-a7b4-91771d6d0a0f.png&w=1280&q=85
background-size: cover; background-position: center; background-repeat: no-repeat;
```

---

## Layout Structure

```html
<div> (min-h-screen, flex flex-col, relative, overflow-hidden)
  <nav> -- navbar
  <section> -- hero content (flex-1, flex col, justify-center)
  <div> -- mobile/tablet product image (visible below lg)
  <div> -- 3-panel grid footer
  <img> -- desktop floating product image (absolute, hidden below lg)
</div>
```

---

## Navbar

- **Left:** Brand name "TerraElix" -- white, DM Sans 500, 30px, letter-spacing -0.05em
- **Center (desktop only, hidden on mobile):** Nav links "About", "Products", "Promotions", "Contact" -- DM Sans 500, 18px, text-white/90, gap 10 (lg)
- **Right:** Row of icon buttons + avatar + mobile menu toggle
  - Search icon (Lucide `Search`, size 20, strokeWidth 1.5)
  - Shopping bag icon (Lucide `ShoppingBag`, size 20, strokeWidth 1.5)
  - Return icon (Lucide `CornerUpLeft`, size 20, strokeWidth 1.5)
  - Round avatar image (w-8 h-8, lg:w-10 lg:h-10, rounded-full, object-cover):
    ```
    https://polo-pecan-73837341.figma.site/_assets/v11/ca8093996e970200cbcf8bde8744175e52da5a79.png
    ```
  - Hamburger menu button (md:hidden, Lucide `Menu` / `X` toggle)

- **Mobile overlay menu:** fixed inset-0 bg-black/90 z-30 with centered nav links (text-2xl, white)

Padding: px-5 sm:px-8 lg:px-10, py-4 lg:py-5

---

## Hero Headline

Font: DM Sans, weight 400, letter-spacing -0.05em

Responsive sizes:
- Base: 48px/50px line-height
- sm: 80px/72px
- md: 110px/95px
- lg: 130px/110px
- xl: 155px/125px

Text layout (3 lines):
```
Line 1: "The" (white) "Power" (white) "of" (white/45 -- dimmed)
Line 2: "Nature" (dimmed) "in" (dimmed) "Every" (white)
Line 3: "Capsule" (white) + inline image
```

Each word is wrapped in a container with overflow-hidden, and the inner span animates with `wordReveal` (translateY 100% + blur to visible). Staggered delays: 0.3s, 0.4s, 0.5s, 0.6s, 0.7s, 0.8s, 0.9s.

**Inline image** after "Capsule" (hidden on mobile, sm:inline-block, align-middle, ml-2 lg:ml-4):
```css
https://polo-pecan-73837341.figma.site/_assets/v11/6a7de4fbe9c9e2315040607320a9ff5e93117bf4.png
height: clamp(60px, 10vw, 160px); width: auto;
```

---

## CTA Section

Below the headline, mt-8 sm:mt-12 lg:mt-[75px]. Flex row on sm+, column on mobile. Gap: 5 (mobile), 8 (sm), 50px (lg).

- **Button:** "Explore Now" + ArrowUpRight icon. bg-black text-white rounded-md. Sizes: w-full sm:w-[240px] md:w-[280px] lg:w-[310px], h-14 sm:h-16 lg:h-[72px]. Font: Inter 500, responsive text (base to 2xl), letter-spacing -0.03em.
- **Paragraph:** "Discover our new plant-based supplements for daily balance and clean energy." -- white, max-w-[310px], Inter 400, text-sm sm:text-base lg:text-lg, line-height 1.45, letter-spacing -0.03em.

---

## Mobile/Tablet Product Image (lg:hidden)

Visible below lg breakpoint. Oversized, bleeding off edges:
```css
https://polo-pecan-73837341.figma.site/_assets/v11/50ad042b3cd48a2e120ea3ba17c8cfeaf3cc334c.png
w-[180%] sm:w-[151%] max-w-[1296px], object-contain, mx-auto, drop-shadow-2xl
margin-bottom: -180px sm:-220px (overlaps panels below)
```

---

## Bottom 3-Panel Grid

`grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]`, relative z-10.

### Panel 1 (bg-[#ECEDEC])
- Text: "Start your personalized path to natural balance" -- DM Sans 400, text-2xl sm:text-[28px] lg:text-[35px], leading-[1.1], letter-spacing -0.05em, max-w-[350px]
- Link: "Personal Assessment" -- underline, Inter 400, text-base lg:text-lg, letter-spacing -0.03em
- Decorative image (absolute right-0 bottom-0, h-full, mix-blend-multiply):
  ```css
  https://polo-pecan-73837341.figma.site/_assets/v11/6736cbe6e26afa2cd7c04a91892a79f7640785b5.png
  ```

### Panel 2 (bg-[#FEFDF9]) -- Auto-rotating card carousel
4 cards cycling every 3500ms with fade/slide transition:
1. FlaskConical icon, bg-black circle: "Experience our newly enhanced natural formula"
2. Leaf icon, bg-emerald-800 circle: "Pure organic ingredients sourced sustainably"
3. Droplets icon, bg-cyan-800 circle: "Advanced bioavailability for maximum absorption"
4. Sun icon, bg-amber-700 circle: "Clinically tested for daily energy & vitality"

Each card: icon in a 40px (sm:48px) round colored circle + text (Inter 400, text-sm sm:text-base lg:text-lg, text-black/80, line-height 1.2, letter-spacing -0.03em).

Active card: opacity-100 translate-y-0. Inactive: opacity-0 translate-y-4 absolute.

Bottom dots: 4 thin bars (h-0.5, flex-1, rounded-full). Active: bg-black. Inactive: bg-black/20.

### Panel 3 (bg-black)
- Left: Product image (w-[120px] h-[82px] sm:w-[160px] h-[110px] lg:w-[208px] h-[142px]):
  ```css
  https://polo-pecan-73837341.figma.site/_assets/v11/30e8f38d1f993c357a3be2721557fc899d5640fc.png
  ```
- Right: "+14K" (white, Inter 400, text-2xl sm:text-3xl lg:text-[35px], letter-spacing -0.05em) + "People have already optimized their wellness" (text-white/60, Inter 400, text-sm sm:text-base lg:text-lg, line-height 1.2)

---

## Desktop Floating Product (lg+ only)

Same image as mobile product, but absolutely positioned for desktop:
```css
https://polo-pecan-73837341.figma.site/_assets/v11/50ad042b3cd48a2e120ea3ba17c8cfeaf3cc334c.png
position: absolute; z-0; hidden lg:block;
width: clamp(600px, 80vw, 1412px); height: auto;
bottom: -10%; right: clamp(-400px, -20vw, -100px);
```

---

## Animations (CSS keyframes)

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes wordReveal {
  from { opacity: 0; transform: translateY(100%); filter: blur(4px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0px); }
}
```

All use `cubic-bezier(0.16, 1, 0.3, 1)` easing with `both` fill mode.

**Classes and their animations:**
- `.animate-fade-up` -- fadeUp 0.8s
- `.animate-fade-in` -- fadeIn 0.7s
- `.animate-slide-left` -- slideInLeft 0.8s
- `.animate-slide-right` -- slideInRight 0.8s
- `.animate-scale-in` -- scaleIn 1s
- `.animate-word-reveal > span` -- wordReveal 0.7s

**Delay classes:** .delay-200 through .delay-1100 (increments of 0.1s)

**Animation assignments:**
- Navbar container: animate-fade-in
- Brand name: animate-slide-left delay-200
- Nav links: animate-fade-in delay-400
- Right icons: animate-slide-right delay-300
- CTA row: animate-fade-up delay-600
- Desktop product image: animate-scale-in delay-700
- Mobile product image: animate-scale-in delay-800
- Panel 1: animate-fade-up delay-900
- Panel 2: animate-fade-up delay-1000
- Panel 3: animate-fade-up delay-1100
- Inline capsule image: animate-scale-in delay-1000
```
