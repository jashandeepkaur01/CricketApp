import React from 'react'
import './Modal.css'


export function Modal(props) {


    const handleCloseModal=()=>{
      props.setIsModalVisible(false)
    }
    if(!props.visible){
      return null;
    }
  return (
    <div className='container'>
    <div className='header'>
    <header>{props.title}</header>
    <i id="icon" onClick={handleCloseModal} className="bi bi-x-circle"></i>
    </div>
    <div className='content'>{props.children}</div>
    <button type="button" id="btn" className="btn btn-secondary" onClick={()=>props.submitModal()}>Submit</button>
    </div>
  )
}

