import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Search, X, Code, Bot, Globe, Briefcase, Sparkles, GraduationCap } from 'lucide-react';
import { projectsData } from '../../data/projects';
import ProjectGrid from './ProjectGrid';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';

type Category = 'all' | 'ACS Results AI: Trifecta' | 'AI Automation Agency' | 'ACS Results Legacy' | 'Extra Projects';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const flagshipProjects = projectsData.filter(p => [2, 12].includes(p.id));
  const caseStudyProjects = projectsData.filter(p => [6, 10, 13].includes(p.id));
  const supportingProjects = projectsData.filter(p => ![2, 12, 6, 10, 13].includes(p.id));

  const filteredSupporting = supportingProjects.filter(project => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || project.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { value: 'all', icon: Briefcase, count: supportingProjects.length, gradient: 'from-blue-500/20 to-purple-500/20' },
    { value: 'ACS Results AI: Trifecta', icon: Bot, count: supportingProjects.filter(p => p.category === 'ACS Results AI: Trifecta').length, gradient: 'from-cyan-500/20 to-blue-500/20' },
    { value: 'AI Automation Agency', icon: Globe, count: supportingProjects.filter(p => p.category === 'AI Automation Agency').length, gradient: 'from-indigo-500/20 to-sky-500/20' },
    { value: 'ACS Results Legacy', icon: Code, count: supportingProjects.filter(p => p.category === 'ACS Results Legacy').length, gradient: 'from-yellow-400/20 to-amber-500/20' },
    { value: 'Extra Projects', icon: GraduationCap, count: supportingProjects.filter(p => p.category === 'Extra Projects').length, gradient: 'from-emerald-500/20 to-teal-500/20' },
  ];

  useEffect(() => {
    document.body.style.overflow = selectedProject !== null ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r 
              from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-5 h-5 text-blue-400" />
            </motion.div>
            <span className="text-blue-400 font-medium">Project Showcase</span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white 
              bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            style={{ backgroundSize: '200% auto' }}
          >
            Featured Projects
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore my collection of software development projects, showcasing practical applications 
            of programming skills and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Flagships */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Flagship Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {flagshipProjects.map(project => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>

        {/* Case Studies */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Case Study Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {caseStudyProjects.map(project => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </div>

        {/* Supporting */}
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Supporting Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {supportingProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject} // ✅ same as other sections
            />
          ))}
        </div>
      </div>


      {/* Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projectsData.find(p => p.id === selectedProject)!}
            isOpen={true}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
