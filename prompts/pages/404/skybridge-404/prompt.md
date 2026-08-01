<!-- 在下方粘贴提示词原文 -->

# 提示词

```text
Create a single-page, full-viewport 404 error screen in React + Vite + Tailwind CSS v4. Match this composition precisely.

PAGE / CANVAS
- The page must occupy the full viewport: `min-height: 100svh`.
- Use a black fallback background.
- Do not add page scrolling horizontally. Allow vertical scrolling only if a very short viewport requires it.
- The page should be responsive while preserving the desktop composition at larger sizes.
- Use no cards, buttons, nav links, gradients outside the 404 numerals, texture, glass, dark overlay, blur overlay, or any additional UI.

BACKGROUND VIDEO
- Add this exact MP4 as the full-page background:
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_001207_ec20d138-aa45-4b2b-ab8c-bdc71607f240.mp4`
- Use a semantic `<video>` element, placed as the first child inside the page.
- Required video attributes:
  - `autoPlay`
  - `loop`
  - `muted`
  - `playsInline`
  - `aria-hidden="true"`
- The video must be absolutely positioned at `inset: 0`, with `width: 100%`, `height: 100%`, and `object-fit: cover`.
- Video opacity must be exactly `1` / `100%`.
- Do not apply any dark, black, colored, translucent, gradient, blur, blend-mode, or tint overlay over the video.
- The logo and 404 content must appear above the video with a higher z-index.
- Do not add animated CSS effects to the video; let the video’s own motion be the only background animation.

FONT
- Use the exact imported Figma font face:
  - Family / CSS family: `"Geist Mono:SemiBold"`
  - Weight: `600`
  - Style: `normal`
  - Format: `woff2`
  - Source URL: `https://static.figma.com/font/GeistMono_wght__1`
- Declare it using:
  ```css
  @font-face {
    font-family: "Geist Mono:SemiBold";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("https://static.figma.com/font/GeistMono_wght__1") format("woff2");
  }
  ```
Use this font for the large “404” and the message text.
Preserve its compact mono character and semibold weight.

HEADER LOGO

Position the logo centered horizontally at the top of the page.
On desktop:
top: 80px
left: 50%
transform: translateX(-50%)
Total logo frame size: 233px × 40px.
Use white fill only.
The mark is a geometric pixel-like symbol, 54px × 40px, built from these exact SVG paths:
<svg viewBox="0 0 54 40" fill="none">
  <path d="M38 0H26V12H38V0Z" fill="white"/>
  <path d="M54 12H38V28H54V12Z" fill="white"/>
  <path d="M38 28H26V40H38V28Z" fill="white"/>
  <path d="M26 12H16V22H26V12Z" fill="white"/>
  <path d="M16 22H8V30H16V22Z" fill="white"/>
  <path d="M16 2H6V12H16V2Z" fill="white"/>
  <path d="M6 12H0V18H6V12Z" fill="white"/>
</svg>
Position the logotype 14px to the right of the mark.
The logotype SVG should use viewBox="0 0 164.311 100", white fill, and this exact path:
<path d="M122.498 37.4573H131.321L139.533 51.6222L147.772 37.4573H156.595V56.0604H152.449V37.6433L141.739 56.0604H137.354L126.617 37.6433V56.0604H122.498V37.4573ZM95.921 48.8317C92.785 48.8317 90.261 46.307 90.261 43.1445C90.261 40.0086 92.785 37.4573 95.921 37.4573H119.972V41.6031H95.921C95.071 41.6031 94.38 42.2941 94.38 43.1445C94.38 44.0215 95.071 44.7125 95.921 44.7125H114.285C117.421 44.7125 119.972 47.2372 119.972 50.3997C119.972 53.5357 117.421 56.0604 114.285 56.0604H90.261V51.9411H114.285C115.136 51.9411 115.827 51.2501 115.827 50.3997C115.827 49.5227 115.136 48.8317 114.285 48.8317H95.921ZM80.857 37.4573C84.843 37.4573 88.086 40.6995 88.086 44.7125C88.086 48.6989 84.843 51.9411 80.857 51.9411H62.254V56.0604H58.135V37.4573H80.857ZM80.83 47.7953C82.558 47.7953 83.94 46.4133 83.94 44.7125C83.94 42.985 82.558 41.6031 80.83 41.6031H62.254V47.7953H80.83ZM35.975 41.6031C33.105 41.6031 30.7927 43.9152 30.7927 46.7588C30.7927 49.629 33.105 51.9411 35.975 51.9411H51.336V48.6989H35.576V44.5796H55.482V56.0604H35.975C30.8192 56.0604 26.6734 51.9145 26.6734 46.7588C26.6734 41.6297 30.8192 37.4573 35.975 37.4573H55.482V41.6031H35.975ZM0 56.0604V37.4573H4.1192V51.9411H24.9281V56.0604H0ZM164.311 36.4177C164.311 37.7529 163.228 38.8354 161.893 38.8354C160.558 38.8354 159.475 37.7529 159.475 36.4177C159.475 35.0824 160.558 34 161.893 34C163.228 34 164.311 35.0824 164.311 36.4177Z" fill="white"/>
Do not animate the logo.

