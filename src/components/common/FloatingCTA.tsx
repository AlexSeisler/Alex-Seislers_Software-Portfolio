import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 600; // Show earlier
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="relative">
            <Link
              to="/projects"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300
                ring-2 ring-blue-500/20 hover:ring-blue-400/40"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 
                  group-hover:opacity-100 transition-opacity"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <span className="relative z-10 font-semibold text-sm">View Projects</span>
              <motion.div
                className="relative z-10"
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Link>

            <motion.button
              onClick={() => setIsDismissed(true)} 
              className="absolute -top-1 -right-1 w-5 h-5 bg-gray-800 text-gray-400 rounded-full 
                flex items-center justify-center hover:bg-gray-700 transition-colors text-xs"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-2.5 h-2.5" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}