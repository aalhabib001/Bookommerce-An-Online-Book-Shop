const BookModel = require('../models/BookModel')

const addBook = (req, res) => {
    console.log(req.body)
    let newBook = new BookModel({
        bookName: req.body.bookName,
        bookAuthor: req.body.bookAuthor,
        bookPrice: req.body.bookPrice,
        bookImage: req.body.bookImage
    })

    newBook.save()
        .then(result => {
            res.status(201).json({
                massage: 'Book Added Successful',
                user: result
            })
        })
        .catch(error => {
            res.json(error)
        })

}

const getBooks = (req, res) => {
    let name = req.query.name
    console.log(req.query)

    res.json(ok)

}


const getAllBooks = (req, res) => {
    let name = req.query.name
    console.log(req.query)
    if(name){
        BookModel.find({bookName: {$regex: name, $options: 'i'}})
            .then(books => {
                res.status(200).json({
                    massage: 'Some Books',
                    books
                })
            })
            .catch(error => {
                res.json(error)
            })
    }
    else {
        BookModel.find()
            .then(books => {
                res.status(200).json({
                    massage: 'All Books',
                    books
                })
            })
            .catch(error => {
                res.json(error)
            })
    }

}

const deleteBook = (req, res) => {
    let bookId = req.params.bookId

    BookModel.findByIdAndRemove(bookId)
        .then(result => {
            res.status(200).json({
                massage: 'Book Deleted',
                result
            })
        })
        .catch(error => {
            res.json(error)
        })

}

module.exports = {
    addBook,
    getAllBooks,
    deleteBook,
    getBooks
}

