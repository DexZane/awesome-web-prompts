<!-- 在下方粘贴提示词原文 -->

# 提示词

```text
Create a high-performance, interactive 3D horizontal cylinder carousel showing premium animated bank cards.
Core Features & Interactions:
Use React (useState, useEffect, useRef), Tailwind CSS v4, and standard requestAnimationFrame for a smooth 60fps render loop. No external animation libraries needed.
The scene should behave like a continuous circular scroll/carousel, updating a continuous progress variable.
Add interactive 3D parallax tilt to the cards that smoothly responds to mouse cursor movement (mousemove), using inertia damping to lag slightly behind the cursor.
The cards should have real volumetric 3D thickness (achieved by stacking multiple div layers close together, simulating 3D depth).
The carousel math should push cards to the sides (using smoothstep interpolation) and hide them gracefully using perspective formulas as they move completely off-screen.
Each card must have a front and back face. The front face includes an autoplaying video background, a silver metallic chip (SVG), an embedded JWT logo top-right, and intersecting circles bottom-right. The back face should blur the same video background, have a dark magnetic stripe across the top, and feature the cardholder name, number, and CVV in JetBrains Mono.
Visual Styling:
Use a pure black background (#000000).
The application relies exclusively on the interactive 3D card layout (no text layers over the background).
Make sure the scene's wrapper uses CSS perspective: 1350px; and standard transformStyle: preserve-3d.
Please use the exact code below for src/App.tsx and src/index.css to build this exactly as requested.

import React, { useState, useEffect, useRef } from 'react';

const CARD_VIDEOS = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_171347_f640c30d-ec21-426a-98bc-77e07c2c60cb.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4'
];

// Nine beautiful premium solid colors to clearly track the cards
const CARD_COLORS = [
  '#FF3B30', // Apple Red
  '#FF9500', // Apple Orange
  '#FFCC00', // Apple Yellow
  '#34C759', // Apple Green
  '#007AFF', // Apple Blue
  '#5856D6', // Apple Purple
  '#FF2D55', // Apple Pink
  '#AF52DE', // Apple Violet
  '#00C7BE', // Apple Teal
];

// Different card details for each of the cards
const CARD_DETAILS = [
  { number: '4232 8908 1121 4892', name: 'ZACHARY MERCER', cvv: '382' },
  { number: '4154 7831 9904 5124', name: 'SOPHIA MARTINEZ', cvv: '109' },
  { number: '5457 4120 7733 9035', name: 'BENJAMIN CARTER', cvv: '764' },
  { number: '4441 5567 1223 2468', name: 'EMILY MORRISON', cvv: '491' },
  { number: '5375 8891 2234 7713', name: 'JACKSON REID', cvv: '255' },
];


export default function App() {
  const cardCount = 5;
  const cardsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const frameId = useRef<number>(0);
  
  // Continuous scroll progress
  const progress = useRef<number>(0);

  // Track mouse coordinates for interactive 3D parallax tilt with inertia damping
  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Responsive state containing card dimensions
  const [metrics, setMetrics] = useState({
    cardW: 336,
    cardH: 211, // 1.59 standard credit card ratio
  });

  // Typography metrics to prevent collisions beautifully across all viewports
  const [fontMetrics, setFontMetrics] = useState({
    titleFontSize: '1.5rem',
    sigFontSize: '2.5rem',
    descFontSize: '14px',
    titleGap: '40px',
    pl: '0px'
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Screen-space cursor offset relative to window center, clamped to [-1.0, 1.0] range
      const rx = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const ry = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      mouse.current.targetX = Math.max(-1, Math.min(1, rx));
      mouse.current.targetY = Math.max(-1, Math.min(1, ry));
    };

    const handleMouseLeave = () => {
      // Return gently to center orientation when mouse focus is lost or moves away
      mouse.current.targetX = 0;
      mouse.current.targetY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // 1. Calculate Card Metrics (shrink cards if height is small to save vertical space)
      let cardW = Math.round(w * 0.16 + 130);
      
      const heightFactor = Math.min(1.0, Math.max(0.65, h / 850));
      cardW = Math.round(cardW * heightFactor);
      
      cardW = Math.min(336, Math.max(150, cardW));
      const cardH = Math.round(cardW / 1.5925); // Standard credit card ratio

      setMetrics({ cardW, cardH });

      // 2. Calculate Typography Metrics (shrink font sizes aggressively if height or width is small)
      const isMobile = w < 640;
      
      let titleSize = '';
      let sigSize = '';
      let descSize = '';
      let titleGap = '40px'; 
      let plVal = '0px';

      if (isMobile) {
        // Mobile style: centered, text size increased by 30% for high legibility
        titleSize = 'clamp(1.8rem, 5.2vw + 0.4rem, 2.2rem)';
        sigSize = 'clamp(2.86rem, 7.8vw + 0.6rem, 3.5rem)';
        descSize = 'clamp(0.72rem, 1.4vw + 0.35rem, 0.95rem)';
        titleGap = '24px';
        plVal = '0px';
      } else {
        // Desktop / Tablet style: aligned bottom-left
        // Scale factor depends on width and height to shrink before hitting cards
        const scale = Math.min(1.0, Math.max(0.48, (w * 0.45 + h * 0.55) / 1300));
        
        titleSize = `${Math.max(1.15, 3.5 * scale).toFixed(3)}rem`;
        sigSize = `${Math.max(1.5, 4.5 * scale).toFixed(3)}rem`;
        descSize = `${Math.max(11, 16 * scale).toFixed(1)}px`;
        titleGap = `${Math.max(16, Math.round(40 * scale))}px`;
        plVal = `${Math.min(6, Math.max(2.8, 3.5 * scale + 2.2)).toFixed(2)}rem`;
      }

      setFontMetrics({
        titleFontSize: titleSize,
        sigFontSize: sigSize,
        descFontSize: descSize,
        titleGap,
        pl: plVal
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute positions, rotations, and visual rules at 60fps
  const renderLoop = () => {
    // Upward flow speed of continuous transition - decreased speed by more than half for slower, premium, and calmer transitions
    progress.current += 0.0016; 

    // Smoothly interpolate current mouse variables towards their target positions (damping/inertia logic)
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.08;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.08;

    const cards = cardsRefs.current;
    const h = window.innerHeight;
    const { cardH } = metrics;

    const continuousProgress = progress.current;
    const roundedIndex = Math.round(continuousProgress);
    const diffFromRound = continuousProgress - roundedIndex; // ranges between [-0.5, 0.5]
    
    // Custom non-linear magnetic step logic
    // It creates a gorgeous brief "dwell/pause" at front center before accelerating to the next card
    const easedDiff = Math.sign(diffFromRound) * Math.pow(Math.abs(diffFromRound) * 2, 4.2) / 2;
    const virtualActiveIndex = roundedIndex + easedDiff;

    for (let i = 0; i < cardCount; i++) {
      const card = cards[i];
      if (!card) continue;

      // Solve circular wrapping to get closest representation in [-cardCount/2, cardCount/2]
      let offset = i - virtualActiveIndex;
      const halfCount = cardCount / 2;
      while (offset > halfCount) offset -= cardCount;
      while (offset < -halfCount) offset += cardCount;

      const absOffset = Math.abs(offset);
      const sign = Math.sign(offset);

      // Allow cards to render completely off-screen smoothly up to offset 3.0. This prevents any clipping or sudden pop-outs.
      if (absOffset > 3.0) {
        card.style.visibility = 'hidden';
        continue;
      } else {
        card.style.visibility = 'visible';
      }

      // Spacing gap between center card and adjacent cards
      const gap = 36;
      const peekAmount = -55; // Push the card's edge 55px past the screen boundary to hide a premium portion of it!
      const D = 1350; // Perspective distance

      let y = 0;
      let z = 0;
      let rot = 0;

      if (absOffset <= 1) {
        // Smoothstep interpolation from 0 to 1 (Center card to first adjacent card)
        const t = absOffset;
        const easedT = t * t * (3 - 2 * t);

        // Y moves from 0 to (cardH + gap)
        const targetY = cardH + gap;
        y = -sign * (easedT * targetY);

        // Z moves from 400 (center) to 220 (adjacent)
        z = 400 + easedT * (220 - 400);

        // Rotation moves from 0 to 132 degrees (beautiful tilted back face)
        rot = easedT * 132;
      } else if (absOffset <= 2) {
        // Smoothstep interpolation from 1 to 2 (Adjacent card to peeking screen-edge card)
        const t = absOffset - 1;
        const easedT = t * t * (3 - 2 * t);

        const yStart = cardH + gap;
        const zStart = 220;
        const rotStart = 132;

        const zEnd = -60;
        const rotEnd = 175;

        // Perspective-aware formula for exact edge alignment at the screen boundary (peekAmount = 26px inside)
        const sEnd = D / (D - zEnd);
        const yEnd = (h / 2 - peekAmount) / sEnd - (cardH / 2);

        const currentY = yStart + easedT * (yEnd - yStart);
        y = -sign * currentY;

        z = zStart + easedT * (zEnd - zStart);
        rot = rotStart + easedT * (rotEnd - rotStart);
      } else {
        // Smoothstep interpolation from 2 to 3 (Peeking card to completely off-screen card)
        const t = Math.min(absOffset - 2, 1);
        const easedT = t * t * (3 - 2 * t);

        const zStart = -60;
        const rotStart = 175;

        const zEnd3 = -250;
        const rotEnd3 = 195;

        const sEnd2 = D / (D - zStart);
        const yEnd2 = (h / 2 - peekAmount) / sEnd2 - (cardH / 2);

        // Calculate yEnd3 dynamically so that the card's edge is completely 100px past the screen boundary
        const sEnd3 = D / (D - zEnd3);
        const yEnd3 = (h / 2 + 100) / sEnd3 + (cardH / 2);

        const currentY = yEnd2 + easedT * (yEnd3 - yEnd2);
        y = -sign * currentY;

        z = zStart + easedT * (zEnd3 - zStart);
        rot = rotStart + easedT * (rotEnd3 - rotStart);
      }

      const localCardRotation = -sign * rot;

      // Determine how close this card is to the exact center (1.0 = center, 0.0 = adjacent/offscreen)
      const centerFactor = Math.max(0, 1 - absOffset);

      // Vertical tilt (around X-axis) and horizontal tilt (around Y-axis) driven by mouse coordinates
      const maxTiltY = 15; // Max angle tilt left-to-right (degrees)
      const maxTiltX = 12; // Max angle tilt up-and-down (degrees)

      const activeTiltX = -mouse.current.y * maxTiltX * centerFactor;
      const activeTiltY = mouse.current.x * maxTiltY * centerFactor;

      const totalRotX = localCardRotation + activeTiltX;
      const totalRotY = activeTiltY;

      // Depth z-index layer
      card.style.zIndex = Math.round(z).toString();
      card.style.opacity = '1';

      // Inject translation matrix with the premium -3deg tilt combined with dynamic mouse-interactive 3D tilt
      card.style.transform = `translateY(${y.toFixed(2)}px) translateZ(${z.toFixed(2)}px) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(-3deg)`;
    }
  };

  useEffect(() => {
    const tick = () => {
      renderLoop();
      frameId.current = requestAnimationFrame(tick);
    };

    frameId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId.current);
  }, [metrics]);

  // Slices for 3D volumetric depth with 30% reduced thickness
  // Span from -1.47px to 1.47px creates an extremely premium real 3D volume feel
  const thicknessLayers = [-1.47, -0.73, 0, 0.73, 1.47];

  return (
    <div className="absolute inset-0 bg-[#000000] text-white flex items-center justify-center overflow-hidden select-none">
      
      {/* 3D perspective camera space */}
      <div
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
        style={{
          perspective: '1350px',
        }}
      >
        {/* Dynamic 3D coordinate viewport */}
        <div
          className="absolute"
          style={{
            width: `${metrics.cardW}px`,
            height: `${metrics.cardH}px`,
            transformStyle: 'preserve-3d',
          }}
        >
          {Array.from({ length: cardCount }).map((_, i) => (
            <div
              key={i}
              ref={(el) => { cardsRefs.current[i] = el; }}
              className="absolute inset-0"
              style={{
                width: `${metrics.cardW}px`,
                height: `${metrics.cardH}px`,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'visible',
              }}
            >
              {/* Build physical 3D volumetric thickness by dense parallel layering */}
              {thicknessLayers.map((zOffset, layerIdx) => {
                const isFrontFace = layerIdx === thicknessLayers.length - 1;
                const isBackFace = layerIdx === 0;

                const videoSrc = CARD_VIDEOS[i % CARD_VIDEOS.length];
                const baseBgColor = '#0f0f0f';

                // Middle structural slice
                if (!isFrontFace && !isBackFace) {
                  return (
                    <div
                      key={layerIdx}
                      className="absolute inset-0 rounded-[16px] border border-[#808080] pointer-events-none overflow-hidden"
                      style={{
                        backgroundColor: '#808080',
                        transform: `translateZ(${zOffset}px)`,
                      }}
                    />
                  );
                }

                // Front face slice
                if (isFrontFace) {
                  const frontBorderStyle = "border border-white/15";
                  return (
                    <div
                      key={layerIdx}
                      className={`absolute inset-0 rounded-[16px] ${frontBorderStyle} pointer-events-none overflow-hidden`}
                      style={{
                        backgroundColor: baseBgColor,
                        transform: `translateZ(${zOffset}px)`,
                        backfaceVisibility: 'hidden',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                      }}
                    >
                      <video
                        src={videoSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover rounded-[16px]"
                      />

                      <div className="absolute inset-0 p-5 sm:p-6 text-white h-full w-full font-sans z-10 bg-black/15">
                        {/* Golden/Silver Metallic Contact Chip - positioned mid-left (vertically centered on the card) with custom user vectors */}
                        <div className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2">
                          <svg
                            className="w-6 h-6 sm:w-[29px] sm:h-[29px]"
                            viewBox="0 0 60 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M20 8H40V14C40.0016 14.5299 40.2128 15.0377 40.5875 15.4125C40.9623 15.7872 41.4701 15.9984 42 16H59V24H42C41.4701 24.0016 40.9623 24.2128 40.5875 24.5875C40.2128 24.9623 40.0016 25.4701 40 26V52H20V8ZM18 8H8.00039C4.47435 8 1.56576 10.6083 1.08 14H18V8ZM1 16V24V26V34V36V44H18V36H1V34H18V26H1V24H18V16H1ZM1.08 46C1.56576 49.3917 4.47435 52 8.00039 52H18V46H1.08ZM42 14V8H52.0004C55.5264 8 58.4342 10.6084 58.92 14H42ZM59 26H42V34H59V26ZM59 36H42V44H59V36ZM52.0004 52H42V46H58.92C58.4342 49.3916 55.5264 52 52.0004 52Z"
                              fill={`url(#paint0_linear_1032_4_${i})`}
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.02453 14.4146C1.00608 14.609 0.998061 14.8045 1.00039 15C1.00039 14.8028 1.00854 14.6076 1.02453 14.4146ZM1.00039 45C0.998061 45.1955 1.00608 45.391 1.02453 45.5854C1.00854 45.3924 1.00039 45.1972 1.00039 45ZM59.0004 15C59.0026 14.8176 58.9955 14.6353 58.9794 14.4538C58.9933 14.634 59.0004 14.8162 59.0004 15ZM59.0004 45C59.0004 45.1838 58.9933 45.366 58.9794 45.5462C58.9955 45.3647 59.0026 45.1824 59.0004 45Z"
                              fill="#B7B7B7"
                            />
                            <defs>
                              <linearGradient
                                id={`paint0_linear_1032_4_${i}`}
                                x1="30"
                                y1="8"
                                x2="30"
                                y2="52"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#999999" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>

                        {/* JWT Brand Logo - positioned at top-right */}
                        <div className="absolute right-5 sm:right-6 top-5 sm:top-6 opacity-95">
                          <svg
                            className="w-[84px] xs:w-[101px] sm:w-[120px] h-auto"
                            viewBox="0 0 341 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.75294 47.68C6.10761 47.68 4.10227 47.04 2.73694 45.76C1.41427 44.48 0.582275 42.7733 0.240941 40.64C-0.100392 38.464 -0.0790588 36.0747 0.304941 33.472C0.731608 30.8267 1.37161 28.1813 2.22494 25.536C3.07827 22.848 3.99561 20.3307 4.97694 17.984C6.00094 15.5947 6.93961 13.5893 7.79294 11.968C8.26227 11.072 8.88094 10.56 9.64894 10.432C10.4169 10.2613 11.1423 10.368 11.8249 10.752C12.5503 11.136 13.0623 11.6907 13.3609 12.416C13.7023 13.1413 13.6383 13.9307 13.1689 14.784C11.2916 18.368 9.79828 21.7813 8.68894 25.024C7.57961 28.2667 6.85427 31.1467 6.51294 33.664C6.21427 36.1387 6.23561 38.1013 6.57694 39.552C6.96094 40.96 7.68628 41.664 8.75294 41.664C9.73428 41.664 10.8009 41.3013 11.9529 40.576C13.1049 39.8507 14.3423 38.5493 15.6649 36.672C17.0303 34.6667 18.3529 32.064 19.6329 28.864C20.9556 25.6213 22.1289 21.8667 23.1529 17.6C23.4089 16.6187 23.8783 15.9573 24.5609 15.616C25.2863 15.2747 26.0329 15.2107 26.8009 15.424C27.5689 15.6373 28.1876 16.064 28.6569 16.704C29.1263 17.3013 29.2543 18.0693 29.0409 19.008C27.9316 23.616 27.3769 27.5627 27.3769 30.848C27.4196 34.1333 27.7609 36.5227 28.4009 38.016C28.8703 39.0827 29.4249 39.8507 30.0649 40.32C30.7476 40.7893 31.4943 41.024 32.3049 41.024C33.1156 41.024 33.9689 40.7253 34.8649 40.128C35.8036 39.488 36.7209 38.4 37.6169 36.864C38.5556 35.328 39.3876 33.216 40.1129 30.528C37.6809 28.48 35.6756 25.7707 34.0969 22.4C32.5183 19.0293 31.7289 15.168 31.7289 10.816C31.7289 8.93867 31.9423 7.21067 32.3689 5.632C32.7956 4.05333 33.5209 2.79467 34.5449 1.856C35.5689 0.874666 36.9769 0.383999 38.7689 0.383999C40.9449 0.383999 42.7156 1.17333 44.0809 2.752C45.4463 4.288 46.4489 6.37867 47.0889 9.024C47.7289 11.6267 48.0063 14.5493 47.9209 17.792C47.8783 21.0347 47.5369 24.3413 46.8969 27.712C47.5369 28.0107 48.2196 28.2453 48.9449 28.416C49.7129 28.5867 50.4809 28.672 51.2489 28.672C52.9983 28.672 54.7903 28.416 56.6249 27.904C58.5023 27.3493 60.1023 26.6453 61.4249 25.792C62.2783 25.2373 63.0676 25.088 63.7929 25.344C64.5183 25.5573 65.0943 26.0053 65.521 26.688C65.9476 27.328 66.1183 28.0533 66.0329 28.864C65.9903 29.632 65.5636 30.272 64.7529 30.784C62.8756 32.0213 60.7423 33.0027 58.3529 33.728C56.0063 34.4533 53.6383 34.816 51.2489 34.816C49.2863 34.816 47.3449 34.4533 45.4249 33.728C44.1876 37.7387 42.5023 40.96 40.3689 43.392C38.2356 45.824 35.5476 47.04 32.3049 47.04C30.2569 47.04 28.3583 46.4427 26.6089 45.248C24.9023 44.0107 23.6223 42.4107 22.7689 40.448C22.5983 40.064 22.4276 39.6587 22.2569 39.232C22.1289 38.8053 22.0223 38.4 21.9369 38.016C21.7236 38.4 21.4889 38.7627 21.2329 39.104C21.0196 39.4453 20.7849 39.7867 20.5289 40.128C18.9503 42.3467 17.1796 44.16 15.2169 45.568C13.2969 46.976 11.1423 47.68 8.75294 47.68ZM41.5849 23.104C42.0116 19.9893 42.1183 17.3653 41.9049 15.232C41.6916 13.0987 41.3503 11.392 40.8809 10.112C40.4116 8.78933 39.9423 7.85067 39.4729 7.296C39.0463 6.69867 38.8116 6.4 38.7689 6.4C38.7689 6.4 38.6836 6.42133 38.5129 6.464C38.3849 6.464 38.2356 6.76267 38.0649 7.36C37.9369 7.91467 37.8729 9.06667 37.8729 10.816C37.8729 12.992 38.1929 15.168 38.8329 17.344C39.4729 19.4773 40.3903 21.3973 41.5849 23.104Z"
                              fill="white"
                            />
                            <path
                              d="M91.5429 48.768C89.5376 48.768 87.9163 48.3627 86.6789 47.552C85.4843 46.784 84.6096 45.76 84.0549 44.48C83.5003 43.1573 83.2016 41.7493 83.1589 40.256C81.3243 42.4747 79.2763 44.224 77.0149 45.504C74.7963 46.7413 72.4709 47.36 70.0389 47.36C68.1189 47.36 66.3056 46.912 64.5989 46.016C62.8923 45.0773 61.5056 43.6907 60.4389 41.856C59.4149 39.9787 58.9029 37.6107 58.9029 34.752C58.9029 31.7653 59.5216 28.8427 60.7589 25.984C62.0389 23.0827 63.7669 20.48 65.9429 18.176C68.1616 15.8293 70.6789 13.9733 73.4949 12.608C76.3536 11.2 79.3403 10.496 82.4549 10.496C84.5029 10.496 86.5296 10.752 88.5349 11.264C90.5403 11.776 92.2896 12.5227 93.7829 13.504C94.6363 14.0587 95.1056 14.72 95.1909 15.488C95.2763 16.256 95.0843 16.9813 94.6149 17.664C94.1883 18.304 93.6123 18.752 92.8869 19.008C92.1616 19.264 91.3936 19.136 90.5829 18.624C89.7723 18.112 88.5563 17.6427 86.9349 17.216C85.3563 16.7467 83.8629 16.512 82.4549 16.512C80.0229 16.512 77.7616 17.0667 75.6709 18.176C73.5803 19.2853 71.7243 20.736 70.1029 22.528C68.5243 24.32 67.2869 26.2827 66.3909 28.416C65.4949 30.5493 65.0469 32.6613 65.0469 34.752C65.0469 35.8187 65.1749 36.864 65.4309 37.888C65.7296 38.8693 66.2416 39.7013 66.9669 40.384C67.6923 41.024 68.7163 41.344 70.0389 41.344C71.3189 41.344 72.7483 40.9173 74.3269 40.064C75.9483 39.168 77.4843 37.76 78.9349 35.84C79.8309 34.6453 80.7696 33.216 81.7509 31.552C82.7323 29.8453 83.6283 28.16 84.4389 26.496C85.2923 24.7893 85.9749 23.3387 86.4869 22.144C86.8283 21.2907 87.3403 20.736 88.0229 20.48C88.7483 20.224 89.4736 20.224 90.1989 20.48C90.9243 20.6933 91.5003 21.0987 91.9269 21.696C92.3536 22.2933 92.4816 23.04 92.3109 23.936L89.4949 37.632C89.1963 39.1253 89.1963 40.2347 89.4949 40.96C89.7936 41.6853 90.1776 42.176 90.6469 42.432C91.1163 42.6453 91.4149 42.752 91.5429 42.752C92.2256 42.752 93.1003 42.432 94.1669 41.792C95.2336 41.1093 96.5563 39.8507 98.1349 38.016C99.4576 36.5227 100.823 34.7733 102.231 32.768C103.682 30.72 105.068 28.6293 106.391 26.496C107.756 24.32 108.972 22.272 110.039 20.352C111.148 18.3893 112.023 16.768 112.663 15.488C113.09 14.592 113.687 14.0587 114.455 13.888C115.223 13.7173 115.948 13.824 116.631 14.208C117.356 14.5493 117.868 15.0827 118.167 15.808C118.508 16.4907 118.466 17.28 118.039 18.176C117.356 19.584 116.439 21.2907 115.287 23.296C114.178 25.3013 112.919 27.4347 111.511 29.696C110.146 31.9147 108.695 34.0907 107.159 36.224C105.666 38.3573 104.194 40.2773 102.743 41.984C101.036 43.9467 99.2869 45.568 97.4949 46.848C95.7456 48.128 93.7616 48.768 91.5429 48.768Z"
                              fill="white"
                            />
                            <path
                              d="M118.45 48.448C115.549 48.448 113.351 47.6373 111.858 46.016C110.407 44.352 109.533 42.0267 109.234 39.04C108.978 36.0533 109.17 32.5547 109.81 28.544C110.493 24.5333 111.517 20.16 112.882 15.424C113.181 14.4427 113.693 13.8027 114.418 13.504C115.143 13.1627 115.89 13.12 116.658 13.376C117.426 13.632 118.023 14.08 118.45 14.72C118.919 15.36 119.026 16.1493 118.77 17.088C117.191 22.464 116.146 26.8373 115.634 30.208C115.165 33.536 115.037 36.096 115.25 37.888C115.463 39.6373 115.869 40.832 116.466 41.472C117.106 42.112 117.767 42.432 118.45 42.432C119.303 42.432 120.413 41.9413 121.778 40.96C123.143 39.936 124.594 38.5067 126.13 36.672C127.666 34.8373 129.138 32.7253 130.546 30.336C129.778 27.904 129.394 25.152 129.394 22.08C129.394 20.2027 129.501 18.176 129.714 16C129.97 13.7813 130.397 11.6907 130.994 9.728C131.634 7.76533 132.509 6.18667 133.618 4.992C134.77 3.79733 136.242 3.264 138.034 3.392C139.485 3.52 140.573 4.032 141.298 4.928C142.066 5.824 142.535 6.95467 142.706 8.32C142.919 9.68533 142.941 11.1573 142.77 12.736C142.599 14.272 142.343 15.808 142.002 17.344C141.661 18.8373 141.319 20.16 140.978 21.312C139.954 24.8107 138.781 28.032 137.458 30.976C138.61 33.024 140.061 34.432 141.81 35.2C143.559 35.968 145.33 36.2453 147.122 36.032C148.914 35.776 150.45 35.2427 151.73 34.432C152.583 33.8773 153.373 33.728 154.098 33.984C154.823 34.1973 155.399 34.6453 155.826 35.328C156.295 35.968 156.487 36.6933 156.402 37.504C156.317 38.272 155.869 38.912 155.058 39.424C152.967 40.7893 150.642 41.6427 148.082 41.984C145.565 42.3253 143.09 42.0907 140.658 41.28C138.226 40.4693 136.093 39.04 134.258 36.992C132.039 40.576 129.586 43.392 126.898 45.44C124.253 47.4453 121.437 48.448 118.45 48.448ZM135.666 18.112C136.391 15.5947 136.882 13.7173 137.138 12.48C137.394 11.2427 137.522 10.432 137.522 10.048C137.522 9.62133 137.522 9.408 137.522 9.408C137.522 9.408 137.394 9.68533 137.138 10.24C136.882 10.752 136.605 11.648 136.306 12.928C136.007 14.1653 135.794 15.8933 135.666 18.112Z"
                              fill="white"
                            />
                            <path
                              d="M164.834 48.512C161.762 48.512 159.117 47.808 156.898 46.4C154.68 44.9493 152.973 43.008 151.778 40.576C150.584 38.1013 149.986 35.328 149.986 32.256C149.986 29.2267 150.562 26.3893 151.714 23.744C152.866 21.056 154.36 18.7093 156.194 16.704C158.072 14.656 160.056 13.0773 162.146 11.968C164.28 10.816 166.306 10.24 168.226 10.24C169.762 10.24 171.17 10.5387 172.45 11.136C173.73 11.7333 174.754 12.5867 175.522 13.696C176.333 14.8053 176.738 16.1493 176.738 17.728C176.738 20.0747 176.034 22.1227 174.626 23.872C173.261 25.5787 171.384 27.4773 168.994 29.568C167.202 31.1467 165.325 32.64 163.362 34.048C161.4 35.456 159.352 36.8427 157.218 38.208C158.584 41.0667 161.122 42.496 164.834 42.496C165.858 42.496 166.946 42.3467 168.098 42.048C169.25 41.7067 170.552 41.024 172.002 40C173.453 38.976 175.16 37.376 177.122 35.2C177.762 34.4747 178.466 34.1333 179.234 34.176C180.045 34.2187 180.749 34.5173 181.346 35.072C181.944 35.584 182.285 36.2453 182.37 37.056C182.498 37.824 182.242 38.5707 181.602 39.296C178.445 42.7947 175.458 45.2053 172.642 46.528C169.869 47.8507 167.266 48.512 164.834 48.512ZM156.13 31.744C157.752 30.6773 159.309 29.6107 160.802 28.544C162.296 27.4347 163.704 26.2827 165.026 25.088C167.245 23.1253 168.738 21.504 169.506 20.224C170.317 18.9013 170.722 18.0693 170.722 17.728C170.722 17.5573 170.594 17.28 170.338 16.896C170.082 16.4693 169.378 16.256 168.226 16.256C167.16 16.256 165.944 16.6613 164.578 17.472C163.256 18.24 161.954 19.328 160.674 20.736C159.437 22.144 158.392 23.7867 157.538 25.664C156.685 27.5413 156.216 29.568 156.13 31.744Z"
                              fill="white"
                            />
                            <path
                              d="M201.487 13.248C204.773 13.248 207.717 13.9733 210.319 15.424C212.922 16.8747 214.949 18.9013 216.399 21.504C217.893 24.1067 218.639 27.1147 218.639 30.528C218.639 33.9413 217.893 36.9707 216.399 39.616C214.949 42.2187 212.922 44.2453 210.319 45.696C207.717 47.1467 204.773 47.872 201.487 47.872C198.97 47.872 196.666 47.3813 194.575 46.4C192.485 45.4187 190.757 43.9893 189.391 42.112V47.488H183.503V0H189.647V18.688C191.013 16.896 192.719 15.552 194.767 14.656C196.815 13.7173 199.055 13.248 201.487 13.248ZM200.975 42.496C203.151 42.496 205.093 42.0053 206.799 41.024C208.549 40 209.914 38.592 210.895 36.8C211.919 34.9653 212.431 32.8747 212.431 30.528C212.431 28.1813 211.919 26.112 210.895 24.32C209.914 22.4853 208.549 21.0773 206.799 20.096C205.093 19.1147 203.151 18.624 200.975 18.624C198.842 18.624 196.901 19.1147 195.151 20.096C193.402 21.0773 192.037 22.4853 191.055 24.32C190.074 26.112 189.583 28.1813 189.583 30.528C189.583 32.8747 190.074 34.9653 191.055 36.8C192.037 38.592 193.402 40 195.151 41.024C196.901 42.0053 198.842 42.496 200.975 42.496Z"
                              fill="white"
                            />
                            <path
                              d="M256.568 13.568V47.488H250.68V42.112C249.315 43.9893 247.587 45.4187 245.496 46.4C243.406 47.3813 241.102 47.872 238.584 47.872C235.299 47.872 232.355 47.1467 229.752 45.696C227.15 44.2453 225.102 42.2187 223.608 39.616C222.158 36.9707 221.432 33.9413 221.432 30.528C221.432 27.1147 222.158 24.1067 223.608 21.504C225.102 18.9013 227.15 16.8747 229.752 15.424C232.355 13.9733 235.299 13.248 238.584 13.248C241.016 13.248 243.256 13.7173 245.304 14.656C247.352 15.552 249.059 16.896 250.424 18.688V13.568H256.568ZM239.096 42.496C241.23 42.496 243.171 42.0053 244.92 41.024C246.67 40 248.035 38.592 249.016 36.8C249.998 34.9653 250.488 32.8747 250.488 30.528C250.488 28.1813 249.998 26.112 249.016 24.32C248.035 22.4853 246.67 21.0773 244.92 20.096C243.171 19.1147 241.23 18.624 239.096 18.624C236.92 18.624 234.958 19.1147 233.208 20.096C231.502 21.0773 230.136 22.4853 229.112 24.32C228.131 26.112 227.64 28.1813 227.64 30.528C227.64 32.8747 228.131 34.9653 229.112 36.8C230.136 38.592 231.502 40 233.208 41.024C234.958 42.0053 236.92 42.496 239.096 42.496Z"
                              fill="white"
                            />
                            <path
                              d="M283.745 13.248C288.055 13.248 291.468 14.5067 293.985 17.024C296.545 19.4987 297.825 23.1467 297.825 27.968V47.488H291.681V28.672C291.681 25.3867 290.892 22.912 289.313 21.248C287.735 19.584 285.473 18.752 282.529 18.752C279.201 18.752 276.577 19.7333 274.657 21.696C272.737 23.616 271.777 26.3893 271.777 30.016V47.488H265.633V13.568H271.521V18.688C272.759 16.9387 274.423 15.5947 276.513 14.656C278.647 13.7173 281.057 13.248 283.745 13.248ZM319.82 31.68L312.78 38.208V47.488H306.636V0H312.78V30.464L331.276 13.568H338.7L324.428 27.584L340.108 47.488H332.556L319.82 31.68Z"
                              fill="white"
                            />
                          </svg>
                        </div>

                        {/* Double intersecting circle Brand Logo - bottom right corner */}
                        <div className="absolute right-5 sm:right-6 bottom-5 sm:bottom-6 flex -space-x-3 items-center opacity-90">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 backdrop-blur-[1px] border border-white/10" />
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/35 backdrop-blur-[1px] border border-white/10" />
                        </div>
                      </div>
                    </div>
                  );
                }

                // Back face slice
                if (isBackFace) {
                  const backBorderStyle = "border border-white/15";
                  const details = CARD_DETAILS[i % CARD_DETAILS.length];
                  return (
                    <div
                      key={layerIdx}
                      className={`absolute inset-0 rounded-[16px] ${backBorderStyle} pointer-events-none overflow-hidden`}
                      style={{
                        backgroundColor: baseBgColor,
                        transform: `translateZ(${zOffset}px) rotateX(180deg)`,
                        backfaceVisibility: 'hidden',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                      }}
                    >
                      {/* Render Video with premium 16px blur on the back face of the card */}
                      <div className="absolute inset-0 pointer-events-none" style={{ filter: 'blur(16px)', transform: 'scale(1.15)' }}>
                        <video
                          src={videoSrc}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>

                      {/* Premium Real Magnetic stripe */}
                      <div className="absolute left-0 right-0 top-4 sm:top-5 h-7 sm:h-9 bg-black/85 backdrop-blur-md z-10" />

                      {/* Card holder info and details on the bottom-left */}
                      <div 
                        className="absolute left-4 sm:left-6 bottom-4 sm:bottom-5 z-20 flex flex-col gap-0.5 sm:gap-1 text-left"
                        style={{ fontFamily: '"JetBrains Mono", monospace' }}
                      >
                        {/* Card Number */}
                        <div className="font-mono text-[10px] sm:text-[12px] font-medium tracking-[0.14em] text-white select-none">
                          {details.number}
                        </div>
                        {/* Owner & CVV */}
                        <div className="font-mono text-[7px] sm:text-[9px] font-medium text-white/70 tracking-wide flex items-center gap-2 select-none">
                          <span className="uppercase">{details.name}</span>
                          <span className="text-white/40 font-light">•</span>
                          <span>CVV: {details.cvv}</span>
                        </div>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```
