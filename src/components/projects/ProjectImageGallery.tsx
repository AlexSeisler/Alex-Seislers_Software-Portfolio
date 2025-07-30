import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function ProjectImageGallery({ 
  images, 
  title, 
  currentIndex,
  onNext,
  onPrev 
}: ProjectImageGalleryProps) {
  if (!images.length) return null;

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
      <img 
        src={images[currentIndex]} 
        alt={`${title} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/75 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}
    </div>
  );
}