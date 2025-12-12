import './Features.css'

const Features = () => {
  const services = [
    {
      icon: '🎬',
      title: 'Film Production',
      description: 'Full-scale movie production from pre-production planning to final delivery, handling every aspect of filmmaking.',
      gradient: 'gradient-1'
    },
    {
      icon: '📹',
      title: 'Cinematography',
      description: 'Expert camera work and visual storytelling that captures emotion and brings your narrative to life on screen.',
      gradient: 'gradient-2'
    },
    {
      icon: '🎭',
      title: 'Directing',
      description: 'Visionary direction that guides performances and shapes the creative vision into a cohesive cinematic experience.',
      gradient: 'gradient-3'
    },
    {
      icon: '✨',
      title: 'Post-Production',
      description: 'Professional editing, color grading, VFX, and sound design to polish your film to perfection.',
      gradient: 'gradient-4'
    },
    {
      icon: '📅',
      title: 'Event Planning',
      description: 'Comprehensive event coordination from concept to execution, ensuring every detail is perfectly orchestrated.',
      gradient: 'gradient-1'
    },
    {
      icon: '👥',
      title: 'Corporate Events',
      description: 'Professional corporate gatherings, conferences, product launches, and team-building experiences.',
      gradient: 'gradient-2'
    },
    {
      icon: '🎤',
      title: 'Live Shows',
      description: 'Concert production, award ceremonies, and live entertainment with state-of-the-art technical support.',
      gradient: 'gradient-3'
    },
    {
      icon: '🎉',
      title: 'Private Events',
      description: 'Memorable weddings, galas, and private celebrations crafted with cinematic flair and attention to detail.',
      gradient: 'gradient-4'
    }
  ]

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">OUR SERVICES</h2>
          <p className="features-subtitle">
            FROM SCRIPT TO <span className="screen-text">SCREEN</span>
          </p>
        </div>
        <div className="features-grid">
          {services.map((service, index) => (
            <div key={index} className="feature-card">
              <div className={`feature-icon ${service.gradient}`}>
                <span className="icon-emoji">{service.icon}</span>
              </div>
              <h3 className="feature-title">{service.title}</h3>
              <p className="feature-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
