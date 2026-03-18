import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import InquiryModal from './components/InquiryModal/InquiryModal'
import './App.css'

function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services openContact={() => setIsInquiryOpen(true)} />
      {isInquiryOpen && <InquiryModal onClose={() => setIsInquiryOpen(false)} />}
      <Contact />
      <Footer />
    </div>
  )
}

export default App
