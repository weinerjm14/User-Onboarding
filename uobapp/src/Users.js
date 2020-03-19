import React from "react";

const Users = props => {
    return (
        {props.user.map(user =>(
            <div className='userlist'>
            <h3>'User Name :' {user.username}</h3>
            <span className = "id">'User ID:' {user.id}</span>>
            <span className="email">'Email: ' {user.email}</span>
            <span className="password">'Password:' {user.password}</span>
            <span className='tos'>'Terms of Service: ' {user.tos}</span>
            </div>
        )
        )}
    );
};

export default Users;

// Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.