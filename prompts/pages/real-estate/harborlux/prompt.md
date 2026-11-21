# Harborlux — "Claim Your Summit" rainy-harbour penthouse hero

Build a single full-screen hero for a fictional luxury real-estate brand called HARBORLUX. On load it plays a 7.3-second cinematic intro, then stays live with a moving rain sky. In order: a pair of black lacquer doors slides open from the centre seam onto a top-down drone shot of a skyscraper rooftop pool at night. The camera tilts up and pulls back to reveal a rainy neon harbour skyline. The shot then turns into four separate image layers that drift at different speeds (parallax), while a giant white word "Summit" rises in letter by letter. Finally a man in a long dark coat rises into frame from below, standing at a glass balcony railing with his back to us, and his head overlaps the bottom of the giant word. Everything below is exact. Rebuild it pixel for pixel.

## 1. Media (use these exact URLs, do not re-host)

All images go through the images.higgs.ai resizer. Change the `w=` value to suit the screen: 2000 is enough for a 1600-wide stage, and for 1x screens round the needed width up to the next hundred. Videos are linked directly.

| Asset | URL |
|---|---|
| Doors (one image; the left half is the left door, the right half the right door) | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261117_063048_97fd9a70-adbe-46bd-bfce-ec1004f6c7d8.png&w=2000&q=85 |
| Aerial rooftop still (top-down, first frame of the tilt) | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261117_063055_ee1debcd-d200-484f-b94f-fad6dcffd4eb.png&w=2000&q=85 |
| Back layer: violet storm sky, clouds, misty mountain ridges, dark calm water, no buildings | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261117_063251_24fbd7cc-00df-49ec-8fbf-d8a0349b1e98.png&w=2000&q=85 |
| Mid layer: the whole neon city skyline, harbour water with reflections and boats, near-shore towers; sky is transparent | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261117_063252_b9f2fecf-9be0-485f-842f-3aa6bbc251f2.png&w=2000&q=85 |
| Front layer: the man from behind, the glass railing (metal top rail and posts, the glass itself fully transparent), the wet reflective stone floor, potted plants at both edges; everything else transparent | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261117_063151_7804d758-a2eb-4499-9b56-8f493edbb206.png&w=2000&q=85 |
| Tilt video: top-down rooftop pool to the wide skyline (5.04 s, 1276×720, 24 fps, H.264, no audio). Its last frame equals the back and mid layers stacked. | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261117_063355_a600befc-45d6-4a32-9db6-9d6565a89609.mp4 |
| Rain video: the back layer with pouring rain, racing clouds and rolling mist, locked camera (5.04 s, 1276×720, 24 fps, no audio). Its first frame equals the back layer. | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261117_063703_04e54df7-2236-4dff-b95b-a9a34c1f78ec.mp4 |

All five images and both videos share one 16:9 framing (2688×1520 source). They line up exactly when drawn into the same 16:9 box.

## 2. Font

Inter, a single variable file (weights 100–900, latin): https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7.woff2. Load it with @font-face (font-display swap, preloaded) and use it for everything. Weights used: 300 for the kicker, 400 for nav links, 600 for the wordmark, the active pill and the button, 700 for the giant word.

## 3. Colours and page

| Token | Value | Use |
|---|---|---|
| Page and hero background | #0D0A22 | behind everything, seen only before the images load |
| Ink | #180F3C | text on light pills and buttons |
| Button | #F2B8C0 (hover #F7C9D0) | "Enquire" |
| Text | #FFFFFF | wordmark, links, headline |
| Nav glass | white at 14% opacity, 12 px backdrop blur, a 1 px inner ring of white at 12% | pill bar |
| Link text | white at 88% | inactive nav links |
| Top shade | linear gradient from rgba(13,8,40,.45) at the top to transparent, covering the top 45% of the back layer | keeps the white text readable on the sky |

The page is exactly one screen tall (100svh, minimum 520 px) with overflow hidden. The tab title is "Harborlux — Claim Your Summit". The meta description is "Harborlux: harbour-view penthouses above a city that never sleeps. Claim your summit."

## 4. The stage (how every scene layer is placed)

- The hero is a full-viewport box, positioned relative, with isolation set.
- Inside it is a "stage": a 16:9 box that always covers the hero, centred both ways. Its width is the larger of the viewport width and the viewport height × 16/9; its height is that width × 9/16. At 1440×900 the stage is 1600×900, overhanging 80 px on each side.
- The stage holds, from back to front:
  1. **Back layer**: the back image, the two rain videos on top of it, and the top shade.
  2. **Headline block**: see section 6.
  3. **Mid layer**: the city image.
  4. **Front layer**: a glass tint panel, then the front image above it.
- Each layer fills the stage, and its image or video is object-fit cover. Transform origins: back 50% 40%, mid 50% 45%, front 50% 100%.
- **Glass tint** (the cut-out glass is fully clear, so this gives it body). It's a panel in the front layer:
  - Position: left 5.2%, right 4.1%, top 57.9%, height 25.4%. That's exactly between the posts, from the top rail down to the floor.
  - Fill: a vertical gradient from rgba(190,200,255,.10) to rgba(150,160,230,.05) at 60%, then rgba(120,130,210,.08).
  - Backdrop filter: blur 1.2 px, saturate 1.05.
  - Top edge: a 1 px highlight line in white at 18%.
