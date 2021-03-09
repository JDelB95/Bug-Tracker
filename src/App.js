import React, { useState } from 'react';

import ContactList from './components/ContactList';
import SendEmail from './components/SendEmail';

const App = () => {

    
    return(
        <div>
            <div>
                <ContactList />
                <SendEmail />
            </div>
        </div>
    );
}

export default App;