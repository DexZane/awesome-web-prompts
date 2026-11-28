# Moo-Moo Oat Milk — superdetailed recreation prompt

Give me the superdetailed exact prompt to recreate this page exactly as it is, including the correct asset URL, all elements, animations, and fonts.

Build a single self-contained HTML page for a fictional oat-milk brand called MOO-MOO. It has two sections: (1) a colourful hero with a typed rainbow load intro, a real-time 3D gable-top milk carton rendered with Three.js and a flavour carousel that swings giant illustration panels around a huge invisible wheel; (2) a pinned scroll story on a cream panel with a curved top edge, where a headline, four feature cards and a final rainbow word sweep past on a second giant turning ring while the carton spins and opens with a straw and bubbles. The motion is ported 1:1 from a premium drink-brand site: GSAP 3 + ScrollTrigger with scrubbed timelines, Lenis smooth scroll, elastic springs everywhere. Everything below must match exactly.

---

## 1. Libraries (load in this order)

| Library | URL | Notes |
|---|---|---|
| GSAP 3.12.5 | https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js | global `gsap` |
| ScrollTrigger 3.12.5 | https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js | register with `gsap.registerPlugin(ScrollTrigger)` |
| Lenis 1.1.13 | https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js | UMD global `Lenis`; drive it manually from the GSAP ticker (its autoRaf is unreliable) |
| Three.js 0.160.0 | https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js | ES module via an import map (`three`, and `three/addons/` → `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/`) |
| RoomEnvironment | three/addons/environments/RoomEnvironment.js | used as the PMREM environment map |

The page script is a `type="module"` script that imports `three` and `RoomEnvironment`; GSAP/ScrollTrigger/Lenis are plain globals loaded before it.

## 2. Fonts

| Role | Family | Weight | Source |
|---|---|---|---|
| All UI, headlines, intro letters | Inter Tight (variable) | 100–900 range; used at 300 (display), 400 (UI) | Google Fonts, latin subset woff2: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500` (in the standalone file the woff2 is base64-embedded as one `@font-face` with `font-weight:100 900`) |
| Wordmark "MOO-MOO" | Baloo 2 | 800 | Google Fonts latin woff2 `https://fonts.googleapis.com/css2?family=Baloo+2:wght@800` (base64-embedded in the standalone) |

Both `@font-face` rules use `font-display:swap`. The intro animation starts only after `document.fonts.ready` resolves.

## 3. Assets (direct Higgsfield result links — use exactly these, never re-host)

All images are loaded through the Higgsfield image proxy: `https://images.higgs.ai/?default=1&output=webp&url=<URL-encoded result URL>&w=<width>&q=90`. The proxy sends `Access-Control-Allow-Origin: *`, so the label sheet works as a WebGL texture with `crossOrigin='anonymous'`.

| Asset | Result URL | Width requested | Use |
|---|---|---|---|
| Carton label sheet (4 flavour fronts in one row, 3840×2160, 16:9) | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261128_094739_47ee9cf8-fcc4-402d-8c88-3b54d8974f45.png | 3840 | WebGL texture for the carton front/back. Panel i (0–3) = Oat Original, Vanilla, Chocolate, Barista; each panel is exactly ¼ of the width: big navy "MOO- / MOO" wordmark, a colour band with the flavour name, a coloured cloud with a white cow, oat doodles, "OAT MILK 1 L" |
| Art sheet — Oat Original (transparent, 2048×1365, 3:2) | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261128_094750_a84bfc6b-f01b-410a-85f8-3c966c625801.png | 2048 | Left cluster: tall golden oat stalks + sunflower; right cluster: cream cow-shaped cloud, big sunflower, sky-blue hill |
| Art sheet — Vanilla | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261128_094754_2e6ec8e3-d94e-4b77-bd4d-61281f161d52.png | 2048 | Left: cream vanilla orchids + dark pods; right: smiling orange sun, white cloud, steel-blue hill, flowers |
| Art sheet — Chocolate | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261128_094759_82cf29f3-9ae8-48cb-9d17-e69dba82eb0d.png | 2048 | Left: split orange cocoa pod, leaves, pink flower; right: navy crescent moon, yellow stars, chocolate-chip cookie, sky-blue hill |
| Art sheet — Barista | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261128_094802_a4a8a4cd-fe3a-45f3-8aaa-7923dd61e3d8.png | 2048 | Left: coffee branch with red cherries, beans, yellow sun; right: white latte cup with heart foam and steam, cloud, orange hill |

