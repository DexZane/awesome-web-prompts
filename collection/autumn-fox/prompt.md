Build a single, standalone index.html file: a full-screen hero section for a fictional AI automation brand called "FENNEC". Put everything (HTML, CSS, JS) in that one file. Use no build tools and no extra local files. Follow every spec below exactly.

==================================================
1. EXTERNAL ASSETS (use these exact URLs)
==================================================
- Background video (MP4, 1920x1080, 8s, loops):
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261016_125941_6c5f1180-2f4e-44ec-b90c-aa0b05e5109b.mp4
- Still image (used as the video poster AND as the hero's CSS background fallback):
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261016_125845_ec7f8569-08dd-4a78-8310-9e094f5dd0a3.png
- 3D fox model (GLB, ~16 MB, CORS-enabled):
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261016_125948_52f145de-4509-41e1-9289-523cf0ac9c86.glb
- Fonts (Google Fonts, with preconnect to fonts.googleapis.com and fonts.gstatic.com crossorigin):
  https://fonts.googleapis.com/css2?family=Questrial&family=Urbanist:wght@300;400;500&display=swap
- Three.js r160 via an import map:
  "three": "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js"
  "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"
  Import GLTFLoader from "three/addons/loaders/GLTFLoader.js" and RoomEnvironment from "three/addons/environments/RoomEnvironment.js".

==================================================
2. DOCUMENT + GLOBALS
==================================================
- <html lang="en">, meta charset utf-8, meta viewport "width=device-width, initial-scale=1".
- <title>Fennec — Self-Driving Workflows</title>
- CSS variables on :root: --white #ffffff; --ink #1a1410; --orange #e8742a.
- Reset: * { box-sizing: border-box; margin: 0; padding: 0 }.
- html, body: height 100%, background #f4ece4.
- body: font-family "Urbanist", "Questrial", system-ui, sans-serif; color white; overflow hidden; -webkit-font-smoothing antialiased.

==================================================
3. LAYER STACK (inside <main class="hero">, in this order)
==================================================
.hero: position fixed; inset 0; overflow hidden; isolation isolate; NO border radius (edge-to-edge, square corners); background: #b5571c url(<still image URL>) center / cover no-repeat.

z-index 0. <video class="hero__video"> src = video URL, poster = still image URL, attributes: autoplay muted loop playsinline preload="auto". CSS: position absolute; inset 0; width/height 100%; object-fit cover.

z-index 1. <div class="hero__shade"> (pointer-events none, absolute, inset 0) with two stacked backgrounds:
  linear-gradient(90deg, rgba(60,22,4,.38) 0%, rgba(60,22,4,.12) 28%, rgba(0,0,0,0) 50%),
  linear-gradient(180deg, rgba(40,14,2,.18) 0%, rgba(0,0,0,0) 16%)

z-index 2. <canvas id="fox" aria-label="Cute 3D red fox holding a boba tea">: absolute, inset 0, 100% x 100%, display block, opacity 0 with transition opacity 1.2s ease; add class .is-ready (opacity 1) once the GLB loads.

z-index 5. Headline <h1 class="headline">.
z-index 6. Menu backdrop.
z-index 7. Menu panel.
z-index 8. Top nav <header class="nav"> (sits above the open menu so the brand pill stays visible on top of the panel).

==================================================
4. TOP NAV
==================================================
<header class="nav">: absolute; top 0, left 0, right 0; flex, align-items center, justify-content space-between; padding 17px 20px 0 20px.

LEFT, <nav class="nav__links">: flex, align-items center, gap 32px, font-family Questrial, font-size 13.5px, letter-spacing .01em. Links are white, no underline, opacity .95, and go to opacity .7 on hover (transition .2s). Items in order:
  1. <a>platform</a>
  2. <button class="toggle" aria-label="Toggle theme">: a decorative pill switch, 35x17px, radius 999px, background rgba(255,255,255,.28), no border, margin 0 -2px, position relative, pointer cursor. Two 13x13 white circles via ::before (left 2px) and ::after (left 11px, opacity .55), both top 2px, so they overlap.
  3. <a>story</a>
  4. <a class="hide-sm">community</a>

RIGHT, brand pill <div class="brand">: flex, align-items center, gap 16px, height 44px, padding 0 16px 0 6px, white background, radius 999px, color --ink, box-shadow 0 6px 24px rgba(80,30,0,.12), position relative, z-index 2, transition box-shadow .5s ease. The shadow becomes 0 0 0 transparent while the menu is open. Contents:
  a) .brand__logo: 32x32 orange (--orange) circle, display grid, place-items center. Inside it, a 20x20 inline SVG sun mark (viewBox 0 0 20 20, fill #1a1410): a center circle (cx 10, cy 10, r 4.2), plus 12 triangular rays made from one path "M10 0.6 L11.1 4.2 L8.9 4.2 Z" (give it a <g id="ray">), repeated with <use href="#ray"> at rotate(30/60/90/.../330 10 10).
  b) .brand__name "FENNEC": Questrial 13px, letter-spacing .62em, padding-left 6px, margin-right 6px.
  c) Hamburger <button class="brand__menu" aria-label="Open menu" aria-expanded="false" aria-controls="menu">: 28x28, margin-right -6px, transparent, no border, round, position relative. Hover background rgba(26,20,16,.06), transition .3s. It holds three <span> lines: absolute, left 6px, width 16px, height 1.6px, ink color, radius 2px, at top 8.6px / 13.2px / 17.8px. Line transitions: transform .55s cubic-bezier(.76,0,.24,1), opacity .3s, width .45s same curve. On hover the middle line shrinks to width 11px.
     OPEN STATE (morph to X): line 1 translateY(4.6px) rotate(45deg); line 2 scaleX(0) and opacity 0; line 3 translateY(-4.6px) rotate(-45deg).

