import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Eye, Wrench, Building, Hammer } from 'lucide-react';
import TimelineNode from './TimelineNode';
import TimelinePath from './TimelinePath';
import { timelineItems } from '../../data/timeline';

export default function Timeline() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Journey</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my growth from apprentice to professional contractor through key milestones
            and achievements.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <TimelinePath activeIndex={activeItem} />
          
          <div className="relative space-y-24">
            {timelineItems.map((item, index) => (
              <TimelineNode
                key={index}
                {...item}
                index={index}
                isActive={activeItem === index}
                onHover={() => setActiveItem(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent" />
        <motion.div
          className="absolute -right-48 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}