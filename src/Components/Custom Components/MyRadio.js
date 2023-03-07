import React from 'react'
import CustomRadio from './CustomRadio'

function MyRadio() {
    const name="gender";
    const arr = ["male","female","other","fsgjshfg","fghsudf"]
  return (
    <div>
        <h2>Radio Button</h2>
        <CustomRadio  values ={arr} name={name} />
    </div>
  )
}

export default MyRadio