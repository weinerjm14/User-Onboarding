import React from "react";

const Users = props => {
    return (
        <div>
        {props.user.map(user =>(
            <div className='userlist'>
            <h3>User Name : {user.username}</h3>
            <p className = "id">User ID: {user.id}</p>
            <p className="email">Email: {user.email}</p>
            <p className="password">Password: {user.password}</p>
            <p className='tos'>Terms of Service: {user.tos}</p>
            </div>
        )
        )}
        </div>
    );
};

export default Users;

// Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.