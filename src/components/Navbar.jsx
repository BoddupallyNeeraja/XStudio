import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="brand-x-icon">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <path d="M10,10 L30,30 M30,10 L10,30" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="brand-text-container">
              <span className="brand-text-main">X STUDIOS</span>
            </div>
          </div>
          
          <div className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#showcase" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="btn-book-now" onClick={() => setMobileMenuOpen(false)}>BOOK NOW</a>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      <div className="navbar-separator"></div>
    </>
  )
}

export default Navbar
