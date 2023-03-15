import React from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from 'Redux/Actions/loginActions'
export default function Logout() {
    const dispatch = useDispatch()
    function handleLogout() {
        dispatch(setToken(0))
    }
    return (
        <div className="d-flex  justify-content-center w-100 ">
            <div className="  w-25 ">
                <div className='row-2' >
                    <div className="column  border border-dark  rounded-2   ">
                        <h3 className="bg-dark text-dark p-2 text-center   rounded-2 text-white">Sure to Logout</h3>
                        <div className="px-4 bg-transparent">

                            <div className="d-flex  justify-content-center w-100 mt-2">

                                <button className="btn btn-dark text-white m-2  round rounded-4 " onClick={handleLogout} > logout</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            </div>
            )
}

