import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import IntroContent from './IntroContent';
import Achievements from './Achievements';
import ServiceTags from './ServiceTags';
import CallToAction from './CallToAction';
import FeaturedWorkSnapshot from '../home/FeaturedWorkSnapshot';

export default function AboutSection() {
  return (
    <motion.section 
      className="py-20 bg-[#0A0F1C] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <ProfileCard />
          </motion.div>
          
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <IntroContent />
            <Achievements />
            <ServiceTags />
            <CallToAction />
          </motion.div>
        </div>
        
        {/* Featured Work Snapshot - Full Width Below */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FeaturedWorkSnapshot />
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
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
    </motion.section>
  );
}