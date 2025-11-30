import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-32 relative bg-background border-t border-white/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface border border-white/10 shadow-2xl shadow-primary/5 group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Zap className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300 fill-primary/20 relative z-10" />
          </div>

          {/* Typography */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Your best work. <br />
            <span className="text-gray-500">Every single time.</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Stop worrying about typos, tone, and formatting. Let Starstrike handle the mechanics so you can focus on the message.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a 
              href="#one-time-purchase"
              className="bg-white text-black px-12 py-5 rounded font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-3 group min-w-[220px] justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#features"
              className="px-12 py-5 rounded font-bold text-lg text-white border border-white/10 hover:bg-white/5 transition-all min-w-[220px] flex items-center justify-center"
            >
              View Features
            </a>
          </div>
          
          <div className="pt-8 flex flex-col items-center gap-2">
            <div className="flex -space-x-2">
               {[...Array(4)].map((_, i) => (
                   <img key={i} src={`https://picsum.photos/40/40?random=${i+20}`} className="w-8 h-8 rounded-full border border-background" alt="User" />
               ))}
            </div>
            <p className="text-xs text-gray-500 font-medium">Joined by 10,000+ writers</p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