==================================================
5. HEADLINE
==================================================
<h1 class="headline"> with four block spans (each display block, width max-content):
  <span>streamlined</span>
  <span class="u">operations</span>
  <span>feel</span>
  <span class="u indent">breezy</span>
CSS: absolute; left 18px; top 46%; Questrial 400; font-size clamp(30px, 2.95vw, 44px); line-height .98; letter-spacing -.005em; white; text-shadow 0 2px 18px rgba(70,25,0,.25).
.u: text-decoration underline, thickness 2px, underline-offset 6px.
.indent: margin-left 3.5em (so "breezy" sits indented under "feel").

==================================================
6. ENTRANCE ANIMATION
==================================================
.nav and each .headline span start at opacity 0, translateY(14px), and run "@keyframes rise { to { opacity:1; transform:none } }" for .9s cubic-bezier(.2,.7,.2,1) forwards.
Delays: nav .1s; headline lines .25s, .35s, .45s, .55s.

==================================================
7. HAMBURGER MENU (premium open/close)
==================================================
Placement: after the h1 and still inside .hero, add:
  <div class="menu-backdrop" data-close></div>
  <nav class="menu" id="menu" aria-label="Main menu"> ... </nav>
Open/closed state is controlled by toggling the class "is-menu-open" on .hero.

BACKDROP (.menu-backdrop): absolute, inset 0, z 6, background rgba(48,18,2,.28), backdrop-filter blur(0px) (plus the -webkit- version), opacity 0, visibility hidden.
  Closed transition: opacity .6s ease, backdrop-filter .8s ease, visibility 0s .8s.
  Open: opacity 1, visible, blur(10px); transition: opacity .6s ease, backdrop-filter .8s ease, visibility 0s.

PANEL (.menu): the panel grows OUT OF the brand pill using clip-path.
  CSS var --pill-w (default 200px; JS sets it to the real pill width).
  absolute; z 7; top 17px; right 20px; width min(400px, calc(100vw - 32px)); padding 76px 30px 26px; white background; ink text; radius 24px; box-shadow 0 30px 80px -20px rgba(70,25,0,.45).
  Closed: clip-path inset(0 0 calc(100% - 44px) calc(100% - var(--pill-w)) round 22px), which is exactly the pill's footprint; visibility hidden; transition clip-path .75s cubic-bezier(.76,0,.24,1), visibility 0s .75s.
  Open: clip-path inset(0 0 0 0 round 24px); visible; transition clip-path .85s cubic-bezier(.76,0,.24,1), visibility 0s.

