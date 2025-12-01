import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const showcaseItems = [
    {
        title: "Maya Thompson",
        subtitle: "3D COMPOSITION",
        image: "https://picsum.photos/600/800?random=10"
    },
    {
        title: "Jordan Lee",
        subtitle: "MOTION GRAPHICS",
        image: "https://picsum.photos/600/800?random=12"
    },
    {
        title: "Emma Wilson",
        subtitle: "DIGITAL ART",
        image: "https://picsum.photos/600/800?random=14"
    }
];

const Showcase: React.FC = () => {
    return (
        <section id="showcase" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-white/5"
                >
                    {/* Year Selector (Left) */}
                    <div className="flex items-center gap-8 mb-4 md:mb-0 order-2 md:order-1">
                        {['2022', '2023', '2024', '2025'].map((year) => (
                            <span
                                key={year}
                                className={`text-xs font-mono cursor-pointer transition-colors ${year === '2024'
                                        ? 'text-primary border-b border-primary pb-1'
                                        : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                {year}
                            </span>
                        ))}
                    </div>

                    {/* Title (Right) */}
                    <h2 className="text-5xl md:text-6xl font-display font-medium tracking-tight text-white order-1 md:order-2 mb-8 md:mb-0 text-right">
                        Student Showcase
                    </h2>
                </motion.div>

                {/* Grid Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
                            }}
                            className="group relative aspect-[3/4] overflow-hidden bg-surface"
                        >
                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020309] via-[#020309]/40 to-transparent opacity-90" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                                <div>
                                    <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                        {item.subtitle}
                                    </p>
                                </div>

                                {/* 'View' Button */}
                                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded text-[10px] font-medium text-gray-400 hover:text-white uppercase tracking-wider backdrop-blur-sm transition-colors">
                                    View
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Footer Navigation Controls */}
                <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        <ArrowLeft size={16} />
                    </button>
                    <button className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Showcase;