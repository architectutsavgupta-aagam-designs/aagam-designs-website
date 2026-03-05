import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollIndicator from './ScrollIndicator'


const SERVICES = [
  {
    num: '01',
    title: 'Architecture',
    desc: 'We specialize in residential, commercial, institutional, and mixed-use developments designed with clarity and purpose.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" style={{ width:'100%', height:'100%' }}>
        <polygon points="24,4 44,20 44,44 4,44 4,20" />
        <line x1="4" y1="20" x2="44" y2="20" />
        <line x1="24" y1="4" x2="24" y2="20" />
        <rect x="16" y="28" width="8" height="16" />
        <rect x="28" y="28" width="8" height="10" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Construction',
    desc: 'We provide reliable, quality-driven construction services ensuring precision and timely delivery.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" style={{ width:'100%', height:'100%' }}>
        <rect x="6" y="32" width="36" height="10" />
        <rect x="10" y="22" width="28" height="10" />
        <rect x="14" y="12" width="20" height="10" />
        <line x1="24" y1="4" x2="24" y2="12" />
        <line x1="6" y1="42" x2="42" y2="42" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Renovation & Remodeling',
    desc: 'Breathing new life into existing spaces, proving that "old" can always become "extraordinary."',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" style={{ width:'100%', height:'100%' }}>
        <path d="M8 40 L8 20 L24 8 L40 20 L40 40" />
        <line x1="8" y1="40" x2="40" y2="40" />
        <path d="M18 40 L18 28 Q24 22 30 28 L30 40" />
        <circle cx="35" cy="14" r="5" />
        <path d="M35 9 L35 4 M40 14 L45 14 M35 19 L35 24 M30 14 L25 14" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Interior Designing',
    desc: 'Curated interiors that blend comfort, timeless elegance, and usability into every square foot.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" style={{ width:'100%', height:'100%' }}>
        <rect x="4" y="4" width="40" height="40" />
        <line x1="4" y1="32" x2="44" y2="32" />
        <rect x="10" y="34" width="10" height="10" />
        <rect x="28" y="34" width="10" height="10" />
        <line x1="14" y1="4" x2="14" y2="32" />
        <rect x="16" y="10" width="16" height="14" />
        <line x1="4" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Turnkey Solutions',
    desc: 'End-to-end project management offering seamless execution from design development to final handover.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" style={{ width:'100%', height:'100%' }}>
        <circle cx="24" cy="24" r="20" />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.5" />
        <line x1="24" y1="4" x2="24" y2="14" />
        <line x1="24" y1="34" x2="24" y2="44" />
        <line x1="4" y1="24" x2="14" y2="24" />
        <line x1="34" y1="24" x2="44" y2="24" />
        <path d="M24 24 L34 14" />
        <circle cx="24" cy="24" r="10" strokeDasharray="3 4" />
      </svg>
    ),
  },
]


function ServiceCard({ svc, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, delay: 0.2 + index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        flex: '1 1 0',
        minWidth: 0,
        padding: 'clamp(28px,3.5vw,44px) clamp(18px,2.2vw,30px)',
        borderRight: index < 4 ? '1px solid rgba(201,168,76,0.12)' : 'none',
        cursor: 'default',
        overflow: 'hidden',
        background: hovered ? 'rgba(201,168,76,0.04)' : 'transparent',
        transition: 'background 0.45s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(14px,2vh,20px)',
      }}
    >

      <motion.div
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute', left: 0, top: '12%', bottom: '12%',
          width: '2px',
          background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)',
          transformOrigin: 'top',
          pointerEvents: 'none',
        }}
      />


      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
        <motion.span
          animate={{ color: hovered ? '#C9A84C' : 'rgba(201,168,76,0.20)' }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 200,
            fontSize: 'clamp(36px,4.5vw,56px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            userSelect: 'none',
          }}
        >
          {svc.num}
        </motion.span>

        <motion.div
          animate={{ opacity: hovered ? 0.75 : 0.18, scale: hovered ? 1.1 : 1 }}
          transition={{ duration: 0.38 }}
          style={{
            width: 'clamp(26px,2.8vw,36px)',
            height: 'clamp(26px,2.8vw,36px)',
            color: hovered ? '#C9A84C' : '#ffffff',
            flexShrink: 0,
            marginTop: '4px',
            transition: 'color 0.3s',
          }}
        >
          {svc.icon}
        </motion.div>
      </div>


      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.55, delay: 0.3 + index * 0.13 }}
        style={{
          width: '28px', height: '1px',
          background: hovered ? '#C9A84C' : 'rgba(201,168,76,0.32)',
          transformOrigin: 'left',
          transition: 'background 0.3s',
        }}
      />


      <h3 style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 400,
        fontSize: 'clamp(0.95rem,1.4vw,1.25rem)',
        color: hovered ? '#C9A84C' : '#ffffff',
        margin: 0, lineHeight: 1.3,
        transition: 'color 0.3s ease',
      }}>
        {svc.title}
      </h3>


      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 300,
        fontSize: 'clamp(11.5px,1vw,13px)',
        lineHeight: 1.85,
        color: 'rgba(255,255,255,0.42)',
        margin: 0,
        flexGrow: 1,
      }}>
        {svc.desc}
      </p>


      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
        transition={{ duration: 0.28 }}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 500,
          fontSize: 'clamp(8px,0.9vw,10px)',
          letterSpacing: '0.22em',
          color: '#C9A84C',
          textTransform: 'uppercase',
        }}
      >
        <span style={{width: '18px', height: '1px', background: '#C9A84C', display: 'inline-block', flexShrink: 0 }} />
      </motion.div>
    </motion.div>
  )
}


