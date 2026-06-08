import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Send, Bot, Phone, Terminal } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'augness', text: "Systems online. I am Augness, the AI architect for August Studio. How can we optimize your digital presence today?" }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add player message
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: input }]);
    setInput('');
    
    // Simulate Augness processing
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        sender: 'augness', 
        text: "Understood. Our engineering team will review these architectural parameters. For direct transmission, leverage our primary node at +254 117 747 808."
      }]);
    }, 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-obsidian/80 backdrop-blur-md"
    >
      <div 
        className="absolute inset-0 z-0"
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ y: 50, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative z-10 w-full max-w-4xl bg-obsidian border border-zinc-800 shadow-2xl rounded-sm flex flex-col md:flex-row overflow-hidden"
      >
        
        {/* Contact Info Side */}
        <div className="w-full md:w-1/3 p-8 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col justify-between bg-zinc-950/50">
          <div>
            <div className="flex items-center gap-2 text-maasai mb-6">
              <Terminal size={20} />
              <span className="font-display uppercase tracking-widest text-xs font-bold">Secure Line</span>
            </div>
            
            <h2 className="text-white font-display text-3xl font-bold mb-4">Initialize<br/>Contact</h2>
            <p className="text-zinc-400 text-sm font-light leading-relaxed mb-12">
              Ready to redefine your technological threshold? Connect with our engineers or consult with Augness.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-zinc-300">
              <Phone className="text-maasai" size={20} />
              <span className="font-mono text-lg tracking-wide">+254 117 747 808</span>
            </div>
            <div className="text-xs text-zinc-600 font-mono mt-4 uppercase">
              Nairobi Node // Active
            </div>
          </div>
        </div>

        {/* Augness Chatbot Side */}
        <div className="w-full md:w-2/3 flex flex-col h-[500px]">
          <div className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-900/50">
            <div className="flex items-center gap-3 text-white">
              <Bot size={20} className="text-maasai" />
              <span className="font-display font-medium tracking-wide">Augness AI</span>
              <span className="px-2 py-0.5 rounded-full bg-maasai/20 text-maasai text-[10px] uppercase font-bold tracking-widest pl-2">Online</span>
            </div>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-sm p-4 ${
                  msg.sender === 'user' 
                    ? 'bg-zinc-800 text-white' 
                    : 'bg-maasai/10 border border-maasai/20 text-zinc-200'
                }`}>
                  <p className="text-sm font-light leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-zinc-800 bg-zinc-950/80">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Transmit parameters to Augness..."
                className="w-full bg-zinc-900 text-white placeholder:text-zinc-600 border border-zinc-800 focus:border-maasai/50 rounded-sm py-3 pl-4 pr-12 outline-none font-light text-sm transition-colors"
                autoFocus
              />
              <button 
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 p-2 text-zinc-500 hover:text-maasai disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
        
      </motion.div>
    </motion.div>
  );
}
