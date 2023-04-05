import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLogin } from 'Redux/Actions/loginActions';

function LogoutModal ({title,show,handleClose}) {
  const dispatch = useDispatch();
  const navigate = useHistory();

  function handleLogoutModal(){
    navigate.push("/");
    dispatch(setLogin(null));
    handleClose();
  }
  return (
    <>
      <form className="loginBox">
        <h1 className="loginHeading">Logout</h1>
        <div className="d-flex  justify-content-center w-100">
          <h5 className="text-light mt-2 mb-0">Are you sure you want to Logout..?</h5>
        </div>
        <div className="d-flex">
          <button className="cancelBtn m-1 mt-5" onClick={handleClose}>Cancel</button>
          <button className="loginBtn m-1 mt-5" onClick={handleLogoutModal}>Logout</button>
        </div>
      </form>
    </>
  );
}

export default LogoutModal;