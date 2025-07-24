// src/pages/Gyms.js
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function Gyms() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) navigate('/login');
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleNearbyGyms = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const googleMapsUrl = `https://www.google.com/maps/search/gyms near me/@${lat},${lng},15z`;
        window.open(googleMapsUrl, '_blank');
      }, () => {
        alert("Unable to access your location. Please enable location services.");
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-3xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          🏋️‍♂️ Find Gyms Near You
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Instantly discover nearby gyms based on your location using Google Maps.
        </p>

        <button
          onClick={handleNearbyGyms}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          📍 Show Gyms Near Me
        </button>

        <div className="mt-10">
          <p className="text-gray-400 text-sm mt-3">
            You’ll be redirected to Google Maps with gym locations near you.
          </p>
        </div>
      </div>
    </div>
  );
}
