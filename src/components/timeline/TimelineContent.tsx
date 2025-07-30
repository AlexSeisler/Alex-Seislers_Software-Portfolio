import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TimelineContentProps {
  title: string;
  date: string;
  description: string;
  achievements: string[];
  isActive: boolean;
  isEven: boolean;
}

export default function TimelineContent({
  title,
  date,
  description,
  achievements,
  isActive,
  isEven,
}: TimelineContentProps) {
  return (
    <motion.div
      className={`w-[calc(50%-3rem)] ${isEven ? 'ml-auto' : 'mr-auto'} p-6 
        bg-gray-800/80 backdrop-blur-sm rounded-2xl border-2 
        ${isActive ? 'border-blue-500/50' : 'border-gray-700'} 
        transition-colors duration-300 shadow-lg`}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        initial={false}
        animate={{
          x: isActive ? 0 : isEven ? -20 : 20,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className={`flex items-center gap-4 mb-4 ${!isEven && 'flex-row-reverse'}`}>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
            {date}
          </span>
        </div>

        <p className={`text-gray-300 mb-4 ${!isEven && 'text-right'}`}>
          {description}
        </p>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-2 text-gray-400 
                    ${!isEven && 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  {achievement}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}