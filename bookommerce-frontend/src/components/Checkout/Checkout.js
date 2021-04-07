import React, {useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {useParams, useHistory} from "react-router-dom";
import {BookContext, UserContext} from "../../App";
import axios from "axios";

const Checkout = () => {

    const [loggedUser] = useContext(UserContext);
    const history = useHistory();
    const [contextBooks] = useContext(BookContext)
    const {productId} = useParams()
    const [book, setBook] = useState([])

    useEffect(() => {
        for(let property in contextBooks){
            if(contextBooks[property]._id === productId){
                setBook(contextBooks[property])
            }
        }
    }, [contextBooks, productId])

    const checkoutButton = () => {
        let bookInfo = {
            "userEmail": loggedUser.email,
            "bookName": book.bookName,
            "bookAuthor": book.bookAuthor,
            "bookPrice": book.bookPrice
        };

        axios({
            method: 'post',
            url: 'https://bookommerce.herokuapp.com/api/orders',
            headers: {'Content-Type': 'application/json'},
            data: bookInfo
        })
            .then(r => console.log(r.data))
            .catch(err => {
                console.log(err.data)
            })

        history.push('/checkout/confirm')
        // <Link className="text-white" to="/checkout/confirm"></Link>
    }


    return (
        <>
            <div className="container w-75">

                <h4>Checkout</h4>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{book.bookName}</td>
                            <td>1</td>
                            <td>${book.bookPrice}</td>
                        </tr>
                        </tbody>
                        <thead>
                        <tr>
                            <th colSpan="2" scope="col">Total</th>
                            <th scope="col">$334</th>
                        </tr>
                        </thead>
                    </table>

                    <div className="d-flex flex-row-reverse">
                        <Button onClick={checkoutButton}>Checkout</Button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Checkout;