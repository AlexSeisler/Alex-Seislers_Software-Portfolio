import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/alexseisler',
    color: 'hover:text-gray-200'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/alexseisler',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/AlexSeisler',
    color: 'hover:text-blue-400'
  }
];

export default function ContactSocial() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Connect With Me</h2>
      <div className="grid grid-cols-3 gap-4">
        {socialLinks.map((platform) => (
          <motion.a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center gap-2 p-4 bg-gray-700 rounded-lg text-gray-300 ${platform.color} transition-colors`}
            whileHover={{ y: -5 }}
          >
            <platform.icon className="w-6 h-6" />
            <span className="text-sm">{platform.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}