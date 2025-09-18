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
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <Link
              to="/projects"
              className="relative group inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-r from-blue-600 to-purple-600
                text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300
                ring-2 ring-blue-500/20 hover:ring-blue-400/40"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 
                  group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <span className="relative z-10 font-medium text-base leading-none">
                View Projects
              </span>
              <motion.div
                className="relative z-10 flex items-center"
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="w-5 h-5 -mt-0.5" />
              </motion.div>
            </Link>

            {/* Dismiss Button */}
            <motion.button
              onClick={() => setIsDismissed(true)}
              className="w-7 h-7 bg-gray-800/90 text-gray-400 rounded-full flex items-center justify-center 
                hover:bg-gray-700 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-3 h-3" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
