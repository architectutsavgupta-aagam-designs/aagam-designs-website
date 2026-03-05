

export default function Logo({ onDark = false, bgColor = 'transparent' }) {
  const estdClr = onDark ? '#C9A84C' : '#B8860B'



  const ex = onDark ? 26.5  : 68.5
  const ey = onDark ? 325.5 : 305.2
  const fs = onDark ? 30  : 28

  return (
    <div
      style={{
        width: 'clamp(80px, 14vw, 130px)',
        position: 'relative',
        lineHeight: 0,
        flexShrink: 0,
        background: bgColor,
        transition: 'background 0.5s ease',
      }}
    >


      <img
        src={onDark ? '/logo-white.png' : '/logo.png'}
        alt="Aagam Designs by Ar. Utsav Gupta"
        draggable={false}
        style={{
          display:    'block',
          width:      '100%',
          height:     'auto',
          objectFit:  'contain',
          userSelect: 'none',
        }}
      />


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