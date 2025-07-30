import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TimelineNodeProps {
  icon: LucideIcon;
  title: string;
  date: string;
  description: string;
  achievements: string[];
  index: number;
  isActive: boolean;
  onHover: () => void;
}

export default function TimelineNode({
  icon: Icon,
  title,
  date,
  description,
  achievements,
  index,
  isActive,
  onHover,
}: TimelineNodeProps) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-start ${isLeft ? 'justify-start' : 'justify-end'} 
        md:px-0 px-4`} // Added padding for mobile
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={onHover}
    >
      {/* Achievement Box */}
      <motion.div
        className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'} 
          bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden
          border-2 ${isActive ? 'border-blue-500/50' : 'border-gray-700/50'}
          transition-all duration-300 shadow-lg hover:shadow-blue-500/10`}
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative p-6">
          {/* Icon with checkpoint integration */}
          <div className={`absolute ${isLeft ? 'md:-right-[4.5rem] -right-2' : 'md:-left-[4.5rem] -left-2'} 
            top-1/2 -translate-y-1/2 z-10`}> {/* Adjusted positioning */}
            <motion.div
              className={`w-14 h-14 rounded-xl flex items-center justify-center
                ${isActive ? 'bg-blue-500' : 'bg-gray-700'} 
                transition-colors duration-300 shadow-lg
                ${isActive ? 'shadow-blue-500/30' : 'shadow-none'}`}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
          </div>

          {/* Content */}
          <div className={`md:${isLeft ? 'pr-8' : 'pl-8'} px-4`}> {/* Adjusted padding */}
            <div className="flex items-center gap-4 mb-3 flex-wrap">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                {date}
              </span>
            </div>

            <p className="text-gray-300 mb-4">{description}</p>

            {/* Achievements with enhanced animation */}
            <motion.div
              className="space-y-3"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isActive ? 'auto' : 0, 
                opacity: isActive ? 1 : 0 
              }}
              transition={{ duration: 0.4 }}
            >
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="p-3 bg-gray-900/50 rounded-lg border border-gray-700/50
                    hover:border-blue-500/30 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}