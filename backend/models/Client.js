// backend/models/Client.js
const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    serviceType: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Client', ClientSchema);