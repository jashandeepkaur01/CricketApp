import axios from 'axios';
import {InputField} from '../../Custom Components/customInput/Input'
import React, { useEffect, useState } from 'react'
export default function Form({user,setUser,handle,userErr,setUserErr}) {
  console.log(handle,"usssss")
//   const[playernameErr,setPlayernameErr]=useState(false);
const letterregex=/^[A-Za-z]{1,}$/;
const digitregex=/^[0-100]$/
console.log(userErr,"vikas");
const validateName=(e)=>{
    setUser({
        ...user,playername:e.target.value
    })
    if(e.target.value==""){
        setUserErr({...userErr,
          playernameErr:false
           
        });
        console.log(userErr,"bike");
    }
    else{
   
    let name=e.target.value;
      
    if(!name.match(letterregex)){
       
        setUserErr({...userErr,playernameErr:true});
    }
   
    else{
        setUserErr({...userErr,playernameErr:false});
    }
}

}
const validateCountryname=(e)=>{
    setUser({
        ...user,playerCountry:e.target.value
    })
    if(e.target.value==""){
        setUserErr({...userErr,
            playerCountryErr:false
           
        });
        console.log(userErr,"bike");
    }
    else{
   
    let name=e.target.value;
      
    if(!name.match(letterregex)){
       
        setUserErr({...userErr,playerCountryErr:true});
    }
   
    else{
        setUserErr({...userErr,playerCountryErr:false});
    }
}

}
const validatePhoneno=(e)=>{
    setUser({
        ...user,playerPhoneNo:e.target.value
    })
    if(e.target.value==""){
        setUserErr({...userErr,
          playerPhonenoErr:false
           
        });
        console.log(userErr,"bike");
    }
    else{
   
    let name=e.target.value;
      
    if(!name.match(letterregex)){
       
        setUserErr({...userErr,playernameErr:true});
    }
   
    else{
        setUserErr({...userErr,playernameErr:false});
    }
}

}
const validateAge=(e)=>{
    setUser({
        ...user,playerage:e.target.value
    })
//     if(e.target.value==""){
//         setUserErr({...userErr,
//             playerageErr:false
           
//         });
//         console.log(userErr,"bike");
//     }
//     else{
   
//     let age=e.target.value;
      
//     if(!age.match(digitregex)){
       
//         setUserErr({...userErr,playerageErr:true});
//     }
   
//     else{
//         setUserErr({...userErr,playerageErr:false});
//     }
// }

}
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
    onChange={(e)=>{validateName(e)}}>
    
    {userErr.playernameErr?<span style={{color:'red'}}>Enter letters only</span>:<span></span>}
   </InputField >
    {/* {...userErr.playernameErr} */}
    <InputField
        
        label="playerPhoneno"
        type='number'
        name=' PlayerPhoneno'
        value={user.playerP}
        className="form-control w-75"
        placeholder="enter your name"
        onChange={(e)=>{validatePhoneno(e)}}>
        
        {userErr.playernameErr?<span style={{color:'red'}}>Enter letters only</span>:<span></span>}
       </InputField >
     <InputField
         label="PlayerAge"
 type='number'
 name='age'
 value={user.playerAge}
 className="form-control w-75"
 placeholder="enter your age"
 onChange={(e)=>{validateAge(e)}}
     />
 


  <InputField
 
 label="Country Name"
 type='text'
 name='First name'
 value={user.playerCountry}
 className="form-control w-75"
 placeholder="enter your countryname"
 onChange={(e)=>{validateCountryname(e)}}

 > {userErr.playerCountryErr?<span style={{color:'red'}}>Enter letters only</span>:<span></span>}</InputField>
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

 > {userErr.JerseyynoErr?<span style={{color:'red'}}>Enter letters only</span>:<span></span>}</InputField>
     <button type="submit" id="btn" class="btn btn-secondary" onClick={handle}>Submit</button>
    </form>
    </div>
  )
}
