// src/components/ProtectedRoute.js
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { useEffect, useState } from 'react';

export default function ProtectedRoute({ children }) {
  console.log("protected wrapper started...")
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>
}