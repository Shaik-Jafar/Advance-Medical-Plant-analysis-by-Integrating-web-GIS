const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

// POST: Add a new location
router.post('/', async (req, res) => {
    const { name, coordinates } = req.body;
    const location = new Location({ name, coordinates });
    try {
        await location.save();
        res.status(201).json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET: Retrieve all locations
router.get('/', async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/search', async (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).json({ message: 'Name parameter is required' });
    }
    try {
        const regex = new RegExp(name, 'i'); // 'i' for case-insensitive search
        const locations = await Location.find({ name: regex });
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
