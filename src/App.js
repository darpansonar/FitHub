import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Exercises from './pages/Exercises';
import Diet from './pages/Diet';
import Gyms from './pages/Gyms';
import Footer from './components/Footer';
import ExerciseCategoryPage from './pages/Exercises/CategoryPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/diet" element={<Diet />} />
              <Route path="/gyms" element={<Gyms />} />
              <Route path="/exercises/:muscleGroup" element={<ExerciseCategoryPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;