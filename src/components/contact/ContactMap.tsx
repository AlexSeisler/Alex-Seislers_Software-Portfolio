import React from 'react';
import { motion } from 'framer-motion';

export default function ContactMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-8"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Service Area</h2>
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          title="Service Area Map"
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Lancaster,PA"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-gray-300">
        Serving Lancaster, PA and surrounding areas within a 50-mile radius.
      </p>
    </motion.div>
  );
}