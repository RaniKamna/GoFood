const mongoose = require('mongoose');

let foodcategorySchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('foodcategory', foodcategorySchema);