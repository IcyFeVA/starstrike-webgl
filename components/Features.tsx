
import React from 'react';
import { Wand2, Type, Keyboard, Zap, Layers, Command } from 'lucide-react';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8"
        >
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
                    The Creative Utility
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                    More than just a spellchecker. Access a complete writing ecosystem designed to accelerate your workflow across every app.
                </p>
            </div>
            
            <div className="flex items-center gap-4 mb-2 lg:mb-4">
                <div className="w-12 h-px bg-primary"></div>
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                    Powered by Starstrike AI
                </span>
            </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden"
        >
            {/* Card 1: Grammar Polish (Wide) */}
            <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="col-span-1 lg:col-span-2 relative bg-surface p-8 lg:p-12 min-h-[320px] group overflow-hidden"
            >
                {/* Abstract Background Visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                        <Zap size={20} />
                    </div>
                    
                    <div className="mt-12 lg:mt-0">
                        <h3 className="text-2xl font-medium text-white mb-3">Grammar Polish</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Instantly fix typos and grammatical errors without leaving your active window. 
                            Our engine understands context better than standard tools.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Tone Shift (Square) */}
            <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="col-span-1 relative bg-surface p-8 lg:p-12 min-h-[320px] group border-l border-white/5"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                        <Type size={20} />
                    </div>
                    
                    <div className="mt-12 lg:mt-0">
                        <h3 className="text-xl font-medium text-white mb-3">Tone Shift</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Transform casual notes into professional emails with a single keystroke.
                        </p>
                    </div>
                </div>
            </motion.div>

             {/* Card 3: Smart Draft (Square) */}
             <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="col-span-1 relative bg-surface p-8 lg:p-12 min-h-[320px] group border-t border-white/5"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                        <Wand2 size={20} />
                    </div>
                    
                    <div className="mt-12 lg:mt-0">
                        <h3 className="text-xl font-medium text-white mb-3">Smart Draft</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Give Starstrike a topic, and it writes the first draft for you. Perfect for unblocking creativity.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Card 4: Clipboard AI (Wide) */}
            <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="col-span-1 lg:col-span-2 relative bg-surface p-8 lg:p-12 min-h-[320px] group border-t border-l border-white/5 overflow-hidden"
            >
                {/* Background Pattern - Scanlines */}
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-10 pointer-events-none mix-blend-screen mask-image-gradient">
                    <div className="w-full h-full" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, white 2px, white 4px)'
                    }} />
                     <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                </div>
                
                 {/* Radial Hover Effect */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />


                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:border-primary/20 transition-colors">
                        <Layers size={20} />
                    </div>
                    
                    <div className="mt-12 lg:mt-0">
                        <h3 className="text-2xl font-medium text-white mb-3">Clipboard Engine</h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            Starstrike lives in your clipboard. It works everywhere you do—Slack, Notion, Discord, or your IDE. 
                            Copy text, hit the shortcut, paste perfection.
                        </p>
                    </div>
                </div>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Features;
