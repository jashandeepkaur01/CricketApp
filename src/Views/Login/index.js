import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "Redux/Actions/loginActions";
const Login = () => {
  const [contact, setContact] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.player.players);

  // 6127963022

  function handleClick() {
    // let token = []
    // token = data?.filter(val => val.PhoneNo == contact)

    // dispatch(setLogin(token))
    // if (!token) {
    //   setErrorMessage("Not Valid Player")
    // }

    let loggedInPlayerData = data.find((val) => val.PhoneNo == contact);
    if (loggedInPlayerData) dispatch(setLogin(loggedInPlayerData));
    else setErrorMessage("Not Valid Player");
  }
  return (
    <>
      <div className="d-flex  justify-content-center w-100 mt-2">
        <h5 className="text-danger">{errorMessage}</h5>
      </div>
      <div className="d-flex  justify-content-center w-100  ">
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
      </div>
    </>
  );
};

export default Login;
