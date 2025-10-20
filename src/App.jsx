import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/about'
import Promises from './components/Promises'
import Choose from './components/Choose'
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NumberSpeak from './components/NumberSpeak';
import Developers from './components/Developers';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Promises />
            <Choose />
            <Project/>
            <NumberSpeak/>
            <Developers/>
            <Testimonial/>
            <Contact/>
            <Footer/>
          </>   
        } />
        <Route path="/contact" element={<Choose />} />
      </Routes>
    </>

  )
}

export default App