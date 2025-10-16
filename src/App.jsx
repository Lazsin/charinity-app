import './App.css'
import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import SectionAboutUs from './components/sections/sectionAboutUs/SectionAboutUs'
import SectionFoundation from './components/sections/sectionFoundation/SectionFoundation'
import SectionHero from './components/sections/sectionHero/SectionHero'
import SectionConsultations from './components/sections/sectionConsultations/SectionConsultations'
import SectionRetreats from './components/sections/sectionRetreats/SectionRetreats'
import SectionContact from './components/sections/sectionContact/SectionContact'
import Footer from './components/footer/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('hero')
      if (!hero) return
      const heroBottom = hero.getBoundingClientRect().bottom
      setScrolled(heroBottom <= 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      
      <main className="body">
        <Header scrolled={scrolled} />
        <SectionHero />
        <SectionAboutUs />
        <SectionFoundation />
        <SectionConsultations />
        <SectionRetreats />
        <SectionContact />
        <Footer />
      </main>
    </>
  )
}