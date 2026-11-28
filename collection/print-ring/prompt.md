# OMBRY: a night-portrait portfolio hung on a 3D ring of prints

Build one full-screen, non-scrolling page for a fictional photographer, OMBRY. Fourteen photographic prints of different sizes hang by their top edges from a dotted circular rail, seen almost level, so about six face the viewer and the rest show faintly through the gaps. Scrolling or dragging turns the ring endlessly. The paper trails and flares with speed. A vertical drag tilts the camera until the ring is a circle seen from above. A click turns the same ring into a project page: the rail straightens, the other prints roll up into it, and the chosen print glides left and grows. A Dark button floods the page from the button outward like a drop of liquid.

Everything is one HTML file with plain JavaScript and WebGL2. Use no libraries and no build step. Nothing moves on load and nothing turns by itself. All motion answers input.

Units: CSS pixels, seconds and radians unless said otherwise. W and H are the viewport width and height. "Smoothstep" is t²(3−2t) with t clamped to 0..1. "Approach at rate r" means moving a fraction 1 − e^(−r·dt) of the remaining distance each step. All named cubic-béziers are standard CSS cubic-béziers, solved for x.

## 1. Media

Four generated photo sheets, each 2336×3504 and holding a 2×2 grid of 2:3 portraits. Cells are numbered 0 top-left, 1 top-right, 2 bottom-left, 3 bottom-right. Load each sheet with crossOrigin "anonymous" from the optimised URL. If that fails, load the original. On screens whose shorter side times device pixel ratio (capped at 2) is under 820, replace w=2336 with w=1400.

| Sheet | What it holds | Optimised URL | Original URL |
| --- | --- | --- | --- |
| 0 | Clear-umbrella trench portrait; profile behind rainy glass; silver suit under a lamp; gloved hands with lilac scarf | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261122_104107_4bafcf96-fa68-439e-85bb-af0d6b852e6c.png&w=2336&q=85 | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261122_104107_4bafcf96-fa68-439e-85bb-af0d6b852e6c.png |
| 1 | Plum-coat profile; distant walker; umbrella on empty cobbles; woman in a taxi | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261122_104106_ea17bea1-c68a-4d63-8805-44540b71f692.png&w=2336&q=85 | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261122_104106_ea17bea1-c68a-4d63-8805-44540b71f692.png |
| 2 | Lilac rain hood; woman on stone steps; collar macro (unused); tram shelter | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261122_104106_ff428d1d-9435-40f4-a91a-a694b86d7051.png&w=2336&q=85 | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261122_104106_ff428d1d-9435-40f4-a91a-a694b86d7051.png |
| 3 | Two women under one umbrella; woman at a river railing; puddle reflection (unused); woman in a café doorway | https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261122_104106_da9ea015-80a7-4acf-b00c-4140b08fcc00.png&w=2336&q=85 | https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20261122_104106_da9ea015-80a7-4acf-b00c-4140b08fcc00.png |

Cut each used cell into its own canvas after loading: trim = ceil(sheet width × 0.004) on all four sides of the cell, so no texture samples across a seam. Upload each canvas as a mipmapped, clamp-to-edge, trilinear texture with anisotropy up to 8. Until its photo arrives, a print shows a 1×1 texture of its placeholder colour (table in section 6).

Every person in every photo is fully covered. Use these exact images.

## 2. Fonts

| Use | Family and weight | Stylesheet | Latin WOFF2 |
| --- | --- | --- | --- |
| All interface text | Roboto, variable 100–900, used at 700 and at 500 for the project paragraph | https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=block | https://fonts.gstatic.com/s/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2 |
| Wordmark | Arvo 700 | https://fonts.googleapis.com/css2?family=Arvo:wght@700&display=block | https://fonts.gstatic.com/s/arvo/v23/tDbM2oWUg0MKoZw1-LPK8w.woff2 |

Use font-display block. Fallbacks are Arial, sans-serif for the interface and serif for the wordmark. Run layout again once document.fonts is ready. Body type is uppercase, antialiased and not selectable.

## 3. Colours

| Token | Light (the default) | Dark |
| --- | --- | --- |
| Page | #fcf7fc | #4a1448 |
| Ink: wordmark, controls, active number, values, marker | #4a1448 | #fcf7fc |
| Muted: labels, inactive numbers, focus ring | #8a6689 | #a78aa6 |
| Rail dots | #dccedc | #714670 |
| Paper border on prints 04 and 11 | #f5f2f6 | #f5f2f6 |

