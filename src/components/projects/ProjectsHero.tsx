import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Database, Globe } from 'lucide-react';

const categories = [
  {
    icon: Bot,
    label: 'AI & Automation',
    count: 1
  },
  {
    icon: Globe,
    label: 'Web Development',
    count: 2
  },
  {
    icon: Code,
    label: 'Programming',
    count: 2
  }
];

export default function ProjectsHero() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Software Development Portfolio</h1>
          <p className="text-xl text-gray-300 mb-12">
            Explore my collection of software development projects, showcasing practical applications 
            of programming skills and innovative solutions across various technologies.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <category.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h3 className="text-white font-medium">{category.label}</h3>
                <p className="text-blue-400 text-sm">{category.count} Projects</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}