import React from 'react'
import {Modal} from './Modal'
import {useState} from 'react'
import Form from './Form'
function Addplayer() {
    const[showModal,setShowModal]=useState(false);
    console.log(showModal);
    const handleClick=()=>{
        setShowModal(!showModal);
    }
  return (
    <div>
    <button onClick={handleClick}>AddPlayer</button>
  <Modal title="Modals" visible={showModal} toggleModal={handleClick}>
   <Form/>
    </Modal>
    </div>
  )
}

export default Addplayer
