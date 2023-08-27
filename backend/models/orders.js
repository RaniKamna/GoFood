const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },
    order_date:{
        type: Date
    }

});

module.exports = mongoose.model('order', OrderSchema)