CENTERED 404 CONTENT

Position the main content group in the exact center of the viewport:
position: absolute
top: 50%
left: 50%
transform: translate(-50%, -50%)
Desktop content width: 483px.
The group is a vertically centered flex column with align-items: center, text-align: center, and a 44px gap between its three elements.
It contains exactly:
The large 404 heading
A thin horizontal divider
The error message

404 HEADING

Heading text: 404
Use the exact Geist Mono SemiBold font face.
Desktop font size: 295.751px.
Font weight: 600.
Line height: 1.1.
Letter spacing: -24.6459px.
Center aligned.
The heading needs enough bottom padding / room for the font baseline so the lower portions of the numerals are never cropped.
Do not constrain it with a clipping container.
Apply a text-only gradient:
linear-gradient(
  247.3282658084845deg,
  rgb(255, 255, 255) 2.5334%,
  rgba(255, 255, 255, 0.4) 93.612%
)
Use background-clip: text and -webkit-background-clip: text, with transparent text color.
No text shadow, no glow, no animation.

DIVIDER

Directly below the 404 heading, after the 44px vertical gap.
Width: 425px.
Height: 1px.
Solid white.
No rounded ends, opacity changes, or animation.

MESSAGE

Directly below the divider, after another 44px vertical gap.
Exact copy: The path may be broken, but the journey isn't. Let's get you back.
Use the same Geist Mono SemiBold font.
Desktop font size: 24px.
Font weight: 600.
Line height: 1.1.
Letter spacing: -2px.
White, centered.
Width should follow the main content width.
No CTA, link styling, hover effects, or animation.

LAYERING

Background video: lowest layer.
Header logo: above video.
Center 404 content: above video.
Do not use any layer between the video and the page content.

RESPONSIVE MOBILE BEHAVIOR

At max-width: 640px:
Move the header logo to top: 32px.
Visually scale the 233px × 40px logo frame down to 75% while keeping it horizontally centered.
Set the central content width to min(100% - 40px, 360px).
Reduce the vertical gap between content elements to 28px.
Scale the 404 heading using: font-size: clamp(140px, 52vw, 200px).
Use a tighter 404 letter spacing around -0.09em.
Ensure the 404 has height: auto, min-height: 0, and bottom padding so it is not clipped.
Make the divider full width of the mobile content group.
Scale message text with: font-size: clamp(16px, 4.5vw, 20px).
Use approximately -1.3px letter spacing for the mobile message.
Maintain the same centered composition and no-overlay treatment on all screen sizes.

ACCESSIBILITY / IMPLEMENTATION

Use a semantic <main> for the page.
Use an <h1> for the 404 number.
Mark decorative SVG and video as aria-hidden.
Give the brand wrapper an aria-label="LGPSM".
Use React JSX and CSS/Tailwind utilities as appropriate.
Do not add any interface functionality, transition, fade-in, hover state, mouse-following effect, or extra content.
```
