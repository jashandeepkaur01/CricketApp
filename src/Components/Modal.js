import React, { useState } from 'react'
import TeamDropdown from './Custom Components/TeamDropdown';
import { InputField } from './InputField';
import './Modal.css'


export function Modal({visible,title,toggleModal}) {
    const [value, setValue] = useState("");
    
    const handleChange = (e) => {
      setValue(e.target.value)
    };

    const handleSubmit =()=>{
      toggleModal();
    }
    
    const handleClick=()=>{
      toggleModal();
    }
    
    if(!visible){
      return null;
    }

  return (
    <div className='container'>
    <div className='header'>
    <header>{title}</header>
    <i id="icon" onClick={handleClick} className="bi bi-x-circle"></i>
    </div>
    {/* {children} */}
    <div className='content'>
      {/* map */}
      <TeamDropdown/>
      <br/><br/>
      <TeamDropdown/>
      <br/>
      <InputField  label="Tournament Type" type="" value={value} onChange={handleChange} placeholder="hello"/>
    </div>
    <button type="button" id="btn" className="btn btn-secondary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

