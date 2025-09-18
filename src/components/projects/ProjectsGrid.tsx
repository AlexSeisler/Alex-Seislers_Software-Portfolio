import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectType } from '../../types/project';

interface ProjectGridProps {
  projects: ProjectType[];
  onProjectSelect: (id: number) => void;
}

export default function ProjectGrid({ projects, onProjectSelect }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={(id) => onProjectSelect(id)}
        />

      ))}
    </div>
  );
}
