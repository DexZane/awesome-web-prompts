# Build With Us — Contact Landing Page Prompt

```text
Build a single-page React + TypeScript + Vite + Tailwind site that is a full-screen video-background landing page with a contact form. Use `lucide-react` for icons.

### Setup & Fonts
1. In `src/index.css`, import the Google Fonts and set up base/utility files:
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap');

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   * {
     font-family: 'Inter', sans-serif;
   }

### Constants
Define the following constants at the top of `src/App.tsx`:
- `VIDEO_URL`:
  `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4`
- `SERVICES`: An array of services exactly in this order:
  `['Website', 'Mobile App', 'Web App', 'E-Commerce', 'Visual Identity', '3D & Motion', 'Digital Marketing', 'Growth & Consulting', 'Other']`

### Layout & Sizing
- **Root Container**: `min-h-screen bg-white p-3 sm:p-4 md:p-6`.
- **Outer Rounded Card**: Sits directly inside the root. Style: `relative rounded-2xl sm:rounded-3xl overflow-hidden`.
  - Sizing heights: `min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]`.
  - Becomes height-locked on desktop (`lg:h-[calc(100vh-48px)]`), and content-expanded on tablet/mobile.
- **Background Video**: Fills the card. Sits absolute with video URL defined in `VIDEO_URL`.
  - Attributes: `autoPlay`, `muted`, `loop`, `playsInline`.
  - Style: `absolute inset-0 w-full h-full object-cover`.
- **Content Layer**: Sits relative over the video.
  - Style: `relative z-10 flex flex-col justify-between p-4 sm:p-6 md:p-8 gap-6`.
  - Sizing heights: Must match the card height ladder (`min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full`).

### Navbar (top)
- Sits inside the content layer.
- Layout: Pill container: `bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 sm:gap-6 self-start`.
- **Logo**: 32x32 inline SVG with viewBox `"0 0 256 256"` containing two black paths forming a stylized "M":
  `<path d="M 256 256 L 128 256 L 0 128 L 128 128 Z" fill="#000000" />`
  `<path d="M 256 128 L 128 128 L 0 0 L 128 0 Z" fill="#000000" />`
- **Nav Links** (hidden on mobile, shown as `sm:flex items-center gap-6`): "Our story", "Expertise", "Our work", "Journal".
  - Link style: `text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap`.
- **CTA Button**: Sits on the right (floated right on mobile with `ml-auto`).
  - Style: Black pill: `bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors`.
  - Label: "Start a project".

### Spacer
- Render a flex-1 spacer between the nav and the bottom row: `<div className="flex-1 min-h-[2rem]" />`.

### Bottom Row Layout
- Sits at the bottom of the card.
- Container: `flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6`.

#### Left Side: Headline
- Style: `<p className="text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight text-white drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0">`.
- Content (with line break):
  `We craft bold ideas` `<br />` `and ship them as <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>products</span>`

#### Right Side: Contact Form Card
- Container: `w-full lg:w-[min(480px,45%)] shrink-0`.
- Card: `bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col gap-4`.
- **Heading**: "Say hello! 👋". Style: `text-xl sm:text-2xl font-semibold text-black tracking-tight`.
- **Socials Row** (always horizontal):
  - Style: `flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5`.
  - Left: Small label `Drop us a line` (`text-xs text-gray-500 block`) followed by mailto link `hello@forma.co` (`text-blue-600 font-semibold hover:underline truncate text-sm`).
  - Right: Four 32x32px rounded-xl buttons with standard social icons from `lucide-react` (size 13):
    1. Twitter (using `Twitter` icon) — style: `bg-gray-100 text-gray-800 w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity`
    2. Circle (using `Circle` icon) — style: `bg-pink-100 text-pink-500 w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity`
    3. Instagram (using `Instagram` icon) — style: `bg-orange-100 text-orange-400 w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity`
    4. Linkedin (using `Linkedin` icon) — style: `bg-blue-100 text-blue-600 w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity`
  - *Recommendation*: Extract these buttons into a helper component `SocialBtn`.
- **OR Divider**:
  - Style: flex row with horizontal lines on either side of the word "OR":
    `<div className="flex items-center gap-3">`
      `<div className="flex-1 h-px bg-gray-200" />`
      `<span className="text-gray-400 font-medium text-xs">OR</span>`
      `<div className="flex-1 h-px bg-gray-200" />`
    `</div>`
- **Form State & Inputs**:
  - State: `name` (string), `email` (string), `message` (string), `selected` (string[] - array of selected service chips), `sending` (boolean), `sent` (boolean).
  - Label: "Tell us about your vision" (`text-sm font-medium text-black`).
  - Inputs (Name + Email side by side on `sm:`): `flex flex-col sm:flex-row gap-2`.
    - Placeholders: "Full name" and "Email".
    - Input style: `flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all`.
  - Textarea: Placeholder "What are you looking to build or improve...", 4 rows. Style: Same input style plus `resize-none`.
  - **Service Chips Section**:
    - Label: "I need help with...".
    - Layout: `flex flex-wrap gap-1.5`.
    - Chips: Map over `SERVICES`. Each chip is a button:
      - Style: `text-xs font-medium px-3 py-2 rounded-lg border transition-all duration-200`.
      - Inactive state: `bg-white text-gray-700 border-gray-200 hover:border-gray-400`.
      - Active (selected) state: `bg-gray-100 text-black border-black`.
      - Toggle chips on/off using multi-select array behavior.
  - **Submit Button**:
    - Style: `w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60`.
    - Disabled state: when inputs are empty or `sending` is true.
    - Button text: "Send my message" (or "Sending..." when `sending` is true).

### Submit Behavior & Success State
- On form submit, set `sending` to true.
- Await a fake 1-second delay: `await new Promise(r => setTimeout(r, 1000))`.
- Set `sending` to false and `sent` to true.
- If `sent` is true, show the following success state **in place of the form** inside the contact card:
  - Layout: Centered column: `flex flex-col items-center justify-center text-center py-6 gap-3 animate-[fadeIn_0.3s_ease-out]`.
  - Check Badge: A green check pill: `w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-600 font-bold` containing `✓`.
  - Heading: "You're all set!" (`text-base font-semibold text-gray-900`).
  - Subtext: "Expect a reply within 24 hours." (`text-sm text-gray-500`).
```
