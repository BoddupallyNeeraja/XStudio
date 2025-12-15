import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPos = (clientX / innerWidth) * 100
      const yPos = (clientY / innerHeight) * 100
      
      if (heroRef.current) {
        heroRef.current.style.setProperty('--mouse-x', `${xPos}%`)
        heroRef.current.style.setProperty('--mouse-y', `${yPos}%`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">CINEMATIC</span>
          <span className="title-line highlight">EXCELLENCE</span>
        </h1>
        
        <p className="hero-description">
          Award winning film production studio crafting stories that move, inspire, and captivate audiences worldwide.
        </p>
        
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">START YOUR FILM</a>
          <a href="#services" className="btn btn-secondary">VIEW SHOWREEL</a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  )
}

export default Hero
