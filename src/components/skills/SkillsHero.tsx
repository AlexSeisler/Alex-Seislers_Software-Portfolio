import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Database, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    label: 'Full-Stack Development',
    description: 'Building production SaaS applications',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    icon: Bot,
    label: 'AI Integration',
    description: 'Custom AI solutions and automation',
    gradient: 'from-cyan-500/20 to-green-500/20'
  },
  {
    icon: Database,
    label: 'System Architecture',
    description: 'Scalable and efficient systems',
    gradient: 'from-purple-500/20 to-pink-500/20'
  }
];

export default function SkillsHero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
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
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white 
              bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% auto' }}
          >
            Skills & Technologies
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Comprehensive software engineering skills spanning full-stack development,
            AI integration, and system architecture. Continuously expanding knowledge
            through practical applications and innovative solutions.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-6">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.label}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}