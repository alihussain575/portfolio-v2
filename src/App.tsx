import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1e] text-white relative">
      <SpaceBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <WorkExperience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;