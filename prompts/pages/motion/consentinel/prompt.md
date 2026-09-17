Build a single self-contained `index.html` file — one full-viewport hero section for a
security product called "ConSentinel". No build step, no frameworks, no external JS.
All CSS in one `<style>` in `<head>`; all JS in `<script>` tags as described. Output the
complete file, nothing else.

════════════════════════════════════════════════════════════════════════
1. CORE CONCEPT — THE DESIGN-UNIT SYSTEM (do not substitute rem/px)
════════════════════════════════════════════════════════════════════════
The layout is a pixel-measured 1280×960 comp. Every size and offset is expressed in
`--u`, one reference pixel of that comp. The background plate stretches to the viewport
(never letterboxed) while every foreground element keeps its measured size.

:root{
  --u: min(100vw / 1280, 100vh / 960);
  --ink:#020C21; --ink-soft:#0F182F; --muted:#59627E; --muted2:#4D5B77;
  --frame:#E6EDF6; --cta:#0F1B31; --cta-knob:#384B64; --meet-knob:#1A2B45;
  --accent:#4A78B0; --track:#DDE4EE;
}
@supports (height:100dvh){:root{--u: min(100vw / 1280, 100dvh / 960)}}

Write EVERY dimension as `calc(N*var(--u))`. Never hardcode px except the 4 explicit
2px bleed offsets on `.bg`.

Reset: `* { box-sizing: border-box; margin: 0; padding: 0; }` / `html,body{height:100%}`
body: `background:var(--frame); overflow:hidden; color:var(--ink);
font-family:Inter,"Helvetica Neue",Helvetica,Arial,sans-serif; font-synthesis:none;
-webkit-font-smoothing:antialiased; text-rendering:geometricPrecision`

head meta: `<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">`,
`<meta name="theme-color" content="#E6EDF6">`,
`<title>ConSentinel — Smarter Security Starts Here</title>`, `<html lang="en">`

FONT: Inter variable, weights 100–900. Load from Google Fonts:
`<link rel="preconnect" href="https://fonts.googleapis.com">`
`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=block" rel="stylesheet">`
The design relies on unusual intermediate weights — use exactly the weights given below
(360, 425, 470, 500, 520, 570, 200, 400), not rounded ones.

════════════════════════════════════════════════════════════════════════
2. THE ABSOLUTE-POSITION HELPER SYSTEM
════════════════════════════════════════════════════════════════════════
On wide screens the wrapper divs vanish and children position directly against `.card`:

.stack,.row,.hero-blk,.tagrow,.stats,.stat{display:contents}
.l{position:absolute;z-index:2}
.t{left:calc((var(--x) + 13)*var(--u));top:calc((var(--y) + 15)*var(--u))}
.c{left:calc((var(--x) + 13)*var(--u));top:calc(50% + (var(--y) - 2)*var(--u))}
.b{left:calc((var(--x) + 13)*var(--u));bottom:calc((var(--y) + 19)*var(--u))}
.r{left:auto;right:calc((var(--x) + 19)*var(--u))}
.sx{display:inline-block;transform-origin:left top;transform:scaleX(var(--sx,1))}

Each positioned element carries inline `style="--x:..;--y:.."`. `.t`=top-anchored,
`.c`=centre-anchored, `.b`=bottom-anchored, `.r`=flips to right edge.
`.sx` is optical width-tracking — a per-element horizontal scale that matches the
original comp's type metrics. Apply the exact `--sx` values given; do not normalise them.

════════════════════════════════════════════════════════════════════════
3. STRUCTURE
════════════════════════════════════════════════════════════════════════
body > .page (position:fixed;inset:0;background:var(--frame))
  > .card (position:absolute;inset:0;isolation:isolate)
    > video.bg
    > .tint
    > .stack
        > .row      (header: brand, burger, .menu[nav + cta])
        > .hero-blk (eyebrow, h1, .tagrow[play+tag], aside.panel)
        > .row      (.stats[stat, slash, stat], a.meet)

════════════════════════════════════════════════════════════════════════
4. BACKGROUND VIDEO PLATE — use these URLs verbatim, do NOT localise
════════════════════════════════════════════════════════════════════════
<video class="bg" autoplay muted loop playsinline preload="auto" disablepictureinpicture
       aria-hidden="true"
       poster="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_105822_bf7c2d53-9957-4521-bbbf-7c1ab7a70130.png"
       src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_105953_21ad8049-9088-4a00-bad3-aee6b5575a2b.mp4"></video>

The clip is 10.04 s, 1920×1080, H.264, silent, 4.7 MB: a crystal glass sphere
intersected by a thin glass blade on a pale blue-white studio backdrop, with an almost
imperceptible push-in and travelling caustics.

