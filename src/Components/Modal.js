import React from 'react'
import './Modal.css'


export function Modal(props) {

    const handleSubmit =()=>{

      props.toggleModal();
    }
    if(!props.visible){
      return null;
    }

    const handleClick=()=>{
      props.toggleModal();
    }
  return (
    <div className='container'>
    <div className='header'>
    <header>{props.title}</header>
    <i id="icon" onClick={handleClick} className="bi bi-x-circle"></i>
    </div>
    <div className='content'>{props.children}</div>
    <button type="button" id="btn" class="btn btn-secondary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

