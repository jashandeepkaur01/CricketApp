import React from 'react'
import {InputField} from './Input'
import React, { useEffect, useState } from 'react'
export default function Form() {
        
  return (
    <div>
    <form>
        <InputField
 
    label="PlayerName"
    type='text'
    name='First name'
    value={}
    className="form-control w-75"
    placeholder="enter your name"
    onChange={()=>{console.log("hey")}}

    />
     <InputField
 
 label="PlayerAge"
 type='text'
 name='First name'
 value=""
 className="form-control w-75"
 placeholder="enter your age"
 onChange={()=>{console.log("hey")}}

 />
  <InputField
 
 label="Country Name"
 type='text'
 name='First name'
 value=""
 className="form-control w-75"
 placeholder="enter your countryname"
 onChange={()=>{console.log("hey")}}

 />
  <InputField
 
 label="JerseyNo"
 type='text'
 name='First name'
 value=""
 className="form-control w-75"
 placeholder="enter your Jerseynumber"
 onChange={()=>{console.log("hey")}}

 />
    </form>
    </div>
  )
}
