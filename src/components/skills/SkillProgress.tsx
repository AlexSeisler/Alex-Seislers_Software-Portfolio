import React from 'react';
import { motion } from 'framer-motion';

interface SkillProgressProps {
  proficiency: number;
}

export default function SkillProgress({ proficiency }: SkillProgressProps) {
  return (
    <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        className="absolute inset-y-0 left-0 bg-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}