The photographs never recolour with the theme.

## 4. Head

- Language en, UTF-8, viewport width=device-width, initial-scale=1, viewport-fit=cover.
- Title: "OMBRY, night portraits".
- Description: "OMBRY is a photographer's portfolio of night portraits in the rain, hung as prints on a ring you can turn, tilt and open."
- Theme-colour #fcf7fc, updated to the new page colour when a theme change finishes.
- Favicon: an inline 32×32 SVG, a #4a1448 square holding a 14×14 hollow square at 9,9 with a 3 px #fcf7fc stroke.
- Preconnect to images.higgs.ai with crossorigin and preload both fonts.

## 5. Elements, exact text and desktop positions

The document is 100% high with no margin, overflow hidden and overscroll none. Body type is 13.4px/16px Roboto 700. All boxes are border-box. Buttons have no background, border or padding. Keyboard focus shows a 2 px muted outline at 3 px offset, except on the canvas.

In DOM order:

1. **Canvas**, fixed over the whole viewport, tab index 0, cursor grab (grabbing while dragged), touch-action none. Aria label: "A ring of photographs. Left and right arrows turn it, up and down tilt it, Enter opens the front print." Its backing size is the viewport times device pixel ratio, capped at 2.
2. **Print numbers layer**, fixed, full screen, z-index 2, aria-hidden, ignores the pointer, overflow hidden. One span per print, "01" to "14", tabular numerals, positioned every frame.
3. **Project section**, fixed, full screen, z-index 2, letter-spacing .03em, inert until open, ignores the pointer. Every text line sits in an overflow-hidden mask, and its inner span is moved for the reveal.
4. **Thumbnail row**, fixed, z-index 2, flex with 12 px gaps, four buttons of 72×54, positioned every frame, inert until open.
5. **Wordmark**, an h1 reading "OMBRY": Arvo 700 25px/30px, left 55, top 22, z-index 3, no wrap.
6. **Controls**, top-right: right 56, top 18.5, flex with a 36 gap, each a button 24 high: "DARK" (reads "LIGHT" in dark mode), "FRONT VIEW", "LOAD PHOTOS".
7. **Caption**, bottom-right: right 54, bottom 33, flex with a 22 gap, ignores the pointer. A counter such as "03 / 14" with 4 px word spacing and tabular numerals, then the current print's title in an overflow-hidden mask (max 34vw, ellipsis).
8. **Hidden file input**: accepts images, multiple, 1×1 and clipped, not tabbable.
9. **Fallback paragraph**, shown centred with 24 px padding in sentence case only if WebGL2 fails: "These prints need WebGL2. Please open the page in a current browser."

There are no navigation links, no loader, no hint text and no other decoration.

Project text blocks all start at left 56%:

| Block | Position | Content |
| --- | --- | --- |
| Heading | top 27% | Muted "NO 03 / 14", then the title in ink |
| Facts | top 43%, two columns (148 and auto), column gap 24, row gap 2 | Muted labels "SERIES", "MOOD", "SHOT", "WORK", with ink values |
| Note | top 64%, max width 340, sentence case, weight 500, 18 px line height, no wrapping inside a line | Three separate lines |
| Back | bottom 28, 24 high | Button "RETURN TO PRINTS" |

The WORK value is always "Portraits and lighting". SHOT is 2026 minus (zero-based print index mod 3).

## 6. The fourteen prints

Sizes and the gap after each print are in pixels of a 1440×900 frame and are multiplied by the scale in section 7. "Keep" is the horizontal and vertical share (0..1) of the cropped-away area that falls before the crop.

