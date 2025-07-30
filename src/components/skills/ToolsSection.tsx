import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Bot, Server, Sparkles } from 'lucide-react';
import { tools } from '../../data/skills';

const iconMap = {
  'Development Environments': Terminal,
  'Languages & Frameworks': Code,
  'AI & Automation': Bot,
  'Platforms & Infrastructure': Server
};

export default function ToolsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm">Development Stack</span>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Proficiency in modern development tools, programming languages, and automation platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((category, index) => {
            const Icon = iconMap[category.category as keyof typeof iconMap] || Terminal;
            return (
              <motion.div
                key={category.category}
                className="group relative overflow-hidden rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="p-2 rounded-lg bg-blue-500/10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}