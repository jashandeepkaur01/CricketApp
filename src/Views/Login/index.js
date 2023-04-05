import { useState } from "react";
import './style.css';
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "Redux/Actions/loginActions";
const Login = () => {
  const [contact, setContact] = useState("");
  const [errorMessage, setErrorMessage] = useState(" ");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.player.players);

  // 6127963022

  function handleClick(e) {
    e.preventDefault();
    let loggedInPlayerData = data.find((val) => val.PhoneNo === contact);
    if (loggedInPlayerData) dispatch(setLogin(loggedInPlayerData));
    else setErrorMessage("Phone number is not valid");
  }
  return (
    <>
      <form className="loginBox">
        <h1 className="loginHeading">Login</h1>
        <input type="number" className="loginInput" placeholder="Phone number" value={contact}
          onChange={(e) => setContact(e.target.value)} />
        <div className="d-flex  justify-content-center w-100">
          <span className="text-danger mt-2 mb-0">{errorMessage}</span>
        </div>
        <button className="loginBtn" onClick={handleClick}>Login</button>
      </form>
    </>
  );
};

export default Login;
