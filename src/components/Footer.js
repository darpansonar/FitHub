import { HeartIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    // In Footer.js
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-2xl font-bold text-rose-500 mb-4">FitHub</h3>
        <p className="text-gray-400">Your complete fitness companion</p>
      </div>
      
      <div>
        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {['Home', 'Exercises', 'Diet Plans', 'Find Gyms'].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-400 hover:text-white transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="font-semibold text-lg mb-4">Contact</h4>
        <address className="not-italic text-gray-400">
          fitness@fithub.com<br />
          +1 (555) 123-4567
        </address>
      </div>
    </div>
  </footer>
  );
}