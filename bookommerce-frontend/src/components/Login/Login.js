import React, {useContext, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {useHistory, useLocation} from "react-router-dom";
import firebaseConfig from "../../FirebaseConfig";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import {UserContext} from "../../App";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    let location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/" } };
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photoURL: ''
    });


    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('hi')
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                const {displayName, email, photoURL} = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photoURL: photoURL
                };
                setUser(signedInUser);
                console.log(user)
                console.log(loggedInUser)
                setLoggedInUser(signedInUser)
                history.push(from)
                // console.log(user)
                // history.replace(from);
            })
            .catch(err => {
                // console.log(err);
                console.log(err.message);
                console.log(err.message);
            })
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="w-50 h-50 border p-4 ">
                    <h4>Login</h4>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                        <div className="d-flex justify-content-between">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me"/>
                            </Form.Group>
                            <p className="no-button">Forget Password</p>
                        </div>

                        <Button className="w-100 mb-3" variant="primary" type="submit">
                            Login
                        </Button>

                        <div className="d-flex justify-content-start">
                            <p className="mr-1 font-weight-bold">Don't have an account?</p>
                            <p className="no-button">Create New One</p>
                        </div>

                    </Form>
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <div className="w-50 h-50 p-4 ">
                    <h6 className="text-center">-- or --</h6>
                    <Button onClick={handleGoogleSignIn} className="w-100" variant="outline-primary">Continue With
                        Google</Button>
                </div>
            </div>
        </>
    );
};

export default Login;