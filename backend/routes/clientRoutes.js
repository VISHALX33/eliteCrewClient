// backend/routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Create a new client
router.post('/', async (req, res) => {
    try {
        const { name, email, contactNumber, address, serviceType, time, date } = req.body;

        // Validate required fields
        if (!name || !email || !contactNumber || !address || !serviceType || !time || !date) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new client
        const client = new Client({ name, email, contactNumber, address, serviceType, time, date });
        await client.save();

        res.status(201).json(client);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all clients
router.get('/', async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;