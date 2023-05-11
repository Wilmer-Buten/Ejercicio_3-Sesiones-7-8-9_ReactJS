import React, {useRef} from 'react'
import { Contact } from '../models/Contact';
import PropTypes from 'prop-types';


const AddContact = ({add}) => {
  
  const nameRef = useRef('');
  const lastnameRef = useRef('');
  const numberRef = useRef('');

  const createContact = () => {
    if(nameRef.current.value === ''){
      return (
        nameRef.current.className = 'empty-input'
      )
    } else if(numberRef.current.value ===''){
      return (
        numberRef.current.className = 'empty-input'
      )
    }

    const contact = new Contact(
    nameRef.current.value,
    lastnameRef.current.value,
    numberRef.current.value,
    false
  )

  add(contact);
  }

    return (
      
      <tr>
        <td><input required ref={nameRef} className='add-input' type='text' placeholder='Name*' autoFocus/></td>
        <td><input ref={lastnameRef} className='add-input' type='text' placeholder='Last Name' /></td>
        <td><input ref={numberRef} className='add-input' type='text'  placeholder='Number*'/></td>
        <td><i style={{'color': 'yellow'}} className='bi-wifi-off'></i></td>
        <td><button className='add-button' onClick={createContact}>SAVE</button></td>
        </tr>
  )
}

AddContact.propTypes = {
  add: PropTypes.func.isRequired
}

export default AddContact;