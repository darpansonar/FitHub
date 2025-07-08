import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  
  if (!auth.currentUser) {
    // Redirect to login, but remember where they wanted to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}