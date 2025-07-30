import React from 'react';
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion';

interface TimelinePathProps {
  activeIndex: number | null;
  itemCount: number;
  progress: MotionValue<number>;
}

export default function TimelinePath({ 
  activeIndex, 
  itemCount,
  progress 
}: TimelinePathProps) {
  const springConfig = { stiffness: 60, damping: 25, restDelta: 0.001 };
  const smoothProgress = useSpring(progress, springConfig);
  const pathProgress = useTransform(smoothProgress, [0, 0.9], [0, 1]);

  // Generate smooth path with consistent curves
  const generatePath = () => {
    const width = 1200;
    const height = 200;
    const controlPointOffset = width * 0.2;
    let path = `M100 0`;
    
    Array.from({ length: itemCount - 1 }).forEach((_, i) => {
      const y1 = i * height;
      const y2 = (i + 1) * height;
      const isEven = i % 2 === 0;
      
      const x2 = isEven ? width - 100 : 100;
      const cp1x = isEven ? 100 + controlPointOffset : 100 + controlPointOffset;
      const cp2x = isEven ? width - 100 - controlPointOffset : width - 100 - controlPointOffset;
      
      const cp1y = y1 + (height * 0.4);
      const cp2y = y2 - (height * 0.4);
      
      path += ` C${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;
    });
    
    return path;
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="absolute left-0 top-0 w-full h-full"
        viewBox={`0 0 1200 ${200 * (itemCount - 1)}`}
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pathGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.15)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>

          <linearGradient id="activeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>

          <filter id="pathGlowEffect">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#3B82F6" floodOpacity="0.3" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="activeGlowEffect">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feFlood floodColor="#3B82F6" floodOpacity="0.5" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <motion.path
            id="motionPath"
            d={generatePath()}
            stroke="none"
            fill="none"
          />
        </defs>

        {/* Background path */}
        <path
          d={generatePath()}
          stroke="url(#pathGlow)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#pathGlowEffect)"
          className="transition-opacity duration-500"
          style={{ opacity: 0.3 }}
        />

        {/* Active path */}
        <motion.path
          d={generatePath()}
          stroke="url(#activeGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          filter="url(#activeGlowEffect)"
          style={{ pathLength: pathProgress }}
        />

        {/* Checkpoints */}
        {Array.from({ length: itemCount }).map((_, i) => {
          const isLeft = i % 2 === 0;
          const isActive = i <= (activeIndex ?? -1);
          
          return (
            <g key={i}>
              <motion.circle
                cx={isLeft ? 100 : 1100}
                cy={i * 200}
                r="24"
                className="transition-all duration-700"
                initial={false}
                animate={{
                  fill: isActive ? 'rgba(59, 130, 246, 0.2)' : 'rgba(55, 65, 81, 0.1)',
                  scale: isActive ? 1.2 : 1
                }}
                filter="url(#activeGlowEffect)"
              />
              
              <motion.circle
                cx={isLeft ? 100 : 1100}
                cy={i * 200}
                r="16"
                className="transition-all duration-500"
                initial={false}
                animate={{
                  fill: isActive ? 'rgba(59, 130, 246, 0.3)' : 'rgba(55, 65, 81, 0.2)',
                  scale: isActive ? 1.1 : 1
                }}
              />
              
              <motion.circle
                cx={isLeft ? 100 : 1100}
                cy={i * 200}
                r="8"
                className="transition-all duration-300"
                initial={false}
                animate={{
                  fill: isActive ? '#3B82F6' : '#374151',
                  scale: isActive ? 1 : 0.8
                }}
              />
            </g>
          );
        })}

        {/* Progress indicator */}
        <motion.circle
          r="10"
          fill="#60A5FA"
          filter="url(#activeGlowEffect)"
          style={{
            motionPath: {
              path: "#motionPath",
              align: true,
              autoRotate: true,
              progress: useTransform(smoothProgress, [0, 1], [0, 1])
            }
          }}
        />
      </svg>
    </div>
  );
}