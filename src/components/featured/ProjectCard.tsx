import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import { ProjectType } from '../../types/project';

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="p-6 relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-sm rounded">
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            {project.duration}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-gray-300 text-sm rounded"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}