| No | Title | Sheet, cell | Width | Height | Gap after | Keep x, y | Placeholder | Story | Paper border |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 01 | Wool night | 1, 0 | 197 | 378 | 96 | .5, .2 | #33172f | D | no |
| 02 | Clear rain | 0, 0 | 293 | 438 | 62 | .5, .5 | #2b2029 | A | no |
| 03 | Glass rain | 0, 1 | 222 | 333 | 16 | .5, .5 | #3c2a45 | B | no |
| 04 | Lamp light | 0, 2 | 216 | 374 | 30 | .5, .5 | #4a3d50 | A | yes |
| 05 | Lilac knot | 0, 3 | 233 | 370 | 74 | .5, .5 | #30212f | D | no |
| 06 | Walks home | 1, 1 | 217 | 404 | 48 | 1, .5 | #3f2a48 | D | no |
| 07 | Wet stones | 1, 2 | 384 | 400 | 48 | .5, .75 | #38263b | F | no |
| 08 | Back seats | 1, 3 | 336 | 360 | 48 | .5, .35 | #35293a | B | no |
| 09 | Lilac hood | 2, 0 | 376 | 432 | 48 | .5, .2 | #5b465f | A | no |
| 10 | Stone step | 2, 1 | 344 | 384 | 48 | .5, .75 | #3a2f3d | D | no |
| 11 | Night tram | 2, 3 | 392 | 416 | 48 | .5, .65 | #443448 | C | yes |
| 12 | Shared sky | 3, 0 | 328 | 372 | 48 | .5, .3 | #392638 | E | no |
| 13 | River rail | 3, 1 | 368 | 420 | 48 | .5, .3 | #33283a | E | no |
| 14 | Warm doors | 3, 3 | 373 | 392 | 48 | .5, .2 | #3b2230 | B | no |

| Story | Series | Mood | Note line 1 | Note line 2 | Note line 3 |
| --- | --- | --- | --- | --- | --- |
| A | Street rain | Nocturnal | Shot after midnight, in steady rain | with one street lamp to light the face, | and the wet road as a reflector. |
| B | Window rain | Tailored | Seen from the dry side of a window, | where every drop bends the city lights, | and the face is left half found. |
| C | Quiet hours | Profiles | An hour between the last two trams, | spent waiting for a person to turn away | just far enough from the lights. |
| D | Night coats | Wet street | Long wool, high collars, cold hands | photographed slowly on a long walk home | as the shop signs went out late. |
| E | River night | Cine stills | Made along the river after a storm, | on fast film pushed two stops for grain | then printed softly on warm rag. |
| F | Empty roads | Wet street | The city after everyone has gone in | with only the things they have left out | lying in the light of the lamps. |

The page starts resting on print 03, with the caption "03 / 14 GLASS RAIN".

## 7. Scale and ring geometry

There are three layout tiers: **tall** when W/H ≤ 1.05; otherwise **short** when H ≤ 520 or W ≤ 860; otherwise **wide**.

- Scale S in tall = the smaller of 0.46H/504 and W/430.
- Scale S in wide and short = the smaller of W/1180 and [the smaller of 0.56H and max(560, 0.315W)]/504.
- H0 = 504S. The small-detail unit U = max(S, 0.68).
- Each print's rail position is the running sum of widths and gaps, taken at the print's centre. Circumference = that total, but at least 2π·420·S. Radius R = circumference/2π (about 794 at 1440×900).
- The lens is a 30° vertical field of view. Near distance D = (H/2)/tan(15°), so one scene unit at the front is one pixel. Clip planes are 20 and 16000.
- A point x along the rail measured from the front, at curvature k, sits at X = sin(kx)/k, Z = R − 2sin²(kx/2)/k, with outward normal (sin kx, 0, cos kx). When k is below 0.000001 it sits at X = x, Z = R, normal (0,0,1). Y is 0 at the rail and negative downward. The closed ring has k = 1/R.
- The ring position is a continuous number where one unit is one print. Convert it to pixels by interpolating between neighbouring print centres, wrapping endlessly by the circumference.
- Render with antialiasing, depth testing, an opaque canvas and clockwise front faces. Draw order: full-screen page colour without depth, then prints, then rail.

## 8. Camera

For pitch p (0 is level, positive looks down from above), with steep = 1 − cos p:

- Lift of the camera target = −H0(0.546 − 0.322·steep).
- Vertical lens shift = 0.0714·H0·(1 − steep) pixels downward, applied to the projection, so the horizon sits slightly below the middle and the rail falls away at both sides.
- Distance = the largest of: R + D; [2R|sin p| + H0 cos p]/(0.92·2·tan 15°); and, when W < H, 2R|sin p|/(0.92·2·tan 15°·W/H). This keeps the whole circle in view when tilted.
- The eye is at X = pan, Y = lift + sin p·distance, Z = cos p·distance, looking along the pitch at the ring's axis.

