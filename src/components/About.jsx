import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-label">ABOUT X STUDIOS</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text-section">
            <h1 className="about-title">
              <span className="title-part">WE ARE</span>
              <span className="title-part highlight">STORYTELLERS</span>
              <span className="title-part">OF THE SILVER SCREEN</span>
            </h1>
            
            <div className="about-description">
              <p>
                X Studios is a premier film production company dedicated to bringing powerful stories to life. From independent features to blockbuster productions, we combine artistic vision with technical mastery to create cinematic experiences that resonate.
              </p>
              
              <p>
                Our team of award-winning directors, cinematographers, and producers work collaboratively to ensure every frame, every scene, and every story we tell leaves a lasting impact on audiences around the world.
              </p>
            </div>
            
            <div className="about-quote">
              <div className="quote-line"></div>
              <p className="quote-text">
                "Cinema is the art of making the impossible believable."
              </p>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">FILMS PRODUCED</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">75+</div>
              <div className="stat-label">INDUSTRY AWARDS</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50M+</div>
              <div className="stat-label">BOX OFFICE REVENUE</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">YEARS OF EXCELLENCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

