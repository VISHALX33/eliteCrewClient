import React from 'react';

const ContactUs = () => {
  return (
    <div id="contact" className="py-16 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form className="max-w-2xl mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-lg" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-amber-400
 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;