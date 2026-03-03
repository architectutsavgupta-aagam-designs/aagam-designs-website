// logo.png       → dark text logo (used on white/light navbar)
// logo-white.png → white text logo (used on dark/transparent hero navbar)
//
// Fully fluid — width driven by CSS clamp(), SVG overlay uses
// viewBox="0 0 619 413" so text always lands in the right spot.

export default function Logo({ onDark = false, bgColor = 'transparent' }) {
  const estdClr = onDark ? '#C9A84C' : '#B8860B'

  // position of |Estd. 2020| differs slightly between the two PNGs
  // because the light version has a left-margin offset in the image
  const ex = onDark ? 26.5  : 68.5
  const ey = onDark ? 325.5 : 305.2
  const fs = onDark ? 30  : 28  // font-size in viewBox units

  return (
    <div
      style={{
        // fluid: 80px on a 320px phone → 130px on a 900px+ screen
        width:    'clamp(80px, 14vw, 130px)',
        position: 'relative',
        lineHeight: 0,
        flexShrink: 0,
        background: bgColor,
        transition: 'background 0.5s ease',
      }}
    >
      {/* Logo PNG — scales with the container */}
      <img
        src={onDark ? '/logo-white.png' : '/logo.png'}
        alt="Aagam Designs by Ar. Utsav Gupta"
        draggable={false}
        style={{
          display:    'block',
          width:      '100%',
          height:     'auto',       // preserves 619:413 aspect ratio automatically
          objectFit:  'contain',
          userSelect: 'none',
        }}
      />

      {/* ESTD. 2020 overlay — viewBox matches PNG dimensions exactly,
          so the text always sits in the correct position regardless of
          how large or small the container is rendered.                  */}
      <svg
        viewBox="0 0 619 413"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
        style={{
          position:      'absolute',
          inset:          0,
          width:         '100%',
          height:        '100%',
          pointerEvents: 'none',
        }}
      >
        <text
          x={ex}
          y={ey}
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontWeight={fs}
          fontSize={fs}
          letterSpacing="0.1"
          fill={estdClr}
          textRendering="geometricPrecision"
        >
          |Estd. 2020|
        </text>
      </svg>
    </div>
  )
}