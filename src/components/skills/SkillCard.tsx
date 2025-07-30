import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';
import SkillProgress from './SkillProgress';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  proficiency: number;
  description: string;
  onClick: () => void;
  isSelected: boolean;
}

export default function SkillCard({
  icon: Icon,
  title,
  proficiency,
  description,
  onClick,
  isSelected,
}: SkillCardProps) {
  return (
    <motion.button
      className={`
        relative p-6 bg-gray-800/50 rounded-xl cursor-pointer overflow-hidden w-full text-left
        transform transition-all duration-300 group
        ${isSelected ? 'ring-2 ring-blue-500' : 'hover:bg-gray-750'}
      `}
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 
        group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm opacity-0 
        group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <motion.div
          className="text-blue-400 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>

        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <SkillProgress proficiency={proficiency} />
        
        <motion.p 
          className="mt-4 text-gray-400 text-sm group-hover:text-gray-300 transition-colors"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span className="text-sm font-bold text-blue-400">{proficiency}%</span>
        </motion.div>
      </div>
    </motion.button>
  );
}