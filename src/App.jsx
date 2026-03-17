import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './App.css' // We will keep it but make it empty or minimal

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
