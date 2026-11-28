Build a single full-viewport React + TypeScript + Tailwind CSS page for a creative studio called **Kollektiva**. The app renders only this one section (no nav, no other pages). Stack: Vite + React 18 + Tailwind 3. Font: **Geist** (Google Fonts weights 300, 400, 500). Title: `Kollektiva`.

### Font setup

In `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500&display=swap" rel="stylesheet" />
```

In Tailwind config, extend:
```js
fontFamily: { geist: ['Geist', 'system-ui', 'sans-serif'] }
```

In CSS, add this keyframe:
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Overall structure

One `<section>` that is:
- `relative`, `h-screen`, `w-full`, `overflow-hidden`
- `font-geist`, text white
- Full-bleed stacked background portraits (one per team member)
- A light dark gradient overlay on top of the backgrounds
- A content layer (`z-10`) with two vertical zones: top (headline + description) and bottom (avatar picker + meta footer)

### Background portraits (exact asset URLs)

Render **all 8** backgrounds as absolutely positioned `inset-0` layers with `bg-cover bg-center`. Only the active index has `opacity: 1`; others `opacity: 0`. Transition: `transition-opacity duration-700 ease-out` (700ms opacity crossfade).

Use these exact image URLs (same URL for full-bleed background AND circular avatar thumbnail):

1. **Andrei Baranov** — Design Chief  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225202_f9e684f3-dc19-469a-8142-eb391bfc601b.png&w=1280&q=85`  
   Description: `Andrei sets the visual direction of every project. He turns rough ideas into clear, confident design languages that feel effortless yet leave a lasting impression.`

2. **Daria Lebedeva** — Interface Expert  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225149_7937e8ea-3b0a-46ab-919f-775627695a23.png&w=1280&q=85`  
   Description: `Daria crafts interfaces people understand at first glance. Every screen she designs balances clarity and character, making complex products feel simple and warm.`

3. **Ivan Sorokin** — Concept Chief  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225153_f2b1fc04-776a-4f2e-879b-b764ea762e77.png&w=1280&q=85`  
   Description: `Ivan shapes the ideas behind the work. He digs into every brief until the core story emerges, then builds concepts that give each project its reason to exist.`

4. **Anna Fedorova** — Brand Consultant  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225847_f456fd9c-8938-4103-836d-51b0e88a9510.png&w=1280&q=85`  
   Description: `Anna helps brands find their voice. From positioning to tone, she builds identities that stay consistent everywhere and grow stronger with every appearance.`

5. **Pavel Smirnov** — Movement Artist  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_225854_3958a522-6203-4f84-a7fa-3b3f1dcd7256.png&w=1280&q=85`  
   Description: `Pavel brings stillness to life. His motion work adds rhythm and personality to every product, guiding attention with transitions that feel natural and precise.`

6. **Olga Kravtsova** — UX Specialist  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231111_fcefaa07-6851-4fdc-ac7b-98754ac9d5c4.png&w=1280&q=85`  
   Description: `Olga studies how people actually use what we make. Her research keeps every decision grounded in real behavior, so the work serves users and not assumptions.`

