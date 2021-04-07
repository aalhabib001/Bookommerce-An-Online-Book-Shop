import React, {useContext, useEffect} from 'react';
import Search from "../Search/Search";
import CardComponent from "../CardComponent/CardComponent";
import {Col, Row} from "react-bootstrap";
import {BookContext} from "../../App";

const Homepage = () => {

    const [contextBooks, setContextBooks] = useContext(BookContext)

    useEffect(() => {
        fetch('https://bookommerce.herokuapp.com/api/books')
            .then(res => res.json())
            .then(data => setContextBooks(data.books))
            .catch(err => console.log(err))
    }, [setContextBooks])

    return (
        <div className="container">
            <Search/>
            <Row className="m-auto">
                {
                    contextBooks.map(book => <Col> <CardComponent data={book} key={book._id}/> </Col>)
                }
            </Row>

        </div>
    );
};

export default Homepage;