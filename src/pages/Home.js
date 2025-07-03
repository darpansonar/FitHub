import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/solid';

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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900">
      {/* Animated Hero Section */}
      <section className="relative overflow-hidden">
        {/* CSS-only dot pattern replacement */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">Body</span>
          </h1>
          
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">
            Workouts Designed For You—No Guesswork, Just Results
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/exercises" 
              className="flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-rose-500/30"
            >
              Get Started <ArrowRightIcon className="h-5 w-5" />
            </Link>
            
            {/* <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm border border-white/20">
              <PlayIcon className="h-5 w-5" /> Demo Video
            </button> */}
          </div>
        </div>
      </section>

      {/* Interactive Features Grid */}
      <section className="container mx-auto px-6 pb-24 -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br rounded-xl p-8 backdrop-blur-sm border border-white/10 transition-all duration-300 ${hoveredCard === index ? 'scale-105 shadow-lg shadow-purple-500/20 from-purple-900/70 to-indigo-900/70' : 'from-gray-800/50 to-gray-900/50'}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animated CTA Section */}
      <section className="bg-gradient-to-r from-rose-600/20 to-purple-600/20 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <Link 
            to="/signup" 
            className="inline-block bg-white text-rose-600 hover:bg-rose-50 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] animate-pulse-glow"
          >
            Join Now - It's Free
          </Link>
        </div>
      </section>
    </div>
  );
}