function ServiceCardMobile({ svc, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.12 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setOpen(o => !o)}
      style={{
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        padding: 'clamp(16px,3vh,22px) 0',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>\

        <span style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 200,
          fontSize: 'clamp(24px,6vw,36px)', lineHeight: 1,
          color: open ? '#C9A84C' : 'rgba(201,168,76,0.28)',
          minWidth: '52px', transition: 'color 0.3s',
          letterSpacing: '-0.02em',
        }}>
          {svc.num}
        </span>

        <span style={{width: '1px', height: '28px', background: 'rgba(201,168,76,0.18)', flexShrink: 0 }} />
        <h3 style={{
          fontFamily: 'Poppins, sans-serif', fontWeight: 400,
          fontSize: 'clamp(0.95rem,4.5vw,1.15rem)',
          color: open ? '#C9A84C' : '#ffffff',
          margin: 0, flex: 1, lineHeight: 1.25,
          transition: 'color 0.3s',
        }}>
          {svc.title}
        </h3>


        <div style={{
          width: '22px', height: '22px',
          color: open ? '#C9A84C' : 'rgba(255,255,255,0.25)',
          flexShrink: 0, transition: 'color 0.3s',
        }}>
          {svc.icon}
        </div>


        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.26 }}
          style={{
            width: '16px', height: '16px', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.7" style={{ width:'100%', height:'100%' }}>
            <polyline points="3,6 8,11 13,6" />
          </svg>
        </motion.div>
      </div>


      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.33, ease: [0.22, 1, 0.36, 1] }}
        style={{ overflow: 'hidden' }}
      >

        <div style={{paddingLeft: '66px', paddingTop: 'clamp(8px,1.5vh,12px)' }}>
          <div style={{ width: '20px', height: '1px', background: '#C9A84C', marginBottom: '10px', opacity: 0.6 }} />
          <p style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 300,
            fontSize: 'clamp(12px,3.8vw,14px)', lineHeight: 1.82,
            color: 'rgba(255,255,255,0.48)', margin: 0,
          }}>
            {svc.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}


