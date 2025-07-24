import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      title: "Expert Exercise Guides",
      desc: "Master every move with proper form tips.",
      icon: "💪" 
    },
    {
      title: "Personalized Nutrition",
      desc: "Get a diet plan designed for your body, goals, and preferences.",
      icon: "🥗" 
    },
    {
      title: "Find Your Fitness Hub",
      desc: "Discover the best nearby gyms and workout spots tailored to your goals.",
      icon: "🏋️‍♀️" 
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Side Image */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content (Left Side) */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">Body</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-10 max-w-lg">
                Workouts Designed For You—No Guesswork, Just Results
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/exercises" 
                  className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-rose-500/30"
                >
                  Get Started <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Image (Right Side) */}
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img 
                src="/images/fitness-side.jpg" 
                alt="Fitness transformation"
                className="rounded-xl shadow-2xl border-4 border-white/10 w-full max-w-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg transition-all duration-300 ${
                hoveredCard === index ? 'transform scale-105 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Begin Your Journey?
          </h2>
          <Link 
            to="/login" 
            className="inline-block bg-rose-600 text-white hover:bg-rose-700 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            Join Now - It's Free
          </Link>
        </div>
      </section>
    </div>
  );
}