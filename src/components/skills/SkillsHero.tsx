import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Server, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    label: 'Full-Stack Development',
    description: 'Building production SaaS applications with React, Node.js, and modern tooling.',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    icon: Bot,
    label: 'AI Integration',
    description: 'Designing and deploying intelligent automation using OpenAI and custom pipelines.',
    gradient: 'from-cyan-500/20 to-green-500/20'
  },
  {
    icon: Server,
    label: 'System Architecture',
    description: 'Engineering scalable, efficient, and maintainable systems across platforms.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  }
];

export default function SkillsHero() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <motion.div
        className="absolute -top-20 -left-32 w-96 h-96 bg-blue-700/10 rounded-full blur-[140px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-32 w-96 h-96 bg-purple-700/10 rounded-full blur-[140px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r 
              from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
            </motion.div>
            <span className="text-blue-400 font-medium">Technical Expertise</span>
          </motion.div>

          <motion.h1 
            className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white 
              bg-clip-text text-transparent tracking-tight"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% auto' }}
          >
            Skills & Technologies
          </motion.h1>

          <motion.p 
            className="text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Proficiency across the full software engineering stack, blending product-focused 
            development with advanced AI integration and scalable system design.
          </motion.p>
        </div>

        {/* Expertise Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/40 
                border border-gray-700/40 hover:border-blue-500/50 backdrop-blur-sm 
                shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 
                group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Card Content */}
              <div className="relative p-8 flex flex-col h-full">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-7 h-7 text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.label}</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
