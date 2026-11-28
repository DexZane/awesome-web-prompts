# Immersive Ocean — Hero Section Prompt

```text
Create a fullscreen hero landing page for a creative studio called "Foldcraft" using React, Tailwind CSS, and Lucide React icons. The page is a single viewport-height section with a looping background video, a responsive navbar, a mobile menu, and staggered-animated hero text.

### Fonts & Setup
1. In `index.html`, load the Google Font Geist (weights 300-700):
   <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet">
2. In your Tailwind configuration, extend the fontFamily:
   theme: {
     extend: {
       fontFamily: {
         geist: ['Geist', 'sans-serif'],
       },
     },
   }
3. Add this to your main CSS file (e.g. `index.css`) for smooth antialiasing and reset:
   * { margin: 0; padding: 0; box-sizing: border-box; }
   body {
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }
   @keyframes fadeSlideUp {
     from {
       opacity: 0;
       transform: translateY(24px);
     }
     to {
       opacity: 1;
       transform: translateY(0);
     }
   }

### Root Container
The root container of the component should be styled as:
`relative h-screen w-full overflow-hidden bg-black font-geist`

### Background Video (no z-index or z-0)
- Sits behind all content.
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4`
- Attributes: `autoPlay`, `muted`, `loop`, `playsInline`
- Styling: absolute positioned, full width/height (`absolute inset-0 w-full h-full`), `object-cover`, with `object-position` at 70% horizontal center.

### Navbar (z-30)
- Layout: Flex, items-center, justify-between.
- Padding: `px-6 py-5 md:px-12 lg:px-16`
- **Left Side**: Logo text "Foldcraft" (`text-lg font-semibold tracking-tight text-white sm:text-xl`) followed by desktop navigation links (hidden on mobile, `md:flex` items-center gap-8 ml-10).
  - Nav Links: Home, Projects, Studio, Reach Us. Style: `text-sm text-white/80 hover:text-white transition-colors`.
- **Right Side (Desktop)**: "Let's Talk" button. Hidden on mobile, `md:block`. Style: `rounded-lg bg-white px-5 py-2 text-sm font-medium text-black hover:scale-105 transition-transform`.
- **Right Side (Mobile)**: Hamburger menu toggle button (40x40px, `z-50`, `active:scale-90` for click effect).
  - Inside, use Menu and X icons from `lucide-react`.
  - Icon animation: Menu rotates 90deg out, and X rotates in with opacity and scale transitions (duration-300).

### Mobile Menu Overlay (z-20)
- Styling: `absolute inset-x-0 top-0 h-screen w-full bg-black/98 backdrop-blur-xl`.
- Toggle state transition: `transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]` toggling between `h-screen opacity-100` and `h-0 opacity-0 pointer-events-none`.
- Inner content: Centered vertically (`flex h-full flex-col justify-center px-8`), with a delayed fade + translate animation (delay-100, transition Y displacement `translate-y-8`).
- Mobile Links: Home, Projects, Studio, Reach Us (`text-3xl font-medium text-white/90 hover:text-white py-4 transition-colors`).
- Mobile CTA Button: "Let's Talk" (`mt-6 rounded-full bg-white px-8 py-3.5 text-base font-medium text-black hover:scale-105 transition-transform text-center`).
- All links and the button should call `setMobileMenuOpen(false)` when clicked.

### Hero Content (z-10)
- Layout: Flex column, justify-between, fills remaining height: `h-[calc(100vh-80px)]`
- Padding: `px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16`

1. **Top Section** (max-w-3xl):
   - Badge: "Brand & Visual Storytelling". Style: `text-xs sm:text-sm text-white/90 mb-4 sm:mb-6 block animate-[fadeSlideUp_0.8s_ease_0.2s_both]`.
   - Heading (h1): "Shaping visual / narratives, / one pixel at a time." using `<br />` for line breaks on the slashes.
     - Sizing: `text-3xl sm:text-5xl md:text-6xl lg:text-7xl`
     - Style: `font-medium leading-[1.1] tracking-tight text-white animate-[fadeSlideUp_0.8s_ease_0.4s_both]`
2. **Bottom Section**:
   - Paragraph: "Turning vision into reality through craft, motion, and an endless pursuit of beauty."
     - Style: `text-sm sm:text-base md:text-lg leading-relaxed text-white/60 max-w-sm sm:max-w-lg mb-5 sm:mb-6 animate-[fadeSlideUp_0.8s_ease_0.7s_both]`
   - CTA Button: "Explore Work" inline-flexed with ArrowRight icon (size 16) from `lucide-react`.
     - Style: `rounded-lg bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-black hover:scale-105 transition-transform inline-flex items-center gap-2 animate-[fadeSlideUp_0.8s_ease_0.9s_both]`
```
