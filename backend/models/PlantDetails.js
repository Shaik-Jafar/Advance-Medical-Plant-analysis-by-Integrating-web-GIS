const mongoose = require('mongoose');

const PlantDetailsSchema = new mongoose.Schema({
    id: String,
    title: String,
    image: String,
    description: String,
    dataPoints: [
        {
            x: Number,
            y: Number
        }
    ]
});

module.exports = mongoose.model('PlantDetails', PlantDetailsSchema);
