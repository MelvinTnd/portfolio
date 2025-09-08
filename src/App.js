import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { motion } from 'framer-motion';

// Import des composants
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Newsletter from './components/sections/Newsletter';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Newsletter />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;