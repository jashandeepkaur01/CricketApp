import React from 'react'

function CustomDropdown({labelForDropdown, dropdownOptions}) {
  return (
    <div className='mb-4'>
        <label>{labelForDropdown}</label>
        <select className="custom-select p-1 w-75 ml-2">
            <option selected>Select {labelForDropdown} </option>
            {dropdownOptions.map(op => <option value={op}>{op}</option>)}
        </select>
    </div>
  )
}

export default CustomDropdown