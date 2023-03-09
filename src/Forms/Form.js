import { InputField } from 'Components/InputField'
import React from 'react'

function Form({data,setData}) {
    const handleChange = (e) => {
        setData({...data,
          [e.target.name]: e.target.value,
        });
      };
  return (
    <div>
      <form>
          <InputField
            name="playerNo"
            type="number"
            placeholder="Enter the player No."
            value={data.playerNo}
            onChange={handleChange}
          />
          <br />
          <InputField
            name="country"
            type="text"
            placeholder="Enter the country name"
            value={data.country}
            onChange={handleChange}
          />
          <br />
        </form>
    </div>
  )
}

export default Form
