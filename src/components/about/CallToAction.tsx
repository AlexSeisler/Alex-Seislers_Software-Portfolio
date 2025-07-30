import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderOpen, Mail, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="flex flex-wrap gap-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 
            text-white rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full 
            group-hover:translate-x-[-180%] transition-transform duration-700" />
          <span className="relative z-10">View Academic Projects</span>
          <FolderOpen className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform" />
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 
            border-cyan-400 text-cyan-400 rounded-lg overflow-hidden hover:text-white transition-colors"
        >
          <div className="absolute inset-0 bg-cyan-400 transform origin-left scale-x-0 
            group-hover:scale-x-100 transition-transform duration-300" />
          <span className="relative z-10">Contact Me</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  );
}