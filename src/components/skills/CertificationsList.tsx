import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, Calendar } from 'lucide-react';
import { certifications } from '../../data/skills';

export default function CertificationsList() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r 
              from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Professional Growth</span>
          </motion.div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Industry-Recognized Certifications
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Continuous professional development through accredited certifications and training programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative p-6 bg-gray-800/50 border-2 border-gray-700/50 
                group-hover:border-blue-500/50 rounded-xl transition-colors">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-blue-500/10 flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-6 h-6 text-blue-400" />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 
                        transition-colors truncate">
                        {cert.name}
                      </h3>
                      <motion.div
                        className="flex items-center justify-center w-8 h-8 rounded-lg 
                          bg-blue-500/10 text-blue-400"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="truncate">{cert.organization}</span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>Issued {cert.date}</span>
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 
                  opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
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