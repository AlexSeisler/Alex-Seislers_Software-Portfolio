import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Search, X, Code, Bot, Globe, Briefcase, Sparkles, GraduationCap } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectGrid from '../components/projects/ProjectGrid';
import ProjectModal from '../components/projects/ProjectModal';

type Category = 'all' | 'AI Solutions' | 'Web Development' | 'Programming' | 'School Codes';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const categories: { value: Category; icon: any; count: number; gradient: string }[] = [
    { 
      value: 'all', 
      icon: Briefcase, 
      count: projectsData.length,
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    { 
      value: 'AI Solutions', 
      icon: Bot, 
      count: projectsData.filter(p => p.category === 'AI & Automation').length,
      gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    { 
      value: 'Web Development', 
      icon: Globe, 
      count: projectsData.filter(p => p.category === 'Web Development').length,
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    { 
      value: 'Programming', 
      icon: Code, 
      count: projectsData.filter(p => p.category === 'Programming').length,
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      value: 'School Codes',
      icon: GraduationCap,
      count: projectsData.filter(p => p.category === 'School Codes').length,
      gradient: 'from-green-500/20 to-emerald-500/20'
    }
  ];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    document.body.style.overflow = selectedProject !== null ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(20,30,50,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,30,50,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        {/* Glowing orbs */}
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
        <motion.div
          className="absolute -left-48 bottom-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Enhanced Header */}
      <motion.div 
        className="sticky top-0 z-40 bg-[#0A0F1C]/80 backdrop-blur-lg border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-4">
          <div className="py-6">
            <div className="flex items-center justify-end gap-4">
              {/* Enhanced Search Bar */}
              <motion.div 
                className="relative"
                animate={{ width: isSearchOpen ? 300 : 40 }}
              >
                <motion.button
                  className={`w-10 h-10 flex items-center justify-center rounded-lg
                    ${isSearchOpen ? 'bg-gray-800' : 'bg-gray-800/50 hover:bg-gray-800'} 
                    transition-colors`}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSearchOpen ? (
                    <X className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Search className="w-5 h-5 text-gray-400" />
                  )}
                </motion.button>

                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      className="absolute left-0 top-0 w-full"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full h-10 pl-12 pr-4 bg-gray-800/90 backdrop-blur-sm rounded-lg 
                          text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                          focus:ring-blue-500 border border-gray-700/50 focus:border-blue-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                      />
                      <Search className="absolute left-4 top-3 w-4 h-4 text-gray-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Enhanced Page Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r 
              from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
            </motion.div>
            <span className="text-blue-400 font-medium">Project Showcase</span>
          </motion.div>

          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white 
              bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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

        {/* Categories */}
        <div className="mb-12">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                onMouseEnter={() => setHoveredCategory(category.value)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`group relative overflow-hidden px-6 py-3 rounded-xl 
                  ${selectedCategory === category.value 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'} 
                  transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300`}
                  initial={false}
                  animate={{
                    opacity: selectedCategory === category.value || hoveredCategory === category.value ? 1 : 0
                  }}
                />
                
                {/* Glass overlay */}
                <motion.div
                  className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  animate={{
                    opacity: selectedCategory === category.value || hoveredCategory === category.value ? 1 : 0
                  }}
                />

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.value === 'all' ? 'All Projects' : category.value}</span>
                  <span className={`px-2 py-0.5 rounded-full text-sm 
                    ${selectedCategory === category.value 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-800/80 text-gray-400 group-hover:text-white'}`}>
                    {category.count}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <ProjectGrid
          projects={filteredProjects}
          onProjectSelect={(id) => setSelectedProject(id)}
        />

        {/* No Results Message */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-400">
                <Search className="w-5 h-5" />
                <p>No projects found matching your criteria.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <ProjectModal
              project={projectsData.find(p => p.id === selectedProject)}
              isOpen={true}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}