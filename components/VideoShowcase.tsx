import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase: React.FC = () => {
    return (
        <section id="video-showcase" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        Workflow Demo
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                        See Starstrike in Action
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Watch how seamless it is to fix grammar, shift tone, and generate drafts without leaving your current app.
                    </p>
                </motion.div>

                {/* Video Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-5xl mx-auto"
                >
                    {/* Glow behind video */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur-sm opacity-50" />

                    <div className="rounded-2xl border border-white/10 bg-surface overflow-hidden shadow-2xl relative z-10">
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe
                                src="https://player.vimeo.com/video/824804225?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                title="Starstrike Demo"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default VideoShowcase;