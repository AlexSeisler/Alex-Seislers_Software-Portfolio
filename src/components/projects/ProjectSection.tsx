import React from 'react';

interface ProjectSectionProps {
  title: string;
  items?: string[];
}

export default function ProjectSection({ title, items = [] }: ProjectSectionProps) {
  if (!items.length) return null;

  return (
    <div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}