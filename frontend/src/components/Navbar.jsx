import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-4 right-4 bg-white/80 shadow-lg z-10 backdrop-blur-sm rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              Wedding Planner
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-pink-600 transition duration-300">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 transition duration-300">
              About Us
            </Link>
            <Link to="/portfolio" className="text-gray-700 hover:text-pink-600 transition duration-300">
              Portfolio
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-600 transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;