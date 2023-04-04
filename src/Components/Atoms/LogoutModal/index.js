import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLogin } from 'Redux/Actions/loginActions';

function LogoutModal ({title,show,handleClose}) {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useHistory();


  function handleLoginModal(){
    console.log('logging out ')
    navigate.push("/");
    dispatch(setLogin(null));
    handleClose();
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to logout..?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleLoginModal}>Logout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutModal;