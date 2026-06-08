import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Hexagon, Menu, X } from 'lucide-react';
import React from 'react';
import ContactModal from './components/ContactModal';
import ThreeScene from './components/ThreeScene';

// Lazy loaded pages to handle ThreeJS heavy lifting
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Vision', href: '/' },
    { name: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian/90 backdrop-blur-xl border-b border-zinc-900 top-nav">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group text-white">
          <motion.div 
            whileHover={{ rotate: 90 }} 
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Hexagon size={28} strokeWidth={1.5} className="group-hover:fill-maasai transition-colors" />
          </motion.div>
          <div className="h-8 w-32 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700 overflow-hidden">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Logo Space</span>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm tracking-[0.2em] uppercase font-medium transition-all ${
                location.pathname === link.href ? 'text-maasai' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={onContactClick}
            className="text-sm tracking-[0.2em] uppercase font-medium text-zinc-500 hover:text-white transition-all"
          >
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-obsidian/95 backdrop-blur-xl border-b border-zinc-900 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg tracking-widest uppercase font-medium ${
                    location.pathname === link.href ? 'text-maasai' : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onContactClick();
                }}
                className="text-lg tracking-widest uppercase font-medium text-left text-zinc-400 hover:text-maasai"
              >
                Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer className="relative z-10 py-12 border-t border-zinc-200 text-center px-6">
      <p className="text-zinc-900 text-sm tracking-widest uppercase mb-4 font-display font-medium">August Engineering © 2026</p>
      <div className="flex justify-center gap-6 text-zinc-600 text-sm uppercase tracking-widest font-bold">
        <a href="#" className="hover:text-maasai transition-colors">Privacy</a>
        <a href="#" className="hover:text-maasai transition-colors">Terms</a>
        <button onClick={onContactClick} className="hover:text-maasai transition-colors uppercase">Contact</button>
      </div>
    </footer>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-obsidian">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Hexagon size={40} className="text-maasai" />
      </motion.div>
    </div>
  );
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Three Scene loaded globally behind everything */}
      <ThreeScene />
      
      <div className="relative z-10 flex flex-col min-h-screen bg-transparent">
        <Navbar onContactClick={() => setIsContactOpen(true)} />
        
        <div className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/project/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
            </Routes>
          </Suspense>
        </div>

        <Footer onContactClick={() => setIsContactOpen(true)} />
      </div>

      {/* Global Contact / Augness Chatbot Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactModal onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
