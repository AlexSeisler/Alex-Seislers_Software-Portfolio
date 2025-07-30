import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Let's Build Your Next Project Together</h2>
          <p className="text-gray-400">Contact me to discuss your vision</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <ContactLink href="mailto:aseisler7045@stevenscollege.edu" icon={<Mail className="w-6 h-6" />} />
          <ContactLink href="tel:+14847694650" icon={<Phone className="w-6 h-6" />} />
          <ContactLink href="https://www.instagram.com/alex_seisler/" icon={<Instagram className="w-6 h-6" />} />
          <ContactLink href="https://www.linkedin.com/in/alexseisler/" icon={<Linkedin className="w-6 h-6" />} />
          <ContactLink href="https://x.com/AlexSeisler" icon={<Twitter className="w-6 h-6" />} />
        </div>

        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} ACS Results. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function ContactLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition-all"
    >
      {icon}
    </a>
  );
}