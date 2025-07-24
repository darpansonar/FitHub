import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Exercises from './pages/Exercises';
import Diet from './pages/Diet';
import Gyms from './pages/Gyms';
import Footer from './components/Footer';
import ExerciseCategoryPage from './pages/Exercises/CategoryPage';
import BulkingPlan from './pages/BulkingPlan';
import CuttingPlan from './pages/CuttingPlan';
import ProtectedRoute from './components/ProtectedRoute';
import LoadingSpinner from './components/LoadingSpinner';
import AuthProvider from './context/AuthProvider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                
                  <Route 
                    path="/exercises" 
                    element={
                      <ProtectedRoute>
                        <Exercises />
                      </ProtectedRoute>
                    } 
                  />

                  <Route 
                    path="/exercises/:muscleGroup" 
                    element={
                      <ProtectedRoute>
                        <ExerciseCategoryPage />
                      </ProtectedRoute>
                    } 
                  />

                  <Route 
                    path="/diet" 
                    element={
                      <ProtectedRoute>
                        <Diet />
                      </ProtectedRoute>
                    } 
                  />

                  <Route 
                    path="/diet/bulking" 
                    element={
                      <ProtectedRoute>
                        <BulkingPlan />
                      </ProtectedRoute>
                    } 
                  />

                  <Route 
                    path="/diet/cutting" 
                    element={
                      <ProtectedRoute>
                        <CuttingPlan />
                      </ProtectedRoute>
                    } 
                  />
                  
                  <Route 
                    path="/gyms" 
                    element={
                      <ProtectedRoute>
                        <Gyms />
                      </ProtectedRoute>
                    } 
                  />
                
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

console.log('Current route:', window.location.pathname);
export default App;