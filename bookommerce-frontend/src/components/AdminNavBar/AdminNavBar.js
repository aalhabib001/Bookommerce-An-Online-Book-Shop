import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const AdminNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link> <Link to="/admin" className="text-info">Admin</Link></Nav.Link>
                <Nav.Link> <Link to="/admin/books/add" className="text-info">Add Books</Link></Nav.Link>
                <Nav.Link><Link to="/admin/books/edit" className="text-info">Edit Books</Link></Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default AdminNavBar;