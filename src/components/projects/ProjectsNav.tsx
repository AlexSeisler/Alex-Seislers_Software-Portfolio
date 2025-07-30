import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Award, Phone } from 'lucide-react';

export default function ProjectsNav() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white font-bold text-xl">ACS Results</Link>
          
          <div className="flex space-x-6">
            <NavLink to="/" icon={<Home className="w-5 h-5" />} text="Home" />
            <NavLink to="/about" icon={<User className="w-5 h-5" />} text="About" />
            <NavLink to="/skills" icon={<Award className="w-5 h-5" />} text="Skills" />
            <NavLink to="/contact" icon={<Phone className="w-5 h-5" />} text="Contact" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link 
      to={to}
      className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}