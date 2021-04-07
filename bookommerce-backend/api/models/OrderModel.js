const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    userEmail: {
        type: String,
        required: true
    },
    orderDate: {
      type: String
    },
    bookName: {
        type: String,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    }

})

const OrderModel = mongoose.model('orderModel', OrderSchema)

module.exports = OrderModel