import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const flagshipProjects = [
  {
    id: 2,
    title: "AI Dev Federation Dashboard",
    subtitle: "Multi-Agent Orchestration Platform",
    description: "Production-ready AI system featuring autonomous agents, secure authentication, and GitHub integration. Demonstrates enterprise-level architecture and AI orchestration capabilities.",
    image: "/images/AIDevFederationDashboard.png",
    tags: ["AI Agents", "FastAPI", "React", "Supabase"],
    liveUrl: "https://aidevfederationdashboard.netlify.app/",
    githubUrl: "https://github.com/AlexSeisler/AI-Dev-Federation-Dashboard",
    featured: true,
    metrics: ["Multi-Agent System", "Secure Auth", "Real-time Updates"]
  },
  {
    id: 12,
    title: "ColumbiaPA300",
    subtitle: "Civic Engagement Platform",
    description: "Community-driven platform for Columbia Borough's 300th anniversary. Features event management, historical timeline, and citizen engagement tools with real-world impact.",
    image: "/images/ColumbiaPA300.png",
    tags: ["Civic Tech", "Community", "Events", "Timeline"],
    liveUrl: "https://columbiapa300.netlify.app/",
    githubUrl: "https://github.com/AlexSeisler/ColumbiaPA300",
    featured: true,
    metrics: ["Community Impact", "Event Management", "Historical Archive"]
  }
];

export default function ProjectsHero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
            rounded-full border border-blue-500/20 mb-6">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Flagship Projects</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Production-Ready Systems
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing technical depth through AI orchestration platforms, civic engagement tools, 
            and full-stack applications with real-world impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {flagshipProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-gray-800/30 rounded-2xl overflow-hidden border border-gray-700/50 
                hover:border-blue-500/50 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 
                  rounded-full text-white text-sm font-medium">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              </div>

              {/* External Links */}
              <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center
                      text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center
                      text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/20"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-900/80 text-gray-400 text-sm rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/case-study/${project.id}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                    text-blue-400 rounded-lg border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600/30 
                    hover:to-purple-600/30 transition-all duration-300 group/cta"
                >
                  <span className="font-medium">View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 
                group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}