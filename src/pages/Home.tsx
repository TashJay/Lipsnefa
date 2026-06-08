import React from 'react';
import { motion } from 'framer-motion';
import ProjectCarousel from '../components/ProjectCarousel';
import { ChevronDown, Code, Smartphone, TerminalSquare, Zap, Globe, Shield, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent">
      {/* Hero Content */}
      <section className="relative z-10 min-h-screen flex items-center pb-20 pt-32">
        <div className="max-w-7xl mx-auto px-6 w-full text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.9]">
              AUGUST
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-zinc-300 font-light max-w-2xl tracking-wide leading-relaxed">
              We define the architecture of tomorrow. An Afrofuturist digital studio fusing premium bespoke software engineering with bold local cultural elements.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Project Carousel */}
      <ProjectCarousel />

      {/* Bespoke Services */}
      <section className="relative z-10 py-32 border-t border-zinc-500/20 overflow-hidden">
        {/* Subtle geometric background overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d10a10 1px, transparent 1px), radial-gradient(#d10a10 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="mudcloth" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#ffffff" strokeWidth="1"/>
                 </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#mudcloth)"/>
           </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Elite-tier Engineering
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              We don't just build your apps; we tie your entire digital ecosystem together so it runs on autopilot. Our services are crafted to empower modern operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap size={32} strokeWidth={1} />,
                title: "Bespoke AI Development",
                desc: "We build specialized AI assistants, including our signature Augness chatbot, automated customer support agents, and internal knowledge bases precisely tailored to your company's specific guidelines and operational checklists."
              },
              {
                icon: <Globe size={32} strokeWidth={1} />,
                title: "CRM Integration",
                desc: "Deep integration with leading CRMs to synchronize your customer data. We ensure your sales, marketing, and support channels communicate seamlessly without manual intervention."
              },
              {
                icon: <Code size={32} strokeWidth={1} />,
                title: "Automation Pipelines",
                desc: "Connecting project management tools and communication channels (e.g., Notion, Slack, Zapier, Make) into a cohesive, automated workflow that reduces overhead and human error."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="relative p-8 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-sm group hover:border-maasai/50 transition-colors duration-500 overflow-hidden"
              >
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-8 h-8 border-l border-b border-zinc-800 group-hover:border-maasai/50 transition-colors duration-500 flex items-start justify-end p-2 bg-black/40">
                   <div className="w-1.5 h-1.5 bg-zinc-700 group-hover:bg-maasai transition-colors duration-500" />
                </div>
                
                <div className="w-16 h-16 rounded-sm bg-black/40 border border-zinc-800 flex items-center justify-center text-maasai group-hover:bg-maasai group-hover:text-white transition-all duration-500 mb-8">
                  {feature.icon}
                </div>
                <h3 className="font-display font-medium text-2xl text-white tracking-wide mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Madis POS */}
      <section className="relative z-10 py-32 border-t border-zinc-500/20 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-maasai/30 bg-black/30 backdrop-blur-sm text-maasai text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} /> Product Showcase
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Madis POS
            </h2>
            <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8 mix-blend-difference">
              A dedicated retail terminal built for the Kenyan structural reality. Featuring full offline capabilities and native M-Pesa API integration, ensuring business continuity regardless of network stability.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mt-12 mix-blend-difference">
               <div>
                  <div className="flex items-center gap-3 text-white mb-3">
                     <Shield className="text-maasai" size={20} />
                     <span className="font-display font-medium tracking-wide">Offline-First</span>
                  </div>
                  <p className="text-sm text-zinc-300 font-light">Local-first data synchronization that thrives on intermittent 3G networks.</p>
               </div>
               <div>
                  <div className="flex items-center gap-3 text-white mb-3">
                     <TerminalSquare className="text-maasai" size={20} />
                     <span className="font-display font-medium tracking-wide">M-Pesa Native</span>
                  </div>
                  <p className="text-sm text-zinc-300 font-light">Direct Daraja API integration for STK push and C2B payment validation.</p>
               </div>
            </div>
          </motion.div>

          {/* Abstract representation of the terminal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-square rounded-sm border border-zinc-800 bg-zinc-950/70 backdrop-blur-md relative overflow-hidden flex items-center justify-center p-8 bg-pattern shadow-2xl"
          >
            {/* Minimalist 3D-like representation using pure CSS/Framer Motion to contrast with the actual ThreeJS background */}
            <div className="relative w-full max-w-sm aspect-[3/4] bg-zinc-900 border border-zinc-800 shadow-2xl rounded-sm flex flex-col">
               <div className="h-12 border-b border-zinc-800 flex items-center px-4">
                  <div className="w-16 h-2 bg-zinc-800 rounded-full" />
               </div>
               <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="w-full h-32 bg-zinc-950 border border-maasai/20 rounded-sm flex items-center justify-center">
                     <span className="font-display text-3xl font-bold text-maasai">KES 4,500</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="h-12 bg-zinc-800/50 rounded-sm" />
                     <div className="h-12 bg-zinc-800/50 rounded-sm" />
                  </div>
                  <div className="mt-auto h-12 bg-maasai flex items-center justify-center rounded-sm text-white font-bold tracking-widest text-sm uppercase">
                     Pay with M-Pesa
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 bg-maasai py-24 mb-0 border-t border-zinc-900 overflow-hidden shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to automate your ecosystem?
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-light mb-10">
              Let's build intelligent infrastructure tailored for your operation.
            </p>
            <a 
              href="mailto:jirush36@gmail.com" 
              className="inline-flex items-center gap-2 bg-black text-white font-medium px-8 py-4 rounded-sm hover:bg-zinc-900 transition-colors duration-300"
            >
              Start a Conversation <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Leadership */}
      <section className="relative z-10 py-24 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 mx-auto bg-zinc-100 border border-zinc-300 rounded-sm overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
              <img 
                src="/images/jamesirungu.png" 
                alt="James Irungu"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
              James Irungu
            </h2>
            <p className="text-maasai uppercase tracking-widest text-sm font-bold mb-6">Founder & CEO</p>
            <p className="text-zinc-700 font-light leading-relaxed text-lg">
              Leading the architectural vision of August Engineering. We exist to bridge the gap between world-class digital standards and the raw structural potential of the African technological ecosystem.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
