import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import LoadingSpinner from './LoadingSpinner';

const ExerciseCard = ({ group }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageStatus, setImageStatus] = useState('loading');

  const imagePath = `/exercises/${group.id}/thumbnail.jpg`;

  return (
    <Link
      to={`/exercises/${group.id}`}
      className="block h-full w-full group"
      aria-label={`View ${group.name} exercises`}
    >
      <div 
        className="relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square bg-gray-800">
          {imageStatus !== 'loaded' && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl flex items-center justify-center">
              <span className="text-gray-400">{group.name}</span>
            </div>
          )}
          
          <img
            src={imagePath}
            alt={`${group.name} exercises thumbnail`}
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageStatus('loaded')}
            onError={() => setImageStatus('error')}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col items-center justify-end p-4">
          <h3 className="text-white text-2xl font-bold text-center mb-1">
            {group.name}
          </h3>
          <p className="text-white/90 text-sm">
            {group.count} {group.count === 1 ? 'exercise' : 'exercises'}
          </p>
          
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
  const [muscleGroups, setMuscleGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "muscleGroups"));
        
        if (!querySnapshot.empty) {
          const groups = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setMuscleGroups(groups);
        } else {
          // Fallback data
          setMuscleGroups([
            { id: 'abs', name: 'Abs', count: 7 },
            { id: 'back', name: 'Back', count: 10 },
            { id: 'biceps', name: 'Biceps', count: 7 },
            { id: 'chest', name: 'Chest', count: 8 },
            { id: 'legs', name: 'Legs', count: 6 },
            { id: 'shoulders', name: 'Shoulders', count: 6 },
            { id: 'triceps', name: 'Triceps', count: 8 },
            { id: 'stretching', name: 'Stretching', count: 7 }
          ]);
        }
      } catch (err) {
        console.error("Error fetching exercises:", err);
        setError("Failed to load exercises. Check console for details.");
      } finally {
        setLoading(false);
      }
    };

    fetchExerciseData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* DEBUG COMPONENT */}
      {/*<div className="mb-8 p-4 bg-gray-800 rounded-lg">
        <h3 className="text-lg font-medium text-amber-400 mb-2">Debug Info:</h3>
        <pre className="text-xs text-gray-300 overflow-x-auto">
          {JSON.stringify({
            loading,
            error,
            muscleGroups,
            firestoreConfig: {
              projectId: db.app.options.projectId,
              databaseURL: db.app.options.databaseURL
            },
            timestamp: new Date().toISOString()
          }, null, 2)}
        </pre>
      </div>*/}

      <h2 className="text-4xl font-extrabold text-center text-gray-200 mb-12">Workout Library</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {muscleGroups.map((group) => (
          <ExerciseCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseGrid;