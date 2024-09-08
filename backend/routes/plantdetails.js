const express = require('express');
const router = express.Router();
const PlantDetails = require('../models/PlantDetails');

// POST: Add new plant details
router.post('/', async (req, res) => {
    const { id, title, image, description, dataPoints } = req.body;
    const plantDetails = new PlantDetails({ id, title, image, description, dataPoints });
    try {
        await plantDetails.save();
        res.status(201).json(plantDetails);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET: Retrieve all plant details
router.get('/', async (req, res) => {
    try {
        const plantDetails = await PlantDetails.find();
        res.json(plantDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET: Retrieve plant details by ID
router.get('/:id', async (req, res) => {
    try {
        const plantDetails = await PlantDetails.findById(req.params.id);
        if (!plantDetails) return res.status(404).json({ message: 'Plant details not found' });
        res.json(plantDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
