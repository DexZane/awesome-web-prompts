Create a fullscreen hero section for a password manager app called "VaultShield" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React icons.

---

## Fonts

- **Heading font:** `Helvetica Now Display Bold` loaded from `https://db.onlinewebfonts.com/c/04e6981992c0e2e7642af2074ebe3901?family=Helvetica+Now+Display+Bold` (add as a `<link>` in `index.html`)
- **Body font:** `Inter` (weights 300-900) loaded from Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap` (imported in CSS)

## CSS Variables

```css
:root {
  --font-heading: 'Helvetica Now Display Bold', sans-serif;
  --font-body: 'Inter', sans-serif;
  --color-text: #192837;
  --color-accent: #7342E2;
  --color-login-bg: #F2F2EE;
}
```

## Background Video

Full-screen background video covering the entire viewport (`absolute inset-0, object-cover`):

```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260518_003132_8b7edcb6-c64d-4a52-a9ca-879942e122ad.mp4
```

Attributes: `autoPlay`, `muted`, `loop`, `playsInline`

## Layout Structure

1. **Container:** `relative w-full min-h-screen`, font-family from `--font-body`, color from `--color-text`
2. **Navbar:** max-width 1280px, centered, z-10, `px-5 sm:px-8 py-4 sm:py-5`, flex with items centered and space-between
3. **Hero content:** max-width 1280px centered container with `paddingTop: clamp(40px, 8vw, 72px)`, content block capped at `max-width: 560px`

## Logo (SVG)

Custom SVG logo, 32x32, fill `#192837`, geometric angular shape:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" overflow="visible" viewBox="0 0 256 256">
  <path d="M 64 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 L 128 64 L 128 64.5 L 161 32 L 192 0 L 256 0 L 256 64 L 192 128 L 128 128 L 128 192 L 96 223 L 63.5 256 L 0 256 L 0 192 Z M 256 192 L 224 223 L 191.5 256 L 128 256 L 128 192 L 192 128 L 256 128 Z" fill="#192837"/>
</svg>
```

## Navbar Elements

- **Left:** Logo
- **Center (desktop only, `hidden md:flex`):** 5 links — `['Vault', 'Plans', 'Install', 'News', 'Help']`, text-sm font-medium, opacity hover effect
- **Right (desktop only):**
  - "Start For Free" button — `background: #7342E2`, white text, rounded-full, `px-5 py-2.5`
  - "Sign In" button — `background: #F2F2EE`, dark text, rounded-full, `px-5 py-2.5`
- **Mobile:** Hamburger icon (Menu/X from lucide-react), opens a right-side slide-in sheet

## Mobile Menu Sheet (AnimatePresence + Framer Motion)

- **Backdrop:** fixed inset-0, `rgba(25,40,55,0.35)` background with `blur(4px)` backdrop-filter
- **Sheet:** fixed right-0 top-0, width `min(88vw, 360px)`, height `100dvh`, background `#CFC8C5`, box-shadow `-12px 0 48px rgba(25,40,55,0.18)`
- **Sheet animation:** slides from `x: '100%'` to `x: 0`, ease `[0.22, 1, 0.36, 1]`, duration 0.45s
- **Sheet content:** Logo + close button header, 1px divider, staggered nav links (delay `0.18 + i * 0.07`), bottom CTA buttons matching desktop style

## Hero Heading

- Font: `var(--font-heading)`
- Size: `clamp(1.65rem, 5vw, 3rem)`
- Line-height: `1.05`
- Letter-spacing: `-0.01em`
- Color: `#192837`
- Margin-bottom: `24px`
- Contains inline Lucide icons (Zap, LockKeyhole, Fingerprint) at 24px, color `#192837`, vertically aligned middle, positioned `top: -2px`
- Text: "Lock Down Your Passwords with Ironclad Security"
  - Zap icon before "Lock"
  - LockKeyhole icon between "Passwords" and "with"
  - Fingerprint icon after "Security"

## Hero Subtext

- Font: `var(--font-body)`
- Size: `clamp(0.9rem, 2.5vw, 1.1rem)`
- Line-height: `1.65`
- Opacity: `0.8`
- Max-width: `560px`
- Text: "Zero stress, total control. VaultShield keeps you covered with unbreakable storage, one-tap access, and pro-grade tools for your non-stop world."

## CTA Button

- Background: `#7342E2`
- Color: white
- Border-radius: `50px`
- Padding: `17px 24px`
- Font: `var(--font-body)`, font-weight semibold
- Size: `clamp(0.9rem, 2vw, 1rem)`
- Box-shadow: `0 4px 24px rgba(115,66,226,0.28)`
- Min-width: `210px`
- Flex with space-between, gap `32px`
- Text: "Get It Free" with ArrowRightCircle icon (20px) on the right
- Hover: `scale(1.04)` + `brightness(1.1)`
- Tap: `scale(0.96)`

## Animations (Framer Motion)

**fadeUp variant** applied to heading (delay 0), subtext (delay 0.15s), and CTA button (delay 0.30s):

```js
hidden: { opacity: 0, y: 28 }
visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
```

## Dependencies

- `react`, `react-dom`
- `framer-motion`
- `lucide-react` (icons: ArrowRightCircle, Zap, LockKeyhole, Fingerprint, Menu, X)
- Tailwind CSS
