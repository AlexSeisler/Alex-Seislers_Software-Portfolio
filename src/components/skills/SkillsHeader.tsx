import React from 'react';
import { motion } from 'framer-motion';

export default function SkillsHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-white mb-4">Key Skills</h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Core competencies and expertise developed through years of hands-on experience
        in residential construction and project management.
      </p>
    </motion.div>
  );
}