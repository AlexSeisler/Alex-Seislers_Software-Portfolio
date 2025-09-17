import React from 'react';
import { motion } from 'framer-motion';

const projectPreviews = [
  {
    image: "/images/AIDevFederationDashboard.png",
    title: "AI Federation"
  },
  {
    image: "/images/ColumbiaPA300.png", 
    title: "ColumbiaPA300"
  },
  {
    image: "/images/ACSResultsAI.png",
    title: "ACS Results AI"
  }
];

export default function ProjectPreviewStrip() {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <span className="text-gray-400 text-sm">Featured work:</span>
      <div className="flex items-center gap-3">
        {projectPreviews.map((project, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-gray-700 
              group-hover:border-blue-500 transition-colors">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter blur-sm group-hover:blur-none transition-all"
              />
            </div>
            
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 
              group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {project.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}