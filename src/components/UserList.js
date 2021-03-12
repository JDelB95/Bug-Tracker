import React, { useState } from 'react';

const UserList = () => {

    const [users] = useState([
        {name: 'John Del Bianco', email:'jdelbianco@ceiamerica.com', role: 'developer'}, 
        {name: 'Ryan Berwald', email: 'rberwald@ceiamerica.com', role: 'developer'}, 
        {name: 'Andrew Preston', email: 'apreston@ceiamerica.com', role: 'developer'}
    ]);

    const list = users.map(user => <li key={user.email}>{"Name: " + user.name + " | Email: " + user.email + " | Role: " + user.role}</li>)
    
    if(users != null) {
        return(
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }else {
        return(
            <div>Looks like you need to add some users!</div>
        );
    }
}

export default UserList;