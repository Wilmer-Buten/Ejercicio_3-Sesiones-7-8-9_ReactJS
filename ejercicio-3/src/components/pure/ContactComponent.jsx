import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/Contact';

const ContactComponent = ({ contact, del, modify, save, connectOrDisconnect }) => {


    const nameRef = useRef('');
    const lastnameRef = useRef('');
    const numberRef = useRef('');


    const displayStatus = () => {
        return (
            contact.status
                ? (<i onClick={()=>{connectOrDisconnect(contact)}} style={{ 'color': 'green', 'cursor': 'pointer' }} className='bi-wifi'></i>)
                : (<i onClick={()=>{connectOrDisconnect(contact)}} style={{ 'color': 'yellow', 'cursor': 'pointer' }} className='bi-wifi-off'></i>)
        )
    }



    const changeIcon = () => {

        return (
            <>
                {
                    nameRef.current.readOnly === false ?
                        <i style={{ 'color': 'yellowgreen', 'marginRight': '8px', 'cursor': 'pointer' }} onClick={() => save(contact, nameRef, lastnameRef, numberRef)} className='bi-check2'></i>
                        : <i style={{ 'color': 'yellowgreen', 'marginRight': '8px', 'cursor': 'pointer' }} onClick={() => modify(contact, nameRef, lastnameRef, numberRef)} className='bi-pencil-square'></i>

                }
                <i style={{ 'color': 'red', 'cursor': 'pointer' }} className='bi bi-trash' onClick={() => del(contact)}></i>

            </>
        )
    }
    
    return (
        <tr>
            <td><input ref={nameRef} key={contact.name} className='form-control table-input' type='text' defaultValue={contact.name} readOnly /></td>
            <td><input ref={lastnameRef} className='table-input' type='text' defaultValue={contact.lastname} readOnly/></td>
            <td><input ref={numberRef} className='table-input' type='text' defaultValue={contact.number} readOnly/></td>
            <td>{displayStatus()}</td>
            <td>
                {changeIcon()}
            </td>
            </tr>
    )
}

ContactComponent.propTypes = {

    contact: PropTypes.instanceOf(Contact).isRequired,
    del: PropTypes.func.isRequired,
    modify: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    connectOrDisconnect: PropTypes.func.isRequired
}


export default ContactComponent;