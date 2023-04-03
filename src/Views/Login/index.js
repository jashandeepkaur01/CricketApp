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
    let loggedInPlayerData = data.find((val) => val.PhoneNo == contact);
    if (loggedInPlayerData) dispatch(setLogin(loggedInPlayerData));
    else setErrorMessage("Phone number is not valid");
    console.log('hi');
    // alert('how are you...')
    // alert('how are you...')
  }
  return (
    <>

      {/* <div className="d-flex  justify-content-center w-100  ">
        <div className="  w-25 ">
          <div className="p-5 row-2">
            <div className="column  border border-dark  rounded-4   ">
              <h1 className="bg-dark text-dark p-2 text-center  rounded-bottom rounded-4 text-white">
                Login Here
              </h1>
              <div className="px-4 bg-transparent">
                <form className="form-group">
                  <div className="d-sm-grid gap-2">
                    <label>Enter Contact no.:</label>
                    <input
                      type="text"
                      placeholder="contact no."
                      className="form-control my-2"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    ></input>
                  </div>
                </form>
                <div className="d-sm-grid gap-2 d-flex">
                  <button
                    className="btn btn-dark text-white m-2  round rounded-4 "
                    onClick={handleClick}
                  >
                    {" "}
                    login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <form className="loginBox">
        <h1 className="loginHeading">Login</h1>
        <div className="d-flex  justify-content-center w-100">
          <h5 className="text-danger mt-2 mb-0">{errorMessage}</h5>
        </div>
        <input type="number" className="loginInput" placeholder="Phone number" value={contact}
          onChange={(e) => setContact(e.target.value)} />
        <button className="loginBtn" onClick={handleClick}>Login</button>
      </form>
    </>
  );
};

export default Login;
