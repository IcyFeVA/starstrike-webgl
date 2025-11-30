import React from 'react';
import { Check } from 'lucide-react';
import { Plan } from '../types';
import { motion } from 'framer-motion';

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for casual writing and quick fixes.',
    features: [
      { text: 'Basic Grammar Fixes', included: true },
      { text: '10 Tone Shifts / day', included: true },
      { text: 'Mac Only', included: true },
      { text: 'Priority Support', included: false },
    ],
    ctaText: 'Start Free'
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/mo',
    description: 'The complete experience. Unlimited power for professionals.',
    isPopular: true,
    features: [
      { text: 'Advanced Grammar & Style', included: true },
      { text: 'Unlimited Tone Shifts', included: true },
      { text: 'Mac & Windows Support', included: true },
      { text: 'AI Draft Generation', included: true },
      { text: 'Custom Templates', included: true },
    ],
    ctaText: 'Secure Your Spot'
  },
  {
    name: 'Team',
    price: '$29',
    period: '/mo',
    description: 'Centralized billing and style guides for your whole team.',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Team Style Guides', included: true },
      { text: 'Centralized Billing', included: true },
      { text: 'Admin Analytics', included: true },
    ],
    ctaText: 'Contact Sales'
  }
];

const PricingCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
    }}
    className={`relative flex flex-col p-8 rounded-lg border transition-all duration-300 ${
      plan.isPopular 
        ? 'bg-surfaceHighlight border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10' 
        : 'bg-surface border-white/5 hover:border-white/10'
    }`}
  >
    {plan.isPopular && (
      <div className="absolute -top-3 right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
        Popular
      </div>
    )}
    
    <div className="mb-8">
      <div className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-2">
        {plan.name}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-bold text-white">{plan.price}</span>
        {plan.period && <span className="text-sm text-gray-500">{plan.period}</span>}
      </div>
      <p className="mt-4 text-sm text-gray-400 leading-relaxed min-h-[40px]">
        {plan.description}
      </p>
    </div>

    <div className="flex-grow space-y-4 mb-8">
      {plan.features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-3">
          {feature.included ? (
            <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Check size={10} className="text-white" strokeWidth={4} />
            </div>
          ) : (
             <div className="w-4 h-4 rounded-full border border-white/10 flex-shrink-0" />
          )}
          <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600 line-through'}`}>
            {feature.text}
          </span>
        </div>
      ))}
    </div>

    <button className={`w-full py-4 text-xs font-bold tracking-widest uppercase rounded transition-all ${
      plan.isPopular 
        ? 'bg-primary hover:bg-primaryHover text-white' 
        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
    }`}>
      {plan.ctaText}
    </button>
  </motion.div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Background glow for pricing */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-t from-primary/5 to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
        >
            <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                Enrollment Open
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Invest in your <br /> creative future
            </h2>
            <p className="text-gray-400 max-w-xl">
                Choose the plan that fits your workflow. All plans include lifetime updates to the core engine.
            </p>
        </motion.div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.15
                    }
                }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;