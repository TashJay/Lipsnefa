import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ArrowLeft, ExternalLink, Activity } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-transparent">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Record Not Found</h1>
          <Link to="/gallery" className="text-maasai underline hover:opacity-80">Return to Gallery</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-transparent selection:bg-maasai/30">
      <div className="max-w-5xl mx-auto">
        <Link to="/gallery" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-12">
          <ArrowLeft size={16} /> Returns to Index
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="text-maasai text-sm tracking-[0.2em] font-bold uppercase mb-4 block">
            {project.category}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            {project.title}
          </h1>
          <p className="text-zinc-300 text-xl font-light leading-relaxed max-w-3xl">
            {project.fullDesc}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="aspect-video w-full mb-16 rounded-sm overflow-hidden border border-zinc-900 shadow-2xl relative group"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </motion.div>

        {/* Details */}
        <div className="mb-24">
          <div className="max-w-4xl">
            <h3 className="text-white font-display text-2xl font-bold mb-6">Execution Overview</h3>
            <p className="text-zinc-400 font-light leading-relaxed whitespace-pre-line mb-8">
              Every system crafted by August emphasizes localized structural reliability crossed with uncompromised aesthetic delivery. For {project.title}, our primary mandate was bridging the gap between scalable high-end technology and the unique connectivity challenges native to our deploying regions. 
              {`\n\n`}
              The resulting architecture doesn't just meet standards—it bends them to our cultural frequency.
            </p>
            <button className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-maasai hover:bg-zinc-800 text-white px-6 py-3 text-sm tracking-widest uppercase font-bold rounded-sm transition-all">
              Request Demo <ExternalLink size={16} />
            </button>
          </div>
        </div>

        {/* Secondary Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {project.gallery.map((imgUrl, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="aspect-square rounded-sm overflow-hidden border border-zinc-900"
            >
              <img src={imgUrl} alt={`${project.title} detail`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