export default function Services() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="services"
      style={{
        background: '#1a1a1a',
        padding: 'clamp(56px,9vh,128px) clamp(20px,6vw,72px)',
        position: 'relative', overflow: 'hidden',
      }}
    >

      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.045,
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)',
        backgroundSize: 'clamp(40px,5vw,60px) clamp(40px,5vw,60px)',
      }} />


      <svg aria-hidden viewBox="0 0 400 400"
        style={{ position:'absolute', top:'-10%', right:'-6%', width:'clamp(180px,28vw,360px)', height:'clamp(180px,28vw,360px)', opacity:0.045, pointerEvents:'none' }}>
        {[180,140,100,60,28].map((r,i) => (
          <circle key={i} cx="200" cy="200" r={r} fill="none" stroke="#C9A84C" strokeWidth={i%2===0?'0.8':'0.5'} strokeDasharray={i%2===0?undefined:'4 6'}/>
        ))}
        <line x1="20" y1="200" x2="380" y2="200" stroke="#C9A84C" strokeWidth="0.4"/>
        <line x1="200" y1="20" x2="200" y2="380" stroke="#C9A84C" strokeWidth="0.4"/>
      </svg>


      <svg aria-hidden viewBox="0 0 300 300"
        style={{ position:'absolute', bottom:'-8%', left:'-5%', width:'clamp(130px,20vw,260px)', height:'clamp(130px,20vw,260px)', opacity:0.045, pointerEvents:'none' }}>
        {[135,100,68,38].map((r,i) => (
          <circle key={i} cx="150" cy="150" r={r} fill="none" stroke="#C9A84C" strokeWidth={i%2===0?'0.7':'0.4'} strokeDasharray={i%2===0?undefined:'3 5'}/>
        ))}
        <line x1="15" y1="150" x2="285" y2="150" stroke="#C9A84C" strokeWidth="0.35"/>
        <line x1="150" y1="15" x2="150" y2="285" stroke="#C9A84C" strokeWidth="0.35"/>
      </svg>


      <div aria-hidden style={{
        position:'absolute', top:0, left:0, right:0, height:'2px',
        background:'linear-gradient(90deg,transparent,rgba(201,168,76,0.35) 25%,rgba(201,168,76,0.35) 75%,transparent)',
        pointerEvents:'none',
      }} />


      <style>{`
        .svc-desktop { display: flex; }
        .svc-mobile  { display: none; }
        @media (max-width: 860px) {
          .svc-desktop { display: none !important; }
          .svc-mobile  { display: block !important; }
        }
      `}</style>

      <div ref={ref} style={{maxWidth:'1400px', margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ textAlign:'center', marginBottom:'clamp(40px,7vh,72px)' }}>
          <motion.p
            initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
            transition={{ duration:0.8 }}
            style={{
              fontFamily:'Poppins, sans-serif', fontWeight:500,
              fontSize:'clamp(9px,1.2vw,10px)', letterSpacing:'0.42em',
              color:'#C9A84C', textTransform:'uppercase', margin:'0 0 12px',
            }}
          >
            Our Services
          </motion.p>

          <motion.h2
            initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.8, delay:0.12 }}
            style={{
              fontFamily:'Poppins, sans-serif', fontWeight:400,
              fontSize:'clamp(1.8rem,4.2vw,3.3rem)',
              color:'#ffffff', margin:'0 0 clamp(14px,2.5vh,20px)', lineHeight:1.15,
            }}
          >
            What We <em style={{ fontStyle:'italic', color:'#C9A84C' }}>Offer</em>
          </motion.h2>

          <motion.div
            initial={{ scaleX:0 }} animate={inView ? { scaleX:1 } : {}}
            transition={{ duration:0.7, delay:0.28 }}
            style={{
              width:'clamp(48px,5vw,64px)', height:'1px',
              background:'#C9A84C', transformOrigin:'center', margin:'0 auto',
            }}
          />
        </div>


        <motion.div
          className="svc-desktop"
          initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
          transition={{ duration:0.5, delay:0.18 }}
          style={{
            position:'relative',
            border:'1px solid rgba(201,168,76,0.14)',
          }}
        >

          {[
            { top:-1, left:-1, borderTop:'1px solid #C9A84C', borderLeft:'1px solid #C9A84C' },
            { top:-1, right:-1, borderTop:'1px solid #C9A84C', borderRight:'1px solid #C9A84C' },
            { bottom:-1, left:-1, borderBottom:'1px solid #C9A84C', borderLeft:'1px solid #C9A84C' },
            { bottom:-1, right:-1, borderBottom:'1px solid #C9A84C', borderRight:'1px solid #C9A84C' },
          ].map((s, i) => (
            <span key={i} style={{ position:'absolute', width:14, height:14, zIndex:2, ...s }} />
          ))}

          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} index={i} inView={inView} />
          ))}
        </motion.div>


        <div className="svc-mobile" style={{ borderTop:'1px solid rgba(201,168,76,0.12)' }}>
          {SERVICES.map((svc, i) => (
            <ServiceCardMobile key={svc.num} svc={svc} index={i} inView={inView} />
          ))}
        </div>


        <motion.p
          initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
          transition={{ duration:0.8, delay:0.9 }}
          style={{
            textAlign:'center',
            fontFamily:'Poppins, sans-serif', fontWeight:300,
            fontSize:'clamp(8px,1vw,10px)', letterSpacing:'0.3em',
            color:'rgba(255,255,255,0.18)',
            marginTop:'clamp(28px,5vh,44px)',
            textTransform:'uppercase',
          }}
        >
          Designing Spaces - Building Legacies - Delivering Excellence
        </motion.p>

      </div>

      <ScrollIndicator nextSection="projects" dark={true} />
    </section>
  )
}