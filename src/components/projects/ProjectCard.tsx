import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ExternalLink, Github, ArrowRight, Calendar } from 'lucide-react';
import { ProjectType } from '../../types/project';
import { useNavigate } from 'react-router-dom'; // ✅ if using react-router

interface ProjectCardProps {
  project: ProjectType;
  onSelect: (id: number) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const navigate = useNavigate();

  // ✅ Flagships + Case Studies IDs
  const specialIds = [2, 12, 6, 10, 13];
  const isSpecial = specialIds.includes(project.id);

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSpecial) {
      navigate(`/case-study/${project.id}`); // ✅ redirect to case study
    } else {
      onSelect(project.id); // fallback to popup
    }
  };

  return (
    <motion.div
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden cursor-pointer border-2 
        border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
      whileHover={{ y: -5 }}
      onClick={() => onSelect(project.id)} // ✅ popup on card click
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent 
          opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Category */}
        <div className="absolute top-4 left-4">
          <motion.div
            className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-blue-500/20 
              text-blue-400 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            {project.category}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 line-clamp-2 group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>

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
        </div>

        {/* Footer Info */}
        <div className="pt-4 border-t border-gray-700/50 flex justify-between items-center text-sm">
          <div className="flex gap-4 text-gray-400">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* ✅ Details / Case Study */}
          <motion.button
            className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ x: 5 }}
            onClick={handleDetailsClick}
          >
            <span className="text-sm">{isSpecial ? 'Case Study' : 'Details'}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