Each art sheet has a transparent middle 24 %; the page shows its left half and right half as two separate panels (CSS background-position crops of the same image — never slice the file).

## 4. Head and tokens

- `<title>Moo-Moo Oat Milk</title>`, `<meta name="viewport" content="width=device-width, initial-scale=1">`, an empty favicon `<link rel="icon" href="data:,">`, `<html lang="en">`.
- A visually hidden `<h1>` "Moo-Moo oat milk".
- Colour tokens on `:root`: ink `#1E2A3A`, cream `#F7FAFF`, rainbow palette `--c1 #FD855C` (orange), `--c2 #5B93BA` (steel blue), `--c3 #E0607A` (raspberry), `--c4 #F4B6CF` (pink), `--c5 #82C4EC` (sky), `--c6 #F6D867` (yellow). Gutter `--gut: clamp(16px, 2.1vw, 40px)`.
- Per-flavour tokens set by `body[data-flavour="0…3"]`:

| data-flavour | Flavour | --hero (page background) | --deep (card band + icon colour) | Pill colour | Pill shadow | Side-band colour on the carton |
|---|---|---|---|---|---|---|
| 0 | Oat Original | #FBE3A0 butter | #5B93BA | #1E2A3A | #0e1622 | #FBE3A0 |
| 1 | Vanilla | #FBD3B8 peach | #F07A4F | #E8693E | #1E2A3A | #FBD3B8 |
| 2 | Chocolate | #D9B49A latte | #8A5A44 | #6B4330 | #1E2A3A | #D9B49A |
| 3 | Barista | #BFDDF2 sky | #2E5E86 | #2E5E86 | #1E2A3A | #BFDDF2 |

- Body: Inter Tight, colour ink, background cream, `overflow-x:hidden`, antialiased. Body starts with class `locked` (`overflow:hidden`) until the hero entrance ends. `history.scrollRestoration='manual'`, `scrollTo(0,0)` on load.

## 5. DOM and desktop layout (measurements at 1440×900)

### 5.1 Intro overlay `#intro`
- Fixed full-screen, z-index 9, cream background, flex-centred, overflow hidden.
- Centre text block `.rainbow.rainbowDebut`: three lines "POURED" / "FROM OAT" / "FIELDS" (written "Poured", "from oat", "fields", `text-transform:uppercase`), Inter Tight 300, `font-size: clamp(58px, 11.6vw, 224px)` (167 px at 1440), `line-height:.9`, `letter-spacing:-.035em`, each line `display:block; white-space:nowrap`. Every character is wrapped in a `span.lettre` (spaces become a non-breaking space), `display:inline-block; transform:scale(.8)` and initially coloured cream (so invisible on the cream background).
- Side tags `.sideTags`: two words "OAT" (left) and "MILK" (right) in a flex row `justify-content:space-between`, absolutely placed at `top:54%`, width `100% − 2×gutter`, centred; `font-size: clamp(14px,1.3vw,25px)`, weight 400, uppercase, `letter-spacing:.02em`; each span has `padding:0 6vw` and starts `visibility:hidden; opacity:0; translateY(100%)`.
- Sparkles `.innerEtoiles`: 12 absolutely positioned items (`width: clamp(16px,1.6vw,30px)`, opacity 0). Every third one (index 0, 3, 6, 9) is a four-point star (SVG path `M20 0 C22 14 26 18 40 20 C26 22 22 26 20 40 C18 26 14 22 0 20 C14 18 18 14 20 0Z` in viewBox 0 0 40 40, filled ink); the others are outline bubbles (circle r 18 in a 40 viewBox, ink stroke 2.4, no fill).

