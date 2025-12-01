import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 leading-tight">
                        This app was created by <span className="text-primary">Pascal Zirn</span>
                        <br />
                        <span className="text-gray-400 text-2xl md:text-3xl">Product Designer based in Vancouver, Canada.</span>
                    </h2>

                    <motion.a
                        href="https://pazi.ca"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center inline-flex"
                    >
                        <span>Visit Portfolio</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
