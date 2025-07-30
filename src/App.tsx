import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import MainNav from './components/MainNav';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import AboutSection from './components/about/AboutSection';
import Timeline from './components/Timeline';
import SkillsSection from './components/skills/SkillsSection';
import FeaturedProject from './components/featured/FeaturedProject';
import Contact from './components/Contact';
import ProjectsPage from './components/projects/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <ScrollToTop />
      <MainNav />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{ scaleX }}
      />

      <Routes>
        <Route path="/" element={
          <main className="bg-[#0A0F1C]">
            <Header />
            <AboutSection />
            <Timeline />
            <SkillsSection />
            <FeaturedProject />
            <Contact />
          </main>
        } />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}