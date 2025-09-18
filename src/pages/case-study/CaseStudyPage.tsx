import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  UserCheck,
  GitBranch,
  ShieldCheck,
  Bot,
  Users,
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  Shield,
  Layers,
  Settings,
  Database,
  ChevronDown,
  ChevronUp,
  Cpu,
  Image,
  CreditCard,
  Upload,
  Bell,
  Book,
  Zap,
  Layout,
  Plug,
  Cloud,
  User,
  Camera,
  Tag,
  QrCode,
  Palette,
  BookOpen,
  Video,
  Star,
  Mail,
  Smartphone,
} from "lucide-react";

import { projectsData } from '../../data/projects';
import { caseStudies } from '../../data/caseStudies';
import type { CaseStudy } from '../../data/caseStudies';

import Mermaid from "react-mermaid2";

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
                <h1 className="text-4xl font-bold text-white flex items-center">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2 self-center">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors flex items-center justify-center"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors flex items-center justify-center"
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

function OverviewTab({ data }: { data: CaseStudy['overview'] }) {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">Project Overview</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{data.summary}</p>
      </div>

      {/* Demo + Repo Links */}
      <div className="grid sm:grid-cols-2 gap-6">
        <a
          href={data.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 rounded-xl border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-colors"
        >
          <span className="flex items-center gap-2 text-blue-400 font-medium">
            🔗 Live Demo
          </span>
          <ExternalLink className="w-5 h-5 text-blue-400" />
        </a>
        <a
          href={data.repoOwner}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-6 rounded-xl border border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
        >
          <span className="flex items-center gap-2 text-purple-400 font-medium">
            📂 GitHub Repo
          </span>
          <Github className="w-5 h-5 text-purple-400" />
        </a>
      </div>

      {/* Key Features */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-6">Key Features</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {data.features.map((feature, i) => {
            const [role, description] = feature.split("→");
            const roleTrimmed = role.trim();

            const icons: Record<string, JSX.Element> = {
              // AI Dev Federation
              "CIAN (GM Agent)": <UserCheck className="w-6 h-6 text-blue-400" />,
              "System Architect": <GitBranch className="w-6 h-6 text-purple-400" />,
              "Security Architect": <ShieldCheck className="w-6 h-6 text-green-400" />,
              "DevBot": <Bot className="w-6 h-6 text-pink-400" />,
              "Trifecta Community": <Users className="w-6 h-6 text-yellow-400" />,

              // ColumbiaPA300
              "Civic Organizers": <Users className="w-6 h-6 text-blue-400" />,
              "Finance Layer": <CreditCard className="w-6 h-6 text-green-400" />,
              "Community Layer": <Upload className="w-6 h-6 text-yellow-400" />,
              "Elections Board": <GitBranch className="w-6 h-6 text-purple-400" />,
              "Slack Ops": <Bell className="w-6 h-6 text-pink-400" />,
              "Historical Archive": <Book className="w-6 h-6 text-orange-400" />,

              // ACSResultsAI
              "Frontend Layer": <Zap className="w-6 h-6 text-yellow-400" />,
              "UI/UX": <Layout className="w-6 h-6 text-blue-400" />,
              "Pages": <GitBranch className="w-6 h-6 text-purple-400" />,
              "Database Hooks": <Database className="w-6 h-6 text-green-400" />,
              "Integration Hooks": <Plug className="w-6 h-6 text-pink-400" />,
              "Deployment Layer": <Cloud className="w-6 h-6 text-orange-400" />,
              "Tooling": <Settings className="w-6 h-6 text-gray-400" />,



              // ACS Results
              "Students": <User className="w-6 h-6 text-blue-400" />,
              "Visual Showcase": <Camera className="w-6 h-6 text-purple-400" />,
              "Design Layer": <Layers className="w-6 h-6 text-green-400" />,
              "Lead Capture": <Bot className="w-6 h-6 text-pink-400" />,
              "Business Funnel": <Tag className="w-6 h-6 text-yellow-400" />,
              "Marketing Layer": <QrCode className="w-6 h-6 text-gray-400" />,



              // RougeStoryWorld
              "Design Layer": <Palette className="w-6 h-6 text-pink-400" />,
              "Book Showcase": <BookOpen className="w-6 h-6 text-blue-400" />,
              "Media Layer": <Video className="w-6 h-6 text-purple-400" />,
              "About Section": <User className="w-6 h-6 text-green-400" />,
              "Testimonials": <Star className="w-6 h-6 text-yellow-400" />,
              "Email Capture": <Mail className="w-6 h-6 text-orange-400" />,
              "Responsive UI": <Smartphone className="w-6 h-6 text-blue-400" />,

            };


            // Check if it's the last item in an odd-length array
            const isLastOdd = i === data.features.length - 1 && data.features.length % 2 !== 0;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 
                            border border-gray-700 hover:border-blue-500/40 
                            shadow-md hover:shadow-blue-500/10 transition space-y-3
                            w-full md:w-[calc(50%-0.75rem)] ${isLastOdd ? "md:w-1/2 md:mx-auto" : ""}`}
              >
                {/* Role + Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-700/60">
                    {icons[roleTrimmed]}
                  </div>
                  <h4 className="text-lg font-bold text-blue-300">{roleTrimmed}</h4>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed pl-1">
                  {description?.trim()}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>


      {/* Core Capabilities (unchanged, still timeline) */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-6">Core Capabilities</h3>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/40 to-purple-500/40 rounded-full" />
          <div className="space-y-12 relative">
            {data.capabilities.map((cap, i) => (
              <div
                key={i}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 border-2 border-gray-900" />
                
                {/* Card */}
                <div
                  className={`w-full md:w-5/12 p-5 bg-gray-800/70 rounded-xl border border-gray-700 hover:border-purple-500/40 shadow-sm hover:shadow-purple-500/10 transition`}
                >
                  <p className="text-gray-300">{cap}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Tech Stack */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-6">Tech Stack</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h4 className="text-lg font-medium text-blue-400 mb-4">Frontend</h4>
            <ul className="space-y-2">
              {data.techStack.frontend.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
            <h4 className="text-lg font-medium text-purple-400 mb-4">Backend</h4>
            <ul className="space-y-2">
              {data.techStack.backend.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Repo Structure */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-6">Repository Structure</h3>
        <pre className="bg-gray-900/80 rounded-xl p-6 text-sm text-gray-300 overflow-x-auto border border-gray-700">
          {data.repoStructure}
        </pre>
      </section>

      {/* License + Community */}
      <section>
        <div className="bg-gradient-to-r from-gray-800/70 to-gray-900/70 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-gray-700">
          <p className="text-gray-300">
            <span className="font-semibold text-white">📄 License:</span> {data.license}
          </p>
          {data.community && (
            <p className="text-gray-300">
              <span className="font-semibold text-white">👥 Connected Layer:</span>{" "}
              {data.community}
            </p>
          )}
        </div>
      </section>
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
  const iconMap: Record<string, JSX.Element> = {
    "Hugging Face (AI Completions)": <Bot className="w-7 h-7 text-purple-400" />,
    "GitHub (Repository Access)": <Github className="w-7 h-7 text-blue-400" />,
    "SQLAlchemy + SQLite (Persistence)": (
      <Database className="w-7 h-7 text-green-400" />
    ),
    "Middleware (Security & Logging)": (
      <Shield className="w-7 h-7 text-red-400" />
    ),
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Technology Stack & Integrations
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {data.map((category, index) => (
          <IntegrationCard
            key={index}
            name={category.name}
            items={category.items}
            icon={iconMap[category.name] || <Bot className="w-7 h-7" />}
          />
        ))}
      </div>
    </div>
  );
}

function IntegrationCard({
  name,
  items,
  icon,
}: {
  name: string;
  items: { name: string; purpose: string; integration?: string; features?: string[]; risks?: string[] }[];
  icon: JSX.Element;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-700/50">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
      </div>

      {/* Accordion Sections */}
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="border-t border-gray-700 pt-4">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-gray-300 font-medium">{item.name}</span>
              {openIndex === i ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>

            {openIndex === i && (
              <div className="mt-3 pl-2 space-y-2 text-sm text-gray-400">
                {item.purpose && (
                  <p>
                    <span className="text-white font-medium">Purpose: </span>
                    {item.purpose}
                  </p>
                )}
                {item.integration && (
                  <p>
                    <span className="text-white font-medium">Integration: </span>
                    {item.integration}
                  </p>
                )}
                {item.features && (
                  <div>
                    <span className="text-white font-medium">Features: </span>
                    <ul className="list-disc pl-5 space-y-1">
                      {item.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.risks && (
                  <div>
                    <span className="text-white font-medium">Risks: </span>
                    <ul className="list-disc pl-5 space-y-1 text-red-400">
                      {item.risks.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


function SecurityTab({ data }: { data: CaseStudy['security'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Map accents by feature title
  const accentMap: Record<string, string> = {
    "API Keys & Secrets": "text-blue-400 bg-blue-500/20",
    "Repository Access (GitHub API)": "text-purple-400 bg-purple-500/20",
    "AI Completions (Hugging Face API)": "text-green-400 bg-green-500/20",
    "Persistence & Memory": "text-yellow-400 bg-yellow-500/20",
    "Guest Rate Limiting": "text-red-400 bg-red-500/20",
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Security Implementation
      </h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/40 to-purple-500/40 rounded-full -translate-x-1/2" />

        <div className="space-y-16 relative">
          {data.map((feature, index) => {
            const isLeft = index % 2 === 0;
            const accent = accentMap[feature.title] || "text-blue-400 bg-gray-700/50";

            return (
              <div
                key={index}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full shadow-md border-2 border-gray-900 ${accent}`}
                >
                  <Shield className="w-3 h-3 m-auto" />
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 p-6 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700 shadow-md transition`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="text-gray-400 hover:text-white transition"
                    >
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-300 mb-3">{feature.description}</p>

                  {/* Expandable Implementations */}
                  {openIndex === index && (
                    <ul className="space-y-2 pl-2 border-l border-gray-700">
                      {feature.implementations.map((impl, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <span className="w-2 h-2 mt-2 bg-green-400 rounded-full"></span>
                          {impl}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ArchitectureTab({ data }: { data: CaseStudy["architecture"] }) {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Purpose / Overview */}
      <div className="bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 rounded-2xl p-8 border border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">
          System Architecture
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          {data?.purpose || "No architecture overview provided."}
        </p>

        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="flex items-center gap-2 text-gray-300">
            <Bot className="w-5 h-5 text-blue-400" />
            <span>CIAN → Validates + routes execution</span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <GitBranch className="w-5 h-5 text-purple-400" />
            <span>System Architect → Plans & decomposes tasks</span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <ShieldCheck className="w-5 h-5 text-green-400" />
            <span>Security Architect → Security-first placeholder</span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <Cpu className="w-5 h-5 text-pink-400" />
            <span>DevBot → Execution + patching</span>
          </li>
          <li className="flex items-center gap-2 text-gray-300">
            <Users className="w-5 h-5 text-yellow-400" />
            <span>Community Layer → Trifecta adoption</span>
          </li>
        </ul>
      </div>

      {/* Frontend / Backend / Data */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Frontend</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {data?.frontend?.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>{" "}
                {item}
              </li>
            )) || <li className="text-gray-500">No frontend data</li>}
          </ul>
        </div>

        <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Backend</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {data?.backend?.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>{" "}
                {item}
              </li>
            )) || <li className="text-gray-500">No backend data</li>}
          </ul>
        </div>

        <div className="p-6 bg-gray-800/70 rounded-xl border border-gray-700">
          <h3 className="text-lg font-semibold text-green-400 mb-3">
            Data & Storage
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            {data?.storage?.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>{" "}
                {item}
              </li>
            )) || <li className="text-gray-500">No storage data</li>}
          </ul>
        </div>
      </div>

      {/* System Data Flow (Mermaid) */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">
          System Data Flow
        </h3>
        <div className="bg-gray-900/70 rounded-xl border border-gray-700 p-6 flex justify-center">
          {data?.dataFlow ? (
            <Mermaid
              chart={data.dataFlow}
              config={{
                theme: "dark",
                themeVariables: {
                  primaryColor: "#1e293b", // slate background for nodes
                  primaryBorderColor: "#60a5fa", // blue border
                  primaryTextColor: "#e5e7eb", // gray-200 text
                  lineColor: "#60a5fa", // link lines
                  fontSize: "14px",
                  fontFamily: "Inter, sans-serif",
                },
              }}
            />
          ) : (
            <p className="text-gray-500">No system data flow provided.</p>
          )}
        </div>
      </div>


      {/* Subsystem Breakdown */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-4">
          Subsystem Breakdown
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700 rounded-lg text-sm">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-4 py-2 text-left">Subsystem</th>
                <th className="px-4 py-2 text-left">Implementation</th>
                <th className="px-4 py-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {data?.subsystems?.map((sub, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="px-4 py-2 text-white font-medium">{sub.name}</td>
                  <td className="px-4 py-2 text-gray-300">{sub.impl}</td>
                  <td className="px-4 py-2 text-gray-400">{sub.purpose}</td>
                </tr>
              )) || (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-2 text-gray-500 text-center"
                  >
                    No subsystem data
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strengths */}
      <div>
        <h3 className="text-2xl font-semibold text-white mb-6">Architecture Strengths</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {data.strengths.map((strength, i) => {
            const icons = [
              <GitBranch className="w-5 h-5 text-blue-400" />,
              <ShieldCheck className="w-5 h-5 text-green-400" />,
              <Bot className="w-5 h-5 text-pink-400" />,
              <Users className="w-5 h-5 text-yellow-400" />,
            ];
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 p-5 rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 
                          border border-gray-700 hover:border-blue-500/40 shadow-md hover:shadow-blue-500/10 
                          w-full md:w-[45%] lg:w-[40%] max-w-md"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-gray-700/60">
                  {icons[i % icons.length]}
                </div>
                <p className="text-gray-300">{strength}</p>
              </motion.div>
            );
          })}
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
