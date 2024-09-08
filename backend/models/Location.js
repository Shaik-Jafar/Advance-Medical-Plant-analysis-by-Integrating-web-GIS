const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: String,
    coordinates: {
        latitude: Number,
        longitude: Number
    }
});

module.exports = mongoose.model('Location', LocationSchema);
