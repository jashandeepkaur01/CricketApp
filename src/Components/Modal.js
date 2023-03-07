import React from 'react'
import './Modal.css'


export function Modal({visible,title,children,toggleModal}) {

    const handleSubmit =()=>{

      toggleModal();
    }
    if(!visible){
      return null;
    }

    const handleClick=()=>{
      toggleModal();
    }
  return (
    <div className='container'>
    <div className='header'>
    <header>{title}</header>
    <i id="icon" onClick={handleClick} className="bi bi-x-circle"></i>
    </div>
    <div className='content'>{children}</div>
    <button type="button" id="btn" class="btn btn-secondary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

