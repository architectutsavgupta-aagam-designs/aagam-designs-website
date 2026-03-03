import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants/index'
import Logo from './Logo'

/* ─── Design tokens ─────────────────────────────────────── */
const CREAM   = '#FEF8F6'   // warm cream — matches logo background exactly
const DARK    = '#1A1A1A'   // near-black text on white navbar
const GOLD    = '#B8860B'   // rich gold — readable on cream & light backgrounds
const GOLD_LT = '#C9A84C'   // brighter gold — readable on dark backgrounds

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar({ activeSection }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isMobile,  setIsMobile]  = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900)
    checkMobile()

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      // Close mobile menu on any scroll
      if (Math.abs(y - lastScrollY.current) > 10) {
        setMenuOpen(false)
        lastScrollY.current = y
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  /* ── Color tokens based on scroll state ── */
  const onDarkBg      = !scrolled                        // true = over dark hero
  const linkDefault   = onDarkBg ? 'rgba(255,255,255,0.80)' : DARK
  const linkActiveClr = onDarkBg ? GOLD_LT               : GOLD
  const linkHoverClr  = onDarkBg ? '#ffffff'             : GOLD
  const hamClr        = GOLD_LT

  /* ── Contact active state ──
     When contact section is active:
       • Border color turns gold
       • Background fills with gold
       • Text becomes cream/dark (contrast)
     This mirrors the gold underline behaviour of other nav links.
  */
  const isContact = activeSection === 'contact'
  const contactBg      = isContact ? (onDarkBg ? GOLD_LT : GOLD)          : 'transparent'
  const contactClr     = isContact ? '#ffffff'                               : linkDefault
  const contactBdrClr  = isContact ? (onDarkBg ? GOLD_LT : GOLD)          : (onDarkBg ? 'rgba(255,255,255,0.75)' : DARK)

  return (
    <>
      {/* ══════════════════════════ NAVBAR ══════════════════════════ */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
          background: scrolled ? CREAM : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.07)' : 'none',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : 'none',
          transition: 'background 0.5s ease, box-shadow 0.5s ease, border-color 0.5s ease',
        }}
      >
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          /* Fluid padding: 16px on 320px phone → 60px on 1400px+ desktop */
          padding: 'clamp(8px, 1.5vh, 12px) clamp(16px, 4vw, 60px)',
        }}>

          {/* ── LOGO — always left ── */}
          <button
            onClick={() => scrollTo('home')}
            aria-label="Home"
            style={{
              border: 'none', cursor: 'pointer',
              padding: 0, flexShrink: 0, lineHeight: 0,
              transition: 'opacity 0.3s',
              /* Match navbar background exactly at all times */
              background: scrolled ? '#F5F2ED' : 'transparent',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <Logo onDark={onDarkBg} bgColor={scrolled ? '#F5F2ED' : 'transparent'} />
          </button>

          {/* ── DESKTOP NAV — visible above 900px ── */}
          {!isMobile && (
            <nav aria-label="Main navigation">
              <div style={{
                display: 'flex', alignItems: 'center',
                gap: 'clamp(16px, 2vw, 34px)',
              }}>

                {/* Regular links with animated gold underline */}
                {NAV_LINKS.map(({ label, path }) => {
                  const active = activeSection === path
                  return (
                    <button
                      key={path}
                      onClick={() => scrollTo(path)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(10px, 0.9vw, 11px)',
                        fontWeight: 500, letterSpacing: '0.22em',
                        color: active ? linkActiveClr : linkDefault,
                        position: 'relative',
                        padding: '6px 0 8px 0',
                        transition: 'color 0.3s ease', whiteSpace: 'nowrap',
                        lineHeight: 1,
                        display: 'inline-flex', alignItems: 'center',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = linkHoverClr)}
                      onMouseLeave={e => (e.currentTarget.style.color = active ? linkActiveClr : linkDefault)}
                    >
                      {label}
                      {/* Animated gold underline — perfectly aligned at bottom */}
                      <motion.span
                        animate={{ width: active ? '100%' : '0%', opacity: active ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          position: 'absolute',
                          bottom: '0px',
                          left: '0',
                          right: '0',
                          height: '2px',
                          background: linkActiveClr,
                          display: 'block',
                          borderRadius: '0',
                        }}
                      />
                    </button>
                  )
                })}

                {/* ── CONTACT button — fills gold when contact section is active ── */}
                <motion.button
                  onClick={() => scrollTo('contact')}
                  title="Contact Us"
                  animate={{
                    backgroundColor: contactBg,
                    color: contactClr,
                    borderColor: contactBdrClr,
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(10px, 0.9vw, 11px)',
                    fontWeight: 500, letterSpacing: '0.22em',
                    padding: 'clamp(7px, 1vh, 10px) clamp(14px, 1.5vw, 22px)',
                    border: `1px solid ${contactBdrClr}`,
                    background: contactBg, color: contactClr,
                    cursor: 'pointer', whiteSpace: 'nowrap',
                    transition: 'border-color 0.35s ease',
                  }}
                >
                  CONTACT ›
                </motion.button>

              </div>
            </nav>
          )}

          {/* ── HAMBURGER — visible below 900px ── */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                gap: '5px', padding: '10px', marginRight: '-10px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: 'block', width: '22px', height: '1.5px',
                  background: hamClr,
                  transition: 'all 0.35s cubic-bezier(0.22,1,0.36,1)',
                  transformOrigin: 'center',
                  transform: i === 0 ? (menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none')
                           : i === 1 ? (menuOpen ? 'scaleX(0)' : 'scaleX(1)')
                           : (menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none'),
                  opacity: i === 1 ? (menuOpen ? 0 : 1) : 1,
                }} />
              ))}
            </button>
          )}
        </div>
      </motion.nav>

      {/* ══════════════════════════ MOBILE MENU ══════════════════════════ */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed', inset: 0, zIndex: 9997,
                background: 'rgba(0,0,0,0.25)',
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'fixed',
                /* Sit right below the navbar */
                top: 'clamp(52px, 7vh, 70px)',
                left: 'clamp(16px, 4vw, 60px)',
                right: 'clamp(16px, 4vw, 60px)',
                zIndex: 9998,
                background: CREAM,
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <div style={{
                display: 'flex', flexDirection: 'column',
                padding: 'clamp(16px, 3vh, 24px) clamp(20px, 5vw, 32px)',
                gap: '4px',
              }}>
                {/* Nav links */}
                {NAV_LINKS.map(({ label, path }, i) => {
                  const active = activeSection === path
                  return (
                    <motion.button
                      key={path}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.3 }}
                      onClick={() => scrollTo(path)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        textAlign: 'left',
                        padding: 'clamp(10px, 2vh, 14px) 0',
                        borderBottom: '1px solid rgba(0,0,0,0.055)',
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 'clamp(11px, 2.5vw, 13px)',
                        fontWeight: active ? 600 : 400,
                        letterSpacing: '0.2em',
                        color: active ? GOLD : DARK,
                        display: 'flex', alignItems: 'center',
                        gap: '10px',
                        transition: 'color 0.2s',
                      }}
                    >
                      {/* Gold dash for active */}
                      <motion.span
                        animate={{ width: active ? 14 : 0, opacity: active ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          display: 'block', height: '1.5px',
                          background: GOLD, flexShrink: 0,
                          borderRadius: '1px',
                        }}
                      />
                      {label}
                    </motion.button>
                  )
                })}

                {/* Contact — gold fill when active */}
                <motion.button
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.055, duration: 0.3 }}
                  onClick={() => scrollTo('contact')}
                  style={{
                    marginTop: 'clamp(10px, 2vh, 16px)',
                    background: isContact ? GOLD : 'transparent',
                    border: `1px solid ${isContact ? GOLD : DARK}`,
                    cursor: 'pointer', textAlign: 'left',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 'clamp(11px, 2.5vw, 13px)',
                    fontWeight: 500, letterSpacing: '0.2em',
                    color: isContact ? CREAM : DARK,
                    padding: 'clamp(10px, 2vh, 13px) clamp(14px, 3vw, 20px)',
                    width: 'fit-content',
                    transition: 'all 0.3s ease',
                  }}
                >
                  CONTACT ›
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar