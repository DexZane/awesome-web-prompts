# Recreate VEYRA — complete coding-agent prompt

You are an implementation agent with access to a terminal, filesystem and browser. Create and run the approved VEYRA automotive website in my local workspace. Complete the implementation and verification; do not stop at a plan.

## Objective and source of truth

Reproduce the finished interactive scene from this public release:

- Repository: https://github.com/amirmushichge/veyra-interactive-car
- Approved tag: `v1.0.0`
- Source ZIP: https://github.com/amirmushichge/veyra-interactive-car/archive/refs/tags/v1.0.0.zip
- Desktop reference: https://raw.githubusercontent.com/amirmushichge/veyra-interactive-car/v1.0.0/docs/images/desktop.png
- Phone reference: https://raw.githubusercontent.com/amirmushichge/veyra-interactive-car/v1.0.0/docs/images/mobile.png
- Asset base: https://raw.githubusercontent.com/amirmushichge/veyra-interactive-car/v1.0.0/public/media/

The reference source, media and stylesheet are authoritative. This is a faithful reproduction task. Obtain the pinned release and reuse its implementation. Do not substitute a freshly invented landing page, a different car, a simulated video, a new UI system or newly generated imagery. Do not claim that a text-only generative reconstruction is identical to the reference.

If Git/network tools are unavailable, explain the precise blocker and ask me to provide the release ZIP. Do not make a visually unrelated placeholder and call the task complete.

## Bootstrap

1. Inspect the current directory. If it already contains this project, read its instructions and check the working tree before making changes. Preserve local work. If the directory contains a different project, create a clearly named child directory; do not overwrite it or reset its Git history.
2. In a clean workspace, clone the tag:

```sh
git clone --branch v1.0.0 https://github.com/amirmushichge/veyra-interactive-car.git
cd veyra-interactive-car
git switch -c my-veyra
```

3. Read `AGENTS.md`, `README.md`, `docs/ARCHITECTURE.md`, `docs/MEDIA.md` and `docs/VERIFICATION.md`. Inspect both reference screenshots.
4. Use Node.js 22 or later and pnpm 10.15.1. Install pnpm if needed with the environment's normal package-manager mechanism. Keep the release dependency versions and lockfile. Do not introduce new application libraries.
5. Run:

```sh
pnpm install --frozen-lockfile
pnpm test
pnpm verify:reference
pnpm build
pnpm dev
```

6. Use http://127.0.0.1:5220/ as the local preview. If another process occupies it, identify the process and reuse it only if it serves this exact project. Do not kill unrelated processes. Use one deliberate alternate port only if necessary and report it clearly.

If adapting into another toolchain is explicitly required by my environment, first get the original Vite release running. Preserve the same React components, CSS, content and asset bytes; isolate framework plumbing from the reference behaviour. Report that the result is an adaptation if any reference files differ.

## Product and page

VEYRA is a fictional independent electric-vehicle design study. The page title is `VEYRA — Electric, inside out.` It is a single interactive scene with a lightweight header, title row, framed media, four hotspots, contextual menus, two technical detail views and a compact footer.

The header shows the `VEYRA` wordmark, `Electric vehicle design` on sufficiently wide screens, and `Independent concept`. The overview title is `Electric, inside out.` Supporting copy reads `Explore beneath the surface.` and `Select a point to begin.`

The footer has four aligned text groups: Electric drive, Battery architecture, Body finishes, Wheel designs. Preserve their exact text from App.tsx. A slim baseline shows `VEYRA — Design study` and the current scene's supporting sentence. Appearance menus temporarily replace the footer notes visually, leaving the car unobstructed.

Do not add buy buttons, prices, range estimates, performance specifications, brand claims, navigation sections, testimonials, cards or a contact form. Do not turn the page into a multi-screen marketing site. There is no runtime 3D model, no scroll-scrubbing timeline and no looping autoplay background.

## Visual contract

- Font: Space Grotesk, weight 400 only. Use the release font import. No synthetic bold.
- Primary colours: studio `#6b879d`, sky `#708fa2`, white `#ffffff`, muted text `#e1eaf0`, panel `#35586e`, electric green `#edff39`, dark accent text `#10190c`, thin white-alpha lines.
- The wordmark has restrained kerning. The title hierarchy comes from size and spacing, not heavier font weights.
- One shared image plane holds media and hotspots at a nominal 1672:941 ratio. Preserve the existing measurement formula and CSS variables.
- One white 3px outer frame encloses all media states; radius 16px on larger screens and 12px on phones. It must not alter media coordinates. No feather masks, background recolouring or duplicated blurred car silhouettes.
- Preserve the full visible car, both wheels, open hood and ground shadow.
- Hotspots are 48px interaction targets with compact electric-green discs, dark thin plus icons and restrained hover labels. Keep keyboard focus visible.
- Appearance panels use a consistent blue surface, 12px radius, thin border and readable labels. The panel stays outside the vehicle image, below the frame.
- Desktop header/title/media/footer align to the same measured width. At widths at most 900px, use the release stacked layout, 20px side margins and a two-column text footer.
- At desktop heights at most 780px, technical descriptions flow below the media. Do not shrink or move the image during entry/return to accommodate them.

Reuse `src/index.css` in full. These notes explain its intent; they do not replace the precise reference rules.

