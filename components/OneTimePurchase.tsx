import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const OneTimePurchase: React.FC = () => {
   return (
      <section id="one-time-purchase" className="py-24 relative overflow-hidden bg-background border-t border-white/5">
         {/* Background Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

         <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
               whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-surface border border-white/5 p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden group"
            >
               {/* Hover Gradient */}
               <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

               <div className="relative z-10 flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-8">
                     <Sparkles size={12} />
                     <span>Lifetime Offer</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                     Pay once, own it forever.
                  </h2>

                  <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
                     Don't like subscriptions? Get full lifetime access to Starstrike for a single payment. Includes all future updates.
                  </p>

                  <div className="flex items-baseline gap-2 mb-10">
                     <span className="text-6xl font-bold text-white tracking-tight">$14.99</span>
                     <span className="text-gray-500 text-sm font-medium uppercase tracking-wide">/ One-time</span>
                  </div>

                  <a href="https://buy.stripe.com/3cI4gAdeC7nQ0lSeyq9fW00" target="_blank" className="bg-white text-black px-10 py-4 rounded font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group/btn">
                     <span>Get Lifetime Access</span>
                     <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  <div className="mt-10 pt-10 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-500">
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                           <Check size={10} className="text-primary" strokeWidth={3} />
                        </div>
                        <span>Mac & Windows Included</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                           <Check size={10} className="text-primary" strokeWidth={3} />
                        </div>
                        <span>Lifetime Updates</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                           <Check size={10} className="text-primary" strokeWidth={3} />
                        </div>
                        <span>No Monthly Fees</span>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default OneTimePurchase;