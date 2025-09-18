import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Bot, Server, Sparkles } from 'lucide-react';
import { tools } from '../../data/skills';

const iconMap = {
  'Development Environments': Terminal,
  'Languages & Frameworks': Code2,
  'AI & Automation': Bot,
  'Platforms & Infrastructure': Server
};

export default function ToolsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Glow orbs */}
      <motion.div
        className="absolute -top-32 -right-40 w-[32rem] h-[32rem] bg-blue-700/10 rounded-full blur-[160px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-40 w-[28rem] h-[28rem] bg-purple-700/10 rounded-full blur-[160px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r 
              from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Development Stack</span>
          </motion.div>
          
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Tools & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A modern toolkit spanning development environments, frameworks, automation, and infrastructure.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((category, index) => {
            const Icon = iconMap[category.category as keyof typeof iconMap] || Terminal;
            return (
              <motion.div
                key={category.category}
                className="group relative overflow-hidden rounded-2xl bg-gray-800/40 
                  border border-gray-700/40 hover:border-blue-500/50 backdrop-blur-sm 
                  shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-blue-400" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
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
                        <span className="text-gray-400 group-hover:text-white transition-colors">
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
