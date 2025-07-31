import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

export default function IntroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Code className="w-8 h-8 text-gray-400" />
        </motion.div>
        <h2 className="text-4xl font-bold text-white">
          Alex Seisler
        </h2>
      </div>
      
      <div className="space-y-6">
        <motion.h4 
          className="text-xl text-gray-400 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Software Engineer & AI Developer
        </motion.h4>
        
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          I build scalable AI systems that solve business problems. From data pipelines to backend APIs to autonomous agents. With a foundation in software engineering and a focus on execution, I turn complex workflows into clean, production-ready tools.
        </motion.p>
      </div>
    </motion.div>
  );
}