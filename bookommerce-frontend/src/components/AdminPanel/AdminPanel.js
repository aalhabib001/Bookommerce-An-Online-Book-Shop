import React, {useEffect, useState} from 'react';
import {Button, Modal, Table} from "react-bootstrap";
import AdminNavBar from "../AdminNavBar/AdminNavBar";

const AdminPanel = () => {
    const [books, setBooks] = useState([])
    const [dummyState, rerender] = useState(1);
    const [show, setShow] = useState(false);

    const handleClose = () => {

        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    useEffect(() => {
        fetch('https://bookommerce.herokuapp.com/api/books')
            .then(res => res.json())
            .then(data => setBooks(data.books))
            .catch(err => console.log(err))
    }, [dummyState])

    const handleDelete = (bookId) => {
        fetch('https://bookommerce.herokuapp.com/api/books/' + bookId, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                rerender(dummyState + 1);

                handleClose()
            })
            .catch(err => console.log(err))

    }

    return (
        <div>

            <div className="container">
                <AdminNavBar/>
                <br/>
                <div>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            books.map(book => <>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Are You Sure?</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Want's to delete this book from database!</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="success" onClick={handleClose}>
                                                No
                                            </Button>
                                            <Button variant="danger" onClick={() => {
                                                handleDelete(book._id)
                                            } }>
                                                Yes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <tr>
                                        <td>{book.bookName}</td>
                                        <td>{book.bookAuthor}</td>
                                        <td>{book.bookPrice}</td>
                                        <td className="d-flex justify-content-center">
                                            <Button variant="success btn-sm m-2">Edit</Button>
                                            <Button variant="danger btn-sm m-2" onClick={handleShow}>Delete</Button>
                                        </td>
                                    </tr>
                                </>
                            )
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;