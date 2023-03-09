import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TableName from './TableName';

export default function PlayerRecords() {
    const[user,setUser]=useState({
        firstname:"",
        lastname:""
    });
    const[userErr,setUserErr]=useState({
        firstnameError:false,
        lastnameError:false
    });
   
    const [player,setPlayer]=useState([]);
    const[condn,setCondn]=useState(true);
    const [arr,setArr]=useState([])
    const arrays=["Player Firstname","Player lastname",];
    
    useEffect(()=>{
axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then((response)=>{
    let body=[];
    for (let key in response.data){
        body.push(response.data[key]);
    }
    setPlayer(body);
    console.log("aaaaaaaaaaaaa");
})
    },[])
    useEffect(()=>{
        console.log("aaaaaaasssssssssss");
        if(!condn){
        axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then((response)=>{
            let body=[];
            for (let key in response.data){
                body.push(response.data[key]);
            }
            console.log(body,"rishabh");
            setPlayer(body);
            console.log("hey manav");
            
        })
    }
else{
    setCondn(false);
}
            },[arr])
            const handle=(e)=>{
        e.preventDefault();
        if(user.firstname===""){
            setUserErr({...userErr,
                firstnameError:true

            });
            return;
        }
        if(user.lastname===""){
            setUserErr({...userErr,
                lastnameError:true

            });
            return;
        }
        else{
        axios.post("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json",{
           body: user.firstname,
          title: user. lastname
        }).then((response)=>{
          setCondn(false);
          setArr([{
             body:user. firstname,
          title:  user.lastname
          }])
        }).catch((error=>{
            console.log(error);
        }))
      setUser({
        firstname:"",
        lastname:""
      })
    }
}
  return (
    <div>
    <form onSubmit={handle}>
    <label>PlayerName</label>
    <br/>
      <input type="text" name="firstname" id="" value={user.firstname} onChange={(e)=>{setUser({
        ...user,firstname:e.target.value
      })}} />
      <br/>
      {/* {firstnameError?<span style={{color:'red'}}>Enter letters only</span>:<span></span>} */}
      <label>LastName</label>
    <br/>
      <input type="text" name="lastname" id="" value={user.lastname} onChange={(e)=>{setUser({
        ...user,lastname:e.target.value
      })}} />
      <br/>
      {/* {firstnameError ?<span style={{color:'red'}}>Enter letters only</span>:<span></span>} */}
      <br/>
      <input type="submit" className='btn btn-primary' value="submit" />
      </form>
      <TableName theading={arrays} main={player}/>
    </div>
  )
}

{/* {player.map((e)=>{
  return (<>
      <p>{e.body}</p>
      <p>{e.title}</p>
      </>
  );
})} */}