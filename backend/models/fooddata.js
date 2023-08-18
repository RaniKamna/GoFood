const mongoose = require('mongoose');

let fooddataSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: [
        {
            half: {
                type: String,
                required: false
            },
            full: {
                type: String,
                required: false
            },
            regular: {
                type: String,
                required: false
            },
            medium: {
                type: String,
                required: false
            },
            large: {
                type: String,
                required: false
            },
        }
    ],
    description: {
        type: String,
    }
});

module.exports = mongoose.model('fooddata', fooddataSchema);