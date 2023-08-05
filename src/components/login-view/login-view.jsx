import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login-view.scss";

export const LoginView = ({ onLoggedIn }) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = (event) => {
// this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();

        const data = {
            "Username": username,
            "Password": password
        };
        console.log(data)
        fetch("https://movie-api-meran.herokuapp.com/login?Username="+username+"&Password="+password, {
            method: "POST"
        }).then((response) => {
            if (response.ok) {
                onLoggedIn(username);
            } else {
                alert("Login Failed");
            }
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type= "text"
                    value= {username}
                    onChange= {(e) => setUsername(e.target.value)}
                    required
                    minLength= "3"
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value= {password}
                    onChange= {(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};