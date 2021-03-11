import React, { useState } from 'react';

const ContactList = () => {

    const [contacts, setContact] = useState([{name: 'John', email:'jdelbianco@ceiamerica.com'}, {name: 'Ryan', email: 'rberwald@ceiamerica.com'}, {name: 'Andrew', email: 'apreston@ceiamerica.com'}]);
    const [newContact, setnewContact] = useState({name: '', email: ''});
    const [contactList, setcontactList] = useState([]);

    const handleSubmit = event => {
        setContact([...contacts, newContact]);
        const list = contacts.map(contact => <li key={contact.email}>{contact.name + " - " + contact.email}</li>)
        setcontactList(list);
        event.preventDefault();
    }

    const handleNameChange = event => {
        setnewContact({...newContact, name: event.target.value});
    }

    const handleEmailChange = event => {
        setnewContact({...newContact, email: event.target.value});
    }
    console.log(contactList);
    if(contacts != null) {
        const list = contacts.map(contact => <li key={contact.email}>{contact.name + " - " + contact.email}</li>)
        console.log(1);
        return(
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Add New Contact
                            <input type="text" placeholder="Name" value={newContact.name} onChange={handleNameChange} />
                        </label>
                        
                        <label>
                            Contact's Email
                            <input type="email" placeholder="Email" value={newContact.email} onChange={handleEmailChange} />
                        </label>
                        <button type="submit">Create Contact</button>
                    </form>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }else if(contactList != null){
        return(
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Add New Contact
                            <input type="text" placeholder="Name" value={newContact.name} onChange={handleNameChange} />
                        </label>
                        
                        <label>
                            Contact's Email
                            <input type="email" placeholder="Email" value={newContact.email} onChange={handleEmailChange} />
                        </label>
                        <button type="submit">Create Contact</button>
                    </form>
                </div>
                <ul>
                    {contactList}
                </ul>
            </div>
        );
    }else {
        return(
            <div>Looks like you need to add some contacts!</div>
        );
    }
}

export default ContactList;