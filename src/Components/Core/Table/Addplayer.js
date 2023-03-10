import React from 'react'
import {Modal} from '../../Custom Components/customModal/Modal'
import {useState,useEffect} from 'react'
import axios from 'axios'
import Form from './Form'
import CustomTable from 'Components/Custom Components/customTable/Table';
function Addplayer() {
    const[showModal,setShowModal]=useState(false);
    const[user,setUser]=useState({
      playername:"",
      playerage:"",
      playerCountry:"",
      Jerseyyno:""
  });
  const[userErr,setUserErr]=useState({
    playernameErr:false,
    playerageErr:false,
    playerCountryErr:false,
    JerseyynoErr:false
});
  const [player,setPlayer]=useState([]);
  const[s,setS]=useState([]);
  // const[condn,setCondn]=useState(true);
  // const [arr,setArr]=useState([])
  const letterregex=/^[A-Za-z]{1,}$/;
  
  
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
    console.log("auuuuuuuuuuuuuuu");
      e.preventDefault(); 

      if(user.playername==""){
          setUserErr({...userErr,
            playernameErr:false
             
          });
          setShowModal(true);
          return;
      }
      else if(user.playerCountry==""){
        setUserErr({...userErr,
          playerCountryErr:false
           
        });
        setShowModal(true);
        return;
    }
     
      if(userErr.playernameErr){
        return;
      }
      else if(userErr.playerCountryErr){
        return;
      }
      else{
        setShowModal(!showModal);
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
      console.log("bikeeeee");
        setShowModal(!showModal);
    }
  return (
    <div>
    {/* <button onClick={handleClick}>AddPlayer</button> */}
  <Modal title="Modals" visible={showModal} toggleModal={handleClick}>
   <Form user={user} setUser={setUser} handle={handle} userErr={userErr} setUserErr={setUserErr}/>
    </Modal>
    <CustomTable headingDetails ={arr} tableContent={s} handleClick={handleClick}/>
    </div>
  )
}

export default Addplayer
