import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Trophy, Award, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const achievements = [
  {
    icon: GraduationCap,
    label: '4.0 GPA at TSCT',
    color: 'text-yellow-400',
    gradient: 'from-yellow-500/20 to-orange-500/20',
    details: {
      title: 'Academic Excellence',
      description: 'Maintained a 4.0 GPA while completing advanced software engineering coursework at Thaddeus Stevens College of Technology.',
      highlights: [
        'Dean’s List Honors',
        'Data Structures & Algorithms',
        'Full-Stack Dev Projects',
        'Systems Design Foundations'
      ]
    }
  },
  {
    icon: Trophy,
    label: 'Multiple Coding Competition Wins',
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-cyan-500/20',
    details: {
      title: 'Competition Success',
      description: 'Placed across multiple regional collegiate competitions, solving real-time algorithmic and system design challenges.',
      highlights: [
        'TSCT – 2nd Place',
        'West Chester – 2nd Place',
        'Bloomsburg – 3rd Place',
        'HACC – 2nd Place'
      ]
    }
  },
  {
    icon: Award,
    label: 'Student Government Association',
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-purple-500/20',
    details: {
      title: 'Leadership & Service',
      description: 'Led campus initiatives as an active member of the Student Government Association, driving events and policy input.',
      highlights: [
        'SGA Representative',
        'Event Chair',
        'Campus Engagement',
        'Policy Collaboration'
      ]
    }
  }
];

interface DetailModalProps {
  achievement: typeof achievements[0];
  onClose: () => void;
}

function DetailModal({ achievement, onClose }: DetailModalProps) {
  const Icon = achievement.icon;
  
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-8 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <Icon className={`w-8 h-8 ${achievement.color}`} />
            <h3 className="text-2xl font-bold text-white">{achievement.details.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <p className="text-gray-300 leading-relaxed">
            {achievement.details.description}
          </p>

          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Highlights</h4>
            <div className="space-y-3">
              {achievement.details.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArrowRight className={`w-4 h-4 ${achievement.color}`} />
                  {highlight}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 
                rounded-lg hover:bg-blue-500/20 transition-colors"
              onClick={onClose}
            >
              <span>View All Achievements</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {achievements.map((achievement, index) => (
          <motion.button
            key={index}
            className="group relative flex items-center gap-3 bg-gray-800/50 rounded-xl px-6 py-4 
              cursor-pointer overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedAchievement(index)}
          >
            {/* Background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 
              group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm opacity-0 
              group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.div
              className={`relative z-10 ${achievement.color}`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <achievement.icon className="w-6 h-6" />
            </motion.div>
            
            <span className="relative z-10 text-white font-medium group-hover:text-blue-400 transition-colors">
              {achievement.label}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedAchievement !== null && (
          <DetailModal
            achievement={achievements[selectedAchievement]}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}