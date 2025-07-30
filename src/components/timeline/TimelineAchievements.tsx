import React from 'react';
import { motion } from 'framer-motion';

interface TimelineAchievementsProps {
  achievements: string[];
  isActive: boolean;
  isEven: boolean;
}

export default function TimelineAchievements({ 
  achievements, 
  isActive, 
  isEven 
}: TimelineAchievementsProps) {
  return (
    <motion.div
      className="mt-4 space-y-2"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {achievements.map((achievement, i) => (
        <div 
          key={i} 
          className={`flex items-center gap-2 ${isEven ? '' : 'flex-row-reverse'}`}
        >
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-gray-300">{achievement}</span>
        </div>
      ))}
    </motion.div>
  );
}