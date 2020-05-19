import React from "react";

const Users = props => {
    console.log('user props', props);
    return (
        <div>
        {props.user.map(user =>(
            <div className='userlist'>
            <h3>User Name : {user.username}</h3>
            <p className="email">Email: {user.email}</p>
            <p className="password">Password: {user.password}</p>
            <p className='tos'>Terms of Service: {user.tos === true ? 'yes' : 'no'}</p>
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