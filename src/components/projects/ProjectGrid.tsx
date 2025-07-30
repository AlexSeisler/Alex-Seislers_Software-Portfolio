import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { ProjectType } from '../../types/project';

interface ProjectGridProps {
  projects: ProjectType[];
  onProjectSelect: (id: number) => void;
}

export default function ProjectGrid({ projects, onProjectSelect }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard
            project={project}
            onClick={() => onProjectSelect(project.id)}
          />
        </motion.div>
      ))}
    </div>
  );
}