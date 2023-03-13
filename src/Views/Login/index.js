import { useState } from "react";
// import {useNavigate} from "react-router-dom"
const Login = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  // const navigate = useNavigate();
  function handleSubmit() {
    // navigate('/')
   }
  return (

    <div className="d-flex  justify-content-center w-100  pt-5 mt-5 ">
      <div className="  w-25 ">
        <div className='p-5 row-2' >
          <div className="column  border border-dark  rounded-4   ">
            <h1 className="bg-dark text-dark p-3 text-center  rounded-bottom rounded-4 text-white">Login Here</h1>
            <div className="px-4 bg-transparent">
              <form className="form-group" onSubmit={handleSubmit}>
                <div>
                  <label>Enter Player's name:</label>
                  <input type="text" className="form-control my-2" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div className='d-sm-grid gap-2'>
                  <label>Enter Contact no.:</label>
                  <input type='text' placeholder='contact no.' className="form-control my-2" value={contact} onChange={(e) => setContact(e.target.value)} ></input>
                </div>
                <div className='d-sm-grid gap-2 d-flex'>
                  {/* <input type='submit' value="login" className='btn btn-dark my-2' ></input> */}
                  <button className='btn btn-dark my-2' onClick={()=>{handleSubmit()}}>Login</button>
                </div>
              </form>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;
