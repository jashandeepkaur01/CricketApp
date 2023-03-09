import React from 'react'
import {Modal} from './Modal'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Form from './Form'
import CustomTable from 'Components/Custom Components/Table/Table';
function Addplayer() {
    const[showModal,setShowModal]=useState(false);
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
    const arr=["Player name","Player age", "Player Country","JerseyyNo"];
    console.log(showModal);
    const handleClick=()=>{
        setShowModal(!showModal);
    }
  return (
    <div>
    {/* <button onClick={handleClick}>AddPlayer</button> */}
  <Modal title="Modals" visible={showModal} toggleModal={handleClick}>
   <Form user={user} setUser={setUser} handle={handle}/>
    </Modal>
    <CustomTable headingDetails ={arr} tableContent={s} handle={handleClick}/>
    </div>
  )
}

export default Addplayer
