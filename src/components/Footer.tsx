import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Bot, 
  ExternalLink,
  Code,
  Globe,
  ArrowRight
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' }
];

const services = [
  { label: 'AI Solutions', path: '/projects?category=ai' },
  { label: 'Web Development', path: '/projects?category=web' },
  { label: 'Process Automation', path: '/projects?category=automation' },
  { label: 'Custom Software', path: '/projects?category=software' }
];

const socialLinks = [
  { 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/alexseisler/',
    label: 'LinkedIn',
    color: 'hover:text-blue-400'
  },
  { 
    icon: Github, 
    href: 'https://github.com/alexseisler',
    label: 'GitHub',
    color: 'hover:text-purple-400'
  },
  { 
    icon: Mail, 
    href: 'mailto:aseisler7045@stevenscollege.edu',
    label: 'Email',
    color: 'hover:text-red-400'
  }
];

const contactInfo = [
  { 
    icon: Phone, 
    label: '+1 (484) 769-4650',
    href: 'tel:+14847694650',
    color: 'text-green-400'
  },
  { 
    icon: Mail, 
    label: 'aseisler7045@stevenscollege.edu',
    href: 'mailto:aseisler7045@stevenscollege.edu',
    color: 'text-blue-400'
  },
  { 
    icon: MapPin, 
    label: 'Lancaster, PA',
    href: 'https://maps.google.com/?q=Lancaster,PA',
    color: 'text-red-400'
  }
];

const specialties = [
  { icon: Bot, label: 'AI Solutions' },
  { icon: Code, label: 'Software Development' },
  { icon: Globe, label: 'Web Development' }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0F1C] pt-20 pb-6 overflow-hidden">
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
      </div>

      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Bot className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 
                text-transparent bg-clip-text">
                Alex Seisler
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Crafting innovative solutions at the intersection of software engineering 
              and artificial intelligence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 bg-gray-800/50 rounded-lg ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={service.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-gray-800/50 ${item.color}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span>{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-2 bg-gray-800/50 rounded-lg">
                <specialty.icon className="w-5 h-5" />
              </div>
              <span>{specialty.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Alex Seisler. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}