import React from "react";

function UserInfo({ email, name }) {
    return(
        <>
            <h4>Your Information</h4>
            <p>Name: { name }</p>
            <p>Email: { email }</p>
        </>
    )
}

export default UserInfo