import React, {useContext} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {UserContext} from "../../App";

const Header = () => {
    const profileImageStyle = {borderRadius: '50%',
        width: '35px',
        border: '1px solid darkGray',
        padding: "1px"
    };

    const [loggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        <Navbar className="justify-content-between" bg="white" variant="dark">

            <Link to="/">
                <Navbar.Brand>
                    <h2 className="nav-link active text-dark">Bookommerce</h2>
                </Navbar.Brand>
            </Link>

            <Nav className="align-items-center">
                <Link to="/" className="nav-link active text-dark">Home</Link>
                <Link to="/orders" className="nav-link active text-dark">Orders</Link>
                <Link to="/admin" className="nav-link active text-dark">Admin</Link>
                <Link to="/" className="nav-link active text-dark">Deals</Link>
                {
                    loggedInUser.isSignedIn
                        ? <Link to="/" className="nav-link active text-dark">
                            <img style={profileImageStyle} src={loggedInUser.photoURL} alt={loggedInUser.name}/>
                        </Link>
                        : <Link to="/login" className="nav-link active text-dark">
                            <Button size="sm" variant="success">Login</Button>
                        </Link>
                }
            </Nav>

        </Navbar>
    );
};

export default Header;