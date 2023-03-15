import { useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { setToken } from "Redux/Actions/loginActions";
const Login = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
<<<<<<< HEAD
  const [errorMessage,setErrorMessage]=useState("You Have To Login As Player")
=======
  const [errorMessage,setErrorMessage]=useState("")
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
  const dispatch = useDispatch();
  const data = useSelector(((state) => state.data.players))


  // 6127963022

  function handleClick() {

    let token = []
<<<<<<< HEAD
    token = data?.filter(val => val.playerPhoneno == contact && val.playername == name)
=======
    token = data?.filter(val => val.PhoneNo == contact )
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c

    dispatch(setToken(token.length))
    if(token.length==0){
       setErrorMessage("Not Valid Player")
    }


  }
  return (
    <>
      <div className="d-flex  justify-content-center w-100 mt-2">
        <h5 className="text-danger">{errorMessage}</h5>
      </div>
      <div className="d-flex  justify-content-center w-100  ">
        <div className="  w-25 ">
          <div className='p-5 row-2' >
            <div className="column  border border-dark  rounded-4   ">
              <h1 className="bg-dark text-dark p-2 text-center  rounded-bottom rounded-4 text-white">Login Here</h1>
              <div className="px-4 bg-transparent">
                <form className="form-group" >
<<<<<<< HEAD
                  <div>
                    <label>Enter Player's name:</label>
                    <input type="text" className="form-control my-2" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                  </div>
=======
                 
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
                  <div className='d-sm-grid gap-2'>
                    <label>Enter Contact no.:</label>
                    <input type='text' placeholder='contact no.' className="form-control my-2" value={contact} onChange={(e) => setContact(e.target.value)} ></input>
                  </div>
                </form>
                <div className='d-sm-grid gap-2 d-flex'>
                  <button className="btn btn-dark text-white m-2  round rounded-4 " onClick={handleClick}> login</button>
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
