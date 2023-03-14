import React from 'react'
import { useDispatch } from 'react-redux'
import {stadiums} from 'Redux/Actions/Matches.js'
import { useSelector } from 'react-redux';
function CustomDropdown({labelForDropdown, dropdownOptions}) {
  const stadiumList = useSelector((state)=>state.matchReducer)
  console.log(stadiumList)
  const dispatch = useDisp
  atch();
  return (
    <div className='mb-4'>
        <label>{labelForDropdown}</label>
        <select onChange={()=>dispatch(stadiums())} className="custom-select p-1 w-75 ml-2">
            <option selected>Select {labelForDropdown} </option>
            {dropdownOptions.map(op => <option value={op}>{op}</option>)}
        </select>
    </div>
  )
}

export default CustomDropdown