.bg{position:absolute;left:-2px;top:-2px;
  width:calc(100vw + 4px);height:calc(100vh + 4px);object-fit:cover;object-position:50% 50%;
  z-index:0;filter:brightness(1.006) saturate(.965);transform:scale(1.002)}
@supports (height:100dvh){.bg{height:calc(100dvh + 4px)}}
.tint{position:absolute;inset:0;background:rgba(255,249,240,.05);z-index:1;pointer-events:none}

(The 2px bleed + scale(1.002) hide subpixel seams at the viewport edge.)

════════════════════════════════════════════════════════════════════════
5. COMPONENTS — exact measurements
════════════════════════════════════════════════════════════════════════
── BRAND ──  <a class="brand l t" style="--x:68;--y:47" href="#">
.brand{display:flex;align-items:center;text-decoration:none;color:inherit;height:calc(39*var(--u))}
.mark{width:calc(39*var(--u));height:calc(39*var(--u));display:block;flex:none}
.brand b{font-size:calc(22*var(--u));font-weight:520;letter-spacing:-0.03em;line-height:1;
  margin-left:calc(7.7*var(--u))}
Wordmark: <b class="sx" style="--sx:0.894">ConSentinel</b>

Logo = a striped globe. `<svg class="mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">`
containing, in order:
  <defs><clipPath id="gclip"><circle cx="20" cy="20" r="18.2"/></clipPath></defs>
  <circle cx="20" cy="20" r="18.4" stroke="#0d1b30" stroke-width="1.1"/>
  <g clip-path="url(#gclip)" stroke="#0d1b30" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path d="M13.2 4.6c3-.9 6.2-1 9.2-.1" stroke-width="1.7"/>
   <path d="M5.6 9.2c3.8-1.9 8-2.4 11.7-1.2 2.5.8 4.3 2.1 6.6 2.3 2 .2 4.2-.4 6.4-1.5" stroke-width="2.3"/>
   <path d="M2.6 13.9c4.4-2.4 9.4-3 13.6-1.5 2.4.9 4.1 2.3 6.4 2.4 2.3.1 4.7-1 7.1-2.4 1.6-.9 3.4-1.4 5.3-1.4" stroke-width="2.7"/>
   <path d="M1.6 18.7c4.8-2.7 10.1-3.2 14.4-1.6 1.8.7 3.2 1.6 4.7 2.1-1.7 1.3-3.4 2.2-5.1 2.6 2.9.5 5.9-.1 8.8-1.5 1.5-.7 2.9-1.6 4.4-2.3 1.9-.9 3.9-1.3 5.9-1.1" stroke-width="2.9"/>
   <path d="M1.9 24.1c4.5-2.4 9.6-3 13.9-1.6 2.3.7 4 1.9 6.2 2 2.4.1 5-.9 7.5-2.3 1.6-.9 3.3-1.4 5-1.4" stroke-width="2.8"/>
   <path d="M3.7 28.8c4.1-2 8.7-2.5 12.6-1.3 2.2.7 3.8 1.8 5.9 1.8 2.3.1 4.8-.8 7.1-2.1 1.2-.7 2.5-1.1 3.8-1.2" stroke-width="2.4"/>
   <path d="M7.6 32.9c3.5-1.5 7.4-1.9 10.6-.9 1.9.6 3.3 1.4 5 1.5 1.6.1 3.3-.3 5-1.1" stroke-width="1.9"/>
   <path d="M13.6 35.8c2.8-.9 5.8-1 8.6-.2" stroke-width="1.5"/>
  </g>

── NAV PILL ──  centred glass capsule, absolutely positioned
.nav{position:absolute;left:50%;transform:translateX(calc(-50% - 3*var(--u)));
  top:calc((31 + 15)*var(--u));width:calc(293*var(--u));height:calc(67*var(--u));
  border-radius:999px;background:rgba(255,255,255,0.78);
  border:calc(1*var(--u)) solid rgba(255,255,255,.85);
  -webkit-backdrop-filter:blur(calc(40*var(--u)));backdrop-filter:blur(calc(40*var(--u)));
  box-shadow:0 0 0 calc(1.3*var(--u)) rgba(120,145,180,0.2),
    0 calc(2*var(--u)) calc(10*var(--u)) rgba(28,52,92,.05);z-index:2}
