import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = {
  email: 'aseisler7045@stevenscollege.edu',
  phone: '+1 (484) 769-4650',
  location: 'Lancaster, PA'
};

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <img 
          src="/images/Profile1.jpg"
          alt="Alex Seisler"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
          <p className="text-gray-400">Software Engineer & AI Specialist</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <motion.a
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
          whileHover={{ x: 10 }}
        >
          <Mail className="w-5 h-5 text-blue-400" />
          {contactInfo.email}
        </motion.a>

        <motion.a
          href={`tel:${contactInfo.phone}`}
          className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
          whileHover={{ x: 10 }}
        >
          <Phone className="w-5 h-5 text-blue-400" />
          {contactInfo.phone}
        </motion.a>

        <motion.div
          className="flex items-center gap-3 text-gray-300"
          whileHover={{ x: 10 }}
        >
          <MapPin className="w-5 h-5 text-blue-400" />
          {contactInfo.location}
        </motion.div>
      </div>
    </motion.div>
  );
}