PANEL CONTENT:
  <ul class="menu__list"> (no bullets) with 5 <li class="menu__item">. Each li: overflow hidden, border-bottom 1px solid rgba(26,20,16,.08). Each holds:
    <a class="menu__link"><small>NN</small>label<span class="arrow">&rarr;</span></a>
  Items: 01 platform, 02 story, 03 community, 04 billing, 05 connect.
  .menu__link: flex, align-items baseline, gap 14px, padding 12px 0 10px, ink color, no underline, Questrial 34px, line-height 1.05, letter-spacing -.01em.
    Closed: transform translateY(110%) (hidden below the li mask); transition transform .5s cubic-bezier(.76,0,.24,1), color .3s.
    Open: transform none; transition transform .9s cubic-bezier(.2,.8,.2,1), color .3s; staggered transition-delay (transform, color) of .32s / .38s / .44s / .50s / .56s for items 1-5, with the color delay 0s.
    Hover: color --orange.
  small (number): 11px, letter-spacing .12em, orange, transform translateY(-14px) (superscript look).
  .arrow: margin-left auto, 20px, opacity 0, translateX(-10px), transition opacity .3s, transform .4s cubic-bezier(.2,.7,.2,1). On link hover: opacity 1, transform none.

  Footer <div class="menu__foot">: flex, space-between, align center, gap 12px, margin-top 26px.
    Closed: opacity 0, translateY(12px), transition opacity .3s, transform .4s.
    Open: opacity 1, transform none, transition opacity .6s .62s, transform .8s .62s cubic-bezier(.2,.8,.2,1).
    Left, CTA <a class="menu__cta">begin today <i>&rarr;</i></a>: inline-flex, gap 10px, height 44px, padding 0 8px 0 20px, radius 999px, ink background, white text, Questrial 14px. The <i> is a 30x30 orange circle (grid center, font-style normal, transition transform .45s cubic-bezier(.2,.7,.2,1)) that rotates -45deg on CTA hover.
    Right, .menu__social: flex, gap 14px, 12.5px; links "x", "discord", "github" in rgba(26,20,16,.6), turning ink on hover (transition .3s).

MENU JS (plain <script>, an IIFE):
  - Set --pill-w on .menu to brand.offsetWidth + "px". Run it on load, on resize, and after document.fonts.ready.
  - All menu links start with tabIndex -1.
  - toggle(open): toggle "is-menu-open" on .hero; set aria-expanded; set aria-label to "Close menu" / "Open menu"; set link tabIndex to 0 (open) / -1 (closed).
  - Clicking the burger toggles. Clicking the backdrop, clicking any menu link, or pressing Escape closes.

==================================================
8. 3D FOX (Three.js module script)
==================================================
- WebGLRenderer({ canvas: #fox, antialias: true, alpha: true }); pixelRatio min(devicePixelRatio, 2); outputColorSpace SRGBColorSpace; toneMapping ACESFilmicToneMapping; exposure 1.05.
- scene.environment = PMREMGenerator.fromScene(new RoomEnvironment(), 0.04).texture.
- PerspectiveCamera(30, aspect, 0.1, 100) at (0, 0, 6).
- Warm lights: HemisphereLight(0xffe2c0, 0x6b3a12, 1.1); DirectionalLight 0xffc98a, intensity 2.2, at (-3, 4, 3); rim DirectionalLight 0xffa24d, intensity 1.6, at (3, 2, -3).
- A "pivot" Group added to the scene. Load the GLB. Center the model by subtracting its Box3 center. Wrap it in a holder Group scaled to 3.15 / max(size.x, size.y, size.z), and add the holder to the pivot. For every mesh: material.envMapIntensity = 0.7, and if it has a map, set map.anisotropy to the renderer's max. Then call layout() and add .is-ready to the canvas.
- Pointer parallax: on pointermove, set target.x/target.y to normalized -1..1 coordinates. Each frame, ease look toward target by 0.04.
- layout() (also runs on resize): renderer.setSize(innerWidth, innerHeight, false); update camera aspect.
    mobile = width < 720
    baseX = mobile ? 0 : 0.05
    baseY = mobile ? 0.45 : 0.05
    pivot scale = mobile ? 0.62 : min(1, max(0.75, aspect / 1.78))
- Animation loop (cute floating bob, like a character hovering in place):
    bob = sin(t * 2.2) * 0.09
    pivot.position = (baseX + look.x * 0.06, baseY + bob, 0)
    pivot.rotation.z = sin(t * 2.2 + 0.6) * 0.025
    pivot.rotation.y = look.x * 0.22 + sin(t * 0.9) * 0.05
    pivot.rotation.x = look.y * 0.1 + cos(t * 2.2) * 0.02
  With prefers-reduced-motion: reduce, drop all time-based terms (keep only the parallax).

==================================================
9. MOBILE (max-width: 720px)
==================================================
- .nav padding 14px 16px 0.
- .nav__links gap 16px, font-size 12.5px; hide .hide-sm ("community").
- .brand height 38px, gap 10px, padding 0 12px 0 4px. Logo 28x28. Name letter-spacing .42em, 12px.
- .headline: top auto; bottom 64px; left 16px; font-size 34px (anchored near the bottom-left; the fox floats above it).
- .menu: top 14px; right 16px; padding 66px 22px 22px; closed clip-path inset(0 0 calc(100% - 38px) calc(100% - var(--pill-w)) round 19px).
- .menu__link font-size 28px.
- No horizontal scroll at any width.

==================================================
10. REDUCED MOTION
==================================================
@media (prefers-reduced-motion: reduce): .nav and .headline span get animation none, opacity 1, transform none.

Output only the complete index.html.
