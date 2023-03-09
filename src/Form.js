import React from 'react'
import {InputField} from './Input'
import React, { useEffect, useState } from 'react'
export default function Form() {
    const[user,setUser]=useState({
        playername:"",
        playerage:"",
        playerCountry:"",
        Jerseyyno:""
    });
    const [player,setPlayer]=useState([]);
    const[s,setS]=useState([]);
    // const[condn,setCondn]=useState(true);
    // const [arr,setArr]=useState([])
    const arrays=["Player name","Player age", "Player Country","JerseyyNo"];
    useEffect(()=>{
        axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then((response)=>{
            let body=[];
            for (let key in response.data){
                body.push(response.data[key]);
            }
            setPlayer(body);
            setS(body);
            console.log("aaaaaaaaaaaaa");
        })
            },[])
            const handle=(e)=>{
                e.preventDefault();
                if(user.playername===""||user.playerAge===""||user.Jerseyyno===""||user.playerCountry===""){
                    // setUserErr({...userErr,
                    //     firstnameError:true
        
                    // });
                    return;
                }
                // if(user.lastname===""){
                //     setUserErr({...userErr,
                //         lastnameError:true
        
                //     });
                //     return;
                // }
                else{
                axios.post("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json",{
                   playername: user.playername,
                  playerage: user.playerage,
                  playerCountry: user.playerCountry,
                  Jerseyyno: user.Jerseyyno,
                  
                }).then((response)=>{
                
               
                }).catch((error=>{
                    console.log(error);
                }))
                
                setS([...s,{
                  playername:user.playername,
               playerAge:  user.playerAge,
               playerCountry:user.playerCountry,
               Jerseyyno:user.Jerseyyno
               }])
               console.log(s,"abc");
              setUser({
                playername:"",
                playerage:"",
                playerCountry:"",
                Jerseyyno:""
              })
            }
        }        
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
