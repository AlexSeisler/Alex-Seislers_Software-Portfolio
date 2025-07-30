import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';
import { downloadResume } from '../../utils/downloadResume';

export default function ResumeButton() {
  return (
    <motion.button
      onClick={downloadResume}
      className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 font-semibold flex items-center gap-2">
        <FileDown className="w-5 h-5 group-hover:animate-bounce" />
        Download Resume
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
    </motion.button>
  );
}