### 5.2 Wipe layer `#wipe`
Fixed full-screen, z-index 10, pointer-events none. Holds the 11 flood circles (section 7.1).

### 5.3 Header `.header`
Fixed, full width, z-index 8, pointer-events none (children re-enable them). Starts at `yPercent:-100`.
- Left `.gauche`: wordmark link "MOO-MOO" in Baloo 2 800, `font-size: clamp(30px,3.1vw,60px)` (45 px), line-height 1, ink; at `left: gutter`, `top: clamp(22px,2.4vw,46px)`.
- Right `.droite`: at `right: gutter`, `top: gutter`, a row with 10 px gap of two white pill links "Flavours" (→ #top) and "Our oats" (→ #story): white background, `border-radius:2em`, `height: clamp(44px,3.3vw,63px)`, `padding:0 1.25em`, `font-size: clamp(15px,1.1vw,21px)`, weight 400, hover lifts 2 px with `transition: transform .3s cubic-bezier(.65,0,.09,1.38)`.

### 5.4 Hero `.homeFond` > `.part1`
- `.homeFond`: background `var(--hero)` with `transition: background-color .3s .3s` (0.3 s fade, 0.3 s delay — the colour changes as the wheel swings), `overflow:clip`, contains both sections.
- `.part1`: `height:400vh` (the hero is a 300 vh scroll scene).
- **Wheel `.wheel.lotties`**: `position:fixed; top:0; left: calc(50% − 320vw); width:640vw; height:640vw; border-radius:50%`; z-index 1. It holds 8 `.step` children (absolute, inset 0), step i rotated `rotate(45i deg)`; step i shows flavour `i % 4`. Each step contains `.stepChild`: absolute, `top:0; left:50%; translateX(-50%)`, `100vw × 100vh`, flex row of two halves `.half.g` and `.half.d` (each `flex:0 0 50%`, full height). `.half.g` transform-origin `0 100%` (bottom-left), `.half.d` `100% 100%` (bottom-right). Inside each half is `.art` (absolute, inset 0) with the flavour's art sheet as `background-image`, `background-repeat:no-repeat`, `background-size: max(100vw, 150vh) auto`; left half `background-position: 0 100%`, right half `background-position: 100% 100%` (so the two halves show the left and right clusters, anchored to the bottom). For step 0 only, each `.art` is wrapped in `.introG` / `.introD` (absolute inset 0) used by the entrance. The rotation centre of the wheel is 320vw below the top of the screen, so only the step at the top is visible; rotating the wheel by −45° swings the next flavour's panels in from the right in a big arc.
- Idle loop on the active step (`.step.playing`, desktop non-touch only): left art `swayG` 4.2 s ease-in-out infinite, right art `swayD` 4.6 s — keyframes 0/100 % `rotate(0) scale(1)`, 50 % `rotate(±1.6deg) scale(1.015)` (left +, right −), pivoting on the bottom outer corner.
- **3D canvas holder `.mainCanvas`**: `position:fixed; left:50%; bottom:0; height:100%`; flex-centred; z-index 3; pointer-events none. GSAP sets `xPercent:-50`. It contains the WebGL canvas (square, see section 6) and an absolutely positioned full-size SVG `.bulles` for the opening bubbles (circles: no fill, ink stroke 1.6, start opacity 0).
- **Slider navigation `.sliderNav`**: fixed inset 0, z-index 4, pointer-events none.
  - `.arrows` (layout change vs. the reference: stacked vertically at the right edge): `right: gutter; top: calc(gutter + clamp(70px,6.6vw,120px))`, flex column, gap `clamp(12px,1.1vw,20px)`; contains `.heroNext` (→) above `.heroPrev` (←). Each `.btnRond` is a white circle `clamp(55px,4.96vw,95px)` (71 px), centred icon at 30 % width: a 24×24 stroke arrow (stroke #1E2A3A, width 2.2, round caps) — next: `M4 12h15M13 6l6 6-6 6`, prev: `M20 12H5M11 6l-6 6 6 6`. Hover `scale(1.08)` with `transform .35s cubic-bezier(.65,0,.09,1.38)`. Starts at `xPercent:140` (off-screen right).
  - `.pillWrap`: absolute, `left:50%; bottom: clamp(20px,3.3vh,30px)`, GSAP `xPercent:-50`, starts `yPercent:260` (hidden). Contains `a.btnOmbre` → #story: `font-size: clamp(17px,1.62vw,31px)` (23 px), `line-height:2.4`, nowrap. Inner span: flavour pill colour background, white text, `border:1px solid #0e1622`, `border-radius:2em`, `padding:0 1.3em`. A drop "shadow" is an `::after` pill in `var(--sh)` offset `translateY(.15em)` behind it (z-index −1); hover pushes the face down `.15em` (`transition: transform .1s`). Text starts "Oat Original".

### 5.5 Story `.sectionCercle#story` (directly after `.part1`)
- `height:100vh; overflow:hidden; position:relative`.
- Cream panel: `::before` absolute, `top: calc(6vw + 30px)`, full width, height `calc(100% − 6vw − 30px)`, background cream.
- **Arc `.arc`** (the curved top edge): an SVG at `top:30px`, full width, `height: calc(6vw + 1px)`, viewBox `0 0 1440 87`, `preserveAspectRatio="none"`, path `M0 87 C 360 -29 1080 -29 1440 87 Z` filled cream (a convex dome). `transform-origin: 0 100%`, starts `scaleY(0)`.
- **Ring `.ring.innerCercleCartes`**: absolute, `top:0; left: calc(50% − 320vw)`, `640vw × 640vw`, `border-radius:50%`. Six `.cercle` children (absolute, inset 0) rotated 0°, 25°, 50°, 75°, 100° and 130°. Each holds one `.etape`: absolute, `top:0; left:50%; translateX(-50%)`, `100vw × 100vh`, flex-centred.
  1. `.etapeText` (padding-bottom 22vh): `<h2>` "Moo-Moo? Oat milk?<br>What is all the fuss?" uppercase, Inter Tight 300, `font-size: clamp(32px,5.62vw,108px)` (81 px), `line-height:.98`, `letter-spacing:-.02em`, centred; then `<p>` "(creamy, no cows involved)" with `margin-top:44px`, `font-size: clamp(16px,1.45vw,28px)`, weight 300.
  2.–5. `.etapeBenefice` (padding-bottom 16vh) each with a card `.data`: width `max(336px, 23vw)`, centred text. Top band `.haut`: background `var(--deep)`, white, uppercase, weight 300, `font-size: clamp(18px,1.62vw,31px)`, `line-height:2.8`, `border-radius:.75em`, `transition: background-color .3s`. Body `.bas`: white, `aspect-ratio:.95`, `border-radius:.9em`, `margin-top:4px`, relative; paragraph `padding: 24px 13% 0`, `font-size: clamp(15px,1.15vw,22px)`, `line-height:1.3`, weight 400; icon SVG absolute at `left:50%; top:60%`, centred, size `min(12vw, 200px)`, viewBox 0 0 200 200, drawn in `var(--deep)`:

| # | Band text | Body text | Icon (viewBox 200) | Icon loop (only while the section is in view) |
|---|---|---|---|---|
| 1 | Whole oats | Gluten free oats, creamy and never chalky. | three filled oat grains (ellipses rx 26 ry 52 at (70,110) rot −22°, (128,70) rot 18°, rx 22 ry 44 at (138,150) rot 64°) each with a white centre crease stroke 6 / 5 | each grain `bob` 2.4 s ease-in-out infinite, delays 0, .3, .6 s (50 %: translateY(−8 %) rotate(6deg)) |
| 2 | No added sugar | Naturally sweet from the oats. Nothing sneaky. | stroked rounded square (52,52,96×96, rx 18) with a check `M78 104 l16 16 30-36`, stroke 6, round caps | `wig` 3 s infinite: rotate −7° ↔ 7° |
| 3 | Plant powered | Made from plants, tastes like a sunny morning. | filled leaf `M100 172 C40 140 36 70 100 22 C164 70 160 140 100 172Z` with white veins `M100 160 V52 M100 108 L74 84 M100 132 L128 104` stroke 6 | `wig` 3 s |
| 4 | Foams like a dream | Steams silky and glossy for lattes at home. | filled cup body `M42 84 h116 v28 a58 58 0 0 1 -116 0z`, stroked handle `M158 96 h10 a18 18 0 0 1 0 36 h-14`, white heart `M84 104 c0 -10 16 -10 16 0 c0 -10 16 -10 16 0 c0 12 -16 20 -16 20 c0 0 -16 -8 -16 -20z`, two steam squiggles `M80 66 q-10 -14 0 -28 q10 -14 0 -28` and the same at x 112 | steam 2.2 s infinite (0 %: translateY(10 %) opacity 0 → 40 % opacity 1 → 100 % translateY(−25 %) opacity 0), second wisp delayed .5 s |

  6. `.etapeSpe` (column, `padding-bottom:42vh` so the word sits above the raised carton and its straw): a rainbow word "OAT SO" / "GOOD." in Inter Tight 300, `font-size: clamp(54px,10.4vw,200px)`, line-height .9, centred, each character coloured in the repeating order c1, c2, c3, c4, c5, c6; plus `.allBulles`, an SVG (viewBox 0 0 1400 600, preserveAspectRatio none) absolutely placed `left:1vw; top:52%; width:98vw; height:60vh`, starting `translate(20%, −50%)`, holding 12 outline circles (no fill, ink stroke 1.5) at (cx, cy, r): (120,140,22) (260,420,10) (400,90,14) (540,500,26) (700,200,9) (860,460,18) (980,110,12) (1120,380,24) (1260,180,10) (1330,520,16) (620,330,7) (200,300,13).

## 6. The 3D carton (Three.js, built in code — no model file)

Renderer and camera (same rig as the reference):
- Canvas square side `size = W ≥ 650 ? clamp(650, 900, W/2) : 0.9·W` (720 px at 1440). `margin = (H − size)/2`.
- `WebGLRenderer({antialias:true, alpha:true})`, pixel ratio `min(devicePixelRatio, 2)`, `ACESFilmicToneMapping`, exposure 1, `outputColorSpace = SRGBColorSpace`.
- `PerspectiveCamera(40, 1, 1, 200)`, `z = 84` (70 below 650 px wide, where `y = 0.6`).
- Environment: `PMREMGenerator.fromScene(new RoomEnvironment(), 0.04).texture` as `scene.environment`; `AmbientLight(0xffffff, 0.45)`; `DirectionalLight(0xffffff, 0.6)` at (−30, 40, 60).
- Hierarchy: `scene → group (scroll + entrance rotations) → groupMouse (mouse follow) → carton (flavour spin, opening)`. Rendered every GSAP tick.

Geometry (units; body width/depth BW = 14, body height BH = 34, roof height RH = 6.4, bottom at y = −21):
- Body: `BoxGeometry(14, 34, 14)` centred at y = −4, materials in Three's face order [+x, −x, +y, −y, +z, −z] = [side, side, white, white, front label, front label] (front and back show the label).
- Paper material: `MeshStandardMaterial({color:0xf6f8fb, roughness:.62, metalness:0, envMapIntensity:.9})`.
- Label textures: one `TextureLoader` (crossOrigin anonymous) load of the label sheet (sRGB, max anisotropy), cloned four times. For flavour i: `repeat = (rx, 0.94)` with `rx = 0.25 × (14/34) / (960/2160)`, `offset = (i·0.25 + (0.25 − rx)/2, 0)` — this crops panel i to the face proportions.
- Side textures: one 256×620 canvas per flavour: fill #f6f8fb, a band in the flavour band colour at y = 620×0.358, height 620×0.079, navy "OAT MILK" (700 30px Baloo 2, centred at y = 620×0.41 − 2), and navy "Shake well · 1 L" (400 20px Inter Tight) at y = 560; `CanvasTexture`, sRGB.
- Gable roof: a custom `BufferGeometry` from the top of the body (yb = 13) to the ridge (yt = 19.4): front slope (−7,13,7)(7,13,7)(7,19.4,0)(−7,19.4,0), back slope mirrored, and two triangular sides; `computeVertexNormals`; white paper.
- Top fin: `BoxGeometry(14.2, 2.2, 0.7)` at y = yt + 1.
- Cap: a pivot at (0, yb + RH·0.45, 3.85) oriented along the front-slope normal (normalise (0, 7, 6.4)); child `CylinderGeometry(2.5, 2.6, 2.4, 40)` at local y 1.2 (material #f2f4f7, roughness .45, transparent) and a white ring `CylinderGeometry(2.9, 2.9, 0.5, 40)` at y 0.2.
- Straw: a second pivot at the same point and orientation, a child tilted `rotation.z = −0.32`, holding `CylinderGeometry(0.62, 0.62, 18, 24)` at local y 6 with a 64×512 canvas texture of white with steel-blue (#5B93BA) diagonal stripes every 64 px (repeat y 3). Hidden until opened.
- Opening value `open.p` (0…1) drives: cap y = 1.2 + 9p, cap rotation.y = 1.2πp, cap opacity = clamp(1 − 1.6p), cap hidden at opacity < .01; straw visible when p > .02 and its tilt group `scale.y = max(.001, p)` (the straw grows out of the spout).

## 7. Motion — exact timings

### 7.1 Load intro (after fonts are ready)

| t (s) | What | Values |
|---|---|---|
| 0.80 + 0.07·i | letter i appears | `scale .8 → 1`, 0.6 s, `elastic.out(2, 0.5)`, stagger .07; at the same moment that letter runs the rainbow: colour class changes every 70 ms orange → steel blue → raspberry → pink → sky → yellow → ink (7 steps, ends ink) |
| 1.70 | "OAT" / "MILK" tags | `autoAlpha 0 → 1, y 100% → 0`, 1 s, `elastic.out(0.8, 0.35)`, stagger .1 |
| 2.00 + 0.1·k | sparkle k (12) | from a random point (x 10–90 %, y 10–90 % of the overlay), from `y + 200px`, random rotation ±360°, scale .5 → (1 − random·0.4), opacity 0 → 1, 1.5 s, `elastic.out(0.8, 0.35)` |
| 3.40 | flood wipe | 11 circles in `var(--hero)` (centred on their point, diameter = viewport diagonal × s) at (x, y, s) in viewport fractions: (.5,1.05,1.1) (.15,1,.55) (.85,1.02,.6) (.32,.78,.45) (.7,.8,.5) (.05,.6,.4) (.95,.55,.42) (.5,.5,.9) (.25,.3,.5) (.78,.25,.55) (.5,.05,.7); each `scale 0 → 1`, .55 s, `power3.out`, stagger .035 s |
| 4.30 | hand-off | intro hidden, hero starts (7.2), wipe layer fades out .25 s and is removed |

### 7.2 Hero entrance (relative to the hand-off)

| Delay | Element | Animation |
|---|---|---|
| 0.3 | `group.rotation` | from (x .3π, y 2π, z .2π) to 0, 1.1 s, `power2.out` |
| 0.3 | `.mainCanvas` | `y: H → 0`, 1.1 s, `elastic.out(1, 0.75)`; on complete: unlock scroll (remove `locked`, `lenis.start()`) and arm autoplay |
| 0.8 | `.introG`, `.introD` | from `x −100% / +100%`, `rotation −40° / +40°` (pivot bottom-left / bottom-right) to 0, 1.2 s, `elastic.out(0.8, 0.75)`, stagger .1; on start the step-0 idle sway begins (desktop, non-touch) |
| 1.1 | `.header` | `yPercent −100 → 0`, .6 s, `elastic.out(1.1, 0.75)` |
| 1.1 | `.arrows` | `xPercent 140 → 0`, .6 s, `elastic.out(1.1, 0.75)` |
| 1.1 | `.pillWrap` | `yPercent 260 → 0`, .6 s, `elastic.out(1.1, 0.75)` |

### 7.3 Mouse follow (non-touch)
On `mousemove`, `gsap.quickTo` (0.6 s, `power3`) on `groupMouse`: `x = 2(mx/W − .5)`, `y = −4(my/H − .5)`, `rotation.y = (mx/W − .5)/2`, `rotation.x = (my/H − .5)·π/12`, `rotation.z = (mx/W − .5)/10`.

### 7.4 Flavour change `updateCan(dir)` (arrows ±1, autoplay +1)
Lock clicks for 1 s. `currentSlide = (currentSlide + dir) mod 4`.
- Pill: replace its text with the new name (an invisible copy for width plus a visible absolutely centred copy), set the new colour, then `gsap.from` the span's old pixel width and old background colour, .5 s `power4.inOut`; the visible label fades in `autoAlpha 0 → 1`, .2 s, delay .2, `power2.in`.
- `body.dataset.flavour = i` → background changes after .3 s over .3 s; card bands and icons recolour.
- Carton: `rotation.y` 0 → 0.6π·dir (.3 s `power2.in`) then → 2π·dir (1.3 s `elastic.out(0.34, 0.26)`), reset to 0 on complete; `position.x` 0 → −3·dir and back (.5 s yoyo, `power1.inOut`); label and side textures swap at .3 s.
- Wheel: `rotationHome −= 45·dir`; kill the old step's fly-off tweens; `currentStep += dir`; move the idle sway to the new step; rebuild the scroll fly-off for the new step (7.5); wheel timeline → `rotationHome + 30·dir` (.4 s `power2.in`) then → `rotationHome` (1.2 s `elastic.out(0.34, 0.26)`).

### 7.5 Autoplay (addition requested on top of the reference)
After the entrance, wait 2 s, then `updateCan(+1)`, then wait 1.6 s (settle) + 2 s, and repeat (a new flavour every 3.6 s: Original → Vanilla → Chocolate → Barista → Original…). An arrow click restarts the wait (settle + 2 s). It skips (and re-arms) while the tab is hidden, while a switch is running, or once `scrollY > 15 % of the viewport height`. Off for reduced motion.

### 7.6 Scroll part 1 — the tumble (desktop > 600 px)
One timeline, `ScrollTrigger{trigger:.part1, start:'top top', end:'bottom bottom', scrub:true}`, default ease `power1.inOut`, all at position 0:
- `group.rotation → (x 1.12π, y −π, z −π)` — the carton tumbles and ends upright, tilted top-towards-camera ~22°.
- canvas element `y → min(0.58·size + margin, 0.5·H − 0.1·size)` px — the carton falls and settles low in the screen (about the top 60 % of it stays visible).
- `group.position.z → 20`, `camera.position.y → 8`.
- Active step fly-off (`ease:none`, same trigger/scrub): left half `x −50%, y −80%, rotation −20°`; right half `x 50%, y −80%, rotation 20°`.
- At `scroll > 1·H`: `.pillWrap → yPercent 260` and `.arrows → xPercent 140` (.4 s `power4.in`, toggleActions play none reverse none).
- Arc: `scaleY 0 → 1`, `ease:none`, scrub, trigger `.sectionCercle` from `top bottom−(0.06·W)` to `top top`.

### 7.7 Scroll part 2 — the pinned ring (desktop)
`dist = 1.8·W` (2592 px at 1440).
- Ring: `rotation 0 → −130°`, `power1.inOut`, `ScrollTrigger{trigger:.sectionCercle, start:'top top', end:'+='+dist, scrub:true, pin:true, anticipatePin:1}` — headline, then the four cards, then "OAT SO GOOD." pass the top of the ring one after another, each tilting in and out along the arc. Card icon loops run while the section is active; the hero idle sway stops on enter and resumes on leave-back.
- Carton `rotation.y 0 → 2π`, `power1.inOut`, same range. On enter: bubbles play once and `open.p → 1` (.7 s, delay .1, `elastic.out(1, 0.75)`) — the cap pops off and the straw springs up. On leave-back: `open.p → 0` (.5 s, delay .1, `power4.in`).
- Bubbles (desktop > 768 px): project the spout tip (cap pivot local (0,4,0)) to screen space; 9 outline circles r 4–14 start there at opacity 0 / scale .3 and rise to (x ± 80 px, y − 90…280 px), opacity 1, scale 1, 1.1–2.0 s `power2.out`, delays .1 + .08·k, then fade out .35 s.
- `.allBulles` `x → 0` (`power1.out`, scrub) over the last half of the pin (start `top −=dist/2`, end `+=dist/2`).

### 7.8 Smooth scroll and header
Lenis on non-touch devices only: `duration 1.4`, `easing t ⇒ min(1, 1.001 − 2^(−10t))`; `lenis.on('scroll', ScrollTrigger.update)`; `gsap.ticker.add(t ⇒ lenis.raf(t·1000))`; `gsap.ticker.lagSmoothing(0)`. Stopped until the entrance ends. Scrolling down hides the wordmark (`.header .gauche y −100px`, .3 s `power3.in`); scrolling up shows it again (.3 s `power3.out`). The nav pills stay.

## 8. Tablet and mobile
- 601 px and wider uses the desktop scene. Tablet portrait (768×1024) keeps the same pinned ring; cards keep `max(336px, 23vw)`.
- 600 px and below (the reference's own mobile mode): `.part1` is `100vh` with `overflow:hidden`; wheel, canvas and slider are `position:absolute` inside the hero (no tumble, no ring pin, no wheel fly-off). Arrows sit bottom-right above the pill (`bottom: clamp(20px,3.3vh,30px) + 74px`). Nav pills 40 px tall, 14 px text, `top:22px`. In portrait the art uses `background-size: auto 62vh`. The story becomes a vertical stack: ring/cercles relative and unrotated, each `.etape` full width with 16 px side padding (headline block `padding:110px 16px 40px`; cards `padding:20px 16px`, card width 100 % up to 340 px, icon 120 px; finale `padding:80px 16px 40px`; `.allBulles` hidden). Each card scrubs from `y 40%` with a random x ±20 px and rotation ±5° to `y 0%` with a new random x/rotation (`start:'top bottom', end:'bottom 30%'`). Icon loops run while the section is on screen.
- Touch devices: no Lenis, no mouse follow, no idle sway.
- The page reloads if the window width changes by more than 80 px (the 3D canvas is sized once).

## 9. Reduced motion
`prefers-reduced-motion: reduce`: no intro and no wipe; header, arrows and pill shown in place; canvas at y 0; wheel halves at rest; no sway or icon loops; arc fully drawn; no autoplay; no Lenis; the carton is still rendered.

## 10. Acceptance checklist
- Intro: 18 letters pop in 70 ms apart, each flashing six colours before turning ink; tags and sparkles spring; butter blobs flood at 3.4 s.
- Carton spins in from below with an elastic settle; the art swings in from both sides; header, arrows and pill drop in at 1.1 s.
- The carton follows the mouse; arrows and autoplay switch flavours every 3.6 s with the wheel overshoot, label swap, background fade and pill morph.
- Scrolling: the carton tumbles and settles low, the art flies off, the cream dome grows, the ring pins and sweeps headline → 4 cards → "OAT SO GOOD." while the carton spins once, the cap pops and the straw springs up with bubbles.
- Desktop 1440×900, tablet 768×1024 and mobile 390×844 all render with no overlap or horizontal scroll; no failed requests.
