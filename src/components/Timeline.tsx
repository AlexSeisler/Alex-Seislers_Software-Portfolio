import React, { useState, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import TimelineNode from './timeline/TimelineNode';
import TimelinePath from './timeline/TimelinePath';
import { timelineItems } from '../data/timeline';

export default function Timeline() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 bg-[#0A0F1C] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">Career Timeline</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my evolution from early beginnings to current achievements, highlighting key milestones 
            and professional growth along the way.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <TimelinePath 
            activeIndex={activeItem}
            itemCount={timelineItems.length}
            progress={scrollYProgress}
          />
          
          <div className="relative space-y-32">
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
    </section>
  );
}