import axios from 'axios';
import CustomTable from 'Components/Custom Components/Table/Table';
import React, { useEffect, useState } from 'react'


export default function PlayerRecords() {
    // const[user,setUser]=useState({
    //     playername:"",
    //     playerage:"",
    //     playerCountry:"",
    //     Jerseyyno:""
    // });
    const[userErr,setUserErr]=useState({
        firstnameError:false,
        lastnameError:false
    });
   
    // const [player,setPlayer]=useState([]);
    // const[s,setS]=useState([]);
    // // const[condn,setCondn]=useState(true);
    // // const [arr,setArr]=useState([])
    // const arrays=["Player name","Player age", "Player Country","JerseyyNo"];
    
//     useEffect(()=>{
// axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then((response)=>{
//     let body=[];
//     for (let key in response.data){
//         body.push(response.data[key]);
//     }
//     setPlayer(body);
//     setS(body);
//     console.log("aaaaaaaaaaaaa");
// })
//     },[])

//             const handle=(e)=>{
//         e.preventDefault();
//         if(user.playername===""||user.playerAge===""||user.Jerseyyno===""||user.playerCountry===""){
//             // setUserErr({...userErr,
//             //     firstnameError:true

//             // });
//             return;
//         }
//         // if(user.lastname===""){
//         //     setUserErr({...userErr,
//         //         lastnameError:true

//         //     });
//         //     return;
//         // }
//         else{
//         axios.post("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json",{
//            playername: user.playername,
//           playerage: user.playerage,
//           playerCountry: user.playerCountry,
//           Jerseyyno: user.Jerseyyno,
          
//         }).then((response)=>{
        
       
//         }).catch((error=>{
//             console.log(error);
//         }))
        
//         setS([...s,{
//           playername:user.playername,
//        playerAge:  user.playerAge,
//        playerCountry:user.playerCountry,
//        Jerseyyno:user.Jerseyyno
//        }])
//        console.log(s,"abc");
//       setUser({
//         playername:"",
//         playerage:"",
//         playerCountry:"",
//         Jerseyyno:""
//       })
//     }
// }
  return (
    <div>
    <form onSubmit={handle}>
    <label>PlayerName</label>
    <br/>
      <input type="text" name="name" id="" value={user.playername} onChange={(e)=>{setUser({
        ...user,playername:e.target.value
      })}} />
      <br/>
      {/* {firstnameError?<span style={{color:'red'}}>Enter letters only</span>:<span></span>} */}
      <label>PlayerAge</label>
    <br/>
      <input type="number" name="age" id="" value={user.playerage} onChange={(e)=>{setUser({
        ...user,playerage:e.target.value
      })}} />
      <br/>
      <label>PlayerCountry</label>
    <br/>
      <input type="text" name="country" id="" value={user.playerCountry} onChange={(e)=>{setUser({
        ...user,playerCountry:e.target.value
      })}} />
      <br/>
      <label>JerSeyNo</label>
    <br/>
      <input type="number" name="jno" id="" value={user.Jerseyyno} onChange={(e)=>{setUser({
        ...user,Jerseyyno:e.target.value
      })}} />
      <br/>
      {/* {firstnameError ?<span style={{color:'red'}}>Enter letters only</span>:<span></span>} */}
      <br/>
      <input type="submit" className='btn btn-primary' value="submit" />
      </form>
      <CustomTable headingDetails ={arrays} tableContent={s}/>
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
//     useEffect(()=>{
//         console.log("aaaaaaasssssssssss");
//         if(!condn){
//         axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then((response)=>{
//             let body=[];
//             for (let key in response.data){
//                 body.push(response.data[key]);
//             }
//             console.log(body,"rishabh");
//             setPlayer(body);
//             console.log("hey manav");
            
//         })
//     }
// else{
//     setCondn(false);
// }
//             },[arr])