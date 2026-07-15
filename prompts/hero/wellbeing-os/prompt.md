# Wellbeing OS — Hero Section Prompt

```text
Create a fullscreen hero section for a SaaS product called "flowpath" using React, Tailwind CSS, and Lucide React icons. The section should be a single `<section>` filling the viewport (`h-screen w-full overflow-hidden`).

### Setup & Custom CSS
1. Load the font "Helvetica Now Text" and set up the font stack:
   Add to your main CSS file (e.g. `index.css`):
   @import url('https://db.onlinewebfonts.com/c/08e020de1811ec4489f82d1247a42c09?family=Helvetica+Now+Text');
   
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Helvetica Now Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
   }

2. Add custom CSS styles and classes:
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

   @keyframes dropdown-in {
     from { opacity: 0; transform: translateY(-4px) scale(0.96); }
     to { opacity: 1; transform: translateY(0) scale(1); }
   }
   .animate-dropdown { animation: dropdown-in 0.2s ease-out; }
   .duration-400 { transition-duration: 400ms; }
   ```

### Section Background
- Set up a looping, muted, autoplaying `<video>` element covering the full section with `object-cover`.
- Video URL: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_053131_1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4`
- Add a subtle dark overlay on top of the video: `bg-black/10 absolute inset-0`.

### Navigation (top, not fixed/sticky)
- Padding: full-width with responsive horizontal padding (`px-5 sm:px-6 md:px-12 lg:px-16`) and vertical padding (`py-4 sm:py-5`).
- **Logo**: An inline SVG diamond shape (28x28px) with two overlapping diamond paths (opacities at 0.9 and 0.5 respectively), followed by the text "flowpath" in white (`text-lg sm:text-xl font-medium tracking-tight`).
- **Desktop Navigation** (hidden on mobile, flex on md+):
  - Items with Dropdowns (open on hover using `onMouseEnter` / `onMouseLeave` state):
    - **Product** (dropdown options: Connections, Workflows, Insights)
    - **Solutions** (dropdown options: Guides, Use cases, API reference)
    - **About** (dropdown options: Our story, Open roles, Reach us)
  - Item without Dropdown: **Plans**
  - Dropdown styling: `!absolute top-full left-0 mt-2 z-50 rounded-xl py-3 px-2 min-w-[160px] shadow-xl liquid-glass` (Note: Dropdown elements need `!absolute` Tailwind important modifier to override `position: relative` from `.liquid-glass`).
  - Dropdown items: `block w-full text-left text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5 px-3 py-2 transition-colors`.
  - Icon: Each navigation button with a dropdown should display a `ChevronDown` (size 14/14) that rotates 180 degrees when the dropdown is open (`transition-transform duration-300`).
- **Desktop CTA** (hidden on mobile):
  - "Log in" link: `text-white/90 hover:text-white text-sm font-medium transition-colors`.
  - "Try it free" button: `.liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors`.
- **Mobile Menu Button**:
  - Hamburger toggle button (40x40px). Animates between `Menu` and `X` icons from `lucide-react` with rotation/scale/opacity transitions (duration-300).
- **Mobile Menu Overlay**:
  - Positioned absolutely below the navbar, sliding in with `cubic-bezier(0.16,1,0.3,1)` transition easing over 400ms (`transition-all duration-400`).
  - Style: `absolute left-4 right-4 top-full mt-2 bg-[#2C221C]/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 z-40`.
  - Content: All desktop links. Show sub-items indented. Include a bordered-top footer section featuring the "Log in" link and "Try it free" button.

### Hero Content
- Layout: Top-aligned, not vertically centered. Container: `flex-1 flex flex-col items-start justify-center pt-16 sm:pt-20 md:pt-24`.
- Text wrapper: `text-center max-w-3xl mx-auto px-4 z-10`.
- Heading (`<h1>`): `text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.02em]`
  - Content (with line breaks):
    ```
    Bridge the
    gaps. <span class="text-white/60">Ditch the</span>
    <span class="text-white/60">grindwork.</span>
    ```
- Subheading (`<p>`): `text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8`
  - Text: "Flowpath unifies your complete wellness tools, so your crew spends less energy plugging gaps and more on real progress."
- Two CTA buttons side by side (`flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8`):
  1. **Begin your journey** (solid white button): `px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-white/90 transition-colors`
  2. **See it live** (glass button): `px-5 sm:px-6 py-2.5 sm:py-3 liquid-glass rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-colors`
```
