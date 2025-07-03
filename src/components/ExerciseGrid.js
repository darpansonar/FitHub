import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ group }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/exercises/${group.name.toLowerCase()}`}
      className="block h-full w-full group"
      aria-label={`View ${group.name} exercises`}
    >
      <div 
        className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with Lazy Loading */}
        <div className="relative aspect-square bg-gray-800">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl"></div>
          )}
          <img
            src={`/exercises/${group.name.toLowerCase()}/thumbnail.jpg`}
            alt={`${group.name} exercises thumbnail`}
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Overlay with Exercise Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-end p-4">
          <h3 className="text-white text-2xl font-bold text-center mb-1">
            {group.name}
          </h3>
          <p className="text-white/90 text-sm">
            {group.count} {group.count === 1 ? 'exercise' : 'exercises'}
          </p>
          
          {/* Animated "View" button on hover */}
          <button 
            className={`mt-3 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            View Exercises
          </button>
        </div>
      </div>
    </Link>
  );
};

const ExerciseGrid = () => {
  const muscleGroups = [
    { name: 'Stretching', count: 7 },
    { name: 'Abs', count: 7 },
    { name: 'Biceps', count: 7 },
    { name: 'Triceps', count: 8 },
    { name: 'Chest', count: 8 },
    { name: 'Back', count: 10 },
    { name: 'Shoulders', count: 6 },
    { name: 'Legs', count: 6 }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Workout Library</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {muscleGroups.map((group, index) => (
          <ExerciseCard key={`${group.name}-${index}`} group={group} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseGrid;