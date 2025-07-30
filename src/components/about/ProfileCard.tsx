import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Rocket, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfileCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const skills = [
    { icon: Code, label: 'Full-Stack Development', color: 'text-purple-400' },
    { icon: Bot, label: 'AI Integration', color: 'text-cyan-400' },
    { icon: Brain, label: 'Machine Learning', color: 'text-pink-400' },
    { icon: Rocket, label: 'Process Automation', color: 'text-orange-400' }
  ];

  return (
    <motion.div
      className={`flip-card aspect-square rounded-2xl cursor-pointer ${isFlipped ? 'flipped' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
            <img
              src="/images/Profile1.jpg"
              alt="Alex Seisler"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Innovation Through Code
                </h3>
                <p className="text-gray-300 mb-4">
                  Click to discover my technical expertise
                </p>
                <div className="flex items-center text-cyan-400">
                  <span>View Skills</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />
            
            <div className="relative h-full flex flex-col justify-between">
              <div>
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Technical Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        className="p-4 glass rounded-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <skill.icon className={`w-6 h-6 ${skill.color} mb-2`} />
                        <p className="text-white text-sm">{skill.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/skills"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors"
                >
                  <span>View All Skills</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}