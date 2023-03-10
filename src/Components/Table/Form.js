import axios from 'axios';
import {InputField} from '../Custom Components/customInput/Input'
import React, { useEffect, useState } from 'react'
export default function Form({user,setUser,handle}) {
  console.log(handle,"usssss")
  return (
    <div>
    <form onsubmit={handle}>
        <InputField
 
    label="PlayerName"
    type='text'
    name=' Playername'
    value={user.playername}
    className="form-control w-75"
    placeholder="enter your name"
    onChange={(e)=>{setUser({
        ...user,playername:e.target.value
    })}}

    />
     <InputField
 
 label="PlayerAge"
 type='number'
 name='age'
 value={user.playerAge}
 className="form-control w-75"
 placeholder="enter your age"
 onChange={(e)=>{setUser({
        ...user,playerage:e.target.value
    })}}

 />
  <InputField
 
 label="Country Name"
 type='text'
 name='First name'
 value={user.playerCountry}
 className="form-control w-75"
 placeholder="enter your countryname"
 onChange={(e)=>{setUser({
        ...user,playerCountry:e.target.value
    })}}

 />
  <InputField
 
 label="JerseyNo"
 type='number'
 name='jerseyno'
 value={user.Jerseyyno}
 className="form-control w-75"
 placeholder="enter your Jerseynumber"
 onChange={(e)=>{setUser({
        ...user,Jerseyyno:e.target.value
    })}}

 />
     <button type="submit" id="btn" class="btn btn-secondary" onClick={handle}>Submit</button>
    </form>
    </div>
  )
}
