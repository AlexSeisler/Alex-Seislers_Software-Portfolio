import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, FolderOpen, Phone, Code, Bot, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResumeButton from './common/ResumeButton';

const features = [
  { 
    icon: Code,
    text: "Full-Stack Development",
    description: "Python, JavaScript, React"
  },
  { 
    icon: Bot,
    text: "AI Solutions",
    description: "OpenAI, Custom Solutions"
  },
  { 
    icon: Zap,
    text: "Process Automation",
    description: "Business Optimization"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseXSpring = useSpring(0, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;

      setMousePosition({ x: moveX, y: moveY });
      mouseXSpring.set(moveX);
      mouseYSpring.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseXSpring, mouseYSpring]);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-[#0A0F1C]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,30,50,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,30,50,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <motion.div
          className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-blue-900/20 rounded-full blur-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
        <motion.div
          className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-indigo-900/20 rounded-full blur-[100px]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            x: mousePosition.x * -2,
            y: mousePosition.y * -2,
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 w-full max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 md:space-y-12">
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight px-4">
              Alex Seisler
              <motion.span 
                className="block text-3xl md:text-4xl mt-6 text-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Software Engineer & AI Innovator
              </motion.span>
            </h1>

            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Crafting innovative solutions at the intersection of software engineering 
              and artificial intelligence. Building the future, one line of code at a time.
            </motion.p>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative px-6 py-4 rounded-xl bg-gray-900/50 border border-gray-800
                  hover:border-blue-900/50 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex flex-col items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-6 h-6 text-blue-500" />
                  <span className="text-white font-medium">{feature.text}</span>
                  <span className="text-gray-400 text-sm">{feature.description}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            variants={containerVariants}
          >
            <Link 
              to="/projects"
              className="group relative w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg 
                overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <motion.span 
                className="relative z-10 flex items-center justify-center gap-2"
                whileHover={{ x: 5 }}
              >
                <FolderOpen className="w-5 h-5" />
                View Projects
              </motion.span>
              <div className="absolute inset-0 bg-blue-700 transform scale-x-0 
                group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>

            <div className="w-full sm:w-auto">
              <ResumeButton />
            </div>

            <Link
              to="/contact"
              className="group relative w-full sm:w-auto px-8 py-4 bg-transparent border-2 
                border-gray-700 text-white rounded-lg overflow-hidden hover:border-blue-500/50 
                transition-all duration-300"
            >
              <motion.span 
                className="relative z-10 flex items-center justify-center gap-2"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5" />
                Contact Me
              </motion.span>
              <div className="absolute inset-0 bg-gray-800 transform scale-x-0 
                group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <ChevronDown className="w-8 h-8 text-gray-600" />
      </motion.div>
    </header>
  );
}