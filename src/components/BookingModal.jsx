import { useState } from 'react'
import './BookingModal.css'

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    eventDate: '',
    eventLocation: '',
    budget: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    console.log('Booking submitted:', formData)
    alert('Thank you for your booking request! We will contact you shortly.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      eventDate: '',
      eventLocation: '',
      budget: '',
      message: ''
    })
    onClose()
  }

  if (!isOpen) return null

  const services = [
    'Film Production',
    'Cinematography',
    'Directing',
    'Post-Production',
    'Event Planning',
    'Corporate Events',
    'Live Shows',
    'Private Events'
  ]

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
        <button className="booking-close" onClick={onClose}>&times;</button>
        
        <div className="booking-header">
          <h2 className="booking-title">BOOK YOUR SHOW</h2>
          <p className="booking-subtitle">Let's bring your vision to life</p>
        </div>

        <div className="booking-info-section">
          <div className="booking-info-card">
            <h3>Why Choose X Studios?</h3>
            <ul>
              <li>✓ 200+ successful productions</li>
              <li>✓ 75+ industry awards</li>
              <li>✓ 15+ years of excellence</li>
              <li>✓ Professional equipment & crew</li>
              <li>✓ End-to-end production services</li>
            </ul>
          </div>
          <div className="booking-info-card">
            <h3>What We Offer</h3>
            <ul>
              <li>✓ Full production management</li>
              <li>✓ Custom packages & pricing</li>
              <li>✓ Flexible scheduling</li>
              <li>✓ On-site consultations</li>
              <li>✓ Post-production support</li>
            </ul>
          </div>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Service Type *</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="eventDate">Event/Project Date *</label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="eventLocation">Location *</label>
              <input
                type="text"
                id="eventLocation"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
                required
                placeholder="City, State/Country"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget">Estimated Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-plus">$100,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Tell us about your project, event, or show. Include any specific requirements, themes, or creative vision..."
            ></textarea>
          </div>

          <div className="form-footer">
            <button type="submit" className="booking-submit-btn">
              SUBMIT BOOKING REQUEST
            </button>
            <p className="form-note">
              We'll respond within 24 hours to discuss your project details
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingModal


