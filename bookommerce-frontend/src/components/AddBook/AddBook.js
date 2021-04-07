import React, {useState} from 'react';
import Form from 'react-bootstrap/Form'
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

const axios = require('axios');
const AddBook = () => {
    const history = useHistory()
    const [bookImageStatus, setBookImageStatus] = useState("No Image")
    const [newBook, setNewBook] = useState({
        name: '',
        author: '',
        price: '',
        image: ''
    });

    const handleOnBlur = (event) => {
        const newBookTemp = {...newBook}
        newBookTemp[event.target.id] = event.target.value
        setNewBook(newBookTemp)
    }

    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', 'ed071214eba59803f394436d3654d8c6')
        imageData.set('image', event.target.files[0])

        setBookImageStatus("Image Uploading");
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)

                const newBookTemp = {...newBook}
                newBookTemp[event.target.id] = response.data.data.display_url
                setNewBook(newBookTemp)
                setBookImageStatus("Uploaded");
            })
            .catch(function (error) {
                console.log(error)
            })


    }

    const handleSubmit = (event) => {
        console.log(newBook)
        let formData = {
            'bookName': newBook.name,
            'bookAuthor': newBook.author,
            'bookPrice': newBook.price,
            'bookImage': newBook.image
        }

        axios({
            method: 'post',
            url: 'https://bookommerce.herokuapp.com/api/books',
            headers: {'Content-Type': 'application/json'},
            data: formData
        })
            .then(r => {
                console.log(r.data)
                history.push('/admin')
            })
            .catch(err => {
                console.log(err.data)
            })
        event.preventDefault();
    }

    return (
        <div className="container">

            <AdminNavBar/>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter Book Name" required/>
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter Book Author" required/>
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Book Price</Form.Label>
                    <Form.Control onBlur={handleOnBlur} type="text" placeholder="Enter Book Price" required/>
                </Form.Group>
                <Form.Group controlId="image">
                    <Form.File.Label>Book Image Upload</Form.File.Label>
                    <Form.Control onBlur={handleImageUpload} type="file"/>
                    <h6>{bookImageStatus}</h6>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddBook;