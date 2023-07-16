import React from "react";
import { Form, Button } from "react-bootstrap";

function UpdateUser({ handleSubmit, handleUpdate, user }) {
    return(
        <>
            <Form className="profile-form" onSubmit={(e) => handleSubmit(e)}>
                    <h4>Update Information</h4>
                    <Form.Group controlId="updateUserFormUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control 
                        type="text"
                        value={user.Username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        minLength="3"
                        placeholder="Enter Username"
                    />
                    </Form.Group>

                    <Form.Group controlId="updateUserFormPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter Password"
                    />
                    </Form.Group>
                    
                    <Form.Group controlId="updateUserFormEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter Email"
                    />
                    </Form.Group>

                    <Form.Group controlId="updateUserFormBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control 
                        type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        required
                        placeholder="Enter Date of Birth"
                    />
                    </Form.Group>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </>
    )
}

export default UpdateUser;