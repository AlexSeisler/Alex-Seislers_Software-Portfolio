import React from 'react';
import { Clock, Wrench, Award } from 'lucide-react';
import { ProjectType } from '../../types/project';

interface ProjectDetailsProps {
  project: ProjectType;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 text-gray-300">
        <span className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          {project.duration}
        </span>
        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
          {project.category}
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <DetailSection
          title="Skills Applied"
          items={project.skills}
          icon={Wrench}
          color="text-green-400"
        />
        <DetailSection
          title="Challenges"
          items={project.challenges}
          icon={Wrench}
          color="text-yellow-400"
        />
        <DetailSection
          title="Outcomes"
          items={project.outcomes}
          icon={Award}
          color="text-blue-400"
        />
      </div>
    </div>
  );
}

interface DetailSectionProps {
  title: string;
  items: string[];
  icon: React.ElementType;
  color: string;
}

function DetailSection({ title, items, icon: Icon, color }: DetailSectionProps) {
  return (
    <div className="bg-gray-900/50 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Icon className={`w-5 h-5 ${color}`} />
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${color}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}