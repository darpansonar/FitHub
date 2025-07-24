// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-white transition duration-200">🏠 Home</a>
            </li>
            <li>
              <a href="/exercises" className="hover:text-white transition duration-200">💪 Exercises</a>
            </li>
            <li>
              <a href="/diet" className="hover:text-white transition duration-200">🥗 Diet Plans</a>
            </li>
            <li>
              <a href="/gyms" className="hover:text-white transition duration-200">📍 Find Gyms</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-400">Contact Us</h3>
          <p className="text-gray-300">📧 dps10032005@gmail.com</p>
          <p className="text-gray-300">📞 +91 xxxx-xxx-xxx</p>

          {/* Optional: Socials */}
          <div className="mt-4 flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FitHub. All rights reserved.
      </div>
    </footer>
  );
}
