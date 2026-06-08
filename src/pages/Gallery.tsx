import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-24 px-6 selection:bg-maasai/30 bg-pattern">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white"
          >
            Engineering Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-400 mt-6 max-w-xl text-lg font-light leading-relaxed"
          >
            A curated exhibition of our technical achievements, structural designs, and software interfaces across various disciplines.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative group overflow-hidden rounded-sm border border-zinc-800 bg-black/40 backdrop-blur-sm h-[450px]"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-maasai text-xs tracking-[0.2em] uppercase font-bold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white font-display text-2xl md:text-3xl font-medium tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
