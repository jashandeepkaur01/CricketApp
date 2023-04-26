import { setLogin } from "Redux/Actions/loginActions";
import { validPhoneNumber } from "Shared/Constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './style.css';


const Login = () => {
  const [contact, setContact] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");
  const dispatch = useDispatch();
  const navigate = useHistory();
  const data = useSelector((state) => state.player.players);
  function handleClick(e) {
    e.preventDefault();
    const isNumberValid = validPhoneNumber.test(contact)
    let loggedInPlayerData = data.find((val) => val.PhoneNo === contact);
    if (isNumberValid) {
      if (loggedInPlayerData) {
        navigate.replace('/selectTeam');
        dispatch(setLogin(loggedInPlayerData));
      }
      else setErrorMessage("No Player Found");
    }
    else {
      setErrorMessage('Phone number is not correct')
    }
  }
  function checkPhoneNumber(e) {
    setContact(e);
    setErrorMessage(' ');
  }
  return (
    <>
      <form className="loginBox">
        <h1 className="loginHeading">Login</h1>
        <input type="number" className="loginInput" placeholder="Phone number" value={contact}
          onChange={(e) => checkPhoneNumber(e.target.value)} />
        <div className="d-flex errorMessage justify-content-center w-100">
          <span className="text-danger mt-2 mb-0">{errorMessage}</span>
        </div>
        <button className="loginBtn" onClick={handleClick}>Login</button>
      </form>
    </>
  );
};

export default Login;
