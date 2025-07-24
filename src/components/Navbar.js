import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation, Link } from 'react-router-dom';
import { FaDumbbell } from "react-icons/fa";
import useAuth from '../hooks/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    ...(user ? [
      { name: 'Exercises', href: '/exercises' },
      { name: 'Diet Plans', href: '/diet' },
      { name: 'Find Gyms', href: '/gyms' }
    ] : [])
  ];

  const authLinks = user
    ? [{ name: 'Logout', action: handleLogout }]
    : [
        { name: 'Login', href: '/login' },
        { name: 'Sign Up', href: '/signup' }
      ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            <FaDumbbell className="h-6 w-6 text-orange-500" />
            FitHub
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.href 
                    ? 'text-white bg-gray-800' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {authLinks.map((item) => item.href ? (
              <Link
                key={item.name}
                to={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={item.action}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-3 space-y-1">
            {[...navLinks, ...authLinks].map((item) => item.href ? (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}