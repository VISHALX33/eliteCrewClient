import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaSave,
} from "react-icons/fa";
import Services from "./Services";

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    setIsSubmitting(true);
    
    try {
      await axios.post("https://elitecrewclient.onrender.com/api/clients", formData);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        address: "",
        serviceType: "",
        time: "",
        date: "",
      });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Services />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Decorative */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="hidden md:block md:w-1/3 bg-gradient-to-b from-amber-400 to-amber-600 p-8 text-white"
              >
                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">Why Choose EliteCrew?</h2>
                  <ul className="space-y-4">
                    {[
                      "Verified Professionals",
                      "24/7 Customer Support",
                      "Flexible Scheduling",
                      "Affordable Rates",
                      "Satisfaction Guaranteed"
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="bg-white text-amber-500 rounded-full p-1 mr-3">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="md:w-2/3 p-8 md:p-12"
              >
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold mb-2 text-gray-800"
                >
                  Book Your <span className="text-amber-500">Services</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-8"
                >
                  Fill out the form to schedule your service
                </motion.p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                      {[
                        {
                          icon: <FaUser className="text-gray-400" />,
                          type: "text",
                          placeholder: "Name",
                          value: formData.name,
                          onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                          name: "name"
                        },
                        {
                          icon: <FaEnvelope className="text-gray-400" />,
                          type: "email",
                          placeholder: "Email",
                          value: formData.email,
                          onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                          name: "email"
                        },
                        {
                          icon: <FaPhone className="text-gray-400" />,
                          type: "tel",
                          placeholder: "Contact Number",
                          value: formData.contactNumber,
                          onChange: (e) => setFormData({ ...formData, contactNumber: e.target.value }),
                          name: "contactNumber"
                        }
                      ].map((field, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-amber-400 transition-all duration-300 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-200"
                        >
                          {field.icon}
                          <input
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={field.onChange}
                            className="w-full focus:outline-none bg-transparent"
                            required
                            name={field.name}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {[
                        {
                          icon: <FaMapMarkerAlt className="text-gray-400" />,
                          type: "text",
                          placeholder: "Address",
                          value: formData.address,
                          onChange: (e) => setFormData({ ...formData, address: e.target.value }),
                          name: "address"
                        },
                        {
                          icon: <FaUser className="text-gray-400" />,
                          type: "select",
                          options: serviceOptions,
                          value: formData.serviceType,
                          onChange: (e) => setFormData({ ...formData, serviceType: e.target.value }),
                          name: "serviceType"
                        },
                        {
                          icon: <FaClock className="text-gray-400" />,
                          type: "time",
                          placeholder: "Time",
                          value: formData.time,
                          onChange: (e) => setFormData({ ...formData, time: e.target.value }),
                          name: "time"
                        },
                        {
                          icon: <FaCalendarAlt className="text-gray-400" />,
                          type: "date",
                          placeholder: "Date",
                          value: formData.date,
                          onChange: (e) => setFormData({ ...formData, date: e.target.value }),
                          name: "date"
                        }
                      ].map((field, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-center border-2 border-gray-200 rounded-xl p-3 space-x-3 hover:border-amber-400 transition-all duration-300 focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-200"
                        >
                          {field.icon}
                          {field.type === "select" ? (
                            <select
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full focus:outline-none bg-transparent text-gray-700"
                              required
                              name={field.name}
                            >
                              <option value="" disabled>Select a Service</option>
                              {field.options.map((option, i) => (
                                <option key={i} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={field.value}
                              onChange={field.onChange}
                              className="w-full focus:outline-none bg-transparent"
                              required
                              name={field.name}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 shadow-lg ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700'
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center space-x-2">
                          <FaSave className="text-xl" />
                          <span>Book Service</span>
                        </span>
                      )}
                    </button>
                  </motion.div>

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-green-100 text-green-800 rounded-lg text-center"
                    >
                      Service booked successfully! We'll contact you soon.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AddClientForm;