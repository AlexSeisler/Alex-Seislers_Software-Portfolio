import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Terminal, Code, Bot, Wrench, Cloud, Database, Clock, ArrowRight, X } from 'lucide-react';
import SectionTransition from '../SectionTransition';

const skills = [
  {
    icon: Code,
    title: 'Languages & Frameworks',
    items: ['Python', 'JavaScript', 'React', 'TypeScript'],
    color: 'text-purple-400',
    gradient: 'from-purple-500/20 to-blue-500/20',
    description: 'Experience with modern programming languages and web frameworks.',
    proficiency: 92,
    details: {
      expertise: [
        'Object-Oriented Design',
        'Data Structures & Algorithms',
        'Modular Architecture',
        'Functional Programming'
      ],
      experience: [
        'Deployed full-stack SaaS apps',
        'Open-source code contributions',
        'Custom GPT agent pipelines'
      ],
      tools: [
        'Python', 'TypeScript', 'JavaScript', 'Java', 'C++'
      ],
      achievements: [
        'Wrote production-grade backend logic',
        'Built reusable frontend UI kits',
        'Refactored legacy codebases'
      ]
    }
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    items: ['OpenAI', 'LangChain', 'Make.com'],
    color: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-green-500/20',
    description: 'Building AI solutions and automation systems.',
    proficiency: 83,
    details: {
      expertise: [
        'GPT Agent Architectures',
        'Function Calling & Memory',
        'Process & Workflow Automation',
        'Natural Language Interfaces'
      ],
      experience: [
        'Built DevBot execution kernel',
        'Automated video-content pipelines',
        'Developed AI tools for clients'
      ],
      tools: [
        'OpenAI API', 'LangChain', 'Make.com',
        'PhantomBuster', 'Python', 'Supabase Functions'
      ],
      achievements: [
        'Reduced manual tasks by 80%',
        'Automated full business operations',
        'Launched monetized AI services'
      ]
    }
  },
  {
    icon: Database,
    title: 'Database & Backend',
    items: ['PostgreSQL', 'Node.js', 'Express'],
    color: 'text-orange-400',
    gradient: 'from-orange-500/20 to-red-500/20',
    description: 'Database design and backend development.',
    proficiency: 86,
    details: {
      expertise: [
        'SQL Query Optimization',
        'Schema Design & Indexing',
        'Role-based Auth & Access',
        'Live API Integration'
      ],
      experience: [
        'Built Supabase-backed memory DB',
        'Auth-managed multi-user backends',
        'Rendered endpoints for AI agents'
      ],
      tools: [
        'PostgreSQL', 'Supabase', 'MongoDB',
        'Node.js', 'Express', 'Redis'
      ],
      achievements: [
        'Handled live data for 1000+ entries',
        'Secured APIs with row-level access',
        'Built GraphQL-style federation system'
      ]
    }
  },
  {
    icon: Terminal,
    title: 'Web Development',
    items: ['React', 'Next.js', 'Tailwind CSS'],
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    description: 'Modern frontend development with React.',
    proficiency: 89,
    details: {
      expertise: [
        'Component-based Architecture',
        'Responsive UI Systems',
        'Context & State Management',
        'Framer Motion Animation'
      ],
      experience: [
        'Built client-facing dashboards',
        'Portfolio + QR-linked resume UI',
        'Admin panels for automation tools'
      ],
      tools: [
        'React', 'Next.js 14', 'Tailwind CSS',
        'Framer Motion', 'ShadCN/UI', 'Vite'
      ],
      achievements: [
        'Increased usability across devices',
        'Reduced bounce rate 30%',
        'Dynamic forms + resume previewers'
      ]
    }
  },
  {
    icon: Wrench,
    title: 'Development Tools',
    items: ['Git', 'VS Code', 'Docker'],
    color: 'text-green-400',
    gradient: 'from-green-500/20 to-teal-500/20',
    description: 'Proficient with development tools and environments.',
    proficiency: 82,
    details: {
      expertise: [
        'CI/CD Pipelines',
        'Version Control Workflows',
        'Local Dev Environments',
        'Code Quality Standards'
      ],
      experience: [
        'Integrated GitHub Actions',
        'VS Code + extensions config',
        'Containerized with Docker'
      ],
      tools: [
        'Git', 'GitHub', 'Docker',
        'VS Code', 'NPM/Yarn', 'CLI Tools'
      ],
      achievements: [
        'Automated build & deploy cycle',
        'Improved code review flow',
        'Hardened agent safety protocols'
      ]
    }
  },
  {
    icon: Cloud,
    title: 'Deployment',
    items: ['Netlify', 'Render', 'GitHub Pages'],
    color: 'text-indigo-400',
    gradient: 'from-indigo-500/20 to-purple-500/20',
    description: 'Web deployment and hosting configuration.',
    proficiency: 91,
    details: {
      expertise: [
        'Multi-env Hosting Config',
        'CDN Optimization',
        'CI/CD Auto Deployments',
        'DNS + SSL Integration'
      ],
      experience: [
        'Hosted dynamic portfolio on Netlify',
        'Deployed DevBot on Render',
        'Managed SSL & DNS configs'
      ],
      tools: [
        'Render', 'Netlify', 'Cloudflare',
        'GitHub Pages', 'Vercel', 'DNS tools'
      ],
      achievements: [
        'Cut deploy time by 75%',
        'Resolved domain issues live',
        'Linked QR deploy to resume'
      ]
    }
  }
];


