import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const LoginView = ({ onLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password 
        };

        fetch(`https://movie-api2-7e3e05174777.herokuapp.com/login?` + new URLSearchParams(data), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else {
                alert("No such user found.");
            }
        })
        .catch((e) => {
            alert("Something went wrong");
        });
    };

    return (
        <Form onSubmit={handleSubmit} className="text-black">
            <Form.Group controlId="formUsername">
                <Form.Label>Username: </Form.Label>
                <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Password: </Form.Label>
                <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </Form.Group>
            
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};