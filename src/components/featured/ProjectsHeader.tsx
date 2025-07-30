import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectsHeader() {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-4">Featured Academic Projects</h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Explore a selection of my hands-on academic projects, showcasing practical
        application of residential remodeling skills and project management expertise.
      </p>
    </motion.div>
  );
}