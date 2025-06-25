import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">TravelSite</h3>
          <p>Explore the world with curated guides, tips, and bookings.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
          <ul>
            {['/', '/about', '/places', '/contact'].map((path, i) => (
              <li key={i}>
                <Link to={path} className="hover:underline">
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Contact</h4>
          <p>123 Paradise Road<br />Wonderland, Earth 00000</p>
          <p>Email: hello@travelsite.com</p>
        </div>
      </div>

      <div className="text-center mt-6 text-sm">
        © {new Date().getFullYear()} TravelSite. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
