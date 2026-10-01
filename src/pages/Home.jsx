import { useState, useEffect, useCallback } from 'react'
import useSEO from '../hooks/useSEO'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const SECTIONS = ['home', 'about', 'services', 'projects', 'contact']

function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useSEO({
    title: 'Aagam Designs | Best Architect in Kanpur | Ar. Utsav Gupta',
    description: 'Aagam Designs — Premium architecture, interior design and construction services in Kanpur, Uttar Pradesh. Led by Ar. Utsav Gupta and Aishwar Gupta with 10+ years of experience.',
    keywords: 'architect in kanpur, architecture design kanpur, interior design kanpur, best architect kanpur, aagam designs, ar utsav gupta, construction kanpur',
  })

  const getActiveSection = useCallback(() => {
    const scrollY    = window.scrollY
    const windowH    = window.innerHeight
    const docH       = document.documentElement.scrollHeight
    const navbarH    = 64 // approximate navbar height




    if (scrollY + windowH >= docH - 60) return 'contact'




    let best = 'home'
    let bestScore = -Infinity

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const rect = el.getBoundingClientRect()



      const visTop    = Math.max(rect.top, navbarH)
      const visBottom = Math.min(rect.bottom, windowH)
      const visible   = Math.max(0, visBottom - visTop)
      const ratio     = visible / windowH



      if (ratio > bestScore) { bestScore = ratio; best = id }
    })

    return best
  }, [])

  useEffect(() => {
    const onScroll = () => setActiveSection(getActiveSection())



    let ticking = false
    const handler = () => {
      if (!ticking) {
        requestAnimationFrame(() => { onScroll(); ticking = false })
        ticking = true
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', handler)
  }, [getActiveSection])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home