import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BookingModal from './components/BookingModal'
import './App.css'

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)

  return (
    <div className="App">
      <Navbar onBookNowClick={openBooking} />
      <Hero />
      <About />
      <Services />
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  )
}

export default App
