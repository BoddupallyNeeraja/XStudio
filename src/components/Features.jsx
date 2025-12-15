import { useState } from 'react'
import './Features.css'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: '🎬',
      title: 'Film Production',
      description: 'Full-scale movie production from pre-production planning to final delivery, handling every aspect of filmmaking.',
      gradient: 'gradient-1',
      featured: false,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
      details: {
        overview: 'Our comprehensive film production services cover every stage of the filmmaking process, from initial concept to final distribution.',
        services: [
          'Script development and storyboarding',
          'Budget planning and financing solutions',
          'Location scouting and permits',
          'Casting and talent management',
          'Production scheduling and logistics',
          'Equipment rental and management',
          'On-set production coordination',
          'Post-production supervision'
        ],
        experience: 'Over 200 successful film productions completed'
      }
    },
    {
      icon: '📹',
      title: 'Cinematography',
      description: 'Expert camera work and visual storytelling that captures emotion and brings your narrative to life on screen.',
      gradient: 'gradient-2',
      featured: false,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
      details: {
        overview: 'Our award-winning cinematography team specializes in creating stunning visual narratives that enhance your story.',
        services: [
          'Camera operation and movement',
          'Lighting design and setup',
          'Color grading and correction',
          'Lens selection and testing',
          'Aerial and drone cinematography',
          'Steadicam and gimbal work',
          'Visual effects integration',
          'Technical camera support'
        ],
        experience: 'Multiple award-winning cinematographers on our team'
      }
    },
    {
      icon: '🎭',
      title: 'Directing',
      description: 'Visionary direction that guides performances and shapes the creative vision into a cohesive cinematic experience.',
      gradient: 'gradient-3',
      featured: false,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      details: {
        overview: 'Our directors bring creative vision and technical expertise to guide every aspect of your production.',
        services: [
          'Creative direction and vision',
          'Actor direction and performance coaching',
          'Scene blocking and choreography',
          'Creative consultation',
          'Script analysis and breakdown',
          'Shot composition and framing',
          'Editorial supervision',
          'Overall production oversight'
        ],
        experience: 'Directors with 75+ industry awards'
      }
    },
    {
      icon: '✨',
      title: 'Post-Production',
      description: 'Professional editing, color grading, VFX, and sound design to polish your film to perfection.',
      gradient: 'gradient-4',
      featured: false,
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80',
      details: {
        overview: 'Complete post-production services using industry-leading software and cutting-edge techniques.',
        services: [
          'Video editing and assembly',
          'Color grading and correction',
          'Visual effects and compositing',
          'Sound design and mixing',
          'Music composition and licensing',
          'Title design and graphics',
          'Motion graphics and animation',
          'Final delivery and mastering'
        ],
        experience: 'State-of-the-art post-production facilities'
      }
    },
    {
      icon: '📅',
      title: 'Event Planning',
      description: 'Comprehensive event coordination from concept to execution, ensuring every detail is perfectly orchestrated.',
      gradient: 'gradient-1',
      featured: false,
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      details: {
        overview: 'End-to-end event planning and production services for memorable and impactful events.',
        services: [
          'Event concept and theme development',
          'Venue selection and coordination',
          'Vendor management and coordination',
          'Timeline and schedule creation',
          'On-site event management',
          'Technical production support',
          'Guest experience optimization',
          'Post-event analysis and reporting'
        ],
        experience: 'Hundreds of successful events executed'
      }
    },
    {
      icon: '👥',
      title: 'Corporate Events',
      description: 'Professional corporate gatherings, conferences, product launches, and team-building experiences.',
      gradient: 'gradient-2',
      featured: false,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      details: {
        overview: 'Professional corporate event production that reflects your brand and delivers powerful business results.',
        services: [
          'Conference and convention production',
          'Product launch events',
          'Corporate retreats and meetings',
          'Team building activities',
          'Executive presentations',
          'Live streaming and hybrid events',
          'Brand activation events',
          'Corporate video production'
        ],
        experience: 'Trusted by Fortune 500 companies'
      }
    },
    {
      icon: '🎤',
      title: 'Live Shows',
      description: 'Concert production, award ceremonies, and live entertainment with state-of-the-art technical support.',
      gradient: 'gradient-3',
      featured: false,
      image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80',
      details: {
        overview: 'Spectacular live show production with professional staging, lighting, and audio-visual technology.',
        services: [
          'Concert and music festival production',
          'Award ceremony production',
          'Theater and performance staging',
          'Live broadcast and streaming',
          'Stage design and construction',
          'Lighting and sound engineering',
          'Multi-camera live switching',
          'Crowd management and safety'
        ],
        experience: 'Produced shows for audiences of 50,000+'
      }
    },
    {
      icon: '🎉',
      title: 'Private Events',
      description: 'Memorable weddings, galas, and private celebrations crafted with cinematic flair and attention to detail.',
      gradient: 'gradient-4',
      featured: false,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      details: {
        overview: 'Elevate your special occasions with cinematic production values and personalized service.',
        services: [
          'Wedding video and photography',
          'Gala and celebration production',
          'Anniversary and milestone events',
          'Birthday and private parties',
          'Cultural and religious ceremonies',
          'Custom event video packages',
          'Drone footage and aerial coverage',
          'Same-day highlight reels'
        ],
        experience: 'Creating unforgettable moments for over 15 years'
      }
    }
  ]

  const openServiceModal = (service) => {
    setSelectedService(service)
  }

  const closeServiceModal = () => {
    setSelectedService(null)
  }

  return (
    <>
      <section id="services" className="services">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-main-title">FROM SCRIPT TO <span className="screen-text">SCREEN</span></h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card ${service.featured ? 'featured' : ''}`}>
                <div className="service-card-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-card-image" />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <button 
                    className="service-learn-more-btn"
                    onClick={() => openServiceModal(service)}
                  >
                    LEARN MORE &gt;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div className="service-modal-overlay" onClick={closeServiceModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeServiceModal}>&times;</button>
            <div className="modal-image-container">
              <img src={selectedService.image} alt={selectedService.title} className="modal-image" />
              <div className="modal-image-overlay"></div>
            </div>
            <div className="modal-header">
              <h2 className="modal-title">{selectedService.title}</h2>
            </div>
            <div className="modal-content">
              <p className="modal-overview">{selectedService.details.overview}</p>
              <div className="modal-services">
                <h3>Our Services Include:</h3>
                <ul>
                  {selectedService.details.services.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-experience">
                <strong>{selectedService.details.experience}</strong>
              </div>
            </div>
            <div className="modal-footer">
              <button className="modal-contact-btn" onClick={closeServiceModal}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Services
