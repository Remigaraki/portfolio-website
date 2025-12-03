import React, { useState } from 'react';
import Carousel from './components/Carousel';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import BackgroundEffect from './components/BackgroundEffect';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getSectionTitle = (index: number) => {
    return SECTIONS[index];
  };

  return (
    <div className="w-full h-screen relative bg-black text-slate-100 overflow-hidden font-light">
      
      {/* Generative Background */}
      <BackgroundEffect />
      
      {/* Vignette - Removed/Simplified for pure black feel */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-50"></div>

      {/* Main Layout */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Top Header - Ultra Minimal */}
        <header className="flex-none pt-8 px-8 md:px-16 flex justify-between items-end pb-4">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.3em] text-slate-500 font-bold uppercase mb-1 font-tech">Portfolio v3.0</span>
            <div className="text-2xl font-tech font-bold tracking-widest text-white uppercase">
              Dev<span className="text-white/50">Folio</span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest text-slate-500 uppercase font-editorial italic">
            {SECTIONS.map((section, idx) => (
              <button
                key={section}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 hover:text-white relative group ${
                  idx === activeIndex ? 'text-white' : ''
                }`}
              >
                {section}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${idx === activeIndex ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>
        </header>

        {/* Carousel Area */}
        <main className="flex-grow relative">
          <Carousel activeIndex={activeIndex} onIndexChange={setActiveIndex}>
            <About />
            <Education />
            <Projects />
            <Skills />
            <Certificates />
            <Contact />
          </Carousel>
        </main>
        
        {/* Footer Decorative Line */}
        <div className="fixed bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 opacity-30"></div>
      </div>
    </div>
  );
};

export default App;