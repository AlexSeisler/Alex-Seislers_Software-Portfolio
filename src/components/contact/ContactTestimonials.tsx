import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Alex's attention to detail and professionalism exceeded our expectations.",
    author: "Sarah Johnson",
    role: "Homeowner"
  },
  {
    quote: "Outstanding craftsmanship and excellent communication throughout the project.",
    author: "Michael Chen",
    role: "Property Manager"
  },
  {
    quote: "A true professional who delivers quality work on time and within budget.",
    author: "Emily Rodriguez",
    role: "Interior Designer"
  }
];

export default function ContactTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Client Testimonials</h2>
      
      <div className="relative h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0"
          >
            <Quote className="w-8 h-8 text-blue-400 mb-4" />
            <p className="text-gray-300 text-lg mb-4">
              {testimonials[current].quote}
            </p>
            <div>
              <p className="text-white font-medium">
                {testimonials[current].author}
              </p>
              <p className="text-gray-400 text-sm">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}