.nav>*{position:absolute}
.nav span{font-size:calc(15*var(--u));font-weight:570;letter-spacing:-0.0561em;
  line-height:1;color:#202940;white-space:nowrap}
.nav i{display:block}
.n-home{left:calc(36*var(--u));top:calc(22*var(--u));width:calc(21.3*var(--u));height:calc(22.4*var(--u))}
.n-explore{left:calc(72*var(--u));top:calc(26*var(--u))}        → text "Explore"
.n-div{left:calc(144*var(--u));top:calc(18*var(--u));width:calc(1.5*var(--u));
  height:calc(31*var(--u));background:#CED5E0;border:0}          → an <hr>
.n-grid{left:calc(168*var(--u));top:calc(24*var(--u));width:calc(20.2*var(--u));height:calc(20.2*var(--u))}
.n-product{left:calc(203.8*var(--u));top:calc(26*var(--u))}     → text "Product"

home icon svg: viewBox "0 0 20 21", `<path d="M2 8.4 10 2l8 6.4V18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
  stroke="#202940" stroke-width="1.7" stroke-linejoin="round"/>`
grid icon svg: viewBox "0 0 20 20", four rects stroke="#202940" stroke-width="1.7" rx="1.7"
  width/height 7.4 at (1,1) (11.6,1) (1,11.6) (11.6,11.6)

── PRIMARY CTA ──  <a class="cta l t r" style="--x:58;--y:30" href="#">
.cta{width:calc(217*var(--u));height:calc(70*var(--u));border-radius:999px;
  background:var(--cta);text-decoration:none;display:block;
  box-shadow:0 calc(10*var(--u)) calc(24*var(--u)) rgba(11,26,50,.18)}
.cta span{position:absolute;left:calc(34.8*var(--u));top:calc(27.55*var(--u));
  font-size:calc(17.5*var(--u));font-weight:400;letter-spacing:-0.0442em;line-height:1;
  color:#fff;white-space:nowrap}                                → "Get free plan"
.knob{position:absolute;border-radius:50%;background:var(--cta-knob);
  display:flex;align-items:center;justify-content:center}
.cta .knob{left:calc(156*var(--u));top:calc(10.5*var(--u));
  width:calc(49*var(--u));height:calc(49*var(--u))}
.knob svg{width:calc(17*var(--u));height:calc(17*var(--u))}
chevron svg: viewBox "0 0 18 18", `<path d="m6.6 3.6 6 5.4-6 5.4" stroke="#fff"
  stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>`

── HERO TYPE ──
.eyebrow{font-size:calc(16*var(--u));font-weight:470;letter-spacing:-0.015em;
  line-height:1;color:var(--muted);white-space:nowrap}
  <p class="eyebrow l c sx" style="--x:65.7;--y:-209.2;--sx:0.9293">Your digital infrastructure</p>

h1{font-size:calc(98*var(--u));font-weight:360;letter-spacing:-0.035em;
  line-height:calc(90*var(--u));color:var(--ink);white-space:nowrap}
  <h1 class="l c" style="--x:62.6;--y:-167.3">
    <span class="sx" style="--sx:0.9431">Smarter Security</span><br>
    <span class="sx" style="--sx:0.9792">Starts Here</span></h1>

.play{width:calc(50.5*var(--u));height:calc(50.5*var(--u));border-radius:50%;background:#fff;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 calc(6*var(--u)) calc(18*var(--u)) rgba(28,52,92,.10)}
.play svg{width:calc(13*var(--u));height:calc(14*var(--u))}
  <span class="play l c" style="--x:66;--y:34"> — svg viewBox "0 0 13 14",
  `<path d="M1.4 1.3 11.6 7 1.4 12.7z" fill="#0b1526"/>`

.tag{font-size:calc(24*var(--u));font-weight:470;letter-spacing:-0.03em;line-height:1;
  color:var(--ink-soft);white-space:nowrap}
  <span class="tag l c sx" style="--x:131;--y:48.7;--sx:0.8973">Secure the Sphere. Protect What Matters.</span>

── GLASS PANEL ──  <aside class="panel l c r" style="--x:58;--y:-165">
.panel{width:calc(275*var(--u));height:calc(271*var(--u));border-radius:calc(28*var(--u));
  background:linear-gradient(135deg,rgba(255,255,255,0.44),rgba(255,255,255,0.16));
  border:calc(1*var(--u)) solid rgba(255,255,255,.60);
  -webkit-backdrop-filter:blur(calc(40*var(--u))) saturate(112%);
  backdrop-filter:blur(calc(40*var(--u))) saturate(112%);
  box-shadow:inset calc(1*var(--u)) calc(1*var(--u)) 0 rgba(255,255,255,.55),
    inset calc(-1*var(--u)) calc(-1*var(--u)) 0 rgba(255,255,255,.18),
    0 calc(18*var(--u)) calc(40*var(--u)) rgba(28,52,92,.07)}
.panel>*{position:absolute}
.p-title{left:calc(29*var(--u));top:calc(44.7*var(--u));font-size:calc(24*var(--u));
  font-weight:500;letter-spacing:-0.02em;line-height:1;color:var(--ink);white-space:nowrap}
      → <span class="p-title sx" style="--sx:0.8707">AI-Driven</span>
.dot{left:calc(137*var(--u));top:calc(53*var(--u));width:calc(10*var(--u));
  height:calc(10*var(--u));border-radius:50%;background:var(--accent)}
.shield{left:calc(177*var(--u));top:calc(46*var(--u));width:calc(73*var(--u));
  height:calc(73*var(--u));border-radius:50%;background:rgba(255,255,255,.92);
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 0 calc(26*var(--u)) calc(10*var(--u)) rgba(255,255,255,.5),
    0 calc(6*var(--u)) calc(16*var(--u)) rgba(28,52,92,.06)}
.shield svg{width:calc(30*var(--u));height:calc(39*var(--u))}
  shield svg viewBox "0 0 30 39":
  `<path d="M15 1.2 1.6 6.6v13.1c0 6.6 5.1 12.6 13.4 17.9 8.3-5.3 13.4-11.3 13.4-17.9V6.6z"
     stroke="#101c33" stroke-width="2" stroke-linejoin="round"/>`
  `<path d="M2.1 18.9c4.6-1.1 8.9-1.6 12.9-1.6s8.3.5 12.9 1.6" stroke="#101c33"
     stroke-width="2" stroke-linecap="round"/>`
.p-sub{left:calc(29*var(--u));top:calc(94.35*var(--u));font-size:calc(18*var(--u));
  font-weight:400;letter-spacing:-0.02em;line-height:calc(20.4*var(--u));color:var(--muted2)}
      → <p class="p-sub sx" style="--sx:0.8899">Cloud<br>Infrastructure<br>Protection</p>
.scale{left:calc(47*var(--u));top:calc(189*var(--u));width:calc(190*var(--u));
  display:flex;justify-content:space-between;font-size:calc(15*var(--u));font-weight:400;
  letter-spacing:-0.03em;line-height:1;color:#586580}
      → four spans: 1K / 10K / 50K / 100K
.track{left:calc(46*var(--u));top:calc(221*var(--u));width:calc(190*var(--u));
  height:calc(8*var(--u));border-radius:999px;background:#DDE4EE;overflow:hidden}
.track i{display:block;width:calc(59*var(--u));height:100%;border-radius:999px;background:#5F88B4}

── STATS ROW ──
.num{font-size:calc(100*var(--u));font-weight:200;letter-spacing:0em;line-height:1;
  color:var(--ink);white-space:nowrap}
.lbl{font-size:calc(19*var(--u));font-weight:400;letter-spacing:-0.02em;
  line-height:calc(23.5*var(--u));color:#39455F}
.slash{width:calc(23*var(--u));height:calc(75*var(--u));
  background:linear-gradient(to top left,transparent calc(50% - .85*var(--u)),
    #A7B4C6 calc(50% - .85*var(--u)),#A7B4C6 calc(50% + .85*var(--u)),
    transparent calc(50% + .85*var(--u)))}
Markup:
  <span class="num l b sx" style="--x:64;--y:60.4;--sx:1">112+</span>
  <span class="lbl l b sx" style="--x:295;--y:73.2;--sx:0.9634">Countries<br>Protected<br>Globally</span>
  <span class="slash l b" style="--x:418;--y:76"></span>
  <span class="num l b sx" style="--x:480;--y:60.4;--sx:0.9858">55K+</span>
  <span class="lbl l b sx" style="--x:716;--y:96.7;--sx:0.9209">Clients<br>Secured</span>

── MEET SENTINEL PILL ──  <a class="meet l b r" style="--x:59;--y:66" href="#">
.meet{width:calc(269*var(--u));height:calc(86*var(--u));border-radius:999px;display:block;
  text-decoration:none;background:rgba(255,255,255,0.325);
  border:calc(1*var(--u)) solid rgba(255,255,255,.62);
  -webkit-backdrop-filter:blur(calc(40*var(--u)));backdrop-filter:blur(calc(40*var(--u)));
  box-shadow:0 0 0 calc(1.2*var(--u)) rgba(120,145,180,0.1),
    inset calc(1*var(--u)) calc(1*var(--u)) 0 rgba(255,255,255,.5),
    0 calc(8*var(--u)) calc(22*var(--u)) rgba(28,52,92,.035)}
.meet>*{position:absolute}
.thumb{left:calc(12*var(--u));top:calc(11*var(--u));width:calc(64*var(--u));
  height:calc(64*var(--u));border-radius:50%;overflow:hidden;
  box-shadow:inset 0 0 0 calc(1*var(--u)) rgba(255,255,255,.45)}
.thumb img{width:100%;height:100%;object-fit:cover;display:block}
.meet b{left:calc(89.8*var(--u));top:calc(34.55*var(--u));font-size:calc(17.5*var(--u));
  font-weight:425;letter-spacing:-0.0681em;line-height:1;color:#1B2A44;white-space:nowrap}
.meet .knob{left:calc(206*var(--u));top:calc(17*var(--u));width:calc(50*var(--u));
  height:calc(50*var(--u));background:var(--meet-knob)}
Thumbnail is a small glass sphere. Reuse the video poster, framed onto the sphere:
  <span class="thumb"><img alt="" style="object-position:60% 50%"
    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_105822_bf7c2d53-9957-4521-bbbf-7c1ab7a70130.png"></span>
Label "Meet Sentinel"; knob uses the same chevron svg as the CTA.

════════════════════════════════════════════════════════════════════════
6. RESPONSIVE — three tiers, keyed to frame SHAPE not device width
════════════════════════════════════════════════════════════════════════
── TIER 2 · COMPACT ──
@media (max-aspect-ratio: 87/80), (max-width: 899px), (max-height: 639px){
  :root{--u: min(100vw / 880, 100vh / 1220); --pad: 52}
  @supports (height:100dvh){:root{--u: min(100vw / 880, 100dvh / 1220)}}
  .card{inset:0;border-radius:0}
  .bg{left:-2px;top:-2px}
  /* wrappers BECOME the layout: one column distributed to the frame */
  .stack{display:flex;flex-direction:column;justify-content:space-between;
    position:absolute;inset:0;z-index:2;padding:calc(var(--pad)*var(--u))}
  .row,.hero-blk,.stats,.stat,.tagrow{display:flex}
  .row{align-items:center;justify-content:space-between;width:100%}
  .hero-blk{flex-direction:column;align-items:flex-start;width:100%;margin:calc(30*var(--u)) 0}
  .tagrow{align-items:center;gap:calc(16*var(--u));margin-top:calc(28*var(--u))}
  .stats{align-items:flex-end;gap:calc(26*var(--u));flex-wrap:wrap}
  .stat{align-items:flex-end;gap:calc(16*var(--u))}
  .l,.t,.c,.b,.r{position:relative;left:auto;right:auto;top:auto;bottom:auto}
  h1{margin-top:calc(16*var(--u))}
  .play{flex:none}
  .panel{align-self:flex-end;margin-top:calc(36*var(--u))}
  .row:last-child{flex-wrap:wrap;row-gap:calc(24*var(--u))}
  .meet{margin-left:auto}
  .nav{position:relative;left:auto;top:auto;transform:none;flex:none}

  /* compact LANDSCAPE keeps copy and panel side by side */
  @media (min-aspect-ratio: 1/1){
    :root{--u: min(100vw / 1240, 100vh / 820); --pad: 46}
    @supports (height:100dvh){:root{--u: min(100vw / 1240, 100dvh / 820)}}
    @media (max-height: 520px){        /* rotated phone: landscape but very short */
      :root{--u: min(100vw / 900, 100vh / 560); --pad: 30}
      @supports (height:100dvh){:root{--u: min(100vw / 900, 100dvh / 560)}}
    }
    .hero-blk{display:grid;grid-template-columns:minmax(0,1fr) auto;
      column-gap:calc(46*var(--u));align-items:end;margin:calc(24*var(--u)) 0}
    .eyebrow{grid-column:1;grid-row:1}
    h1{grid-column:1;grid-row:2}
    .tagrow{grid-column:1;grid-row:3}
    .panel{grid-column:2;grid-row:1 / span 3;align-self:center;margin-top:0}
    .row:last-child{flex-wrap:nowrap}
  }

  /* ── TIER 3 · MOBILE — nested inside tier 2 ── */
  @media (max-width: 640px) and (max-aspect-ratio: 1/1){
    /* TWO scales: --u drives composition + display type (width-tied, so a
       headline can never outrun the frame); --t drives reading type, controls
       and component internals and is FLOORED so labels stay legible and touch
       targets stay tappable — the floor itself capped by the height budget. */
    :root{--u: min(100vw / 600, 100vh / 940);
          --t: max(var(--u), min(0.85px, 100vh / 780));
          --pad: 40}
    @supports (height:100dvh){:root{--u: min(100vw / 600, 100dvh / 940);
          --t: max(var(--u), min(0.85px, 100dvh / 780))}}
    .sx{transform:none}                      /* drop optical tracking on phones */
    .brand{height:auto}
    .mark{width:calc(36*var(--t));height:calc(36*var(--t))}
    .brand b{font-size:calc(21*var(--t));margin-left:calc(8*var(--t))}
    h1{font-size:calc(66*var(--u));line-height:calc(64*var(--u));margin-top:calc(12*var(--u))}
    .eyebrow{font-size:calc(16*var(--t))}
    .hero-blk{margin:calc(24*var(--u)) 0}
    .tagrow{gap:calc(14*var(--t));margin-top:calc(22*var(--u))}
    .tag{font-size:calc(19*var(--t));line-height:calc(25*var(--t));white-space:normal}
    .play{width:calc(48*var(--t));height:calc(48*var(--t))}
    .play svg{width:calc(12*var(--t));height:calc(13*var(--t))}
    /* panel keeps its exact internal proportions, re-measured in --t */
    .panel{width:100%;align-self:stretch;height:calc(212*var(--t));margin-top:calc(24*var(--u))}
    .p-title{left:calc(30*var(--t));top:calc(30*var(--t));font-size:calc(24*var(--t))}
    .dot{left:calc(137*var(--t));top:calc(40*var(--t));width:calc(10*var(--t));height:calc(10*var(--t))}
    .shield{left:auto;right:calc(26*var(--t));top:calc(22*var(--t));
      width:calc(64*var(--t));height:calc(64*var(--t))}
    .shield svg{width:calc(26*var(--t));height:calc(34*var(--t))}
    .p-sub{left:calc(31*var(--t));top:calc(80*var(--t));font-size:calc(17*var(--t));
      line-height:calc(21*var(--t))}
    .scale{left:calc(31*var(--t));top:calc(150*var(--t));width:calc(100% - 62*var(--t));
      font-size:calc(14*var(--t))}
    .track{left:calc(31*var(--t));top:calc(178*var(--t));width:calc(100% - 62*var(--t));
      height:calc(8*var(--t))}
    .track i{width:31%}
    /* both figures and the slash stay on ONE line — the desktop signature —
       but each number now sits above its own label */
    .stats{gap:calc(18*var(--u));align-items:center;flex-wrap:nowrap}
    .stat{flex-direction:column;align-items:flex-start;gap:calc(6*var(--t))}
    .num{font-size:calc(76*var(--u))}
    .lbl{font-size:calc(15*var(--t));line-height:calc(19*var(--t))}
    .slash{height:calc(92*var(--t));width:calc(29*var(--t));align-self:center}
    .meet{width:100%;height:calc(72*var(--t))}
    .thumb{left:calc(9*var(--t));top:calc(5*var(--t));width:calc(62*var(--t));height:calc(62*var(--t))}
    .meet b{left:calc(84*var(--t));top:calc(28*var(--t));font-size:calc(17*var(--t))}
    .meet .knob{left:auto;right:calc(11*var(--t));top:calc(11*var(--t));
      width:calc(50*var(--t));height:calc(50*var(--t))}
  }
}

── NAV COLLAPSE — a SEPARATE rule, keyed only to frame shape ──
Portrait collapses, landscape never does. Desktop needs ≥87:80, so the burger is
structurally unreachable there. Default state: `.burger{display:none}` `.menu{display:contents}`

.burger base (outside the query): align-items:center;justify-content:center;
  flex-direction:column;gap:calc(6*var(--u));width:calc(56*var(--u));height:calc(56*var(--u));
  border-radius:999px;padding:0;cursor:pointer;background:rgba(255,255,255,0.78);
  border:calc(1*var(--u)) solid rgba(255,255,255,.85);
  backdrop-filter:blur(calc(40*var(--u)));  /* + -webkit- */
  box-shadow:0 0 0 calc(1.3*var(--u)) rgba(120,145,180,0.2),
    0 calc(2*var(--u)) calc(10*var(--u)) rgba(28,52,92,.05)
.burger i{display:block;width:calc(20*var(--u));height:calc(1.8*var(--u));border-radius:999px;
  background:#202940;transition:transform .3s cubic-bezier(.2,.7,.3,1),opacity .3s}
.burger[aria-expanded="true"] i:first-child{transform:translateY(calc(3.9*var(--u))) rotate(45deg)}
.burger[aria-expanded="true"] i:last-child{transform:translateY(calc(-3.9*var(--u))) rotate(-45deg)}
.burger:focus-visible{outline:calc(2*var(--u)) solid #2f5f9e;outline-offset:calc(3*var(--u))}

@media (max-aspect-ratio: 1/1){
  .burger{display:flex}
  .menu{display:block;position:absolute;z-index:9;
    top:calc((var(--pad) + 68)*var(--u));right:calc(var(--pad)*var(--u));
    width:calc(304*var(--u));padding:calc(16*var(--u));border-radius:calc(30*var(--u));
    background:rgba(255,255,255,.82);border:calc(1*var(--u)) solid rgba(255,255,255,.85);
    backdrop-filter:blur(calc(40*var(--u)));
    box-shadow:0 0 0 calc(1.3*var(--u)) rgba(120,145,180,.2),
      0 calc(16*var(--u)) calc(34*var(--u)) rgba(28,52,92,.10);
    opacity:0;visibility:hidden;transform:translateY(calc(-10*var(--u))) scale(.97);
    transform-origin:top right;
    transition:opacity .26s cubic-bezier(.2,.7,.3,1),
      transform .26s cubic-bezier(.2,.7,.3,1),visibility .26s}
  .menu[data-open]{opacity:1;visibility:visible;transform:none}
  .menu .nav{position:relative;left:auto;top:auto;transform:none;width:100%;height:auto;
    display:grid;grid-template-columns:auto 1fr;align-items:center;
    column-gap:calc(16*var(--u));row-gap:calc(16*var(--u));
    padding:calc(8*var(--u)) calc(10*var(--u));border:0;background:none;box-shadow:none;
    backdrop-filter:none}
  .menu .nav>*{position:relative;left:auto;top:auto}
  .menu .nav span{font-size:calc(19*var(--u))}
  .menu .n-home{width:calc(21*var(--u));height:calc(22*var(--u))}
  .menu .n-grid{width:calc(21*var(--u));height:calc(21*var(--u))}
  .menu .n-div{grid-column:1 / -1;width:100%;height:calc(1.2*var(--u));margin:calc(2*var(--u)) 0}
  .menu .cta{position:relative;left:auto;top:auto;width:100%;height:calc(64*var(--u));
    margin-top:calc(14*var(--u))}
  .menu .cta span{left:calc(28*var(--u));top:calc(23*var(--u));font-size:calc(19*var(--u))}
  .menu .cta .knob{left:auto;right:calc(9*var(--u));top:calc(7*var(--u));
    width:calc(50*var(--u));height:calc(50*var(--u))}

  @media (max-width: 640px){        /* nested — re-measure the menu in --t */
    .burger{width:calc(56*var(--t));height:calc(56*var(--t));gap:calc(6*var(--t))}
    .burger i{width:calc(20*var(--t));height:calc(1.8*var(--t))}
    .burger[aria-expanded="true"] i:first-child{transform:translateY(calc(3.9*var(--t))) rotate(45deg)}
    .burger[aria-expanded="true"] i:last-child{transform:translateY(calc(-3.9*var(--t))) rotate(-45deg)}
    .menu{width:auto;left:calc(var(--pad)*var(--u));right:calc(var(--pad)*var(--u));
      top:calc(var(--pad)*var(--u) + 68*var(--t));padding:calc(14*var(--t));
      border-radius:calc(28*var(--t))}
    .menu .nav{column-gap:calc(15*var(--t));row-gap:calc(15*var(--t));
      padding:calc(6*var(--t)) calc(8*var(--t))}
    .menu .nav span{font-size:calc(18*var(--t))}
    .menu .n-home{width:calc(21*var(--t));height:calc(22*var(--t))}
    .menu .n-grid{width:calc(21*var(--t));height:calc(21*var(--t))}
    .menu .cta{height:calc(60*var(--t));margin-top:calc(12*var(--t))}
    .menu .cta span{left:calc(26*var(--t));top:calc(21*var(--t));font-size:calc(18*var(--t))}
    .menu .cta .knob{right:calc(7*var(--t));top:calc(6*var(--t));
      width:calc(48*var(--t));height:calc(48*var(--t))}
  }
}

Header markup order: a.brand, button.burger, div.menu#site-menu (containing nav.nav then a.cta).
Burger: `<button class="burger" type="button" aria-label="Open menu" aria-expanded="false"
aria-controls="site-menu"><i></i><i></i></button>`

════════════════════════════════════════════════════════════════════════
7. MOTION
════════════════════════════════════════════════════════════════════════
HOVER:
@media (prefers-reduced-motion:no-preference){
  .cta,.meet{transition:transform .35s cubic-bezier(.2,.7,.3,1)}
  .cta:hover,.meet:hover{transform:translateY(calc(-2*var(--u)))}
}
FOCUS: a:focus-visible{outline:calc(2*var(--u)) solid #2f5f9e;outline-offset:calc(3*var(--u))}

ENTRANCE — runs once on load, then deletes itself. The background plate is the stage and
never animates; only the foreground performs. Pre-states live behind `html.pre`, added by
an inline head script BEFORE first paint and removed by the timeline on completion, so the
resting frame is the authored CSS untouched. No JS / no WAAPI / reduced motion ⇒ the class
is never added and the page simply renders finished.

Pre-state CSS:
html.pre .brand,html.pre .nav,html.pre .cta,html.pre .burger,
html.pre .eyebrow,html.pre .play,html.pre .tag,
html.pre .panel,html.pre .lbl,html.pre .meet{opacity:0}
html.pre h1 .sx,html.pre .num{clip-path:inset(100% 0 -14% 0)}
html.pre .slash{scale:1 0}
html.pre .track i{scale:0 1}
html.pre .dot{scale:0}
.track i{transform-origin:left center}

Inline script in <head>, immediately after </style>:
(function(){var d=document.documentElement;
  if(!('animate' in Element.prototype))return;
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  d.classList.add('pre');
  setTimeout(function(){d.classList.remove('pre')},4000);   /* self-heal */
})();

Timeline script at end of <body>, WAAPI only. Four behaviours, no more:
  A masked rise  — headline lines, the two figures
  B quiet lift   — eyebrow, tagline, labels
  C glass settle — pills, panel, play, burger
  D accent       — meter draw, shield, dot, divider
Bail immediately if `html` lacks `.pre`.
Easings: EXPO='cubic-bezier(.16,1,.3,1)', SOFT='cubic-bezier(.22,.7,.25,1)',
         GLASS='cubic-bezier(.2,.75,.28,1)'
Global scalar: `const s = matchMedia('(max-width: 640px)').matches ? .86 : 1` — restraint
on phones; multiply BOTH duration and delay by s. All animations `fill:'both'`, pushed to
a `running[]` array.
  rise(el,delay,dur)   → [{clipPath:'inset(100% 0 -14% 0)',translate:'0 .16em'},
                          {clipPath:'inset(-18% 0 -14% 0)',translate:'0 0'}]  EXPO
  lift(el,delay,dist='.7em',dur=560) → [{opacity:0,translate:'0 '+dist},
                          {opacity:1,translate:'0 0'}]  SOFT
  settle(el,delay,dur=760,from=.985,dist='1.1em') → [{opacity:0,scale:from,translate:'0 '+dist},
                          {opacity:1,scale:1,translate:'0 0'}]  GLASS
Exact call order and arguments:
  lift('.brand',60,'.55em',600)
  settle('.nav',150,700,.99,'.5em')
  settle('.cta',200,700,.985,'.5em')
  settle('.burger',150,700,.9,'.4em')
  lift('.eyebrow',300,'.8em',520)
  rise(h1 .sx[0],380,980);  rise(h1 .sx[1],470,980)
  settle('.play',720,640,.88,'.3em')
  lift('.tag',770,'.7em',560)
  settle('.panel',800,880,.982,'1.4em')
  animate('.shield',[{scale:.86},{scale:1}],700,1020,EXPO)
  animate('.dot',[{scale:0},{scale:1}],520,1080,EXPO)
  animate('.track i',[{scale:'0 1'},{scale:'1 1'}],820,1120,EXPO)
  rise(.num[0],920,860);  rise(.num[1],990,860)
  lift(.lbl[0],1030,'.6em',520);  lift(.lbl[1],1075,'.6em',520)
  animate('.slash',[{scale:'1 0'},{scale:'1 1'}],700,1010,EXPO)
  settle('.meet',1140,820,.985,'1.2em')
Then: Promise.all(running.map(a=>a.finished.catch(()=>{}))).then(() => {
  remove 'pre' from documentElement; a.cancel() every running animation; empty the array });

BURGER SCRIPT (separate IIFE): toggle `aria-expanded` on the button and the `data-open`
attribute on the menu together. Open on click (stopPropagation). Close on: click of any
`a` inside the menu, any document click outside both button and menu, Escape (and return
focus to the button), and `matchMedia('(min-aspect-ratio: 1/1)')` change → matches.

VIDEO SCRIPT (separate IIFE, last): hold the plate on frame 1 for anyone who asked the
platform for less motion, and follow the preference live.
(()=>{
  const v=document.querySelector('video.bg'); if(!v) return;
  const q=matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{ if(q.matches){v.pause(); v.currentTime=0;} else v.play().catch(()=>{}); };
  q.addEventListener('change',sync);
  /* a tab that loads in the background never starts its own autoplay,
     so pick the plate back up whenever the page becomes visible */
  document.addEventListener('visibilitychange',()=>{if(!document.hidden) sync()});
  v.addEventListener('canplay',sync); sync();
})();

════════════════════════════════════════════════════════════════════════
8. CONSTRAINTS
════════════════════════════════════════════════════════════════════════
• One file. Zero dependencies beyond the Google Fonts link and the two CloudFront URLs.
• Never hardcode px for layout — only `calc(N*var(--u))` / `calc(N*var(--t))`.
• Reproduce every `--x`, `--y` and `--sx` inline value exactly as listed.
• Ship both `-webkit-backdrop-filter` and `backdrop-filter` on every glass surface.
• Keep all `aria-hidden="true"` on decorative SVGs, `alt=""` on the thumbnail,
  and the burger's aria-label / aria-expanded / aria-controls wiring.
• The page never scrolls: `body{overflow:hidden}` and the card is fixed to the viewport.
• Use `100dvh` via @supports everywhere `100vh` appears in a `--u` formula and on `.bg`.
