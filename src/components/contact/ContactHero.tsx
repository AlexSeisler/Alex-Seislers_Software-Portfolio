import React from 'react';
import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Let's Build Something Amazing</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Whether you're looking to discuss a potential project, explore AI solutions,
            or just want to connect, I'm always excited to hear new ideas and collaborate
            on innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}