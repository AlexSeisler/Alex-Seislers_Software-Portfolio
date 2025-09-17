import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Code, 
  Briefcase, 
  Phone, 
  X, 
  Menu,
  Bot
} from 'lucide-react';

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', icon: <Home className="w-5 h-5" />, text: 'Home' },
    { path: '/projects', icon: <Briefcase className="w-5 h-5" />, text: 'Projects' },
    { path: '/case-studies', icon: <Code className="w-5 h-5" />, text: 'Case Studies' },
    { path: '/skills', icon: <Code className="w-5 h-5" />, text: 'Skills' },
    { path: '/contact', icon: <Phone className="w-5 h-5" />, text: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white font-bold text-xl"
          >
            <Bot className="w-6 h-6 text-blue-400" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Alex Seisler
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                icon={item.icon} 
                text={item.text}
                isActive={location.pathname === item.path}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          {navItems.map((item) => (
            <MobileNavLink 
              key={item.path}
              to={item.path} 
              icon={item.icon} 
              text={item.text}
              isActive={location.pathname === item.path}
            />
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}

function NavLink({ to, icon, text, isActive }: { 
  to: string; 
  icon: React.ReactNode; 
  text: string;
  isActive: boolean;
}) {
  return (
    <Link 
      to={to}
      className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200
        ${isActive 
          ? 'text-white bg-blue-500/10' 
          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
        }`}
    >
      {icon}
      <span>{text}</span>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
          layoutId="navbar-indicator"
        />
      )}
    </Link>
  );
}

function MobileNavLink({ to, icon, text, isActive }: { 
  to: string; 
  icon: React.ReactNode; 
  text: string;
  isActive: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors
        ${isActive 
          ? 'text-white bg-blue-500/10' 
          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
        }`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}