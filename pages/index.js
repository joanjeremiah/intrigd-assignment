import Nav from '../components/Nav.js'
import Hero from '../components/Hero.js'
import About from '../components/About.js'
import Features from '../components/Features.js'
import Download from '../components/Download.js'
import Footer from '../components/Footer.js'
import Contact from '../components/Contact.js'
import Reviews from '../components/Reviews'
// import ScreenShots from '../components/ImageCarousel'
import ScrollUp from '../components/ScrollUp'
import ScreenShots from '../components/ScreenShots'

import {useRef} from 'react'

export default function Home() {
  const nav = useRef()
  const showOrHideNav = () => {
    nav.current.classList.toggle('d-none')
  }
  return (
    <div>
      <div className="gradient">
        <div ref={nav}>
          <Nav />
        </div>
        <Hero />
      </div>
      <ScrollUp />
      <About />
      <Features />  
      <ScreenShots showOrHideNav={showOrHideNav} /> 
      <Reviews />
      <Download />
      <Contact />
      <Footer />
    </div>
  )
}
