import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Zap, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    id: 2,
    title: "AI Dev Federation Dashboard",
    subtitle: "Multi-Agent Orchestration Platform",
    description: "Production-ready AI system featuring autonomous agents, secure authentication, and GitHub integration.",
    image: "/images/AIDevFederationDashboard.png",
    tags: ["AI Agents", "FastAPI", "React"],
    liveUrl: "https://aidevfederationdashboard.netlify.app/",
    githubUrl: "https://github.com/AlexSeisler/AI-Dev-Federation-Dashboard",
    metrics: ["Multi-Agent System", "Secure Auth", "Real-time Updates"]
  },
  {
    id: 12,
    title: "ColumbiaPA300",
    subtitle: "Civic Engagement Platform",
    description: "Community-driven platform for Columbia Borough's 300th anniversary with real-world impact.",
    image: "/images/ColumbiaPA300.png",
    tags: ["Civic Tech", "Community", "Events"],
    liveUrl: "https://columbiapa300.netlify.app/",
    githubUrl: "https://github.com/AlexSeisler/ColumbiaPA300",
    metrics: ["Community Impact", "Event Management", "Historical Archive"]
  },
  {
    id: 6,
    title: "ACS Results AI",
    subtitle: "AI Automation Agency",
    description: "AI-powered agency systems for CRM integration, automated outreach, and business optimization.",
    image: "/images/ACSResultsAI.png",
    tags: ["AI", "CRM", "Automation"],
    liveUrl: "https://acsresultsai-aaa.netlify.app/",
    githubUrl: "https://github.com/AlexSeisler/ACSResultsAI",
    metrics: ["Efficiency Gains", "Owner Offload", "Pipeline Automation"]
  }
];

export default function FeaturedProject() {
  return (
    <section className="py-20 bg-[#0A0F1C] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-4">
            Flagship Projects
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Production-ready systems showcasing technical depth and business impact
          </p>
        </motion.div>

        {/* Project Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                  
                  {/* External Links */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center
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
                        className="w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center
                          text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-400 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <span
                        key={metricIndex}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs border border-blue-500/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-900/80 text-gray-400 text-sm rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to={`/case-study/${project.id}`}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span className="font-medium">See Full Project Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strong CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
              text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
              shadow-xl hover:shadow-2xl group text-lg font-semibold"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -right-48 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}
