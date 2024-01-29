const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
    {
        marca: String,
        modelo: String,
        año: String
    },
    {
        versionKey: false,
        collection: 'coches'
    }
);

module.exports = mongoose.model('Car', CarSchema);