## Asset contract

Use the release's `public/media` directory with unchanged bytes. All assets are supplied. Keep filenames and nested paths case-exact.

Active exterior: `exterior-polished.png`.

Hover pairs:

- Drive: `hood-hover-forward.mp4`, `hood-hover-reverse.mp4`.
- Battery: `battery-hover-forward.mp4`, `battery-hover-reverse.mp4`.

Active technical images: `drive-blue.png`, `battery-blue.png`.

Paint: original exterior for Studio Silver; `config/electric-green.png`, `config/lime-green.png`, `config/sky-blue.png`, `config/graphite.png` for the remaining four choices.

Wheels: original exterior for Multi-spoke; `config/wheels-aero.png` for Aero Disc; `config/wheels-forged.png` for Sport Forged.

Keep earlier/dormant stills in the release too. `optics` and disabled detail-flight clip metadata in `content.ts` are not active features. Do not enable them or fabricate their missing videos.

Do not resize, recompress, retime, recolour or regenerate approved media. Do not send assets to an external generation provider during reproduction. Prefer local files served by Vite; do not leave playback dependent on temporary provider URLs.

## Interaction contract

There are exactly four overview points:

- Drive at x=25%, y=48%: hover/focus opens the hood; click enters the drive detail.
- Battery at x=64%, y=72%: hover/focus reveals the battery; click enters its detail.
- Paint at x=55%, y=51%: opens body-colour selection.
- Wheels at x=48%, y=71%: opens wheel selection.

Coordinates are image-relative. Do not position them against the whole screen.

### Hover playback

Retain `HoverVideo.tsx` exactly. It uses four off-DOM video elements and one canvas. Show frames only after decoding. Hold the last displayed frame at every handoff. Distinguish the currently settled pose from the latest desired hotspot.

Finish the active short forward clip before reversing. Finish its reverse before starting another system. Do not seek in the middle of independently retimed forward/reverse files to guess a matching pose. Rapid pointer changes update the desired target rather than starting overlapping playback.

On detail entry, freeze the currently visible hover frame until the opaque cutaway covers it. Reset only after that handoff. Preserve failure handling, the watchdog, cleanup and reduced-motion behaviour. Never introduce a black clearing frame.

### Detail navigation

Keep `overview → entering → detail → returning → overview` and the release's timing and guards. Do not trigger transitions while loading, already transitioning, or configuring appearance.

Drive and Battery each show their existing title, description, three component points/list entries and driver-oriented explanation. Click a point or list row to toggle its explanation. Keep the Back control and Escape return. Keep screen-reader status, focus handling and disabled states.

Click-to-detail is the approved CSS zoom/crossfade into a still image. Do not replace it with a new generated flight.

### Appearance

Only one mode is active at a time. On opening Paint or Wheels, stop requesting a hover pose and wait for the authored return to the neutral car. Show the selected appearance only when neutral and decoded. Do not place an appearance render over an open hood or X-ray frame.

Keep original hover/focus ownership, pointer corridor, pin-on-selection behaviour, leave timer, close timing and Escape. Disable unrelated points while the panel is active/closing. On close, restore the original car and unlock the other functions. Paint and wheel choices are independent render alternatives, not a combined configuration engine.

The menu must remain reachable from its point and must not cover the body or wheels. Preserve the desktop horizontal dock and phone-sized compact dock. Do not introduce an invisible full-page click blocker to keep it open.

## Verification

Treat the release source/media hashes as the reference test. If `pnpm verify:reference` fails during exact reproduction, identify why and restore the correct files. Do not regenerate the manifest just to pass.

Run existing unit checks and the production build. Inspect the actual browser, not just the source. At minimum check 1440x900, 1280x720 and 390x844; also check 1920x1080, 768x1024 and around 360px when the environment allows.

Exercise: default scene; every paint and wheel option; close and reopen; hood opening and return; battery reveal and return; rapid travel between system points; entry/return for both detail views; annotation toggles; Tab/Enter/Escape; pointer travel from hotspot to displaced menu; reduced motion. Verify no horizontal overflow, clipped primary controls, black endpoint, lost wheel, scale jump or video playing over an appearance selection.

Compare desktop and phone screenshots against the supplied references at matching viewport sizes. Allow normal browser/font rasterisation differences; do not claim pixel identity across every OS. Note any testing limits honestly, especially physical iOS/Safari and real touch devices.

Read known limitations before reporting a newly discovered regression. The reference contains an appearance-close focus race that can leave focus on the body; do not silently change behaviour in a reproduction task. Flag it and keep any future fix separately scoped.

## Optional LTX workflow

Do not use LTX to complete the reproduction. The files are already bundled. If I separately request new media, read `docs/LTX_API.md` and use https://console.ltx.io/api-keys for my own key. Never request that I paste the key into the conversation or expose it in a VITE_ variable.

Prepare a local dry run first. A paid submission needs my authorization for the specific cost and input upload. Keep outputs in `generated/`, preserve the saved job ID and resume interrupted polling instead of submitting twice. New generation cannot reproduce the approved image/video bytes deterministically.

## Finish

Return the working local preview URL, location of the project, release tag used, verification results and any real limitations. Keep the site running for review. Do not publish a website, push to my GitHub, create an account or incur generation charges unless I separately request that action. Preserve the repository license and attribution.