function SkillModal({ skill, onClose }: { skill: typeof skills[0]; onClose: () => void }) {
  const Icon = skill.icon;
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      <motion.div
        className="relative z-[10000] bg-gray-800 rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <motion.div
              className="p-2 rounded-lg bg-blue-500/10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-8 h-8 text-blue-400" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white">{skill.title}</h2>
          </div>
          
          <motion.button
            className="absolute right-4 top-4 p-2 hover:bg-gray-700 rounded-full transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-6 h-6 text-gray-400" />
          </motion.button>
        </div>

        <div className="max-h-[calc(100vh-12rem)] overflow-y-auto">
          <div className="p-6 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300">Proficiency Level</span>
                <span className="text-blue-400 font-bold">{skill.proficiency}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">{skill.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <Terminal className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold">Areas of Expertise</h3>
                </div>
                <div className="space-y-2">
                  {skill.details.expertise.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold">Experience</h3>
                </div>
                <div className="space-y-2">
                  {skill.details.experience.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <ArrowRight className="w-4 h-4 text-blue-400" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Terminal className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold">Tools & Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.details.tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-gray-900/50 rounded-full text-gray-300 border border-gray-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Terminal className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold">Key Achievements</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skill.details.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="p-3 bg-gray-900/50 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#0A0F1C] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTransition>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-4">
              Technical Expertise
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Click on any skill to explore detailed information about my expertise and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.button
                key={index}
                className="group relative p-6 bg-gray-800/50 rounded-xl border-2 border-gray-700/50 
                  hover:border-gray-600/50 text-left cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedSkill(index)}
              >
                <div className="absolute top-4 right-4 flex items-center gap-2 text-gray-400 
                  group-hover:text-cyan-400 transition-colors">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Click to explore</span>
                </div>

                {/* Related Projects */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="/projects"
                    className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View projects →
                  </Link>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div
                    className={`inline-block p-3 rounded-xl bg-gradient-to-br ${skill.gradient} mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color} bg-current`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                    <span className={`text-sm ${skill.color}`}>{skill.proficiency}%</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {skill.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.items.slice(0, 3).map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-900/50 rounded-full text-xs text-gray-400
                          group-hover:text-gray-300 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                    {skill.items.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-400">
                        +{skill.items.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </SectionTransition>
      </div>

      <AnimatePresence>
        {selectedSkill !== null && (
          <SkillModal
            skill={skills[selectedSkill]}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}