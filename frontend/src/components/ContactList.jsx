import React from 'react';

const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>
                        <h3>{contact.name}</h3>
                        <p>Email: {contact.email}</p>
                        <p>Phone: {contact.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;