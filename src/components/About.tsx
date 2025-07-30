import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-blue-500 transform hover:scale-105 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1"
                alt="Alex Seisler"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm Alex Seisler, a detail-oriented professional contractor based in Lancaster, PA. 
              With extensive experience in residential remodeling, I bring a commitment to excellence 
              and building lasting client relationships. From framing to finishing touches, I ensure 
              every project meets the highest standards of quality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <MetricCard
                icon={<Award className="w-8 h-8" />}
                title="Experience"
                value="5+ Years"
              />
              <MetricCard
                icon={<Users className="w-8 h-8" />}
                title="Projects"
                value="50+"
              />
              <MetricCard
                icon={<CheckCircle className="w-8 h-8" />}
                title="Client Satisfaction"
                value="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg text-center transform hover:scale-105 transition-all">
      <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      <p className="text-blue-400 text-2xl font-bold">{value}</p>
    </div>
  );
}