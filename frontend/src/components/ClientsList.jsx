// src/components/ClientsList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaTools } from 'react-icons/fa';

const ClientsList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axios.get('https://elitecrewclient.onrender.com/api/clients');
                setClients(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">Clients</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {clients.map((client) => (
                    <div 
                        key={client._id} 
                        className="border p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white transform hover:scale-105 ease-in-out"
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center text-gray-800">
                            <FaUser className="mr-3 text-blue-500" /> {client.name}
                        </h2>
                        <div className="space-y-3">
                            <p className="text-gray-700 flex items-center">
                                <FaEnvelope className="mr-3 text-blue-500" /> {client.email}
                            </p>
                            <p className="text-gray-700 flex items-center">
                                <FaPhone className="mr-3 text-blue-500" /> {client.contactNumber}
                            </p>
                            <p className="text-gray-700 flex items-center">
                                <FaMapMarkerAlt className="mr-3 text-blue-500" /> {client.address}
                            </p>
                            <p className="text-gray-700 flex items-center">
                                <FaCalendarAlt className="mr-3 text-blue-500" /> {client.date}
                            </p>
                            <p className="text-gray-700 flex items-center">
                                <FaClock className="mr-3 text-blue-500" /> {client.time}
                            </p>
                            <p className="text-gray-700 flex items-center">
                                <FaTools className="mr-3 text-blue-500" /> {client.serviceType}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientsList;