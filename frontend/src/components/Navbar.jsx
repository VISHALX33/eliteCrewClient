import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStarted = () => {
    navigate('/signup-login');
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          EliteCrew
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
           {/* <li>
            <Link to="/#services" className="text-white hover:text-gray-200 transition duration-300">
              Services
            </Link>
          </li> 
          <li>
            <Link to="/#team" className="text-white hover:text-gray-200 transition duration-300">
              Team
            </Link>
          </li>
          <li>
            <Link to="/#testimonials" className="text-white hover:text-gray-200 transition duration-300">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/#faq" className="text-white hover:text-gray-200 transition duration-300">
              FAQ
            </Link>
          </li>  */}
          <li>
            <Link to="/about" className="text-white hover:text-gray-200 transition duration-300" >
            
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-200 transition duration-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/WorkerForm" onClick={handleGetStarted} className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300"' >
          Apply
          </Link>
        </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
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
              <Link to="/about" className="text-white hover:text-gray-200 block px-4 py-2">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-200 block px-4 py-2">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;