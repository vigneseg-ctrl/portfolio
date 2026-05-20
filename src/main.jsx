import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx' // your main component
import Navbar from './components/Navbar/Navbar.jsx'
import "./index.css"
import About from './components/Navbar/Hero/About/About.jsx'
import Hero from './components/Navbar/Hero/Hero.jsx'
import Skills from './components/Navbar/Hero/About/Skills/Skills.jsx'
import Experience from './components/Navbar/Hero/About/Skills/Experience/Experience.jsx'
import Projects from './components/Navbar/Hero/About/Skills/Experience/Project/Project.jsx'
import Contact from './components/Navbar/Hero/About/Skills/Experience/Project/Contact/Contact.jsx'
import Footer from './components/Navbar/Hero/About/Skills/Experience/Project/Contact/Footer/Footer.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
)