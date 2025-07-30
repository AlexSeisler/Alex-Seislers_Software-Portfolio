import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineIconProps {
  Icon: LucideIcon;
  isActive: boolean;
}

export default function TimelineIcon({ Icon, isActive }: TimelineIconProps) {
  return (
    <div className="relative z-10">
      <motion.div
        className={`w-16 h-16 rounded-full flex items-center justify-center
          ${isActive ? 'bg-blue-600' : 'bg-gray-700'} transition-colors duration-300`}
        whileHover={{ scale: 1.1 }}
      >
        <Icon className="w-8 h-8 text-white" />
      </motion.div>
    </div>
  );
}