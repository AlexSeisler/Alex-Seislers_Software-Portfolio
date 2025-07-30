import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ExternalLink, Github, ArrowRight, Calendar } from 'lucide-react';
import { ProjectType } from '../../types/project';

interface ProjectCardProps {
  project: ProjectType;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer border-2 
        border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent 
          opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <motion.div
            className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/20 
              text-blue-400 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            {project.category}
          </motion.div>
        </div>

        {/* External Links */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-gray-800/90 backdrop-blur-sm 
                  rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 bg-gray-800/90 backdrop-blur-sm 
                  rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-1.5 px-2 py-1 bg-gray-900/80 rounded-lg text-gray-400 
                text-sm group-hover:bg-gray-900 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Tag className="w-3 h-3" />
              <span>{tag}</span>
            </motion.div>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-gray-500 text-sm">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Project Info */}
        <div className="pt-4 border-t border-gray-700/50">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            </div>
            <motion.button
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              <span className="text-sm">Details</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 
        group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}