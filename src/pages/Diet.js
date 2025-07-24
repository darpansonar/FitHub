import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import LoadingSpinner from '../components/LoadingSpinner';

function Diet() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        navigate('/login');
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-200 mb-12">
          Diet Plans
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {/* Bulking Plan Card */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-lg overflow-hidden border border-orange-100 transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-orange-800 mb-3">Bulking Diet</h2>
              <p className="text-gray-600 mb-4">High-calorie plan for muscle gain (3000-3500 cal)</p>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src="/images/bulking.jpg" 
                  alt="Bulking foods" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/placeholder-food.jpg';
                  }}
                />
              </div>
              <Link 
                to="/diet/bulking"
                className="inline-block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                View Bulking Plan
              </Link>
            </div>
          </div>

          {/* Cutting Plan Card */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg overflow-hidden border border-blue-100 transition-transform hover:scale-[1.02]">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-3">Cutting Diet</h2>
              <p className="text-gray-600 mb-4">Calorie deficit for fat loss (1800-2200 cal)</p>
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src="/images/cutting.jpg" 
                  alt="Cutting foods" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = '/images/placeholder-food.jpg';
                  }}
                />
              </div>
              <Link 
                to="/diet/cutting"
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                View Cutting Plan
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Nutrition Tips Section */}
        <div className="mt-16 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-gray-200 mb-4">Nutrition Tips</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              Stay hydrated - drink at least 3L of water daily
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              Consume 1.6-2.2g of protein per kg of body weight
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              Include healthy fats like avocados and nuts
            </li>
            <li className="flex items-start">
              <span className="text-amber-400 mr-2">•</span>
              Time carbohydrates around workouts for energy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Diet;