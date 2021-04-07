const express = require('express');
const router = express.Router();

const bookController = require('../controllers/BookController')
const orderController = require('../controllers/OrderController')

router.post('/books', bookController.addBook)

router.get('/books', bookController.getAllBooks)

router.get('/book', bookController.getBooks)

router.delete('/books/:bookId', bookController.deleteBook)

router.post('/orders', orderController.addOrder)

router.get('/orders', orderController.getAllOrders)

module.exports = router