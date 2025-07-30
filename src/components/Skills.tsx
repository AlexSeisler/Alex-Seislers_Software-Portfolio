import React from 'react';
import { Flame, Ruler, Shield, Wrench, BookOpen, Users } from 'lucide-react';

const skills = [
  {
    icon: <Flame className="w-6 h-6" />,
    title: 'Welding Techniques',
    description: 'Expert in TIG, MIG, and stick welding for various materials',
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: 'Blueprint Reading',
    description: 'Skilled in interpreting complex technical drawings',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safety Compliance',
    description: 'OSHA certified with perfect safety record',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Equipment Mastery',
    description: 'Proficient with latest welding and fabrication tools',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Technical Knowledge',
    description: 'Deep understanding of metallurgy and material properties',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Leadership',
    description: 'Experience leading crews on major projects',
  },
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Key Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 rounded-lg transform hover:scale-105 transition-all cursor-pointer group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}