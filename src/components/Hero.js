import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your <span className="text-rose-500">Body</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-lg">
              Workouts Designed For You—No Guesswork, Just Results
            </p>
            <div className="flex space-x-4">
              <button className="bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-lg font-medium transition-colors shadow-lg">
                Get Started
              </button>
              <button className="border border-white/50 hover:border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Image (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 mt-12 lg:mt-0"
          >
            <img 
              src="/images/fitness-side.jpg" 
              alt="Fitness transformation"
              className="rounded-xl shadow-2xl border-4 border-white/10 w-full max-w-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}