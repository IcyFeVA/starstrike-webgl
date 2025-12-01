import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >

          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-primary fill-primary" />
              <span className="text-lg font-bold text-white tracking-wider">STARSTRIKE</span>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                <Twitter size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                <Github size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
                <Linkedin size={14} />
              </div>
            </div>
          </motion.div> */}

          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Download Mac</li>
              <li className="hover:text-white cursor-pointer transition-colors">Download Windows</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
              <li className="hover:text-white cursor-pointer transition-colors">Changelog</li>
            </ul>
          </motion.div> */}

          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white cursor-pointer transition-colors">About</a></li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </motion.div> */}

          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Subscribe</h4>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-surface border border-white/10 text-white text-sm px-4 py-3 rounded focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest py-3 rounded hover:bg-white/10 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div> */}

        </motion.div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>Copyright © Starstrike 2025. All rights reserved.</p>
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;