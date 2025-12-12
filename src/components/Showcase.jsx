import { useState } from 'react'
import './Showcase.css'

const Showcase = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['all', 'feature-films', 'documentaries', 'commercials', 'events']

  const projects = [
    {
      id: 1,
      title: 'The Last Horizon',
      category: 'feature-films',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
      description: 'Award-winning sci-fi thriller that captivated audiences worldwide',
      tags: ['Feature Film', 'Sci-Fi', 'Thriller']
    },
    {
      id: 2,
      title: 'Corporate Summit 2024',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      description: 'Full production coverage of international corporate conference',
      tags: ['Event Coverage', 'Corporate', 'Live Production']
    },
    {
      id: 3,
      title: 'Wilderness Untamed',
      category: 'documentaries',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
      description: 'Cinematic documentary exploring untouched natural landscapes',
      tags: ['Documentary', 'Nature', 'Cinematography']
    },
    {
      id: 4,
      title: 'Tech Brand Campaign',
      category: 'commercials',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      description: 'High-energy commercial campaign for leading tech company',
      tags: ['Commercial', 'Brand Campaign', 'Advertising']
    },
    {
      id: 5,
      title: 'Music Festival Live',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80',
      description: 'Multi-camera live production of major music festival',
      tags: ['Live Show', 'Music Festival', 'Multi-Cam']
    },
    {
      id: 6,
      title: 'Voices of Change',
      category: 'documentaries',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
      description: 'Inspiring documentary series on social movements',
      tags: ['Documentary', 'Social Impact', 'Series']
    },
    {
      id: 7,
      title: 'Luxury Wedding Production',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      description: 'Cinematic wedding film capturing every precious moment',
      tags: ['Wedding', 'Private Event', 'Cinematic']
    },
    {
      id: 8,
      title: 'Urban Legends',
      category: 'feature-films',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
      description: 'Independent feature film exploring urban mythology',
      tags: ['Feature Film', 'Independent', 'Drama']
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="showcase" className="showcase">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">PORTFOLIO</h2>
          <p className="showcase-subtitle">
            FEATURED PROJECTS
          </p>
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <button className="project-button">View Project</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Showcase
