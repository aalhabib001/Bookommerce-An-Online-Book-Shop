const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
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
    },
    bookImage: {
        type: String
    }

})

const BookModel = mongoose.model('bookModel', BookSchema)

module.exports = BookModel