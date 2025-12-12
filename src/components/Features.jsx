import './Features.css'

const Services = () => {
  const services = [
    {
      icon: '🎬',
      title: 'Film Production',
      description: 'Full-scale movie production from pre-production planning to final delivery, handling every aspect of filmmaking.',
      gradient: 'gradient-1',
      featured: false
    },
    {
      icon: '📹',
      title: 'Cinematography',
      description: 'Expert camera work and visual storytelling that captures emotion and brings your narrative to life on screen.',
      gradient: 'gradient-2',
      featured: false
    },
    {
      icon: '🎭',
      title: 'Directing',
      description: 'Visionary direction that guides performances and shapes the creative vision into a cohesive cinematic experience.',
      gradient: 'gradient-3',
      featured: true
    },
    {
      icon: '✨',
      title: 'Post-Production',
      description: 'Professional editing, color grading, VFX, and sound design to polish your film to perfection.',
      gradient: 'gradient-4',
      featured: false
    },
    {
      icon: '📅',
      title: 'Event Planning',
      description: 'Comprehensive event coordination from concept to execution, ensuring every detail is perfectly orchestrated.',
      gradient: 'gradient-1',
      featured: false
    },
    {
      icon: '👥',
      title: 'Corporate Events',
      description: 'Professional corporate gatherings, conferences, product launches, and team-building experiences.',
      gradient: 'gradient-2',
      featured: false
    },
    {
      icon: '🎤',
      title: 'Live Shows',
      description: 'Concert production, award ceremonies, and live entertainment with state-of-the-art technical support.',
      gradient: 'gradient-3',
      featured: false
    },
    {
      icon: '🎉',
      title: 'Private Events',
      description: 'Memorable weddings, galas, and private celebrations crafted with cinematic flair and attention to detail.',
      gradient: 'gradient-4',
      featured: false
    }
  ]

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-main-title">FROM SCRIPT TO <span className="screen-text">SCREEN</span></h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.featured ? 'featured' : ''}`}>
              <div className={`service-icon ${service.gradient}`}>
                <span className="icon-emoji">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              {service.featured && (
                <a href="#" className="service-learn-more">LEARN MORE &gt;</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
