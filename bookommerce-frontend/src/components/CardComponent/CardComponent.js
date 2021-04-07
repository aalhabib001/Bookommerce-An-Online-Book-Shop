import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import cardImage from "../../images/image 21.png"
import {Link} from "react-router-dom";

const CardComponent = (props) => {
    const {bookName, bookAuthor, bookPrice, bookImage, _id} = props.data
    let checkoutLink = "/checkout/"+_id

    const cardStyle = {
        width: '15rem',
        borderRadius: '20px',
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
        backgroundColor: '#FFFFFF',
        border: 'none'
    }

    return (
        <Card style={cardStyle} className="mb-3">
            <div className="pl-2 pt-2 pr-2 pb-0">
                <div style={{backgroundColor: '#F1F1F1', borderRadius: '20px', height: '17.75rem'}} >
                    <Card.Img style={{borderRadius: '20px'}} className="p-4" variant="top" src={bookImage}/>
                </div>
            </div>

            <Card.Body className="p-2 pl-3 pr-3">
                <Card.Title style={{marginBottom: '4px', fontSize: '18px'}}>{bookName}</Card.Title>
                <Card.Text  style={{marginBottom: '4px', fontSize: '16px'}}>
                    {bookAuthor}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center" style={{margin: '2px'}}>
                    <div>
                        <h4 className="text-primary" style={{fontSize: '20px'}}>${bookPrice}</h4>
                    </div>
                    <div>
                        <Button variant="primary" className="p-1"  style={{fontSize: '14px'}}><Link to={checkoutLink} className="text-white">Buy Now</Link></Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;