<!-- 在下方粘贴提示词原文 -->

# 提示词

```text
Please create a single, fully responsive HTML file using Tailwind CSS that contains two main sections: a Call-to-Action (CTA) and a Footer. The design must precisely match the following specifications, including layout, typography, colors, and animations.

General Setup & Styling
Technology: Use HTML5 and the Tailwind CSS CDN via <script src="https://cdn.tailwindcss.com"></script>.
Font: Use the "Inter" font from Google Fonts (weights 400 through 900). Apply it globally to the body.
Icons: Include FontAwesome via CDN for social media icons (<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>).
Color Palette (Configure in Tailwind config):
Background (CTA): Off-white/light gray (#f5f5f2).
Footer Background: Almost black (#050505).
Brand Accent: Neon Yellow (#dbff00).
Muted Text (CTA): Gray (#6b7280).
Light Muted Text (Footer): Light gray (#9ca3af).
Animations:
Add custom CSS for smooth, staggered load animations.
Create a .fade-up class (starts with opacity 0, transforms Y by 20px). When a .visible class is added, it transitions to opacity 1 and transform Y 0 over 0.7s with a cubic-bezier easing.
Create delay classes (.delay-100 through .delay-500) to stagger the elements as they appear.
Ensure all hover effects on links and buttons are smooth (transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease;).
Section 1: Call to Action (CTA)
Layout: Full width, centered content, minimum height of 50vh, significant top and bottom padding (py-20 md:py-32).
Background: Set the body background to the off-white color.
Heading:
Text: "Take control of your productivity today."
Base size: 18px (text-[18px]), scaling to 36px on md, and 48px on lg screens.
Style: Bold, black, tight tracking (tracking-tighter), tight line-height (leading-[1.1]).
Animation: Apply .fade-up.
Secondary Text:
Text: "Stay organized, focused, and on top of your tasks with Tenlas."
Base size: 14px (text-[14px]), scaling to 15px on md screens.
Style: Medium weight, muted text color.
Animation: Apply .fade-up and .delay-100.
Button:
Text: "Download now"
Style: Black background, neon yellow text (#dbff00), semi-bold, rounded corners (rounded-lg), small padding (px-6 py-2.5), text size sm to base.
Hover effect: Change background to a slightly lighter black (hover:bg-gray-900), add a shadow, and slightly translate upwards (hover:-translate-y-0.5).
Animation: Wrap the button in a div with .fade-up and .delay-200.
Section 2: Footer
Layout: Dark background (#050505), top padding (pt-16 md:pt-24), zero bottom padding (pb-0). The section must be relative and overflow-hidden.
Content Wrapper (Top Section): Max width 7xl, centered (mx-auto), standard side padding (px-6 md:px-20 lg:px-32). It should stack vertically on mobile and horizontally on large screens (flex-col lg:flex-row), with a large bottom margin (mb-16 md:mb-24).
Footer Left Column (Brand Info & Socials)
Width: Full width on mobile, 1/3 width on large screens (lg:w-1/3).
Animation: Apply .fade-up and .delay-300.
Logo & Brand Name:
Container: Flexbox, vertically centered, gap.
Logo SVG: Create a complex, 3-layered isometric diamond/geometric shape using SVG paths. The top layer should have fill-opacity="0.15", and all layers should use currentColor so it appears white. Ensure it has a slight scale-up hover effect.
Brand Name: "Tenlas", text white, size xl to 2xl, bold.
Tagline: "Unlock your productivity potential." in the light muted text color (text-gray-light), size sm to base.
Social Icons:
A row of 4 icons: Instagram, Facebook, a custom SVG for Dribbble/Globe, and a custom SVG for X (Twitter).
Style: Small white squares (w-8 h-8 bg-white), black icons, rounded corners.
Hover effect: Change background to light gray (hover:bg-gray-200) and translate upwards (hover:-translate-y-1).
Footer Right Column (Links Navigation)
Width: Full width on mobile, 2/3 width on large screens (lg:w-2/3).
Layout: CSS Grid. 2 columns on mobile, 4 columns on medium/large screens (grid-cols-2 md:grid-cols-4), with gap.
Animation: Apply .fade-up and .delay-400.
Links Configuration:
Column 1: Home V.1, Home V.2, Home V.3, Features.
Column 2: About, Pricing V.1, Pricing V.2, Pricing V.3.
Column 3: Blogs V.1, Blogs V.2, Blogs V.3, Blogs Post.
Column 4: Style Guide, Licensing, Changelog.
Link Styling: Light muted text color (text-gray-light), size sm.
Hover Effect: Smooth transition to solid white text (hover:text-white).
Footer Bottom: Massive "Tenlas" Text (Flawless Flush Alignment)
Layout: Centered at the very bottom.
Animation: Apply .fade-up and .delay-500.
CRITICAL ALIGNMENT INSTRUCTIONS: To ensure the massive text aligns perfectly flush with the left and right edges of the content above it across mobile, tablet, and desktop:
Container Wrapper: Create a wrapper div for this text that uses the exact same constraints as the top content section. It must have w-full max-w-7xl mx-auto and the exact same responsive side padding (px-6 md:px-20 lg:px-32).
Text Sizing (The SVG Trick): Because standard text sizes break when the max-w-7xl container stops growing on large desktops, do NOT use raw CSS font sizes. Instead, place an inline <svg> inside this container with viewBox="0 0 X Y" (calculate X and Y based on the font's bounding box) and width="100%". Inside the SVG, place a <text> element containing "Tenlas". This guarantees it will stretch edge-to-edge of its container perfectly without breaking on large screens.
Styling: Fill color: Neon yellow (#dbff00). Font: Bold.
Vertical Cutoff Fix: Add slight padding or translation so the rounded bottom edges of the letters aren't chopped off by the bottom of the screen.
Functionality
Include a small block of Vanilla JavaScript at the bottom of the body.
Use the IntersectionObserver API.
Select all elements with the .fade-up class.
When they enter the viewport (e.g., threshold: 0.1), add the .visible class to trigger the CSS transition.
Add a tiny setTimeout (50ms) to initialize the observer so the initial CTA content animates immediately upon page load.
```
