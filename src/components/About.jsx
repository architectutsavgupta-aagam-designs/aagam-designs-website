import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInLeft, fadeInRight, fadeInUp } from '../animations/variants'
import ScrollIndicator from './ScrollIndicator'

const APPROACH = [
  'Carefully understanding your needs and vision',
  'Intelligent space planning and climate-responsive design',
  'Quality materials and robust construction practices',
  'Seamless coordination under a single, accountable team',
]

const STATS = [
  { number: '8+',   label: 'Years Experience'    },
  { number: '100+', label: 'Projects Completed'  },
  { number: '100%', label: 'Client Satisfaction' },
]

export default function About() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="about"
      style={{
        background: '#FCFCFC',
        /*
          Vertical padding:  56px (phone) → 128px (desktop) → 160px (4K)
          Horizontal padding: 20px (phone) →  96px (desktop) → 160px (4K)
        */
        padding: 'clamp(56px,9vh,160px) clamp(20px,6vw,160px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >

      {/* ── Per-breakpoint tweaks ─────────────────────────────── */}
      <style>{`
        /* Tiny phones — stat numbers would overflow at default size */
        @media (max-width: 360px) {
          .ab-stat-num { font-size: 1.25rem !important; }
          .ab-stat-lbl { font-size: 7.5px !important; letter-spacing: 0.04em !important; }
          .ab-heading  { font-size: 1.55rem !important; }
        }

        /* Small phones — slightly tighten card padding */
        @media (max-width: 480px) {
          .ab-card         { padding: 20px !important; }
          .ab-quote        { font-size: 12.5px !important; line-height: 1.65 !important; }
          .ab-body-text    { font-size: 13px !important; }
          .ab-approach-txt { font-size: 12px !important; }
        }

        /* Landscape phones — reduce vertical padding so section
           doesn't force excessive scrolling on a short screen */
        @media (max-height: 500px) and (orientation: landscape) {
          #about {
            padding-top:    36px !important;
            padding-bottom: 36px !important;
          }
          .ab-divider { margin-top: 14px !important; margin-bottom: 20px !important; }
        }

        /* Tablets (768–1024px) — grid already auto-fits, just ensure
           the gap isn't too wide */
        @media (min-width: 768px) and (max-width: 1024px) {
          .ab-two-col { gap: clamp(28px,4vw,48px) !important; }
        }

        /* 4K / large TV — cap inner width so content doesn't
           stretch painfully wide; bump body text slightly */
        @media (min-width: 2560px) {
          .ab-inner     { max-width: 1800px !important; }
          .ab-body-text { font-size: 17px !important; line-height: 2.05 !important; }
          .ab-card-desc { font-size: 15px !important; }
          .ab-approach-txt { font-size: 15px !important; }
          .ab-quote     { font-size: 17px !important; }
        }
      `}</style>

      {/* ══════════ ARCHITECTURE BACKGROUND ══════════ */}

      {/* Blueprint grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(184,134,11,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(184,134,11,0.04) 1px, transparent 1px)
        `,
        backgroundSize: 'clamp(36px,5vw,56px) clamp(36px,5vw,56px)',
      }} />

      {/* Gold top-rule */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg,transparent,rgba(201,168,76,0.40) 25%,rgba(201,168,76,0.40) 75%,transparent)',
        pointerEvents: 'none',
      }} />

      {/* Large compass — top right */}
      <svg aria-hidden viewBox="0 0 500 500"
        style={{
          position: 'absolute', top: '-8%', right: '-5%',
          width: 'clamp(200px,36vw,480px)', height: 'clamp(200px,36vw,480px)',
          opacity: 0.055, pointerEvents: 'none',
        }}>
        <circle cx="250" cy="250" r="230" fill="none" stroke="#8B6914" strokeWidth="0.8"/>
        <circle cx="250" cy="250" r="170" fill="none" stroke="#8B6914" strokeWidth="0.5" strokeDasharray="4 6"/>
        <circle cx="250" cy="250" r="110" fill="none" stroke="#8B6914" strokeWidth="0.5"/>
        <circle cx="250" cy="250" r="50"  fill="none" stroke="#8B6914" strokeWidth="0.5" strokeDasharray="2 4"/>
        <line x1="20"  y1="250" x2="480" y2="250" stroke="#8B6914" strokeWidth="0.6"/>
        <line x1="250" y1="20"  x2="250" y2="480" stroke="#8B6914" strokeWidth="0.6"/>
        <line x1="88"  y1="88"  x2="412" y2="412" stroke="#8B6914" strokeWidth="0.3" strokeDasharray="3 7"/>
        <line x1="412" y1="88"  x2="88"  y2="412" stroke="#8B6914" strokeWidth="0.3" strokeDasharray="3 7"/>
        <circle cx="250" cy="250" r="5" fill="#8B6914" opacity="0.5"/>
      </svg>

      {/* Diagonal drafting lines — bottom left */}
      <svg aria-hidden viewBox="0 0 260 260"
        style={{
          position: 'absolute', bottom: '4%', left: 0,
          width: 'clamp(100px,20vw,260px)', height: 'clamp(100px,20vw,260px)',
          opacity: 0.055, pointerEvents: 'none',
        }}>
        <line x1="0" y1="260" x2="260" y2="0"   stroke="#8B6914" strokeWidth="0.8"/>
        <line x1="0" y1="210" x2="210" y2="0"   stroke="#8B6914" strokeWidth="0.5"/>
        <line x1="0" y1="160" x2="160" y2="0"   stroke="#8B6914" strokeWidth="0.4"/>
        <line x1="0" y1="110" x2="110" y2="0"   stroke="#8B6914" strokeWidth="0.3"/>
      </svg>

      {/* Corner brackets */}
      {[
        { top:    'clamp(14px,2.5vh,28px)', left:  'clamp(12px,2.5vw,36px)', rotate: '0deg'   },
        { top:    'clamp(14px,2.5vh,28px)', right: 'clamp(12px,2.5vw,36px)', rotate: '90deg'  },
        { bottom: 'clamp(14px,2.5vh,28px)', left:  'clamp(12px,2.5vw,36px)', rotate: '270deg' },
        { bottom: 'clamp(14px,2.5vh,28px)', right: 'clamp(12px,2.5vw,36px)', rotate: '180deg' },
      ].map((pos, i) => (
        <svg key={i} aria-hidden viewBox="0 0 28 28" width="28" height="28"
          style={{ position: 'absolute', ...pos, opacity: 0.22, pointerEvents: 'none', transform: `rotate(${pos.rotate})` }}>
          <line x1="0" y1="0" x2="0"  y2="16" stroke="#8B6914" strokeWidth="1.2"/>
          <line x1="0" y1="0" x2="16" y2="0"  stroke="#8B6914" strokeWidth="1.2"/>
        </svg>
      ))}

      {/* Measurement tick rule — right edge */}
      <div aria-hidden style={{
        position: 'absolute', right: 'clamp(6px,1.5vw,18px)', top: '15%', bottom: '15%',
        width: '1px',
        background: 'linear-gradient(180deg,transparent,rgba(184,134,11,0.18) 20%,rgba(184,134,11,0.18) 80%,transparent)',
        pointerEvents: 'none',
      }} />

      {/* ══════════ CONTENT ══════════ */}
      <div
        ref={ref}
        className="ab-inner"
        style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >

        {/* Label */}
        <motion.p
          variants={fadeInUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 500,
            fontSize: 'clamp(9px,1.2vw,10px)', letterSpacing: '0.42em',
            color: '#C9A84C', textTransform: 'uppercase', margin: '0 0 10px',
          }}
        >
          About Us
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="ab-heading"
          variants={fadeInUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 400,
            fontSize: 'clamp(1.7rem,4.2vw,3.3rem)',
            color: '#1a1a1a', lineHeight: 1.18,
            margin: 0,
            /* Prevent overflow on narrow screens */
            overflowWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          We Believe Great Spaces<br />
          <em style={{ fontStyle: 'italic' }}>Tell Powerful Stories</em>
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          className="ab-divider"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.85, delay: 0.28 }}
          style={{
            width: 'clamp(40px,5vw,64px)', height: '1px',
            background: '#C9A84C', transformOrigin: 'left',
            margin: 'clamp(16px,3.5vh,28px) 0 clamp(28px,6vh,56px)',
          }}
        />

        {/* ── Two-column grid ────────────────────────────────── */}
        {/*
          auto-fit minmax(min(100%, 320px), 1fr):
          • 1 column on screens narrower than ~640px (phones, small tablets)
          • 2 columns on everything wider (laptops → 4K TVs)
        */}
        <div
          className="ab-two-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(32px,5vw,80px)',
            alignItems: 'start',
          }}
        >

          {/* ── LEFT: body text + stats ── */}
          <motion.div
            variants={fadeInLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
          >
            <p
              className="ab-body-text"
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.88,
                color: '#3a3a3a',
                margin: '0 0 clamp(12px,2.5vh,22px)',
              }}
            >
              Based out of Kanpur, Uttar Pradesh, we are a full-service design and build
              practice offering end-to-end solutions in architecture, construction, renovation,
              interiors and turnkey projects. From the first sketch to the final handover, we
              create spaces that are functional, timeless and deeply connected to the way you
              live, work and experience the world.
            </p>

            <p
              className="ab-body-text"
              style={{
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: 'clamp(13px,1.4vw,15px)', lineHeight: 1.88,
                color: '#3a3a3a', margin: 0,
              }}
            >
              Led by{' '}
              <strong style={{ color: '#8B6914', fontWeight: 500 }}>Architect Utsav Gupta</strong>,
              with over 10 years of professional experience, Aagam Designs brings together
              thoughtful design, technical precision and on-ground execution.
            </p>

            {/* Stats row — always 3 columns, numbers scale with clamp */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 'clamp(10px,2.5vw,24px)',
              marginTop: 'clamp(24px,5vh,44px)',
              paddingTop: 'clamp(18px,4vh,36px)',
              borderTop: '1px solid rgba(184,134,11,0.20)',
            }}>
              {STATS.map((s, idx) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + idx * 0.08 }}
                >
                  <p
                    className="ab-stat-num"
                    style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: 400,
                      /* clamp: 1.4rem phones → 2.5rem desktop → hard cap avoids overflow */
                      fontSize: 'clamp(1.4rem,3vw,2.5rem)',
                      color: '#8B6914', margin: '0 0 4px',
                      lineHeight: 1.1,
                    }}
                  >
                    {s.number}
                  </p>
                  <p
                    className="ab-stat-lbl"
                    style={{
                      fontFamily: 'Poppins, sans-serif', fontWeight: 400,
                      fontSize: 'clamp(8px,1.1vw,11px)', letterSpacing: '0.06em',
                      color: '#888', margin: 0,
                      /* wrap long labels on tiny screens */
                      overflowWrap: 'break-word',
                    }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: approach card ── */}
          <motion.div
            variants={fadeInRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.32 }}
          >
            <div
              className="ab-card"
              style={{
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(4px)',
                padding: 'clamp(20px,4vw,40px)',
                border: '1px solid rgba(184,134,11,0.18)',
                position: 'relative',
              }}
            >

              {/* Blueprint corner accents */}
              {[
                { top: -1,    left: -1,    borderTop:    '2px solid #C9A84C', borderLeft:   '2px solid #C9A84C' },
                { top: -1,    right: -1,   borderTop:    '2px solid #C9A84C', borderRight:  '2px solid #C9A84C' },
                { bottom: -1, left: -1,    borderBottom: '2px solid #C9A84C', borderLeft:   '2px solid #C9A84C' },
                { bottom: -1, right: -1,   borderBottom: '2px solid #C9A84C', borderRight:  '2px solid #C9A84C' },
              ].map((s, i) => (
                <span key={i} style={{ position: 'absolute', width: 14, height: 14, ...s }} />
              ))}

              {/* Card label */}
              <p style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 500,
                fontSize: 'clamp(9px,1.2vw,10px)', letterSpacing: '0.36em',
                color: '#C9A84C', textTransform: 'uppercase',
                margin: '0 0 10px',
              }}>
                Our Approach
              </p>

              {/* Card heading */}
              <h3 style={{
                fontFamily: 'Poppins, sans-serif', fontWeight: 400,
                fontSize: 'clamp(1.15rem,2vw,1.75rem)',
                color: '#1a1a1a', margin: '0 0 clamp(10px,2vh,18px)',
              }}>
                How We Work
              </h3>

              {/* Card description */}
              <p
                className="ab-card-desc"
                style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 300,
                  fontSize: 'clamp(12px,1.3vw,14px)', lineHeight: 1.7,
                  color: '#555', margin: '0 0 clamp(14px,3vh,22px)',
                }}
              >
                Whether it is a new build, a sensitive renovation or a complete interior
                transformation, we focus on:
              </p>

              {/* Approach list */}
              <ul style={{
                margin: 0, padding: 0, listStyle: 'none',
                display: 'flex', flexDirection: 'column',
                gap: 'clamp(9px,2vh,16px)',
              }}>
                {APPROACH.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 18 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.52 + i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                  >
                    {/* Gold bullet */}
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#C9A84C', flexShrink: 0, marginTop: '6px',
                    }} />
                    <span
                      className="ab-approach-txt"
                      style={{
                        fontFamily: 'Inter, sans-serif', fontWeight: 300,
                        fontSize: 'clamp(12px,1.3vw,13.5px)', lineHeight: 1.7,
                        color: '#444',
                      }}
                    >
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Quote */}
              <div style={{
                marginTop:  'clamp(16px,3.5vh,28px)',
                paddingTop: 'clamp(12px,2.5vh,22px)',
                borderTop: '1px solid rgba(184,134,11,0.15)',
              }}>
                <p
                  className="ab-quote"
                  style={{
                    fontFamily: 'Poppins, sans-serif', fontStyle: 'italic',
                    fontSize: 'clamp(12.5px,1.4vw,16px)', lineHeight: 1.78,
                    color: '#555', margin: '0 0 10px',
                  }}
                >
                  "If you can imagine it, we can design, build and deliver it beautifully,
                  efficiently and with absolute attention to detail."
                </p>
                <p style={{
                  fontFamily: 'Poppins, sans-serif', fontWeight: 500,
                  fontSize: 'clamp(10px,1.1vw,11px)', letterSpacing: '0.1em',
                  color: '#8B6914', margin: 0,
                }}>
                  — Ar. Utsav Gupta
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <ScrollIndicator nextSection="services" dark={false} />
    </section>
  )
}