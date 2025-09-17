import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projectPreviews = [
  {
    image: "/images/AIDevFederationDashboard.png",
    title: "AI Federation",
    id: 2
  },
  {
    image: "/images/ColumbiaPA300.png", 
    title: "ColumbiaPA300",
    id: 12
  },
  {
    image: "/images/ACSResultsAI.png",
    title: "ACS Results AI",
    id: 6
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
      <div className="flex items-center gap-4">
        {projectPreviews.map((project, index) => (
          <Link
            to={`/case-study/${project.id}`}
            key={index}
          >
            <motion.div
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.15 }}
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-gray-600 
                group-hover:border-blue-400 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/25">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 
                group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gray-900/90 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-lg 
                  whitespace-nowrap border border-gray-700">
                  {project.title}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}