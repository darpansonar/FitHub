import { useState, useCallback } from 'react';
import { PlayCircleIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

const ExerciseCard = ({ exercise }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleImageLoad = useCallback(() => setIsLoading(false), []);
  const handleImageError = useCallback(() => {
    setImageError(true);
    setIsLoading(false);
  }, []);

  return (
    <div 
      className="relative rounded-xl overflow-hidden shadow-lg bg-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {(isLoading || imageError) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
          {isLoading ? (
            <ArrowPathIcon className="h-8 w-8 animate-spin text-rose-500" />
          ) : (
            <span className="text-gray-400">Image unavailable</span>
          )}
        </div>
      )}

      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        {!imageError && (
          <img
            src={exercise.gif}
            alt={exercise.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        )}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
        <div className="w-full">
          <h3 className="text-xl font-bold text-white line-clamp-1">{exercise.name}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="px-2 py-1 bg-rose-500/90 text-xs rounded-full whitespace-nowrap">
              {exercise.muscle}
            </span>
            <span className="px-2 py-1 bg-gray-600/90 text-xs rounded-full whitespace-nowrap">
              {exercise.equipment}
            </span>
          </div>
          <button 
            className={`mt-3 ml-auto text-white hover:text-rose-400 transition-colors ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label={`Play ${exercise.name} demonstration`}
          >
            <PlayCircleIcon className="h-10 w-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;