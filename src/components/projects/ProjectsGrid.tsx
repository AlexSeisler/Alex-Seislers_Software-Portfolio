import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectsData } from '../../data/projects';

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onClick={() => setSelectedProject(index)}
            />
          ))}
        </div>

        {selectedProject !== null && (
          <ProjectModal
            isOpen={true}
            onClose={() => setSelectedProject(null)}
            project={projectsData[selectedProject]}
          />
        )}
      </div>
    </section>
  );
}