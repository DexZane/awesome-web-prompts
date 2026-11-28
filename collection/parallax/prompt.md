Portfolio，Parallex：Build one standalone HTML file that recreates this full-viewport landing section exactly. Output only the file. Do not redesign, restyle, simplify, omit, or invent replacement assets. The twelve rounded ring lines are required. Paste every path d attribute below character for character. Do not redraw them as circles, ellipses, or approximate curves. There must be exactly 12 path elements, in this order, with these exact d strings.

BACKGROUND
Use this exact CloudFront URL as the scene image src, and nothing else. Do not download it, do not use a local file, and do not swap it for another photo or a video element:
https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/6576c4b6-8ca9-4def-abeb-84169522351f.jpg
Alt text: "Portrait of a woman with a black bob in a sculptural black collar, looking up against a slate-blue wall"
The photo is already on stage at time 0 and never moves. object-fit: cover. user-select: none. draggable: false.

PAGE
Title: PARALLAX — Every spark is a fresh impact
Language: en
Viewport: width=device-width, initial-scale=1, viewport-fit=cover
One fixed full-screen stage. No scroll. Background #3a5462. White ink #ffffff. Black panels #000000. Rings rgba(255,255,255,.5).

ARTBOARD
Reference size 1280 × 800.
Two scales:
--sc = cover scale = max(100vw/1280, 100vh/800). Scene, photo, rings, and title use --sc so the scene always fills the viewport like object-fit: cover.
--u = contain scale for chrome = clamp(0.72px, min(100vw/1280, 100vh/800), 3px). Nav, copy, and buttons use --u and stay anchored to their own edges.
At exactly 16:10, both scales equal 1 reference pixel.
Use 100dvh for height when supported, otherwise 100vh.

FONTS
Declare these faces, font-display: block:
- "PX Mono" weight 400 from assets/px-mono-400.woff2
- "PX Mono" weight 500 from assets/px-mono-500.woff2
- "PX Sans" weight 400 from assets/px-sans-400.woff2
- "PX Sans" weight 700 from assets/px-sans-700.woff2
Stacks:
--sans: "PX Sans", Inter, "Helvetica Neue", Arial, system-ui, sans-serif
--mono: "PX Mono", "Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace
Title "PARALLAX": PX Sans 400, 46 scene-px, line-height 1, letter-spacing -0.01em, font-kerning: none, centered, nowrap. Each letter is its own span with this extra left margin in scene pixels: P 1.5, A -3.0, R 0.5, A 1.5, L 1.0, L -1.0, A -0.5, X -0.5. Word sits at top 378 scene-px, width 1270 scene-px. Accessible name "Parallax"; letters aria-hidden.
Logo "px": PX Sans 700, 39 UI-px, letter-spacing -0.01em, shifted up 5 UI-px. Link href="#", label "PX home".
All corner copy and both buttons: PX Mono 400, 14 UI-px, uppercase, letter-spacing -0.025em, nowrap. Copy line-height 17.5 UI-px.

ELEMENTS, in this order inside the scene
1. The CloudFront portrait img, absolutely filling the 1280×800 scene.
2. An SVG.rings overlay, viewBox "0 0 1280 800", preserveAspectRatio "none", aria-hidden, not focusable. Twelve open arcs, no fill, white at 50% opacity, stroke-width 1, butt caps. Path order: three left arcs, three right arcs, then six centre arcs. Use the exact d attributes in the HTML below.
3. The PARALLAX title.

UI chrome sits in a layer over the scene. The layer ignores pointer events; its children receive them.
- Centered black nav, 300.5 × 53.7 UI-px, top 29.5 UI-px, shifted 5 UI-px left of center. Padding 9 UI-px left, 15 UI-px right. Logo on the left. On the right, a menu button with no text: two 1 UI-px white rules, button box 17 × 8.3 UI-px, label "Open menu".
- Top left copy, left 34.5 / top 46.6 UI-px, two lines: "Every spark is" / "a fresh impact."
- Top right copy, right 45 / top 39 UI-px, right-aligned, three lines: "We form it" / "into something" / "worth showing."
- Two stacked black buttons, left 35 / bottom 98 UI-px, gap 9 UI-px. Each button 142.4 × 45 UI-px. Labels: "See campaign" and "View campaigns". href="#". Hover inverts to white background and black text over 0.2s. A 1 UI-px optical pad on the label.
- Bottom left copy, left 34.5 / bottom 39.5 UI-px: "We don't fake art." / "We make impacts."
- Bottom right copy, right 45 / bottom 39.5 UI-px, right-aligned: "Then we run" / "it in print"
Each copy line is a block span containing an inline-block span, so lines can rise independently and still look like normal line breaks.

MOBILE
Portrait tablets, min-width 561px: --u = clamp(0.72px, 100vw/860, 1.6px).
Max-width 560px: --u = clamp(0.72px, 100vw/470, 1px). Nav spans the width with 20 UI-px side insets, top 20, no centering transform. Top copy drops to top 96. Bottom copy sits 24 from the bottom. Buttons sit 76 from the bottom. All side insets become 20 UI-px. Entrance staggers multiply by 0.8.
Focus: 2px white outline, 3px offset, on links and buttons.
prefers-reduced-motion: no transitions, and skip the entrance entirely.

ENTRANCE
Before first paint, if motion is allowed and Element.animate exists, add class "px-intro" on the html element. Failsafe: remove it after 4s if the timeline never runs.
Initial states exist only while .px-intro is present:
- ring paths: stroke-dasharray 0 100000
- title and each copy line: overflow hidden; inner spans translated down 105%
- nav: clip-path inset(0 50% 0 50%)
- logo and menu: opacity 0
- buttons: clip-path inset(0 100% 0 0)
- button labels: opacity 0
Play once with the Web Animations API, fill both. Start after document.fonts.ready and img.decode(), with a hard start at 1200ms. On phones, stagger delays use S = 0.8; otherwise S = 1.
Easings:
- type rise: cubic-bezier(.16,1,.3,1)
- ring draw: cubic-bezier(.62,.04,.22,1)
- panel wipe: cubic-bezier(.77,0,.18,1)
- small settle: cubic-bezier(.25,1,.5,1)
Timeline:
- Rings draw from their own midpoint outward. Delays in ms, in SVG path order: 560, 480, 400, 560, 480, 400, 100, 160, 220, 280, 340, 400. The first six delays multiply by S. Duration 1150ms for the first six paths, 1350ms for the rest.
- Title letters rise 105% to 0, duration 1000ms, delay 200 + index * 38 * S.
- Nav wipes open from the center, duration 800ms, delay 450ms.
- Logo then menu fade and rise 35% to 0, duration 600ms, delays 780 and 850.
- Top-left lines rise at 700 + index * 70 * S. Top-right lines at 760 + index * 70 * S. Duration 800ms.
- Buttons wipe open from the left, duration 750ms, delay 950 + index * 90 * S.
- Button labels fade and rise 0.45em, duration 550ms, delay 1200 + index * 90 * S.
- Bottom-left lines at 1100. Bottom-right lines at 1160. Same rise as the top copy.
When every animation finishes, remove .px-intro and cancel the animations in the same frame so the static CSS is what remains and nothing keeps running. Clear the 4s failsafe once the timeline is built.

OUTPUT RULE
Emit the HTML document below unchanged, including every SVG path d string, every custom property, both scripts, and the CloudFront image URL. Count the path elements. If the count is not 12, the file is wrong.
