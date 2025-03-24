import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Babysitter',
      icon: '👶',
    },
    {
      id: 2,
      name: 'Dog Walker',
      icon: '🐕',
    },
    {
      id: 3,
      name: 'Plant Sitter',
      icon: '🌿',
    },
    {
      id: 4,
      name: 'Tutor',
      icon: '📚',
    },
    {
      id: 5,
      name: 'Content Writer',
      icon: '✍️',
    },
    {
      id: 6,
      name: 'Personal Chef',
      icon: '👨‍🍳',
    },
    {
      id: 7,
      name: 'Data Entry',
      icon: '💻',
    },
    {
      id: 8,
      name: 'Caretaker',
      icon: '👵',
    },
  ];

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of children
      },
    },
  };

  // Animation variants for each service card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below the final position
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }, // Spring animation
    hover: { scale: 1.05, y: -10, transition: { duration: 0.3 } }, // Hover animation with upward flow
  };

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Positions You Can Apply
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Animate only once
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover="hover" // Add hover animation
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;