7. **Igor Zakharenko** — Graphic Creator  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_231124_9a1505aa-8c44-4046-aff8-1aa0bc7b3ef3.png&w=1280&q=85`  
   Description: `Igor gives every project its finishing touch. From typography to illustration, he sweats the visual details that separate good work from unforgettable work.`

8. **Ksenia Romanova** — Studio Head  
   `https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260727_230413_62e8b331-89be-4d35-84fe-330ba9b1b64f.png&w=1280&q=85`  
   Description: `Ksenia keeps the studio moving as one. She connects people, plans, and priorities so every project ships on time without losing the craft it deserves.`

Default active index: `0` (Andrei Baranov).

### Gradient overlay

Above backgrounds, below content:
`absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/25`  
(top 20% black, middle 5%, bottom 25% — soft vignette, not heavy).

### Content layout

Content wrapper:
`relative z-10 flex h-full flex-col justify-between`
Padding:
- mobile: `px-6 pb-6 pt-10`
- sm: `px-10 pb-8 pt-14`
- lg: `px-16`

#### Top zone — headline + bio

Flex column on mobile (`flex-col gap-8`); from `md` up: `md:flex-row md:items-start md:justify-between md:gap-16`.

**Left — H1 (static, never changes):**
Exact copy (non-breaking space before “day”):
> Kollektiva is the talent you build with each day

Styles:
- `max-w-xl`
- `text-3xl` → `sm:text-5xl` → `lg:text-7xl`
- `font-normal`, `leading-[1.1]`, `tracking-tight`
- white

**Right — description (changes with active slide):**
- `max-w-xs`
- `text-sm font-medium leading-relaxed text-white/80` → `sm:text-base`
- `md:pt-2`
- On change: remount with `key={slide.name}` and class `animate-[fadeIn_0.5s_ease]` (0.5s fade + 4px upward settle)

#### Bottom zone

Outer: `flex flex-col gap-8`

##### Avatar picker row

- Horizontal flex: `flex items-end gap-2` → `sm:gap-3`
- Mobile: `overflow-x-auto` with hidden scrollbar (`[scrollbar-width:none] [&::-webkit-scrollbar]:hidden`), `pb-1`
- Desktop sm+: `sm:overflow-visible sm:pb-0`

Each avatar is a `<button>`:
- `flex shrink-0 flex-col items-center gap-2`
- `aria-label={`Show ${name}`}`
- `onClick` sets active index

Per button, top to bottom:
1. **Active indicator dot:** `h-1 w-1 rounded-full bg-white`  
   Active: `opacity-100`; inactive: `opacity-0`  
   Transition: `transition-opacity duration-300`  
   (dot fades in/out in place — does NOT slide between avatars)
2. **Circular thumbnail:** outer `block h-10 w-10 overflow-hidden rounded-full` → `sm:h-14 sm:w-14`  
   Inner `<img>`: same slide image URL, `h-full w-full object-cover`, `alt={name}`

Order of avatars must match slides array order 1→8 above.

##### Meta footer

Below avatars:
- Top border: `border-t border-white/20`
- `pt-5`
- `flex flex-wrap items-center justify-between gap-4`
- `text-sm font-medium`

Four items left→right (space-between):

1. **Name** (always visible): white, remounts with `key={slide.name}` + `animate-[fadeIn_0.5s_ease]`
2. **Role** (hidden on mobile, visible `sm:`+): `text-white/70`, remounts with `key={slide.role}` (no fade animation on role)
3. **Static tenure** (hidden until `md`): `text-white/70` — exact text: `In the business since 2020` (does not change per person)
4. **WhatsApp link:** `<a href="#">WhatsApp</a>` with `underline underline-offset-4 transition-colors hover:text-white/70`

### Interaction & animation summary

| Interaction | Behavior |
|---|---|
| Click avatar | Set `active` index |
| Background change | 700ms opacity crossfade (`ease-out`) |
| Description + name change | 500ms `fadeIn` (opacity 0→1, translateY 4px→0) via CSS keyframe + React `key` remount |
| Active dot | 300ms opacity toggle on the active avatar only |
| WhatsApp hover | color → `white/70` |
| No autoplay | Manual selection only |
| No carousel arrows | Avatars only |
| No blur on background | Cover + center only |
| No extra cards, badges, stats, or secondary CTAs | |

### Responsive behavior checklist

- **Mobile:** stacked headline over bio; horizontally scrollable avatar row (40×40px circles); footer shows Name + WhatsApp only (role/tenure hidden)
- **sm:** larger type, 56×56 avatars, role visible, no avatar scroll
- **md:** headline and bio side-by-side; tenure visible
- **lg:** headline `text-7xl`, horizontal padding `px-16`

### Visual character

Studio portrait photography on soft light gray / off-white seamless backgrounds (Asian / East-European creative professionals, soft studio lighting). White Geist sans-serif type over full-bleed portraits with a subtle black gradient vignette. Minimal, editorial, no purple, no cards, no pills, no glow. One composition filling the first viewport.

### What NOT to include

- Do not use the unused local files in `/public/images/` (those are unrelated mockups)
- No Lucide icons, no Supabase, no extra sections
- No Russian copy — English only as specified
- No Telegram link — the live page uses **WhatsApp**
- Brand name is **Kollektiva**, not Pragmatica
- Exactly **8** people (not 9)
- No separate large “action circle” on the right of the avatar row

### App wiring

`App.tsx` renders only `<Hero />`. Import via `@/components/Hero`. State: single `useState(0)` for active slide index.
