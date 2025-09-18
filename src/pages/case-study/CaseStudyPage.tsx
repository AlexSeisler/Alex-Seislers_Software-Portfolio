import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  Shield,
  Layers,
  Settings
} from 'lucide-react';
import { projectsData } from '../../data/projects';
import { caseStudies } from '../../data/caseStudies';
import type { CaseStudy } from '../../data/caseStudies';

const tabs = [
  { id: 'overview', label: 'Overview', icon: FileText },
  { id: 'integrations', label: 'Integrations', icon: Settings },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'architecture', label: 'Architecture', icon: Layers }
];

export default function CaseStudyPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const project = projectsData.find(p => p.id === parseInt(id || '0'));
  const caseStudy = caseStudies.find(cs => cs.id === parseInt(id || '0'));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project || !caseStudy) {
    return (
      <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <Link to="/case-studies" className="text-blue-400 hover:text-blue-300">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-20">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-96">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full aspect-video object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && (
            <OverviewTab project={project} data={caseStudy.overview} />
          )}
          {activeTab === 'integrations' && (
            <IntegrationsTab data={caseStudy.integrations} />
          )}
          {activeTab === 'security' && (
            <SecurityTab data={caseStudy.security} />
          )}
          {activeTab === 'architecture' && (
            <ArchitectureTab data={caseStudy.architecture} />
          )}
        </motion.div>
      </div>
    </div>
  );
}

/* -------------------
   Tab Components
------------------- */

function OverviewTab({
  data,
  project
}: {
  data: CaseStudy['overview'];
  project: any;
}) {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Hero Narrative */}
      <motion.div
        className="relative bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-2xl p-10 shadow-xl backdrop-blur"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Project Overview
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
          {data.summary}
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard icon="⏱" title="Duration" value={data.duration} />
        <StatCard icon="🏷" title="Category" value={data.category} />
        <StatCard icon="📅" title="Date" value={data.date} />
      </div>

      {/* Skills & Challenges */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Skills */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
            Skills Applied
          </h3>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-gray-800/60 border border-gray-600 text-gray-200 hover:bg-blue-600/20 hover:border-blue-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
            Key Challenges & Solutions
          </h3>
          <ul className="space-y-4">
            {data.challenges.map((challenge, i) => (
              <li
                key={i}
                className="p-5 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-yellow-400/40 transition transform hover:scale-[1.02]"
              >
                <p className="text-yellow-400 font-medium">
                  ⚠️ {challenge}
                </p>
                <p className="text-green-400 text-sm mt-2">
                  ✅ Solution: Documented mitigation approach (e.g., JWT auth, caching, orchestration).
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Outcomes */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
          Outcomes & Impact
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {data.outcomes.map((outcome, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800/40 backdrop-blur border border-gray-700/50 rounded-xl shadow-lg flex items-center gap-3 hover:border-green-400/40 hover:shadow-green-500/20 transition"
            >
              <span className="text-green-400 text-xl">✅</span>
              <p className="text-gray-300">{outcome}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Callout */}
      {data.community && (
        <motion.div
          className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 text-center shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-blue-300 font-medium">
            🌐 Connected Layer: {data.community}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function StatCard({ icon, title, value }: { icon: string; title: string; value: string }) {
  return (
    <motion.div
      className="bg-gray-800/40 backdrop-blur rounded-xl p-6 flex flex-col items-center text-center border border-gray-700/50 hover:border-blue-400/40 hover:shadow-lg hover:shadow-blue-500/20 transition"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-2xl mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300">{value}</p>
    </motion.div>
  );
}

function IntegrationsTab({ data }: { data: CaseStudy['integrations'] }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">
        Technology Stack & Integrations
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {data.map((category, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              {category.name}
            </h3>
            <div className="space-y-3">
              {category.items.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-mono text-gray-300">
                      {item.name.slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-sm">{item.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecurityTab({ data }: { data: CaseStudy['security'] }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Security Implementation</h2>

      <div className="space-y-8">
        {data.map((feature, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.implementations.map((impl, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  {impl}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureTab({ data }: { data: CaseStudy['architecture'] }) {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">System Architecture</h2>

      <div className="space-y-8">
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Architecture Overview
          </h3>
          <p className="text-gray-300 mb-6">{data.overview}</p>

          <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Architecture Diagram Placeholder</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.components.map((component, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                {component.name}
              </h4>
              <p className="text-gray-300 mb-4">{component.description}</p>
              <div className="space-y-2">
                {component.responsibilities.map((resp, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    {resp}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------
   Small UI Helpers
------------------- */

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300">{value}</p>
    </div>
  );
}

function ListSection({
  title,
  items,
  color
}: {
  title: string;
  items: string[];
  color: 'blue' | 'yellow' | 'green';
}) {
  const colorMap = {
    blue: 'bg-blue-400',
    yellow: 'bg-yellow-400',
    green: 'bg-green-400'
  };

  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-300">
            <span className={`w-2 h-2 ${colorMap[color]} rounded-full`}></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
