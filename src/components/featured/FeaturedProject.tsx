import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedProject() {
  return (
    <section className="py-16 bg-[#0A0F1C]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Main Visual */}
            <div className="col-span-1 lg:col-span-3 order-2 lg:order-1">
              <Link to="/projects" className="block h-full">
                <motion.div
                  className="relative h-full bg-gray-800 rounded-xl overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/TrifectaPreview.png"
                    alt="ACS Results AI: Trifecta System"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-2xl font-bold text-white mb-2">ACS Results AI: Trifecta</h2>
                      <p className="text-gray-300 mb-4 line-clamp-2">
                        Modular AI operating system composed of autonomous agents powering execution, memory, and business logic.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Agent Systems", "Autonomous Logic", "Full-Stack AI Infra"].map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800/80 text-gray-300 text-sm rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>

            {/* Info Panel */}
            <div className="col-span-1 lg:col-span-2 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  <div className="p-4 bg-gray-800/50 rounded-xl flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Timeline</p>
                      <p className="text-white font-medium">2025 – Present</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-800/50 rounded-xl flex items-center gap-4">
                    <Users className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Audience</p>
                      <p className="text-white font-medium">AI Builders & System Architects</p>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-800/50 rounded-xl flex items-center gap-4">
                    <Zap className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-400">Focus</p>
                      <p className="text-white font-medium">Agent Infra & Code Execution</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-white mb-3">System Components</h3>
                  <div className="space-y-2">
                    {[
                      "🧠 CIAN – Task Routing & Memory Engine",
                      "⚙️ DevBot – Code Execution & Patch Ops",
                      "📈 SMMAA – Content & GTM Automator",
                      "📐 Systems Architect – Planning & Decomposition",
                      "🧭 AAO – Alignment & Opportunity Navigator"
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Explore the Full System</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
