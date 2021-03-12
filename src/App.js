import React from 'react';

import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UserList';
import SendEmail from './components/SendEmail';
import CreateProject from './components/CreateProject';

const App = () => {

    
    return(
        <div>
            <div>
                <Header />
                <Register />
                <Login />
                <UserList />
                <SendEmail />
                <CreateProject />
            </div>
        </div>
    );
}

export default App;