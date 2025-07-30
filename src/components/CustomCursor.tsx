import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isActive, setIsActive] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, {
    stiffness: 1000,
    damping: 50,
    mass: 0.1
  });
  
  const cursorY = useSpring(0, {
    stiffness: 1000,
    damping: 50,
    mass: 0.1
  });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseEnter = () => document.body.style.cursor = 'none';
    const handleMouseLeave = () => document.body.style.cursor = 'auto';

    // Check if cursor should be pointer style
    const handleCursorStyle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      );
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousemove', handleCursorStyle);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousemove', handleCursorStyle);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={`custom-cursor ${isActive ? 'active' : ''} ${isPointer ? 'pointer' : ''}`}
      style={{
        x: cursorX,
        y: cursorY,
      }}
    />
  );
}