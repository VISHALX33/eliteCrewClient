import React from 'react';
import jobImage from '../assets/job.avif'
const Job = () => {
  const handleClick = () => {
    window.location.href = 'https://eliteworkers.netlify.app/'; // Replace with your desired link
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
  className="px-10 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold rounded-xl shadow-lg hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 transform transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 shadow-amber-400/30 hover:shadow-blue-500/40 relative overflow-hidden group"
>
  <span className="relative z-10">Apply for Job</span>
  <span className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></span>
  <span className="absolute top-0 left-0 w-full h-0.5 bg-white/30 group-hover:h-full group-hover:opacity-0 transition-all duration-700 ease-in-out"></span>
</button>
      </div>
    </div>
    </>
  );
};

export default Job;