Pitch, lift and distance each follow their goals with a softened, critically damped spring: first the spring's own goal approaches the target at rate 5, then velocity += [ω²(goal − x) − 2ω·velocity]·dt and x += velocity·dt. ω is 5 for pitch, 3.2 for lift, 3 for distance and 3.5 for the project zoom and height.

## 9. Prints: mesh, paper and shading

Each print is a sheet of 12 columns by 14 rows with u across and v from 0 at the rail to 1 at the free edge.

- Looseness = v^1.7.
- Position along the rail = print centre from the front + (u − 0.5)·width + sway·looseness, placed on the curve.
- Then push along the outward normal by flare·looseness.
- Y = −height·v + hem lift·v².
- Photos cover their print (crop, never stretch), placed by the keep values. A bordered print insets the photo 6.2% of the width on the sides and the same pixel amount at the top, with a bottom inset 1.55 times the top inset. The paper edge is antialiased.
- Multiply colour by 0.9 + 0.12·(normal · normalised(−0.45, 0.35, 0.82)).
- Back faces show the same photo mirrored through the paper. Let g = smoothstep from 0.35 to 0.9 of the page colour's green channel. Mix the photo toward the page colour by 0.22 at g = 0 up to 0.70 at g = 1, then add (1 − g)·0.09 to brightness.
- A print rolled up by amount s discards every fragment with v > 1 − s. At s ≥ 0.993 it is not drawn.
- Far-side amount F = smoothstep of (|angle| − π/2)/(0.35π). The effective roll is the larger of the print's own roll and veil·F, with veil defined in section 13.

## 10. Rail, marker and numbers

