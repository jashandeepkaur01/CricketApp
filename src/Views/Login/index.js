import { setLogin } from "Redux/Actions/loginActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.css';


const Login = () => {
  const [contact, setContact] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.player.players);

  function handleClick(e) {
    e.preventDefault();
    let loggedInPlayerData = data.find((val) => val.PhoneNo === contact);
    if (loggedInPlayerData) dispatch(setLogin(loggedInPlayerData));
    else setErrorMessage("No Player Found");
  }
  function checkPhoneNumber(e) {
    setContact(e);
    setErrorMessage(" ");
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
