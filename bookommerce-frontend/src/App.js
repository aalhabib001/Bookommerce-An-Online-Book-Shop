import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {createContext, useState} from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/HomePage/Homepage";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddBook from "./components/AddBook/AddBook";
import OrderList from "./components/OrderList/OrderList";
import ConfirmOrder from "./components/ConfirmOrder/ConfirmOrder";

export const UserContext = createContext();
export const BookContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState([])
    const [contextBooks, setContextBooks] = useState([])
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <BookContext.Provider value={[contextBooks, setContextBooks]}>
                <div className="container">
                    <Router>
                        <Header/>
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <PrivateRoute exact path="/checkout/confirm">
                                <ConfirmOrder/>
                            </PrivateRoute>
                            <PrivateRoute path="/checkout/:productId">
                                <Checkout/>
                            </PrivateRoute>
                            <PrivateRoute path="/orders">
                                <OrderList/>
                            </PrivateRoute>
                            <PrivateRoute path="/admin/books/edit">
                                <AdminPanel/>
                            </PrivateRoute>
                            <PrivateRoute path="/admin/books/add">
                                <AddBook/>
                            </PrivateRoute>
                            <PrivateRoute path="/admin/books/edit">
                                <AdminPanel/>
                            </PrivateRoute>
                            <PrivateRoute path="/admin">
                                <AdminPanel/>
                            </PrivateRoute>

                        </Switch>
                    </Router>

                </div>
            </BookContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
