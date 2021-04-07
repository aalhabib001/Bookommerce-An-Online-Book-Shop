import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../App";

const OrderList = () => {

    const [loggedUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    let c=1

    useEffect(() => {
        fetch('https://bookommerce.herokuapp.com/api/orders?email='+loggedUser.email)
            .then(res => res.json())
            .then(data => setOrders(data.orders))
            .catch(err => console.log(err))
    }, [loggedUser.email])

    return (
        <div className="container w-75">
            <h4>Order Info</h4>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Order No</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Book Name</th>
                    <th scope="col">Book Author</th>
                    <th scope="col">Price Total</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map(order => <tr>
                        <td>{c++}</td>
                        <td>{order.orderDate}</td>
                        <td>{order.bookName}</td>
                        <td>{order.bookAuthor}</td>
                        <td>{order.bookPrice}</td>
                    </tr>)
                }

                </tbody>
            </table>
        </div>
    );
};

export default OrderList;