import React from 'react'

function CreateRadio({values, name, state, setState}) {

    const handleOptionChange = (e) => {
        setState(e.target.value);
      }
 
  return (
    <div>
    {values.map((val,index) =>{
        return(
            <div key={index}>
            <input
            type="radio"
            value={val}
            checked={state === val}
            onChange={handleOptionChange}
            name={name}
            />
            <label htmlFor={name}>{val}</label>
          </div>
        )
    })}
</div>
  )
}

export default CreateRadio