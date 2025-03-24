import React from 'react';
import jobImage from '../assets/job.avif'
const Job = () => {
  const handleClick = () => {
    window.location.href = 'https://gleeful-gelato-40913a.netlify.app/'; // Replace with your desired link
  };

  return (<>
  {/* <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold px-4 text-center mb-12 text-gray-800 relative inline-block ">Join Our Team</h2>
    </div> */}
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${jobImage})` }} // Use the imported image
    >
      <div className="text-center bg-white bg-opacity-90 p-10 rounded-lg shadow-2xl max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h1>
        <p className="text-gray-600 mb-8">
          We are looking for talented individuals to join our growing team. Click below to apply and start your journey with us!
        </p>
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-amber-400 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
        >
          Apply for Job
        </button>
      </div>
    </div>
    </>
  );
};

export default Job;