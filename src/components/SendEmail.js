import React from 'react';

const SendEmail = () => {
    return (
        <div>
            <label>To</label>
            <input type="email" placeholder="Enter Email" />
            <label>From</label>
            <input type="email" placeholder="Enter Email" />
            <br/>
            <textarea placeholder="Email Body"></textarea>
        </div>
    );
}

export default SendEmail;