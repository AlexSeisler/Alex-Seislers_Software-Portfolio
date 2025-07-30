import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProjectCarousel() {
  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4">
            {/* Add your carousel items here */}
            <div className="flex-none w-96">
              <div className="bg-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-2">Residential Second Story Addition</h3>
                <p className="text-gray-300 mb-4">Complete framing and finishing of a second-story addition</p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900/50 p-2 rounded-full">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900/50 p-2 rounded-full">
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}