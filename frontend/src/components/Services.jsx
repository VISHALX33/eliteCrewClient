import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Babysitter',
      icon: '👶', // Add an icon for each service
    },
    {
      id: 2,
      name: 'Dog Walker',
      icon: '🐕', // Add an icon for each service
    },
    {
      id: 3,
      name: 'Plant Sitter',
      icon: '🌿', // Add an icon for each service
    },
    {
      id: 4,
      name: 'Tutor',
      icon: '📚', // Add an icon for each service
    },
    {
      id: 5,
      name: 'Content Writer',
      icon: '✍️', // Add an icon for each service
    },
    {
      id: 6,
      name: 'Personal Chef',
      icon: '👨‍🍳', // Add an icon for each service
    },
    {
      id: 7,
      name: 'Data Entry',
      icon: '💻', // Add an icon for each service
    },
    {
      id: 8,
      name: 'Caretaker',
      icon: '👵', // Add an icon for each service
    },
  ];

  return (
    <div id="services" className="py-16 bg-gray-50">
      <div className=" container mx-auto  px-4">
        <h2 className="text-4xl font-bold text-center  mb-12 text-gray-800">Services For You </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4   lg:grid-cols-8 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6 text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                {/* <a
                  href={service.link}
                  className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300"
                >
                  Book Now
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;