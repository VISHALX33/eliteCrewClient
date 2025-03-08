// src/components/AddClientForm.jsx
import React, { useState } from "react";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaSave,
} from "react-icons/fa";

const AddClientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    serviceType: "",
    time: "",
    date: "",
  });

  const serviceOptions = [
    "Babysitter",
    "Dog Walker",
    "Plant Sitter",
    "Tutor",
    "Content Writer",
    "Personal Chef",
    "Data Entry",
    "Caretaker",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/clients", formData);
      alert("Client added successfully!");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        address: "",
        serviceType: "",
        time: "",
        date: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Book Your Services
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-blue-500 transition-all duration-300">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-blue-500 transition-all duration-300">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-blue-500 transition-all duration-300">
                <FaPhone className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, contactNumber: e.target.value })
                  }
                  className="w-full focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-blue-500 transition-all duration-300">
                <FaMapMarkerAlt className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-blue-500 transition-all duration-300">
                <FaUser className="text-gray-400" />
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceType: e.target.value })
                  }
                  className="w-full focus:outline-none bg-transparent"
                  required
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-blue-500 transition-all duration-300">
                <FaClock className="text-gray-400" />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-blue-500 transition-all duration-300">
                <FaCalendarAlt className="text-gray-400" />
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white p-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <FaSave className="text-xl" />
            <span className="text-lg font-semibold">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClientForm;