import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStarted = () => {
    navigate('/signup-login');
  };

  return (
    <nav className="bg-amber-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="https://elite-crew.vercel.app/" className="text-black text-2xl font-bold hover:scale-105 transition-transform duration-300">
          EliteCrew
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
        <li>
            <Link 
              to="/jobs" 
              className="text-black text-xl font-semibold hover:text-gray-200 transition duration-300 relative group"
            >
              Jobs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className="text-black text-xl font-semibold hover:text-gray-200 transition duration-300 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-black text-xl font-semibold hover:text-gray-200 transition duration-300 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none hover:scale-105 transition-transform duration-300"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
          <li>
            <Link 
              to="/jobs" 
              className=" text-black text-xl font-semibold hover:text-gray-200 block px-4 py-2 transition duration-300 relative group"
            >
              Jobs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
            <li>
              <Link 
                to="/about" 
                className="text-black text-xl font-semibold hover:text-gray-200 block px-4 py-2 transition duration-300 relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-black text-xl font-semibold hover:text-gray-200 block px-4 py-2 transition duration-300 relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;