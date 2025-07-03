import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your <span className="text-rose-500">Body</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Personalized workout plans and nutrition guides to help you achieve your fitness goals.
          </p>
          <div className="flex space-x-4">
            <button className="bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-[url('/public/images/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
    </section>
  );
}