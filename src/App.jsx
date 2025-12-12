import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </div>
  )
}

export default App

