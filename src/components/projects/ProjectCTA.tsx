import React from 'react';
import { Mail } from 'lucide-react';

export default function ProjectCTA() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can bring your vision to life with quality craftsmanship and attention to detail.
        </p>
        <a
          href="mailto:aseisler7045@stevenscollege.edu"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Contact Me
        </a>
      </div>
    </section>
  );
}