- Dots: between each pair of neighbouring print centres place round(distance/(16U)) evenly spaced dots, at least one, so one is exactly over every centre. Each is a ten-sided polygon 6.6U across, centred 12.5U above the rail.
- Dots turn with the ring and shear at the top by tanh(r)·0.9·0.6·size, where r is the ripple value recorded |angle|/π × 0.5 seconds ago (section 12). A dot's colour mixes to the page colour by veil·F.
- Marker: fixed at front centre, a 16U square in ink, 1.5 units in front of the rail, with a page-coloured centre 2.5 units in front and inset 3.5U. It never turns or leans. Any part of a dot inside the marker is drawn again 3.5 units in front in the page colour.
- Each number is anchored at the print's leading edge + 8U along the rail and 30U above it, drawn 8 px above the projected point. The front print's number is ink and the others muted.
- Number opacity = [0.28 + 0.72·smoothstep((cos(angle·(1−flat)) + 0.2)/0.7)] × (1 − roll) × (1 − hidden).
- "Hidden" approaches, at rate 11, how far the number is behind a nearer front-facing print: smoothstep((signed distance inside that print's outline + 6)/16) × that print's facing clamp((cos − 0.08)/0.3) × clamp((depth difference − 4)/60).
- Hide a number entirely if it leaves the viewport or would touch the wordmark, a control or the caption.

## 11. Turning

Run two equal simulation steps per animation frame, with frame time clamped to 1/240..1/30.

**Wheel.** Use the larger of deltaX and deltaY (line units ×33, page units ×H), divided by the pixel distance from the current print to the next, and add it to the target. Prevent page scrolling but leave Ctrl+wheel to browser zoom. The goal approaches the target at rate 5. Position follows the goal on a critically damped spring of stiffness 30. 0.16 s after the last wheel event, round the target to a whole print.

Check values for a target of two prints: 0.25 at 0.2 s, 1.12 at 0.5 s, 1.83 at 1 s, 1.98 at 1.5 s, at rest by 2.5 s.

**Drag.** It begins after 6 px of movement. The target = its starting value − dx/(distance to next print). The goal equals the target, with stiffness 140. Tilt = starting tilt + 0.28° per pixel of downward movement, clamped to −78°..84°. On release, if speed exceeds 0.4 prints/s, carry 0.3 s of velocity (never short of the goal in that direction), round to a print, and go one further if that would stop less than 0.14×speed ahead. Otherwise round to the nearest print.

**Steps.** Left and Right arrows glide one print with cubic-bezier(.45,0,.12,1) over 1.5 s. Opening a distant print uses the same glide, plus 0.2 s per extra print, capped at 2.2 s. Glides add to the spring position and can overlap.

**Tilt.** Up and Down arrows change tilt by 12°. FRONT VIEW sets it to 0 through the same springs. From 0 to 84° reads about 17° at 0.3 s, 58° at 0.7 s, 81° at 1.4 s.

## 12. Paper physics

Each step, from the ring's position X in pixels along the rail: acceleration = second difference/dt², clamped to ±30000; spin = velocity/R.

For each print, w = 2π·1·√(H0/height):

- Sway velocity += [0.85·acceleration − w²·sway − 2·0.34·w·velocity]·dt. Clamp sway to ±0.6 height.
- Flare velocity += [spin²·R − w²·flare − 2·0.7·w·velocity]·dt. Clamp flare to 0..0.8 height.
- Drawn sway = 0.2h·tanh(sway/0.2h). Drawn flare = 0.34h·tanh(flare/0.34h).
- Hem lift = (drawn sway² + drawn flare²)/(2h)·0.7.

The rail ripple is one spring: w = 2π·2.4, damping 0.3, driven by 0.1·acceleration. Keep 256 steps of history for the delayed lean.

Reset the previous-position history on resize so a layout change cannot kick the paper.

## 13. Opening a project

Clicking any front-facing print (cosine of its angle at least 0.15, hit-tested on its curved outline) opens it. Enter or Space opens the front one. The ring turns it to the front by the shorter way while all of this runs:

- Progress P goes to 1 over 2.4 s on cubic-bezier(.25,1,.5,1). Flat = P², and curvature = (1 − flat)/R, so the ring straightens into a line.
- Blend by P: pitch to 0, lens shift to 0, distance to R + D/zoom, lift to (top − H/2)/zoom, pan to (W/2 − centre X)/zoom.
- In wide: zoom = max(1, min(0.72H/height, 0.42W/width)), centre X = 0.27W, top = H/2 − zoom·(height/2 + 8U).
- Other prints roll up into the rail: each 1.75 s on cubic-bezier(.86,0,.07,1), ordered nearest first and 0.06 s apart by rank, rank capped at 8. The chosen print is rank 0 and stays down.
- The veil's goal is smoothstep(elapsed/1.7), never less than its value when opened. It passes through two cascaded approaches, rate 9 while rising and 2.4 while falling.
- At 1.5 s the words rise from translateY(105%) to 0: 1 s on cubic-bezier(.22,1,.36,1), delayed 0.055 s per line in DOM order.
- Thumbnails appear at the same moment by clip-path from inset(0 0 100% 0) to inset(0): 1.1 s on the same curve, delayed 0.3 s + 0.07 s each. The row's left edge follows the print's bottom-left corner, 16 px below it in wide and 8 px otherwise.
- The caption shows the opened print after 2.4 s, however it is moved afterwards.

While open, a horizontal drag slides the print along the rail, but its edges stay 24 px inside the screen.

## 14. Thumbnails and the ink-soak photo change

The four thumbnails are the opened print and the next three, wrapping. Show each from its sheet by CSS background crop: background width 2× the thumbnail, cell height 1.5× the thumbnail width, vertical offset inside the cell at clamp(0.7 × keep y) of the spare height. The wanted one has opacity 1 and the others .55, changing over .9 s on cubic-bezier(.22,.61,.36,1).

Hover counts after 0.06 s. Leaving sooner cancels it. A click counts at once. A change always finishes before the next starts. It takes 2 s with progress e on cubic-bezier(.22,.24,.6,.84) and soaks outward from the centre of the chosen thumbnail:

- Work in print heights from the print's top-left. Origin x = (row shift + slot·(thumb width + gap) + thumb width/2)/zoom/height; origin y = 1 + (16 + thumb height/2)/zoom/height.
- The front radius runs from nearest − 0.5·0.56 − 0.03 to farthest + 0.34 + 0.03 + 0.01 by e, where nearest and farthest are the distances from the origin to the print.
- d = fragment distance from origin − front − wave·sin(3·polar angle + time·0.7). Wave = 0.03(1 − 0.7e).
- Wetness = [1 − smoothstep(|d| from 0 to 0.5 ahead of the front, or 0 to 0.34 behind)]², times smoothstep(elapsed/0.14).
- Push both photos outward by wetness·0.02 of the height.
- Blur spread = 1 + (2^(3.7·wetness) − 1)·(print height on screen)/600. Take ten gradient-sampled taps on a golden-angle spiral (2.39996 rad), radius √((i+.5)/10)·0.62·(spread−1) pixels, gradients widened to 1 + 0.42(spread−1).
- Share of the old photo = smoothstep of d from −0.26 to +0.26.

The result is the old picture going soft and melting into the new, which dries sharp behind the front. It has no hard line.

## 15. Returning to the ring

RETURN TO PRINTS, Escape, a click on the stage, any arrow left or right, Enter or Space, or the first wheel event closes the project. That wheel event only closes. Wheel input is then ignored for 0.9 s, extended by 0.25 s while events keep arriving.

- Words and thumbnails leave together in .28 s on cubic-bezier(.4,0,1,1).
- P goes to 0 after 0.15 s, over 2.8 s on cubic-bezier(.65,.04,.4,1).
- Prints unroll after 0.4 s, each 2 s on the same curve, 0.07 s apart by the same rank.
- The veil's goal becomes clamp(14·flat), so the far side returns slowly and the seam of the opened line is never seen.
- The print soaks back to its own photo. Tilt returns to 0. If the page was fully open, set the ring camera to level at once, because it is out of view. Focus returns to the canvas.

## 16. Dark and light

DARK or LIGHT starts a drop at that button's centre. Ignore further clicks until it ends. The label swaps at once.

- 1.9 s, e on cubic-bezier(.65,.04,.4,1).
- Radius = e × [1.12 × distance to the farthest corner + 8], multiplied by 1 + 0.05(1−e)·sin(3·polar angle + time·1.4).
- Inside is the new theme and outside the old, with a 2 px antialiased edge. Page, rail, dots and marker all read this in the shader. Paper backs mix toward the page colour under each pixel.
- Text changes exactly at the edge: during the drop give every ink and muted text element a transparent colour and a background-clip:text radial gradient centred on the drop in its own coordinates, new colour to r and old colour from r + 1.5, with r evaluated at that element's angle. Afterwards remove the gradients and set the theme on the root element.

## 17. Caption

The counter and title follow round(position). When the title changes, its text rises from translateY(105%) to 0 over 0.9 s on cubic-bezier(.16,1,.3,1). It does not animate on first paint.

## 18. Visitor photos

LOAD PHOTOS opens the file picker. Images can also be dropped anywhere. Take up to 24 image files, downscale each to at most 1600 px on canvases while the old ring keeps running, then replace all prints at once and rest on the first. Nothing is uploaded.

- Heights cycle H0 × 1, .74, .88, .66, .82, rounded to 4 px. Widths follow the photo's aspect, clamped .68..1.5, at most 70% of W, rounded to 8 px. Gaps are 32 px.
- The title is the file name without extension.
- Project values: Series "Your photos", Mood "As loaded", Shot the current year, Work "On this device only". Note: "Your photograph, hung on the ring." / "It has not been uploaded anywhere" / "and is gone when the page closes."
- Thumbnails use object URLs, revoked on replacement.

## 19. Responsive layouts

Apply in this order. Later rules win.

| Condition | Type | Wordmark | Controls | Caption | Project text | Thumbnails |
| --- | --- | --- | --- | --- | --- | --- |
| Aspect ≥ 21/20 and width ≤ 1100 | 12.5px | left 28 | right 28, gap 24 | right 28, gap 16 | left 53%; facts 84 + auto, gap 16 | 72×54, gap 12 |
| Width ≥ 2100 and aspect ≥ 21/20 | max(17px, .8vw), line height 1.22 | left 3.2vw, top 2.1vw, 1.6vw/1.2 | right 3.2vw, top 2.2vw, gap 2.2vw | right 3.2vw, bottom 2.3vw, gap 1.4vw | facts 9vw + auto; note max 24vw, line height 1.35; back bottom 2.1vw, height auto, min 24 | 120×90, gap 18 |
| Aspect ≥ 21/20 and (height ≤ 520 or width ≤ 860) | 11.5px/15px | left 20, top 10, 20px | right 20, top 13, gap 18 | right 20, bottom 14, gap 12 | one centred flex column, left 47%, right 16, top 60, bottom 46, gap 14; facts 62 + auto, gap 12, row gap 0; note 11px/15px; back left 47%, bottom 10 | 48×36, gap 6 |
| Aspect ≤ 21/20 | 12.5px | left 24, top 18 | right 24, top 21, gap 24 | right 24, bottom 24, gap 16 | flex column left 24, right 24, bottom 68, gap 14; facts 92 + auto, gap 16, row gap 0; back left 24, bottom 20 | 60×45, gap 8 |
| Aspect ≤ 21/20 and width ≤ 560 | 11.5px/15px | left 16, top 12, 22px | second row: left 16, right 16, top 46, gap 20 | right 16, bottom 16, gap 10 | left 16, right 16, bottom 56, gap 12; facts 70 + auto, gap 12; note 11px/15px; back left 16, bottom 12 | 52×39, gap 7 |
| Width ≤ 400, project open | | | | hide only the title, which the heading already shows | | |

Open-print box outside wide:

- Short: room = H − 72 − (thumb height + 8) − 10; zoom = min(room/height, 0.39W/width); centre X = 0.235W; top = 72 + half the spare room.
- Tall: head = 108 up to 560 px wide, otherwise 100; room = max(40, top of the text column − 16 − (thumb height + 8) − head); zoom = min(room/height, 0.78W/width); centre X = W/2; top = head + half the spare room.
- In both, slide the thumbnail row horizontally so it stays at least 12 px inside the screen and, in short, ends 10 px before the 47% text column. The soak origin follows that shift.

On phones the ring runs off both sides with the front print whole. Touch drags turn and tilt, a tap opens, and every control and every project line stays visible. No text is under 11 px and no target under 24 px.

On resize, rebuild the layout, snap the camera springs to their new goals and keep an open print on screen.

## 20. Reduced motion and robustness

With prefers-reduced-motion: positions, tilt and zoom jump to their goals; sway, flare, ripple and the title rise are off; every timed move takes 0.01 s without delays; CSS transitions take 0.01 ms.

On WebGL context loss prevent the default, and reload when it is restored. Escape always closes a project. Enter or Space on a focused button presses that button and does not toggle a project. A project and its thumbnails are inert while closed.

## 21. Motion summary

| Move | Delay | Duration | Easing or spring |
| --- | --- | --- | --- |
| Wheel turn | 0 | about 2.5 s to rest | goal rate 5, stiffness 30, critical |
| Snap after scrolling | 0.16 s | by the same spring | as above |
| Drag | 0 | live | stiffness 140, critical |
| Arrow step | 0 | 1.5 s | .45,0,.12,1 |
| Tilt and front view | 0 | about 2 s | ω 5, softened |
| Open: camera and rail | 0 | 2.4 s | .25,1,.5,1 |
| Open: roll up | 0.06 s × rank | 1.75 s | .86,0,.07,1 |
| Open: words | 1.5 s + 0.055 s × line | 1 s | .22,1,.36,1 |
| Open: thumbnails | 1.8 s + 0.07 s × index | 1.1 s | .22,1,.36,1 |
| Photo soak | 0.06 s on hover, 0 on click | 2 s | .22,.24,.6,.84 |
| Close: words | 0 | 0.28 s | .4,0,1,1 |
| Close: camera and rail | 0.15 s | 2.8 s | .65,.04,.4,1 |
| Close: unroll | 0.4 s + 0.07 s × rank | 2 s | .65,.04,.4,1 |
| Theme drop | 0 | 1.9 s | .65,.04,.4,1 |
| Title rise | 0 | 0.9 s | .16,1,.3,1 |

## 22. Acceptance checklist

- At 1440×900 the rail's front sits at y ≈ 198 and the print tops at y ≈ 211. The ring is about 1140 wide, with print 03 centred under the hollow square marker and six prints readable across the front.
- The first frame is the finished ring. Left alone it stays still.
- Scrolling down and up loops endlessly, the prints trail and flare outward, then hang straight on a print with no visible snap.
- Dragging down ends in a full circle that fits the screen. FRONT VIEW returns it.
- Opening straightens the rail, rolls the neighbours up nearest first and leaves the print large on the left with words on the right. Closing reverses it with no visible seam.
- Thumbnails soak in from their own position with no hard edge.
- The theme drop starts at the button and the text changes at its edge.
- All four sheets and both fonts load with no console errors. The layout works from 320×568 to 2560×1440, portrait and landscape, with no overlaps and nothing cut off.
