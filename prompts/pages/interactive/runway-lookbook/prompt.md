# Maison Vell — Runway Depth Lookbook (exact recreation prompt)

Give me a single-file, full-viewport fashion page called **Maison Vell**. Six models stand in one line that recedes from the right of the screen into a blurred distance on the left. Dragging, scrolling or pressing the arrow keys walks the whole line forward: the front model grows and slides out behind the product column, everyone else takes the next place, and a new model arrives out of the haze at the back. The product column on the right scrolls in sync, and a big look number rolls over at bottom left. It loops forever.

Plain HTML, CSS and one vanilla script in one file, with no libraries. The only external resources are the Google Fonts and the two image sheets below. Reproduce every value, string and timing exactly, and use the complete code at the end as the source of truth.

Six rules define it:
1. **One number drives everything.** `p` is the current look position as a float. Each model's depth is `d = wrap(i - p, 6)`, moved into the range -1 to 5. Model, product column and look number are all computed from `p` alone.
2. **Depth is a table, not a formula.** Each model's position, size, blur and opacity are read from seven stops, one per depth from -1 to 5, and interpolated linearly.
3. **Two sprite sheets, cropped with SVG.** All six models come from one transparent image and all twelve products from another. Each is shown through an inline `<svg viewBox>` holding a nested `<svg>` so nothing outside the box can ever show.
4. **Layers scale, they do not resize.** Models are laid out once at 1.2 × stage height and only `transform` changes, so they stay sharp. Blur is divided by the scale so it looks the same on screen at any depth.
5. **Drag is direct, release snaps.** During a drag `target` follows the pointer. On release, or 150 ms after the wheel stops, it rounds to a whole look. `p` always chases `target` with an exponential ease.
6. **The product column wraps.** Twelve cards sit on one looping track, so scrolling never ends.

---

## 1. Page basics

- Title: `Maison Vell`
- Meta description: `A runway lookbook where six looks stand in a line into the distance and every drag brings the next one to the front.`
- Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Michroma&display=swap`, with preconnects to fonts.googleapis.com and fonts.gstatic.com (crossorigin). The supplied standalone file embeds the latin woff2 files as base64 instead.
- Michroma, uppercase, wide-tracked, for the logo, tabs, nav, headings, labels and look number. Inter for the paragraph and prices.
- Colours: ink `#16191f`, mid `#737b86`, dim `#a4adb8`, white page, rail `#f3f6fa`.
- Unit: `--u:min(calc(100vw/1600),calc(100vh/900))`, which becomes `1px` at 820px wide and below.
- `.page` is `100svh` tall, `min-height:520px`, a grid of header then main. Body has `overflow:hidden`.
- A fixed `.wait` cover in `#f1f5fa` fades over .5s once both sheets have decoded and fonts are ready.

## 2. Images (use these exact URLs)

