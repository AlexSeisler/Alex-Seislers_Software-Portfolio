import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Book, Trophy, Wrench } from 'lucide-react';

interface SkillDetailsProps {
  skill: {
    title: string;
    description: string;
    proficiency: number;
    icon: any;
    details: {
      overview?: string;
      expertise?: string[];
      experience?: string[];
      tools?: string[];
      achievements?: string[];
    };
  };
  onClose: () => void;
}

export default function SkillDetails({ skill, onClose }: SkillDetailsProps) {
  const Icon = skill.icon;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto overscroll-contain touch-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Content */}
        <motion.div
          className="relative z-[10000] bg-gray-800 rounded-xl w-full max-w-2xl m-4 mt-16 md:mt-20 
            overflow-hidden shadow-2xl"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          {/* Header - Fixed at top */}
          <div className="sticky top-0 z-50 bg-gray-800 border-b border-gray-700 px-6 py-4 
            flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 rounded-lg bg-blue-500/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-6 h-6 text-blue-400" />
              </motion.div>
              <h2 className="text-xl font-bold text-white truncate">{skill.title}</h2>
            </div>
            
            <motion.button
              className="p-2 hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-gray-400" />
            </motion.button>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 space-y-6">
            {/* Proficiency Bar */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Proficiency Level</span>
                <span className="text-blue-400 font-bold">{skill.proficiency}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">{skill.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Areas of Expertise */}
              {skill.details.expertise && skill.details.expertise.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <Trophy className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <h3 className="font-semibold">Areas of Expertise</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.details.expertise.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience */}
              {skill.details.experience && skill.details.experience.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <Book className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <h3 className="font-semibold">Experience</h3>
                  </div>
                  <div className="space-y-2">
                    {skill.details.experience.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tools & Technologies */}
            {skill.details.tools && skill.details.tools.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <Wrench className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <h3 className="font-semibold">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.details.tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gray-900/50 rounded-full text-gray-300 border border-gray-700"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Achievements */}
            {skill.details.achievements && skill.details.achievements.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <Trophy className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <h3 className="font-semibold">Key Achievements</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {skill.details.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}