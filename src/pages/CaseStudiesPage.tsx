import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '../data/projects';

const featuredProjects = [2, 12, 6, 10, 13]
  .map(id => projectsData.find(p => p.id === id))
  .filter(Boolean);

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,30,50,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,30,50,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <motion.div
          className="absolute -right-48 top-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]"
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

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
            rounded-full border border-blue-500/20 mb-6">
            <span className="text-blue-400 text-sm font-medium">In-Depth Analysis</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deep dives into flagship projects showcasing technical architecture, 
            implementation details, and business impact.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const isFlagship = [2, 12].includes(project.id);
            const isLastOdd = index === featuredProjects.length - 1 && featuredProjects.length % 2 !== 0;

            return (
              <motion.div
                key={project.id}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-500
                  ${isFlagship 
                    ? "border-blue-500/50 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40" 
                    : "border-gray-700/50 hover:border-blue-500/50"}
                  ${isLastOdd ? "col-span-2 mx-auto max-w-2xl" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Flagship Badge */}
                {isFlagship && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 
                      rounded-full text-white text-sm font-medium shadow-lg">
                      🚀 Flagship
                    </div>
                  </div>
                )}

                {/* External Links */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center
                        text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-lg flex items-center justify-center
                        text-gray-400 hover:text-white hover:bg-gray-800 transition-all">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-gray-900/80 text-gray-400 text-sm rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/case-study/${project.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 
                      text-blue-400 rounded-lg border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-600/30 
                      hover:to-purple-600/30 transition-all duration-300 group/cta">
                    <span className="font-medium">Read Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 
                  group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gray-800/30 rounded-2xl p-12 border border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Opportunities?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            These case studies represent just a fraction of my technical capabilities. 
            Let's explore how I can contribute to your team's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                shadow-xl hover:shadow-2xl group font-semibold"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-gray-600 
                text-white rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