1. Models sheet, transparent, 3840 × 2160: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261102_042056_1a704ff7-b0e5-4a9f-bbda-62392b819fb6.png&w=3840&q=85`
2. Products sheet, transparent, 2400 wide: `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261102_042057_080e85b0-b4aa-4072-8eb9-2304c7baf42b.png&w=2400&q=85`

Models are measured on a 960 × 540 sheet, all with `y` from 48 to 496. Their `x` ranges in order: 12–176 (blush feather jacket and satin trousers), 178–330 (sage pleated gown), 331–470 (champagne satin trench), 476–633 (blush billow blouse and trousers), 634–767 (powder-blue coat), 767–956 (ivory ruffle gown).

Products are measured on a 960 × 720 sheet (x0, x1, y0, y1, name, price):

| Look | Piece | Box | Name | Price |
|---|---|---|---|---|
| 15 | 1 | 26, 224, 28, 214 | Feather Jacket | $2,900 |
| 15 | 2 | 304, 412, 22, 236 | Satin Wide Leg Trousers | $1,450 |
| 16 | 1 | 530, 666, 12, 242 | Pleated Dress | $2,200 |
| 16 | 2 | 752, 922, 100, 146 | Gold Waist Belt | $420 |
| 17 | 1 | 70, 176, 246, 466 | Satin Trench Dress | $2,350 |
| 17 | 2 | 294, 422, 294, 432 | Top Handle Bag | $980 |
| 18 | 1 | 508, 688, 240, 452 | Billow Sleeve Blouse | $860 |
| 18 | 2 | 780, 890, 252, 466 | Tie Waist Trousers | $740 |
| 19 | 1 | 64, 178, 484, 698 | Powder Long Coat | $1,980 |
| 19 | 2 | 316, 396, 482, 698 | Ivory Straight Trousers | $690 |
| 20 | 1 | 530, 672, 508, 682 | Sculpted Ruffle Top | $1,120 |
| 20 | 2 | 754, 916, 484, 700 | Pleated Maxi Skirt | $1,340 |

## 3. Header

- White, padding 20u top, 46u sides, 15u bottom. First row is a `1fr auto 1fr` grid.
- Logo `Maison Vell`, 15.5u, tracking .2em.
- Tabs, 14.5u, tracking .14em, gap 48u, dim colour: `Runway` (active, ink), `The Maison`, `Lookbook`, `Shop`.
- Right, 9.5u, tracking .12em, gap 22u: `Login`, search icon, heart icon, bag icon, `Cart (0)`. The icons are 17u outline SVGs.
- Second row, 17u below, centred, 9.5u, tracking .14em, gap 60u: `Collections`, `Clothing`, `Lookbook`, `Beauty`, `Accessories`, `Our World`.

## 4. Stage

- `main` is a grid of the stage plus a `372u` rail.
- Stage background: `linear-gradient(transparent 60%,rgba(255,255,255,.72) 100%)` over `linear-gradient(90deg,#f1f5fa 0%,#e7eff6 38%,#eef4f9 62%,#f6f9fc 100%)`. It has `cursor:none`, `touch-action:pan-y` and no text selection.
- Top left at 46u, 36u: `Spring Summer 2027`, 22u, tracking .16em. Then the paragraph 16u below, 14u Inter, line height 1.62, mid colour, 390u wide: `A study in softness and strength. The new season collection from Maison Vell blends delicate textures and modern silhouettes, crafted for a more beautiful tomorrow.`
- Bottom left at 46u, 44u: `Look` and the rolling number, 29u on a 38u line, tracking .14em. Then the underlined link `Shop the look`, 9.5u, 13u below.
- Rolling number: a 38u tall window with overflow hidden holding 15, 16, 17, 18, 19, 20, 15 stacked. It moves by `-wrap(p,6) × line height`, so the numbers slide past each other.
- Each model has a soft elliptical floor shadow: `radial-gradient(closest-side,rgba(70,85,105,.24),transparent)`, 84% wide, 3.6% tall, just below the feet.

## 5. Depth table

All are fractions of stage size. Depth runs -1, 0, 1, 2, 3, 4, 5. At depth -1 the model leaves past the rail, and at depth 5 it arrives from nothing.

| Value | -1 | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|---|
| Centre X (`KX`) | 1.2 | .744 | .496 | .346 | .235 | .15 | .085 |
| Feet Y (`KF`) | 1.14 | .89 | .777 | .704 | .651 | .616 | .59 |
| Height (`KH`) | 1.18 | .832 | .574 | .436 | .334 | .258 | .19 |
| Blur px (`KB`) | 0 | 0 | 1.5 | 4 | 8 | 12 | 17 |
| Opacity (`KO`) | 1 | 1 | 1 | 1 | .86 | .5 | 0 |

`z-index` is `100 - round(d*10)`. Filter and opacity are written only when they change, and the page only repaints while `p` is moving.

## 6. Interaction

- Each frame, `p += (target-p) * (1-exp(-dt*.0072))`, with `dt` capped at 50 ms. It snaps to `target` under .0004.
- **Drag:** `target = start + dx / max(150, stageWidth*.2)`. Dragging right moves the line forward. Release rounds `target`.
- **Click:** a press that moves under 6px on a model in the line jumps to that look.
- **Wheel:** adds `clamp(deltaY+deltaX,-120,120)/420`, then rounds 150 ms after the last event.
- **Keys:** Right and Down go forward one look, Left and Up go back one. The stage is focusable.
- **Reduced motion:** `p` jumps straight to `target`.
- **Ring cursor:** 46u circle, 2.5u `#16191f` border, following the pointer at 32% per frame. While dragging it becomes an 84u × 34u pill over .22s with `cubic-bezier(.2,.8,.2,1)`. It shows only for a mouse.

## 7. Product rail

- Background `#f3f6fa`, overflow hidden. Exactly three cards fit, each `rail height / 3`. Odd cards are white.
- Card position: `y = wrap(i*card - p*2*card, 12*card)`, moved up by a full track if past the last slot, so each look's first piece lands at the top.
- Card padding 18u top and bottom, 24u sides. Heart button top left at 22u, 18u. Product image fills the remaining space, contained. Name 9.5u Michroma, tracking .14em. Price 12.5u Inter. Plus button 26u at bottom right, drawn with two 1.5px bars, rotating 90° on hover.
- Heart toggles `aria-pressed` and fills `#d8a7a0`. Plus adds one to the cart count.

## 8. Phones (820px and below)

`--u:1px`. Tabs, second nav row and all account items except the cart are hidden. Header padding 14px 16px 12px. `main` becomes a `1fr 190px` grid with the rail along the bottom as a horizontal track of 160px cards using `translate3d(x,0,0)`. The heading is 17px, the paragraph is hidden, the look number is 22px on a 30px line, and the ring is removed.

## 9. Source Code

See `index.html` for complete implementation.

