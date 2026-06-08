import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  return (
    <section className="relative z-10 py-32 border-t border-zinc-500/20 bg-pattern">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Architectures
          </h2>
          <p className="text-zinc-400 font-light">Witness our digital deployments in action.</p>
        </motion.div>
        
        <div className="hidden md:flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all"
          >
            <ChevronLeft strokeWidth={1.5} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-sm border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white transition-all"
          >
            <ChevronRight strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className="relative w-full h-[60vh] max-h-[600px] min-h-[400px] overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent z-10" />
            <img 
              src={PROJECTS[currentIndex].image} 
              alt={PROJECTS[currentIndex].title}
              className="w-full h-full object-cover object-center"
            />
            
            <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-12 pb-16 md:pb-24">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <span className="text-maasai text-sm tracking-[0.2em] font-bold uppercase mb-4 block">
                    {PROJECTS[currentIndex].category}
                  </span>
                  <h3 className="text-white font-display text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                    {PROJECTS[currentIndex].title}
                  </h3>
                  <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8">
                    {PROJECTS[currentIndex].shortDesc}
                  </p>
                </div>
                
                <Link 
                  to={`/project/${PROJECTS[currentIndex].id}`}
                  className="inline-flex items-center gap-3 bg-white text-obsidian px-8 py-4 font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-maasai hover:text-white transition-colors duration-300 group"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Mobile Controls */}
      <div className="flex md:hidden justify-center gap-4 mt-8 px-6">
        <button onClick={prevSlide} className="w-12 h-12 rounded-sm border border-zinc-800 flex items-center justify-center text-zinc-400"><ChevronLeft /></button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-sm border border-zinc-800 flex items-center justify-center text-zinc-400"><ChevronRight /></button>
      </div>
    </section>
  );
}
