import React from 'react'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import EducationPage from './components/EducationPage'
import Skills from './components/Skills'
function App() {
  return (
    <div>
      
      <h1>Aman Siraj</h1>
      <nav>
        <a href="#contact" >Contact</a>
      </nav>
      <HomePage />
      <AboutPage />
      <EducationPage />
      <Skills />
      <ContactPage />
    </div>

  )
}

export default App
