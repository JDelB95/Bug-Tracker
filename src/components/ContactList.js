import React, { useState } from 'react';

const ContactList = () => {
    const [contacts, setContact] = useState([{name: 'John', email:'jdelbianco@ceiamerica.com'}, {name: 'Ryan', email: 'rberwald@ceiamerica.com'}, {name: 'Andrew', email: 'apreston@ceiamerica.com'}]);

        if(contacts != null) {
            const contactList = contacts.map(contact => <li>{contact.name + " - " + contact.email}</li>)
            return(
                <div>
                    <ul>
                        {contactList}
                    </ul>
                </div>
            )
        }else {
            <div>Looks like you need to add some contacts!</div>
        }
}

export default ContactList;