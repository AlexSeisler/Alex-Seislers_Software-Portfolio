import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Project</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
              alt="Second story addition project"
              className="rounded-lg shadow-xl transform group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              Residential Second Story Addition
            </h3>
            <p className="text-gray-300 text-lg">
              A comprehensive home expansion project featuring complete framing and finishing
              of a second-story addition. Completed ahead of schedule with meticulous attention
              to detail and perfect safety record.
            </p>
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg transform hover:scale-105 transition-all group">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}