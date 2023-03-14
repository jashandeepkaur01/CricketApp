import React from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from 'Redux/Actions/loginActions'
export default function Logout() {
    const dispatch = useDispatch()
    function handleLogout() {
        dispatch(setToken(0))
    }
    return (
        <div>

            <div className="d-flex  justify-content-center w-100 mt-2">
                <h5 className="text-success">You Have Successfully Logged In</h5>
            </div>
            <div className="d-flex  justify-content-center w-100 mt-2">

                <button className="btn btn-dark text-white m-2  round rounded-4 " onClick={handleLogout} > Click to logout</button>
            </div>
        </div>
    )
}