- Positions in the scene, as % of the stage height:
  - the top of the man's head: 35.9%
  - the top of the metal rail: 57.9%
  - the bottom of the glass: 83.3%
  - the main mass of the skyline: from about 45%
  - the tallest towers: from about 33%

## 5. Nav (pinned to the viewport, not the stage)

The unit u is the smaller of (viewport width ÷ 1440) and (viewport height ÷ 900). At 1440×900, u = 1 px.

- **Bar**: top 52u, height 48u, side padding 125u, font 15u. Three groups, spaced apart.
- **Left**: the wordmark "HARBORLUX", weight 600, 17u, letter-spacing 0.28em, white, linking to "/".
- **Centre**: the pill bar, absolutely centred on the viewport, full nav height.
  - Bar: 5u padding, 6u gap, fully rounded, styled as the nav glass from section 3.
  - Four links, each 38u tall with 0 22u padding and fully rounded: "Home" (active: white fill, ink text, weight 600), "The Firm", "Skyline Homes", "Talk To Us".
  - Inactive links are 88% white. Hover adds a white 14% fill (0.25 s transition).
- **Right**: a 30u gap between two items.
  - A globe outline icon (20u, 1.5 stroke: a circle, an equator line and a lens-shaped meridian), a 9u gap, then "Eng" at 90% white.
  - The "Enquire" button: 44u tall, padding 0 27u, fully rounded, #F2B8C0 with ink text, weight 600. Hover lifts it 1 px and lightens it to #F7C9D0.

## 6. Headline (inside the stage, between the back and mid layers)

- **Text**: the kicker "Claim Your" (weight 300, letter-spacing −0.01em) and the giant word "Summit" (weight 700, letter-spacing −0.045em, line-height 1, white). The giant word is one h1 with an aria-label of "Claim Your Summit", and each letter is wrapped in its own inline-block span so it can animate.
- **Placement**: the block spans the viewport width, horizontally centred on the viewport even when the stage overhangs.
- **Size**: measure the word at 100 px, then use the smallest of:
  - (a) 62.5% of the stage width,
  - (b) 92% of the viewport width,
  - (c) the gap between the bottom of the nav (plus 3.5% of the viewport height) and the baseline, divided by 0.88.

  Turn each width into a font-size using the measured width per em. The result is about 290–295 px at 1440×900.
- **Baseline**: on landscape and desktop screens it sits at 43% of the stage height. That's just below the man's head top, so his head overlaps the lower part of "mm" and the tallest towers just touch the letters' feet. On portrait screens (height more than 1.2 × width), where the man is much larger, it sits at 36.2%, so his head only touches the base of the word.
- **Kicker**: its font-size is 0.118 × the word's size. Its top sits at the baseline minus the cap height (0.727 em) minus 0.02 em, so it rests on the cap line between the tall S and the lowercase letters. It's shifted 0.1 em left of centre.
- **Layering**: because the mid layer is above the headline, the city overlaps the word's feet. Because the front layer is above that, the man's head overlaps the word.

## 7. Opening layers (above the stage)

- An "opening" box covering the hero (z-index 6) holds the aerial still and, on top of it, the tilt video. Both are object-fit cover, and the video starts transparent.
- A "doors" box covering the hero (z-index 7) holds two panels, each 50% wide and full height. Both use the door image at background-size 200% 100%. The left panel shows the image's left half (background-position 0 50%) and the right panel its right half (100% 50%). Together they show the whole closed door, with the seam exactly in the centre.

## 8. The intro timeline (7.4 s, measured from the reference reel)

One master clock. Every element is a Web Animation of the full 7.4 s duration with fill "both". Keyframe offsets are time ÷ 7400, and each keyframe carries the easing to the next one. The animations are created paused, and one requestAnimationFrame loop sets every animation's currentTime to the elapsed time. The intro starts only once the door image, the aerial, all three layer images and the tilt video (canplaythrough) are ready, plus a 120 ms pause. A failsafe starts it at 5 s regardless.

