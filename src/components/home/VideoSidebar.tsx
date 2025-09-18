import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function VideoSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-20 right-4 z-30 w-80"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <div className="bg-gray-900/95 backdrop-blur-lg rounded-xl border border-gray-700/50 overflow-hidden shadow-2xl">
            <div className="relative">
              <div className="aspect-video">
                {!showVideo ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                    <motion.button
                      onClick={() => setShowVideo(true)}
                      className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center
                        hover:bg-white/20 transition-colors group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-6 h-6 text-white ml-1 group-hover:text-blue-300 transition-colors" />
                    </motion.button>
                  </div>
                ) : (
                  <video
                    src="/videos/AIDevTrifecta-Final.mp4"
                    className="w-full h-full rounded-t-xl object-cover"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                )}
              </div>
              
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center
                  hover:bg-black/70 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>


            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Portfolio Overview</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Discover how I build production-ready AI systems, from autonomous agent orchestration 
                to full-stack SaaS platforms. See the engineering depth behind each project.
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  AI Dev Federation Dashboard
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  ColumbiaPA300 Civic Platform
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  ACS Results AI Suite
                </div>
              </div>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="text-sm font-medium">Explore All Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
