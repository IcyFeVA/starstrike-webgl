import React, { useEffect } from 'react';
import { Command, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {

  useEffect(() => {
    // Function to initialize Unicorn Studio if the script is loaded
    const initUnicorn = () => {
      const win = window as any;
      if (win.UnicornStudio) {
        win.UnicornStudio.init();
      }
    };

    const scriptId = 'unicorn-studio-lib';
    // Check if script is already added to avoid duplicates
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js";
      script.onload = () => {
        const win = window as any;
        // Initialize logic matching the provided snippet
        if (!win.UnicornStudio) {
          win.UnicornStudio = { isInitialized: false };
        }
        if (!win.UnicornStudio.isInitialized) {
          win.UnicornStudio.init();
          win.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else {
      // If script exists (e.g. re-mount), re-initialize to scan for the new DOM element
      initUnicorn();
    }
  }, []);

  return (
    <section className="relative pt-40 pb-20 lg:pt-0 lg:pb-0 lg:h-screen overflow-hidden flex items-center justify-center">

      {/* Unicorn Studio Background (Desktop Only) */}
      <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
        <div data-us-project="JrHLRVqqE4T5fcTZa1I6" style={{ width: '100%', height: '100%' }}></div>
      </div>

      {/* Background Ambience - Mobile Only */}
      <div className="lg:hidden absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="lg:hidden absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col justify-center items-center relative z-10 h-full">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 relative z-20 w-full flex flex-col lg:items-center lg:justify-center"
        >
          {/* Elements visible ONLY on mobile */}
          <div className="lg:hidden flex items-center gap-3 text-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-6 pl-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Productivity boost
          </div>

          <h1 className="lg:hidden text-6xl md:text-8xl font-medium tracking-tight leading-[0.9] text-white">
            Starstrike makes writing<br />
            <span className="text-white/40">
              blazingly fast
            </span>
          </h1>

          <p className="lg:hidden text-lg text-gray-400 max-w-md leading-relaxed pt-2 pl-1">
            Proofread, rewrite with a different tone, or draft emails, LinkedIn posts, etc. quickly and easily.
          </p>

          {/* Buttons - Visible on both, centered on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 pt-6 pl-1 lg:pl-0 lg:pt-20 lg:justify-center w-full"
          >
            <a href="#one-time-purchase" className="bg-white text-black px-8 py-4 rounded font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group">
              <span>Get Access</span>
              {/* <Command className="w-4 h-4 group-hover:scale-110 transition-transform" /> */}
            </a>
            <a href="#video-showcase" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center">
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Right Visual has been completely removed for desktop as requested */}

      </div>
    </section>
  );
};

export default Hero;