// import React from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-amber-400 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Logo and Description */}
//           <div className="text-center md:text-left">
//             <p className='text-6xl'>EliteCrew</p>
//             <br />
//             <br />
//             <p className="text-sm">
//               Your one-stop solution for all your needs. We provide top-notch services to make your life easier.
//             </p>
//           </div>

//           {/* Quick Links - Updated with Link components */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="hover:text-gray-200">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about" className="hover:text-gray-200">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/services" className="hover:text-gray-200">Services</Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="hover:text-gray-200">Contact Us</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="tel:+1234567890" className="hover:text-gray-200">+1 (234) 567-890</a>
//               </li>
//               <li>
//                 <a href="mailto:info@myapp.com" className="hover:text-gray-200">info@myapp.com</a>
//               </li>
//             </ul>
//           </div>

//           {/* Social Media Links */}
//           <div className="text-center md:text-left">
//             <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//             <div className="flex space-x-4 justify-center md:justify-start">
//               <a
//                 href="https://github.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-200"
//               >
//                 <FaGithub className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-200"
//               >
//                 <FaLinkedin className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-200"
//               >
//                 <FaFacebook className="h-6 w-6" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-200"
//               >
//                 <FaInstagram className="h-6 w-6" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="text-center mt-8 border-t border-gray-700 pt-8">
//           <p>&copy; 2023 MyApp. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-amber-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-5xl font-extrabold inline-block">
              <span className="text-white">Elite</span>
              <span className="text-amber-200">Crew</span>
            </Link>
            <p className="mt-6 text-amber-100 leading-relaxed">
              Your premium solution for all service needs. We deliver excellence with every interaction.
            </p>
            <div className="mt-6 flex space-x-4 justify-center md:justify-start">
              {[FaGithub, FaLinkedin, FaFacebook, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-amber-400 hover:bg-white text-white hover:text-amber-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-amber-400 inline-block">Quick Links</h3>
            <ul className="space-y-3 mt-4">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/services", label: "Services" },
                { path: "/contact", label: "Contact" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-amber-100 hover:text-white transition-all duration-300 group"
                  >
                    <FaArrowRight className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-amber-400 inline-block">Contact Us</h3>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start">
                <div className="bg-amber-400 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-amber-100 hover:text-white transition-colors duration-300">+1 (234) 567-890</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-400 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@elitecrew.com" className="text-amber-100 hover:text-white transition-colors duration-300">info@elitecrew.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-amber-400 inline-block">Newsletter</h3>
            <p className="mt-4 text-amber-100 mb-4">Subscribe to get updates on our latest services</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 bg-amber-100 w-full rounded-l-lg focus:outline-none text-gray-800"
              />
              <button className="bg-amber-700 hover:bg-amber-800 px-4 rounded-r-lg transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-amber-400/30 text-center text-amber-100">
          <p>&copy; {new Date().getFullYear()} EliteCrew. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;