# Remit Race — Prompt

```
Create a single mobile phone screen mockup (393x820px) centered on a dark background (#050410). The phone frame has border-radius 28px, no border, and a deep box-shadow (0 30px 80px rgba(0,0,0,0.6)). The phone background is #0c0a16. Inside, scale the content area (300x626px) up by 1.31x using CSS transform.

**Fonts:**
- Google Fonts: Inter (300-700) and Quicksand (300-700)
- Custom font "Qanelas-Heavy" loaded from:
  - woff2: https://db.onlinewebfonts.com/t/3010f9da43a41a81d5daa32bd6edebc2.woff2
  - woff: https://db.onlinewebfonts.com/t/3010f9da43a41a81d5daa32bd6edebc2.woff

**Navigation bar** (top, padded 25px 16px 0 16px, flex space-between):
- Left: Logo text "nova" (Quicksand 600, white) + "pay" (Quicksand 300, #e7e3f2) + a 10px purple dot (#7f52ef) with 5px left margin
- Right: Two pill buttons:
  - "What is?" — 9.5px Inter 400, color #d9d5e8, border 1px solid rgba(255,255,255,0.3), padding 9px 13px, border-radius 999px
  - "Create a team" — 9.5px Inter 500, color #a483f5, border 1.5px solid #504081, padding 9px 13px, border-radius 999px

**Ghost text** (absolute, top -19px, left -19px):
- "ONE GLOBE, ONE FUTURE" (line breaks after each word pair)
- Qanelas-Heavy 68px, line-height 0.72, color #16112b, opacity 0.5, uppercase

**Hero section** (margin-top 44px):
- Lock icon circle (44px, background #01010e, centered above the card):
  - SVG lock icon 18px, stroke #7f52ef, stroke-width 2, rotated -12deg
- Hero card (94% width, max 290px, centered, padding 12px 18px, border-radius 20px):
  - Background: linear-gradient(120deg, rgba(203,191,255,0.11), rgba(203,191,255,0.09))
  - Backdrop-filter: blur(18px)
  - Text: "THE COMPETITION IS LIVE NOW!" — Qanelas-Heavy 37px, line-height 0.98, color #7442e9, uppercase, left-aligned, white-space nowrap, with line breaks after "THE" and "COMPETITION"

**How to win section** (centered, margin-top 26px):
- Badge pill: "HOW TO WIN BIG!" — 9px Inter 600, color #d9d5e8, background #17142a, border-radius 999px, padding 5px 11px, with a 6px purple dot (#7f52ef) to the left
- Text below (margin-top 16px): "Transfer $1 Around the world, Win $30,000!" — 18px Inter 400, line-height 1.25, color #f2f0f8, left-aligned, line break after "the"

**Video/Globe section** (absolute, left 0, right 0, bottom -100px, height 540px, overflow hidden):
- Video element with class "globe-img":
  - src: https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260706_033111_a61458df-1103-4d80-95d8-82aef099bbf2.mp4
  - autoplay, muted, loop, playsinline
  - Positioned: absolute, left 50%, bottom 0, transform translateX(-50%), width 135%
- Gradient fade overlay (::after pseudo): bottom 100px of container, height 20%, gradient from transparent to #060410

**Countdown bar** (absolute, bottom 44px, centered, width 272px, height 40px):
- 4 overlapping pill segments layered left-to-right with increasing z-index:
  - Segment 1 (left:0, full width): clock SVG icon (11px, stroke #b7a4f0) + "12 days" — bg rgba(33,24,62,0.72)
  - Segment 2 (left:70px): "23 hs" — bg rgba(38,28,72,0.78)
  - Segment 3 (left:126px): "12 min" — bg rgba(44,33,84,0.84)
  - Segment 4 (left:182px): "30 seconds" — bg rgba(50,38,96,0.9)
- All segments: 10.5px Inter 600, color #f4f1fb, border-radius 9999px
- Labels ("days", "hs", "min", "seconds"): font-weight 400, color #cabfe6

**"left to win!" text** (absolute, bottom 26px, centered, 12px Inter 500, color #f4f1fb)

**Global zoom:** The entire phone is rendered at zoom: 0.78 for display purposes.
```
