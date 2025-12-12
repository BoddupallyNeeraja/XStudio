import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Showcase selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Footer />
    </div>
  )
}

export default App

