import { useState } from 'react';
import { PlayCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const ExerciseCard = ({ exercise }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-lg bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
          <ArrowPathIcon className="h-8 w-8 animate-spin text-rose-500" />
        </div>
      )}

      {/* Exercise Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={exercise.gif}
          alt={exercise.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
        <div className="w-full">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-xl font-bold text-white">{exercise.name}</h3>
              <div className="flex gap-2 mt-1">
                <span className="px-2 py-1 bg-rose-500/90 text-xs rounded-full">{exercise.muscle}</span>
                <span className="px-2 py-1 bg-gray-600/90 text-xs rounded-full">{exercise.equipment}</span>
              </div>
            </div>
            <button 
              className="text-white hover:text-rose-400 transition-colors"
              aria-label="Play demonstration"
            >
              <PlayCircleIcon className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;