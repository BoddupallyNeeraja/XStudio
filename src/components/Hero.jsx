import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
  const heroRef = useRef(null)
  const xLogoRef = useRef(null)

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

    // Animate X logo on mount
    if (xLogoRef.current) {
      xLogoRef.current.style.animation = 'logoEntrance 1.5s ease-out'
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
        <div className="powered-by">
          <span className="powered-text">Powered by</span>
        </div>
        
        <div className="x-logo-wrapper">
          <div className="x-logo-container" ref={xLogoRef}>
            <div className="x-logo-frame">
              <div className="x-logo">
                <svg viewBox="0 0 300 300" className="x-svg">
                  <defs>
                    <pattern id="diamond-plate" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                      <rect width="25" height="25" fill="#dc2626"/>
                      <ellipse cx="12.5" cy="12.5" rx="8" ry="4" fill="#b91c1c" transform="rotate(45 12.5 12.5)"/>
                      <ellipse cx="12.5" cy="12.5" rx="8" ry="4" fill="#991b1b" transform="rotate(-45 12.5 12.5)"/>
                    </pattern>
                    <linearGradient id="x-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="1" />
                      <stop offset="50%" stopColor="#dc2626" stopOpacity="1" />
                      <stop offset="100%" stopColor="#991b1b" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="metallic-border" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e5e7eb" stopOpacity="1" />
                      <stop offset="50%" stopColor="#9ca3af" stopOpacity="1" />
                      <stop offset="100%" stopColor="#4b5563" stopOpacity="1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Metallic Border - Outer */}
                  <path d="M75,75 L225,75 L225,225 L75,225 Z" 
                    fill="none" 
                    stroke="url(#metallic-border)" 
                    strokeWidth="8" 
                    strokeLinejoin="miter"
                    className="border-outer"/>
                  
                  {/* Metallic Border - Bevel effect */}
                  <path d="M79,79 L221,79 L221,221 L79,221 Z" 
                    fill="none" 
                    stroke="url(#metallic-border)" 
                    strokeWidth="4" 
                    strokeLinejoin="miter"
                    opacity="0.6"
                    className="border-bevel"/>
                  
                  {/* X Shape with diamond plate */}
                  <path d="M85,85 L215,215 M215,85 L85,215" 
                    stroke="url(#diamond-plate)" 
                    strokeWidth="50" 
                    strokeLinecap="round"
                    className="x-path"
                    fill="url(#diamond-plate)"/>
                  
                  {/* Rivets - 8 total */}
                  <g className="rivets">
                    {/* Top-left arm */}
                    <circle cx="115" cy="115" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M113,115 L117,115 M115,113 L115,117" stroke="#1f2937" strokeWidth="1"/>
                    
                    <circle cx="135" cy="135" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M133,135 L137,135 M135,133 L135,137" stroke="#1f2937" strokeWidth="1"/>
                    
                    {/* Top-right arm */}
                    <circle cx="185" cy="115" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M183,115 L187,115 M185,113 L185,117" stroke="#1f2937" strokeWidth="1"/>
                    
                    <circle cx="165" cy="135" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M163,135 L167,135 M165,133 L165,137" stroke="#1f2937" strokeWidth="1"/>
                    
                    {/* Bottom-left arm */}
                    <circle cx="115" cy="185" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M113,185 L117,185 M115,183 L115,187" stroke="#1f2937" strokeWidth="1"/>
                    
                    <circle cx="135" cy="165" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M133,165 L137,165 M135,163 L135,167" stroke="#1f2937" strokeWidth="1"/>
                    
                    {/* Bottom-right arm */}
                    <circle cx="185" cy="185" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M183,185 L187,185 M185,183 L185,187" stroke="#1f2937" strokeWidth="1"/>
                    
                    <circle cx="165" cy="165" r="4" fill="#9ca3af" className="rivet"/>
                    <path d="M163,165 L167,165 M165,163 L165,167" stroke="#1f2937" strokeWidth="1"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="studios-text">STUDIOS</div>
        
        <h1 className="hero-title">
          <span className="title-line">CINEMATIC</span>
          <span className="title-line highlight">EXCELLENCE</span>
        </h1>
        
        <p className="hero-description">
          Award winning film production studio crafting stories that move, inspire, and captivate audiences worldwide.
        </p>
        
        <div className="hero-buttons">
          <a href="#showcase" className="btn btn-primary">START YOUR FILM</a>
          <a href="#features" className="btn btn-secondary">VIEW SHOWREEL</a>
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
