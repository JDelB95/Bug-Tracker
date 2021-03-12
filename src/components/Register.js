import React from 'react';

const Register = () => {
    return(
        <div>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <label> Confirm Password</label>
            <input type="password" />
        </div>
    )
}

export default Register;