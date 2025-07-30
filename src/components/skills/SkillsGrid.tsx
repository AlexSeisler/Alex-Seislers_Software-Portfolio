import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../../data/skills';
import SkillCard from './SkillCard';
import SkillDetails from './SkillDetails';

interface SkillsGridProps {
  initialCategory?: string;
}

export default function SkillsGrid({ initialCategory }: SkillsGridProps) {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (initialCategory) {
      setFilter(initialCategory.toLowerCase());
    }
  }, [initialCategory]);

  const filteredSkills = skillsData.filter(skill => {
    if (filter === 'all') return true;
    return skill.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FilterButton
            label="All"
            active={filter === 'all'}
            onClick={() => setFilter('all')}
          />
          {Array.from(new Set(skillsData.map(skill => skill.title))).map((category) => (
            <FilterButton
              key={category}
              label={category}
              active={filter.toLowerCase() === category.toLowerCase()}
              onClick={() => setFilter(category.toLowerCase())}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <SkillCard
                {...skill}
                onClick={() => setSelectedSkill(index)}
                isSelected={selectedSkill === index}
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill !== null && (
            <SkillDetails
              skill={skillsData[selectedSkill]}
              onClose={() => setSelectedSkill(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function FilterButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
        ${active 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}