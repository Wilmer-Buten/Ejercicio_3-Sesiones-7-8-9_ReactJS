import React, { useState } from 'react'
import { Contact } from '../models/Contact';
import ContactComponent from '../pure/ContactComponent';

import '../styles/contact.scss';
import AddContact from '../pure/AddContact';

function Contact_list() {

    let defaultContacts = [];

    for (let i = 1; i < 6; i++) {

        let name = 'Contact' + i;
        let lastname = `Lastname #${i}`

        const newContact = new Contact(
            name,
            lastname,
            i + 564567670,
            false)

        defaultContacts.push(newContact)
    }

    const [contacts, setContacts] = useState(defaultContacts);
    const [showAddInput, setShowAddInput] = useState(false);

    const addContact = (contact) => {
        setShowAddInput(false);
        let prevContacts = contacts;
        prevContacts.push(contact);
        setContacts(prevContacts);

    }

    const modifyContact = (contact, nameRef, lastnameRef, numberRef) => {

        nameRef.current.readOnly = false;
        lastnameRef.current.readOnly = false;
        numberRef.current.readOnly = false;

        let prevContacts = [...contacts];
        setContacts(prevContacts);
    }

    const saveContact = (contact, nameRef, lastnameRef, numberRef) => {

        nameRef.current.readOnly = true;
        lastnameRef.current.readOnly = true;
        numberRef.current.readOnly = true;

        const index = contacts.indexOf(contact)
        let prevContacts = [...contacts];
        const modifiedContact = new Contact(
            nameRef.current.value,
            lastnameRef.current.value,
            numberRef.current.value,
            contact.status
        );

        prevContacts[index] = modifiedContact;
        setContacts(prevContacts);
    }

    const delContact = (contact) => {
        const index = contacts.indexOf(contact);
        let tempContacts = [...contacts];
        tempContacts.splice(index, 1)
        setContacts(tempContacts);

    }

    const connectOrDisconnect = (contact) => {
        const index = contacts.indexOf(contact);
        const prevContacts = [...contacts];
        prevContacts[index].status = !prevContacts[index].status;
        setContacts(prevContacts);
    }

    const showOrDoNotShow = (bool) => {
        setShowAddInput(bool);
    }

    return (
        <>
            {
                showAddInput
                ? <div>
                    <button className='add-button-cancel' onClick={()=>{showOrDoNotShow(false)}}>CANCEL</button>
                  </div>
                :  <div>
                    <button className='add-button' onClick={()=>{showOrDoNotShow(true)}}>Add Contact</button>
                  </div>
            }
            <div>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Number</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {contacts.map((contact, index) => {
                                return (
                                    <ContactComponent key={index} i={index} contact={contact} add={addContact} del={delContact} modify={modifyContact} save={saveContact} connectOrDisconnect={connectOrDisconnect}></ContactComponent>
                                )
                            })}
                            {
                                showAddInput
                                    ? <AddContact add={addContact}></AddContact>
                                    : ''
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Contact_list;