import { motion } from 'framer-motion'

/*
  ScrollIndicator
  ───────────────
  Props:
    nextSection  — id of the section to scroll to
    dark         — true on dark backgrounds (hero, services)
    hero         — true ONLY inside the Hero section.
                   Switches to position:absolute so it pins
                   to the bottom of the hero viewport without
                   adding height or being clipped by overflow:hidden.
*/
function ScrollIndicator({ nextSection, dark = false, hero = false }) {
  const chevronClr = dark ? 'rgba(255,255,255,0.50)' : 'rgba(26,26,26,0.32)'
  const lineClr    = dark ? 'rgba(255,255,255,0.18)' : 'rgba(26,26,26,0.12)'
  const labelClr   = dark ? 'rgba(255,255,255,0.38)' : 'rgba(26,26,26,0.28)'

  /* ── Indicator inner content — shared between both modes ── */
  const inner = (
    <div
      className="scroll-indicator"
      onClick={() => document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' })}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '7px',
        cursor: 'pointer', userSelect: 'none',
      }}
    >
      {/* Flowing gold line */}
      <div style={{
        width: '1px', height: 'clamp(28px,4vh,40px)',
        background: lineClr, position: 'relative', overflow: 'hidden',
      }}>
        <motion.div
          animate={{ y: ['-100%', '200%'] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute', top: 0, left: 0,
            width: '100%', height: '50%', background: '#C9A84C',
          }}
        />
      </div>

      {/* Bouncing chevron */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke={chevronClr} strokeWidth="1.8">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>

      {/* Label */}
      <motion.span
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{
          fontFamily: 'Inter, sans-serif', fontWeight: 400,
          fontSize: '7.5px', letterSpacing: '0.38em',
          color: labelClr, textTransform: 'uppercase',
        }}
      >
        Scroll
      </motion.span>
    </div>
  )

  /* ── HERO mode: absolutely positioned inside the hero section ──
     Sits above the slide dots (bottom ~90px) so nothing overlaps.
     Uses animate (not whileInView) because the hero is always
     in view on page load — whileInView would never fire here.    */
  if (hero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          /* sits between the slide dots and the hero content */
          bottom: 'clamp(68px, 10vh, 88px)',
          left: 0, right: 0,
          display: 'flex', justifyContent: 'center',
          zIndex: 11,
          pointerEvents: 'auto',
        }}
      >
        {inner}
      </motion.div>
    )
  }

  /* ── ALL OTHER SECTIONS: normal in-flow, triggered by whileInView ── */
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.4 }}
      style={{
        display: 'flex', justifyContent: 'center',
        paddingTop: 'clamp(32px,5vh,52px)',
        paddingBottom: 'clamp(6px,1.5vh,12px)',
      }}
    >
      {inner}
    </motion.div>
  )
}

export default ScrollIndicator