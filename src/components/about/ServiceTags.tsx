import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Bot, Globe, X, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const specializations = [
  {
    icon: Code,
    label: 'Full-Stack Development',
    description: 'Python, JavaScript, FastAPI, React',
    gradient: 'from-blue-600/10 to-indigo-600/10',
    details: {
      skills: ['Python', 'Java', 'JavaScript', 'FastAPI', 'Tailwind CSS', 'React', 'Node.js', 'TypeScript'],
      projects: ['ACS Results AI', 'CIAN Orchestration System', 'Portfolio Platform'],
      experience: 'Full-stack backend & frontend experience'
    }
  },
  {
    icon: Bot,
    label: 'AI Solutions',
    description: 'OpenAI, LangChain, Agents',
    gradient: 'from-indigo-600/10 to-purple-600/10',
    details: {
      skills: ['LangChain', 'Secure Auth Flows', 'Function Calling', 'Autonomous Agents', 'Task Queues', 'Vector DBs'],
      projects: ['CIAN Agent OS', 'SMMAA Automation Stack', 'DevBot Execution Kernel'],
      experience: 'Specialized in business AI solutions'
    }
  },
  {
    icon: Database,
    label: 'Data Infrastructure',
    description: 'PostgreSQL, SQL, pgvector',
    gradient: 'from-purple-600/10 to-blue-600/10',
    details: {
      skills: ['PostgreSQL', 'Supabase', 'pgvector', 'Secrets Management', 'Cloud-Ready Deployments', 'Schema Contracts'],
      projects: ['Federation Memory Graph', 'CIAN Memory Engine', 'Analytics Logging Pipelines'],
      experience: 'Production-grade data architecture'
    }
  },
  {
    icon: Globe,
    label: 'Web Development',
    description: 'TypeScript, Next.js 14, Tailwind',
    gradient: 'from-blue-600/10 to-indigo-600/10',
    details: {
      skills: ['TypeScript','Next.js 14', 'React', 'Tailwind CSS', 'Component Systems', 'Responsive Design'],
      projects: ['Portfolio Interface', 'CIAN Dashboard UI', 'Client-Facing Frontends'],
      experience: 'Modern frontend interface builds'
    }
  }
];

interface DetailModalProps {
  specialization: typeof specializations[0];
  onClose: () => void;
}

function DetailModal({ specialization, onClose }: DetailModalProps) {
  const Icon = specialization.icon;
  
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-8 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <Icon className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">{specialization.label}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Skills</h4>
            <div className="grid grid-cols-2 gap-4">
              {specialization.details.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-400 mb-4">Notable Projects</h4>
            <div className="space-y-3">
              {specialization.details.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>{project}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-700">
            <p className="text-gray-300">{specialization.details.experience}</p>
          </div>

          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 text-blue-400 
              rounded-lg hover:bg-blue-500/20 transition-colors"
            onClick={onClose}
          >
            <span>View All Skills</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServiceTags() {
  const [selectedSpecialization, setSelectedSpecialization] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {specializations.map((specialization, index) => (
          <motion.button
            key={index}
            className="group relative bg-gray-800/50 rounded-xl p-6 cursor-pointer overflow-hidden text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedSpecialization(index)}
          >
            <div className="relative z-10">
              <motion.div
                className="inline-block p-3 rounded-xl bg-blue-500/10 mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <specialization.icon className="w-6 h-6 text-blue-400" />
              </motion.div>
              
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {specialization.label}
              </h4>
              
              <p className="text-gray-300 text-base group-hover:text-white transition-colors">
                {specialization.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedSpecialization !== null && (
          <DetailModal
            specialization={specializations[selectedSpecialization]}
            onClose={() => setSelectedSpecialization(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}