| Time (s) | Element | Motion |
|---|---|---|
| 0.02 → 1.13 | Left door | translateX 0 → −101%, cubic-bezier(.1,.2,.8,1) |
| 0.02 → 1.24 | Right door | translateX 0 → 101%, cubic-bezier(.4,.6,.9,1) |
| 1.19 → 1.47 | Tilt video | opacity 0 → 1, ease-in-out (blends with the identical aerial still underneath) |
| 1.25 → 2.85 | Tilt video playback | The whole 5.04 s clip plays inside this 1.6 s window, so playbackRate ≈ 3.13. Every frame, the rate is nudged toward the target time ((t − 1.25 s) ÷ 1.6 s × clip length), clamped to 0.85–1.2 × the base rate. At the end of the window the video is paused on its final frame. The clip eases in and out by itself (7% of its motion by 0.5 s of clip time, 96% by 3.5 s). |
| 2.45 → 2.95 | Opening box (aerial + video) | opacity 1 → 0, cubic-bezier(.45,0,.55,1). The video is already at rest on its final frame, which is the back and mid layers stacked, so there's no visible change except the start of the rain. |
| 2.45 → 2.75 | Nav | opacity 0 → 1, translateY −6 px → 0, ease-out |
| 2.45 → 3.10 | Kicker | opacity 0 → 1, translate 0 0.5em → 0, cubic-bezier(.2,.65,.3,1) |
| 2.45 + i × 0.054 → +0.70 | Letters S, u, m, m, i, t (i = 0–5) | opacity 0 → 1, translateY 0.14em → 0, cubic-bezier(.2,.65,.3,1). They reveal left to right, spread over 0.27 s. |
| 2.40 on | Rain video | starts playing (see section 9) |
| 2.90 → 3.70 | Top shade | opacity 0 → 1, ease-in-out, so the sky doesn't darken in one step at the handoff |
| 2.90 → 4.30 | Back layer | translateY 0 → −1.5%, cubic-bezier(.45,0,.35,1) |
| 2.90 → 4.30, hold to 4.60, → 6.90 | Mid layer | translateY 0 → −4% with cubic-bezier(.45,0,.3,1), hold, then −4% → 0 with cubic-bezier(.45,0,.55,1). The city rises over the word's feet, then sinks back to uncover them. |
| 3.00 → 4.80 | Headline block | translateY 6% → 0, cubic-bezier(.3,0,.4,1). The word drifts up after its reveal. |
| 3.35 → 6.00 → 7.30 | Front layer | translateY 66% (fully below the frame) → −2.5% with cubic-bezier(.2,.5,.2,1). Most of the rise is done by about 4.5 s. Then it settles −2.5% → 0 with cubic-bezier(.45,0,.55,1), a soft bob at the end. |
| 7.4 | Everything | at rest. The intro class is removed and the opening and door boxes are hidden. |

Start states, applied while an "intro" class is on the hero so nothing flashes before the clock starts: the nav at opacity 0, the letters and kicker at opacity 0, and the front layer at translateY 66%.

## 9. The rain loop (back layer)

There are two video elements with the same rain clip, stacked on the back image. Each is muted, plays inline, preloads, starts at opacity 0, and has a 0.7 s linear opacity transition. "On" means opacity 1. The loop uses only the first 3.6 s of the clip, because its colour drifts after that.

1. When rain starts, video A goes to time 0, turns on, and plays.
2. On timeupdate, when the active video passes 3.6 − 0.75 s, the other video goes to 0, plays and turns on, and the active one turns off. The 0.7 s crossfade hides the seam.
3. The faded-out video pauses 0.8 s later.
4. The two videos keep swapping like this indefinitely.

## 10. Small screens

- **Below 820 px wide**: u becomes 1 px and the nav reflows.
  - First row: the wordmark (14 px, letter-spacing 0.22em) on the left; on the right, Eng (13 px, 16 px globe) and the Enquire button (36 px tall, padding 0 16px, 13 px).
  - Second row, full width with 12 px between rows: the pill bar, 40 px tall with 4 px padding. Its links are 32 px tall, 12 px text, padding 0 10px, and stretch to fill the bar.
  - The nav sits 16 px from the top with 18 px side padding.
- **At 360 px and narrower**: links shrink to 11 px with 6 px padding.
- **Short landscape screens** (height up to 500 px):
  - The nav is one row, 12 px from the top, 34 px tall, with 24 px side padding.
  - Wordmark 13 px; 12 px text everywhere else.
  - Enquire button 32 px tall.
  - The pill bar is centred, 34 px tall with 28 px links.
- **The stage**: it always covers the screen, so on a portrait phone it's the full height and is cropped at the sides, keeping the man centred. The headline follows the sizing and portrait-baseline rules in section 6.
- **Checked sizes**: 1440×900, 1536×686, 390×844, 360×640, 844×390 and 768×1024. None scroll sideways.

## 11. Reduced motion

If the visitor prefers reduced motion, skip the intro and show the final frame at once: doors and opening hidden, everything at rest, no videos playing. The back layer's still image stands in for the rain.

## 12. Acceptance checklist

- The doors split from the exact centre and are gone by 1.24 s.
- The rooftop pool turns into the tilt with no pop.
- The skyline doesn't jump at the handoff to layers (2.45–2.95 s).
- "Summit" reveals left to right while rising, and the nav fades in at the same time.
- The city overlaps the word's feet during 3–4.6 s, then sinks back.
- The man is fully hidden until about 3.4 s, rises, overshoots 2.5% and settles by 7.3 s.
- His head overlaps "mm" on desktop and touches the word's base on phones.
- The rain loop never visibly restarts.
- The nav and button are readable and clickable at every checked size.
- Nothing scrolls horizontally.
- No console errors.
