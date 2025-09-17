import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, FileText, Shield, Layers, Settings } from 'lucide-react';
import { projectsData } from '../../data/projects';

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
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
            to="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
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
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === tab.id
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
          {activeTab === 'overview' && <OverviewTab project={project} />}
          {activeTab === 'integrations' && <IntegrationsTab project={project} />}
          {activeTab === 'security' && <SecurityTab project={project} />}
          {activeTab === 'architecture' && <ArchitectureTab project={project} />}
        </motion.div>
      </div>
    </div>
  );
}

function OverviewTab({ project }: { project: any }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-invert max-w-none">
        <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Duration</h3>
            <p className="text-gray-300">{project.duration}</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Category</h3>
            <p className="text-gray-300">{project.category}</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Date</h3>
            <p className="text-gray-300">{project.date}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Skills Applied</h3>
            <ul className="space-y-2">
              {project.skills.map((skill: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Key Challenges</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge: string, index: number) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-white mb-4">Outcomes & Impact</h3>
          <ul className="space-y-2">
            {project.outcomes.map((outcome: string, index: number) => (
              <li key={index} className="flex items-center gap-2 text-gray-300">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function IntegrationsTab({ project }: { project: any }) {
  const integrations = getProjectIntegrations(project.id);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Technology Stack & Integrations</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {integrations.map((category, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">{category.name}</h3>
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-mono text-gray-300">{item.name.slice(0, 2)}</span>
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

function SecurityTab({ project }: { project: any }) {
  const securityFeatures = getProjectSecurity(project.id);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Security Implementation</h2>
      
      <div className="space-y-8">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="bg-gray-800/50 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{feature.description}</p>
            <ul className="space-y-2">
              {feature.implementations.map((impl, implIndex) => (
                <li key={implIndex} className="flex items-center gap-2 text-gray-300">
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

function ArchitectureTab({ project }: { project: any }) {
  const architecture = getProjectArchitecture(project.id);
  
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">System Architecture</h2>
      
      <div className="space-y-8">
        <div className="bg-gray-800/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Architecture Overview</h3>
          <p className="text-gray-300 mb-6">{architecture.overview}</p>
          
          <div className="aspect-video bg-gray-900/50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Architecture Diagram Placeholder</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {architecture.components.map((component, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">{component.name}</h4>
              <p className="text-gray-300 mb-4">{component.description}</p>
              <div className="space-y-2">
                {component.responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="flex items-center gap-2 text-gray-400 text-sm">
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

// Helper functions to generate content based on project ID
function getProjectIntegrations(projectId: number) {
  const baseIntegrations = [
    {
      name: "Frontend",
      items: [
        { name: "React", purpose: "UI Framework" },
        { name: "Tailwind CSS", purpose: "Styling" },
        { name: "Framer Motion", purpose: "Animations" }
      ]
    },
    {
      name: "Backend",
      items: [
        { name: "Node.js", purpose: "Runtime Environment" },
        { name: "Express", purpose: "Web Framework" }
      ]
    }
  ];

  // Customize based on project
  if (projectId === 2) { // AI Dev Federation Dashboard
    return [
      ...baseIntegrations,
      {
        name: "AI & Data",
        items: [
          { name: "OpenAI API", purpose: "LLM Integration" },
          { name: "Supabase", purpose: "Database & Auth" },
          { name: "GitHub API", purpose: "Repository Integration" }
        ]
      }
    ];
  }

  return baseIntegrations;
}

function getProjectSecurity(projectId: number) {
  const baseSecurity = [
    {
      title: "Authentication & Authorization",
      description: "Secure user authentication and role-based access control",
      implementations: [
        "JWT token-based authentication",
        "Role-based access control (RBAC)",
        "Secure session management"
      ]
    }
  ];

  if (projectId === 2) { // AI Dev Federation Dashboard
    return [
      ...baseSecurity,
      {
        title: "API Security",
        description: "Comprehensive API security measures",
        implementations: [
          "Rate limiting and throttling",
          "Input validation and sanitization",
          "CORS configuration",
          "API key management"
        ]
      },
      {
        title: "Data Protection",
        description: "Secure handling of sensitive data",
        implementations: [
          "Environment variable management",
          "Encrypted data transmission",
          "Secure database connections",
          "PII data handling protocols"
        ]
      }
    ];
  }

  return baseSecurity;
}

function getProjectArchitecture(projectId: number) {
  const baseArchitecture = {
    overview: "Modern full-stack architecture with separation of concerns and scalable design patterns.",
    components: [
      {
        name: "Frontend Layer",
        description: "React-based user interface with responsive design",
        responsibilities: [
          "User interface rendering",
          "State management",
          "API communication",
          "User interaction handling"
        ]
      },
      {
        name: "Backend Layer",
        description: "RESTful API server with business logic",
        responsibilities: [
          "API endpoint management",
          "Business logic processing",
          "Database operations",
          "Authentication handling"
        ]
      }
    ]
  };

  if (projectId === 2) { // AI Dev Federation Dashboard
    return {
      overview: "Multi-agent orchestration platform with secure authentication, real-time communication, and modular AI agent architecture.",
      components: [
        ...baseArchitecture.components,
        {
          name: "Agent Orchestration",
          description: "Centralized system for managing AI agents",
          responsibilities: [
            "Agent lifecycle management",
            "Task routing and distribution",
            "Inter-agent communication",
            "Performance monitoring"
          ]
        },
        {
          name: "Memory System",
          description: "Persistent storage for agent interactions and learning",
          responsibilities: [
            "Conversation history storage",
            "Context preservation",
            "Knowledge base management",
            "Learning data aggregation"
          ]
        }
      ]
    };
  }

  return baseArchitecture;
}