import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { setLogin } from 'Redux/Actions/loginActions';

function BowlerModal ({title,show,handleClose,oppTeamPlayers,handleBowler,bowler}) {
//   const dispatch = useDispatch();
//   const navigate = useHistory();


  function handleBowlerModal(){
    console.log('bowler selected ')

    handleClose();
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Choose bowler
          <Select options={oppTeamPlayers} onChange={handleBowler} value={bowler} />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button> */}
          <Button variant="primary" onClick={handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BowlerModal;