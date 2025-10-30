import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-32 right-32 bg-black/80 shadow-lg z-10 backdrop-blur-sm rounded-full shadow-[0_0_30px_rgba(245,158,11,0.8),0_0_60px_rgba(245,158,11,0.5),0_0_90px_rgba(245,158,11,0.2)]">
      <div className="w-full px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white uppercase">
              Wedding Planner
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-white uppercase hover:text-amber-600 hover:drop-shadow-[0_0_10px_rgba(245,158,11,1)] transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-white uppercase hover:text-amber-600 hover:drop-shadow-[0_0_10px_rgba(245,158,11,1)] transition duration-300">
              Services
            </Link>
            <Link to="/about" className="text-white uppercase hover:text-amber-600 hover:drop-shadow-[0_0_10px_rgba(245,158,11,1)] transition duration-300">
              About Us
            </Link>
            <Link to="/portfolio" className="text-white uppercase hover:text-amber-600 hover:drop-shadow-[0_0_10px_rgba(245,158,11,1)] transition duration-300">
              Portfolio
            </Link>
            <Link to="/contact" className="text-white uppercase hover:text-amber-600 hover:drop-shadow-[0_0_10px_rgba(245,158,11,1)] transition duration-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;