Build ONE standalone HTML file (no other files, no local assets, no JS framework) that recreates this logistics freight hero EXACTLY. Output only that complete HTML file.

GOAL
A full-viewport, overflow-hidden hero. Aerial freight-train video covers the entire screen. Overlay type and two feature blocks are composed on the train’s vertical center axis and mirrored across it. One entrance animation (~1.8s), then everything is still. Nothing loops except the background video. No scroll.

DELIVERABLE RULES
- Single .html file. All CSS inline in <style>. No external CSS/JS/fonts except the video URL below.
- Do not download or host the video locally. Use this exact CloudFront URL as the <video> src AND as a <link rel="preload" as="video" type="video/mp4">:
  https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261005_115944_095d91d4-030f-4e82-b42b-a388c0816d24.mp4
- Video attributes: class="bg" autoplay muted loop playsinline disablepictureinpicture
  aria-label="Aerial view of a container freight train crossing black coal terrain"
- CSS for video: position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; background:#0a0b0c
- Title: Logistics that works as hard as you do.
- Meta description: One point of contact and full supply-chain visibility, origin to destination.
- Viewport: width=device-width, initial-scale=1, viewport-fit=cover
- html lang="en"

FONTS (must match metrics, not generic system look)
Define two families via @font-face. Prefer condensed grotesques: Display ≈ Oswald ExtraBold / Bebas Neue / Impact; UI ≈ Oswald / Barlow Condensed / condensed grotesque.
@font-face Display: weight 800, font-display:block, ascent-override:99.9%, descent-override:20.1%, line-gap-override:0%
@font-face UI: weight 700 AND weight 400, font-display:block, ascent-override:95%, descent-override:22.5%, line-gap-override:0%
Fallbacks: UI,system-ui,sans-serif and Display,system-ui,sans-serif
Body: font-kerning:none; font-variant-ligatures:none; font-feature-settings:normal; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; text-rendering:geometricPrecision
html,body { height:100% } body { margin:0; background:#0a0b0c; overflow:hidden }

COLORS
--cream:#F7F5EF
--white:#F9F9F9
--ink:rgba(255,255,255,.88)
--accent:#D6523A
Page/frame background: #0a0b0c

STRUCTURE (exact)
<div class="frame">
  <video class="bg" ...></video>
  <div class="tint"></div>
  <main class="stage">
    eyebrow, headline (4 spans), mark SVG, section.feature.f-left, section.feature.f-right
  </main>
</div>

TINT overlay (pointer-events:none), linear-gradient to bottom:
rgba(0,0,0,0.118) 0%, 0.092 11%, 0.083 20%, 0.079 29%, 0.014 37.5%, 0.016 46%, 0.043 55%, 0.058 64%, 0.062 73%, 0.080 81%, 0.090 90%, 0.095 100%

DESKTOP LAYOUT (default, landscape / wide)
.frame { position:fixed; inset:0; overflow:hidden; background:#0a0b0c }
:root {
  --s: min(100vh / 800, 100vw / 716);
  --cover: max(100vw / 1280, 100vh / 800);
}
.stage {
  position:absolute; left:50%; top:50%;
  width:1280px; height:800px;
  margin:-400px 0 0 -640px;
  transform:scale(var(--s)); transform-origin:50% 50%;
}
All overlay type is absolutely positioned inside this 1280×800 stage. Pixel values below are exact.

COPY + TYPOGRAPHY (keep line breaks and the typo “end-o-end”)

Eyebrow (.eyebrow): “WHY US”
position absolute; left:0; top:67.8px; width:1280px; margin:0
font:700 7.4px/7.4px UI; word-spacing:0.522px; text-align:center; text-transform:uppercase
color:var(--cream); text-shadow:0 1px 3px rgba(0,0,0,.45)
letter-spacing:2.252px; text-indent:2.252px
inner span: position:relative; display:block; left:-0.9px

Headline (.headline), four stacked spans, all uppercase:
hl1 “LOGISTICS”     top:83.62px   letter-spacing:-0.075px  left:0.45px   text-indent:-0.075px
hl2 “THAT WORKS”    top:137.02px  letter-spacing:-1.237px                 text-indent:-1.237px
hl3 “AS HARD AS”    top:187.97px  letter-spacing:-0.237px  left:1.8px    text-indent:-0.237px
hl4 “YOU DO.”       top:247.92px  letter-spacing:-0.487px  left:1.35px   text-indent:-0.487px
.headline { position:absolute; left:0; top:0; width:1280px; margin:0
  font:800 61.74px/61.74px Display; word-spacing:2.691px; text-align:center; text-transform:uppercase
  color:var(--cream); text-shadow:0 15px 36px rgba(0,0,0,0.50) }
each span { position:absolute; left:0; width:1280px; display:block; white-space:nowrap }

Accent mark SVG (.mark): position:absolute; left:549.5px; top:493.6px; width:52px; height:52px; overflow:visible
viewBox="0 0 52 52" fill="none"
Circle: cx=26 cy=26 r=23 stroke=#D6523A stroke-width=1.6 stroke-dasharray="98.3 46.3" transform="rotate(2.5 26 26)"
Inner group stroke=#D6523A stroke-width=1.6 stroke-linecap=round:
  circle cx=26.5 cy=26.1 r=2.3
  path d="M28.9 27.6C31.6 29 32.9 31.2 31.8 33.3 30.7 35.4 27.2 36.1 24.2 35.1"

LEFT FEATURE (.f-left) text-align:right; right:748.5px
Icon globe SVG viewBox="0 0 35 34" at right:-4.5px; top:549.5px; 35×34
  clipPath id="gclip" circle cx=17.5 cy=17 r=9.80
  outer dashed circle r=16.5 stroke=#F9F9F9 stroke-width=1.9 stroke-dasharray="3.6 3"
  filled circle r=9.80 fill=#F9F9F9
  grid lines stroke=#101215 stroke-width=0.90 clip-path url(#gclip):
    M11.90 7.20 V26.80 / M17.5 7.20 V26.80 / M23.10 7.20 V26.80
    M7.70 11.40 H27.30 / M7.70 17 H27.30 / M7.70 22.60 H27.30
h2 top:617.68px; font:700 19.57px/20px UI; word-spacing:1.838px; uppercase; color:var(--white); text-shadow:0 1px 4px rgba(0,0,0,.4)
  “One point of” (.t1 letter-spacing:-0.109px)
  “contact” (.t2 letter-spacing:0.246px)
p top:681.9px; right:12px; font:400 12.28px/15.1px UI; word-spacing:-0.194px; color:var(--ink); text-shadow:0 1px 3px rgba(0,0,0,.35)
  “No more chasing multiple vendors. One” (.b1 ls:-0.097px; left:0.9px)
  “team manages your entire end-o-end flow” (.b2 ls:-0.271px; left:1.8px)
  “origin to destination.” (.b3 ls:-0.161px; left:0.9px)

RIGHT FEATURE (.f-right) text-align:left; left:748.5px
Stacked-containers SVG viewBox="0 0 35 38" at left:-3px; top:547.5px; 35×38
  white rects fill=#F9F9F9: (0.5,0.5) 17×9.6 rx=0.5; (10.5,13.5) 13.5×10.9 rx=0.5; (17.5,28.3) 17×9.7 rx=0.5
  door ticks fill=#101215 1.10×1.90 at:
    top box y=2.50 and 6.50, x=2.50,5.60,8.70,11.80,14.90
    mid box y=15.20 and 20.40, x=12.50,15.60,18.70,21.80
    bottom box y=30.30 and 34.40, x=19.50,22.60,25.70,28.80,31.90
h2 “Full supply chain” (.t1 ls:-0.354px; left:-0.9px) / “visibility” (.t2 ls:-0.154px)
p left:12px
  “Track your freight in real time and get” (.b1 ls:-0.247px; left:-0.9px)
  “proactive updates before issues become” (.b2 ls:-0.15px; left:-0.9px)
  “delays.” (.b3 ls:-0.247px; left:-0.9px)
Feature h2/p spans: position:relative; display:block; white-space:nowrap
.f-left h2 { right:0 } .f-right h2 { left:0 }

ENTRANCE ANIMATION
Only under @media (prefers-reduced-motion:no-preference). One sequence, then still. No infinite loops. Final state always transform:none; opacity:1.

.eyebrow: riseIn 0.55s cubic-bezier(.33,.9,.35,1) 0.15s both
@keyframes riseIn { from { opacity:0; transform:translateY(6px) } to { opacity:1; transform:none } }

.headline span: lineIn 0.9s cubic-bezier(.16,1,.3,1) both
delays: hl1 .28s, hl2 .37s, hl3 .46s, hl4 .55s
@keyframes lineIn {
  0%   { opacity:0; transform:translateY(.26em); clip-path:inset(100% -30% 0% -30%) }
  35%  { opacity:1 }
  90%  { clip-path:inset(0% -30% -100% -30%) }
  100% { opacity:1; transform:none; clip-path:inset(-80% -30% -100% -30%) }
}

.mark { transform-origin:50% 50%; animation: markIn 0.7s cubic-bezier(.2,.9,.25,1) 0.72s both }
@keyframes markIn { from { opacity:0; transform:scale(.88) } to { opacity:1; transform:none } }

.f-left:  blockInL 0.75s cubic-bezier(.16,1,.3,1) 0.82s both
.f-right: blockInR 0.75s cubic-bezier(.16,1,.3,1) 0.90s both
@keyframes blockInL { from { opacity:0; transform:translate(-12px,8px) } to { opacity:1; transform:none } }
@keyframes blockInR { from { opacity:0; transform:translate( 12px,8px) } to { opacity:1; transform:none } }

RESPONSIVE — TABLET PORTRAIT
@media (min-width:610px) and (max-aspect-ratio:1/1)
:root { --u: min(100vw / 768, 100vh / 1024); --rail: clamp(120px, calc(var(--cover) * 219), 26vw); }
.stage becomes inset:0 grid, no transform/margin:
  grid-template-columns: 1fr var(--rail) 1fr
  grid-template-rows: auto auto 1fr auto auto minmax(0,.38fr)
  padding: calc(46 * var(--u)) clamp(24px,5.2vw,72px) calc(24 * var(--u))
Set .eyebrow,.headline,.feature,.feature h2,.feature p,.feature .icon to position:static
eyebrow grid-area 1/1/2/-1; font-size:calc(11 * var(--u)); letter-spacing:.304em; text-indent:.304em; word-spacing:.07em; margin-bottom:calc(20 * var(--u))
headline grid-area 2/1/3/-1; font-size:calc(84 * var(--u)); line-height:.92; word-spacing:.0436em; spans static, letter-spacing:-.012em
mark grid-area 4/1/5/-1; justify-self:center; right:5%; width/height calc(64 * var(--u)); margin-bottom:calc(16 * var(--u))
.f-left grid-area 5/1/6/2; .f-right 5/3/6/4  (mirrored across the rail, NOT stacked)
icons display:block; width calc(42 * var(--u)); height calc(46 * var(--u)); margin-bottom:calc(14 * var(--u))
  left icon margin-left:auto; margin-right:calc(-4.5 * var(--u))
  right icon margin-right:auto; margin-left:calc(-3 * var(--u))
h2 font-size:calc(22 * var(--u)); line-height:1.08; word-spacing:.094em; margin-bottom:calc(12 * var(--u)); spans white-space:normal; letter-spacing:-.018em
p font-size:calc(14.5 * var(--u)); line-height:1.34; word-spacing:-.016em; max-width:calc(310 * var(--u)); spans display:inline; white-space:normal; letter-spacing:-.02em
  left p margin-left:auto; margin-right:calc(10 * var(--u))
  right p margin-right:auto; margin-left:calc(10 * var(--u))
KEEP .f-left text-align:right and .f-right text-align:left

RESPONSIVE — PHONE
@media (max-width:609px)
.frame { height:100vh; height:100dvh }
:root { --u: min(100vw / 390, 100dvh / 780); }  (also set 100vh fallback then override with dvh)
.stage: inset:0; grid-template-columns:100%;
  grid-template-rows: auto auto 1fr auto auto auto minmax(0,.3fr)
  padding: calc(30 * var(--u))  max(calc(22 * var(--u)), env(safe-area-inset-right))  max(calc(32 * var(--u)), env(safe-area-inset-bottom))  max(calc(22 * var(--u)), env(safe-area-inset-left))
Unstack features but KEEP mirrored identity (do NOT center both):
  eyebrow row 1; font-size:clamp(8px, calc(9.5 * var(--u)), 11px); same .304em tracking as tablet; margin-bottom:calc(16 * var(--u))
  headline row 2; font-size:clamp(26px, min(11.6vw, calc(52 * var(--u))), 64px); line-height:.92; letter-spacing:-.012em
  mark row 4; centered; right:5%; size clamp(38px, calc(46 * var(--u)), 54px); margin-bottom:calc(18 * var(--u))
  .f-left row 5; margin-bottom:calc(26 * var(--u)); still right-aligned; icon on inner (right) edge
  .f-right row 6; still left-aligned; icon on inner (left) edge
  icons clamp(26px, calc(34 * var(--u)), 40px) × clamp(28px, calc(37 * var(--u)), 43px)
  left icon margin-left:auto; margin-right:calc(-4 * var(--u))
  right icon margin-right:auto; margin-left:calc(-3 * var(--u))
  h2 clamp(15px, calc(17 * var(--u)), 20px); line-height:1.08
  p clamp(11.5px, calc(13.5 * var(--u)), 14.5px); line-height:1.36; max-width:calc(320 * var(--u))
  left p margin-left:auto; right p margin-right:auto

DO NOT
- Use a local jpg/png background
- Change “end-o-end” to “end-to-end”
- Add nav, footer, extra sections, buttons, or scroll
- Loop the overlay animations
- Orbit/zoom the camera UI; the VIDEO already tracks forward with the train — CSS must not animate the video
- Center both feature blocks on phone; they stay mirrored on the rail axis

Rebuild pixel-faithfully. Landscape tablets keep the 1280×800 scaled stage. Only portrait (max-aspect-ratio 1/1, min-width 610px) and phones (max-width 609px) reflow.
