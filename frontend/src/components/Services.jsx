import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Babysitter',
      icon: '👶',
      color: 'bg-pink-100',
      hoverColor: 'bg-pink-200'
    },
    {
      id: 2,
      name: 'Dog Walker',
      icon: '🐕',
      color: 'bg-amber-100',
      hoverColor: 'bg-amber-200'
    },
    {
      id: 3,
      name: 'Plant Sitter',
      icon: '🌿',
      color: 'bg-green-100',
      hoverColor: 'bg-green-200'
    },
    {
      id: 4,
      name: 'Tutor',
      icon: '📚',
      color: 'bg-blue-100',
      hoverColor: 'bg-blue-200'
    },
    {
      id: 5,
      name: 'Content Writer',
      icon: '✍️',
      color: 'bg-purple-100',
      hoverColor: 'bg-purple-200'
    },
    {
      id: 6,
      name: 'Personal Chef',
      icon: '👨‍🍳',
      color: 'bg-red-100',
      hoverColor: 'bg-red-200'
    },
    {
      id: 7,
      name: 'Data Entry',
      icon: '💻',
      color: 'bg-indigo-100',
      hoverColor: 'bg-indigo-200'
    },
    {
      id: 8,
      name: 'Caretaker',
      icon: '👵',
      color: 'bg-teal-100',
      hoverColor: 'bg-teal-200'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 120,
        damping: 15
      } 
    },
    hover: { 
      scale: 1.05, 
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
  };

  return (
    <div id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-4">
            Positions You Can <span className="text-amber-500">Apply</span>
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`${service.color} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="p-8 text-center flex flex-col items-center">
                <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {service.name}
                </h3>
                <div className={`absolute inset-0 ${service.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* <p className="text-gray-600 text-lg mb-6">
            Don't see your desired position? We're always looking for talented individuals.
          </p>
          <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-4 rounded-xl font-bold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contact Us About Opportunities
          </button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;