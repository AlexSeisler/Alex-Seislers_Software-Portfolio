import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 2,
    title: "AI Dev Federation Dashboard",
    description: "Multi-agent orchestration platform with secure authentication and GitHub integration",
    image: "/images/AIDevFederationDashboard.png",
    tags: ["AI Agents", "FastAPI", "React"],
    liveUrl: "https://aidevfederationdashboard.netlify.app/",
    githubUrl: "https://github.com/AlexSeisler/AI-Dev-Federation-Dashboard"
  },
  {
    id: 12,
    title: "ColumbiaPA300",
    description: "Civic engagement platform for Columbia Borough's 300th anniversary celebration",
    image: "/images/ColumbiaPA300.png",
    tags: ["Civic Tech", "Community", "Events"],
    liveUrl: "https://columbiapa300.netlify.app/",
    githubUrl: "https://github.com/AlexSeisler/ColumbiaPA300"
  }
];

export default function FeaturedWorkSnapshot() {
  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Featured Work</h3>
        <p className="text-gray-400">Production systems showcasing technical depth and business impact</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 
              hover:border-blue-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              
              <div className="absolute top-4 right-4 flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800/90 backdrop-blur-sm rounded-lg flex items-center justify-center
                      text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-800/90 backdrop-blur-sm rounded-lg flex items-center justify-center
                      text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-gray-900/80 text-gray-400 text-xs rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/case-study/${project.id}`}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span className="text-sm font-medium">View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
            text-blue-400 rounded-lg border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600/30 
            hover:to-purple-600/30 transition-all duration-300"
        >
          <span>Explore All Projects</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </motion.div>
  );
}