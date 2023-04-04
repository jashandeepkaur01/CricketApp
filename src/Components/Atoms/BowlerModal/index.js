import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';


function BowlerModal ({title,show,handleClose,oppTeamPlayers,handleBowler,bowler}) {

  // function handleBowlerModal(){
  //   console.log('bowler selected ')

  //   handleClose();
  // }
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
          <Button variant="primary" onClick={handleClose}>OK</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BowlerModal;