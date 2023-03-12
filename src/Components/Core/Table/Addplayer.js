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
      playerPhoneNo:"",
      playerage:"",
      playerCountry:"",
      Jerseyyno:"",
      sixes:0,
      fours:0,
      Fiftys:0,
      Hundreds:0,
      avgscore:0,
      iningsplayed:0,
      score:0
  });
  const[userErr,setUserErr]=useState({
    playernameErr:false,
    playerPhonenoErr:false,
    playerageErr:false,
    playerCountryErr:false,
    JerseyynoErr:false,
});
  const [player,setPlayer]=useState([]);
  const[s,setS]=useState([]);
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
      if(user.playerPhoneNo==null){
        setUserErr({...userErr,playerPhonenoErr:true});
        setShowModal(true);
      }
      if(user.playername==""){
          setUserErr({...userErr,
            playernameErr:false
             
          });
          setShowModal(true);
          return;
      }
       if(user.playerCountry==""){
        setUserErr({...userErr,
          playerCountryErr:false
           
        });
        setShowModal(true);
        return;
    }
     
      if(userErr.playernameErr){
        return;
      }
      else if(userErr.playerPhonenoErr){
        return;
      }
      else if(userErr.playerageErr){
        return;
      }
      else if(userErr.playerCountryErr){
        return;
      }
      else{
        setShowModal(!showModal);
        console.log()
      axios.post("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json",{
         playername: user.playername,
        playerCountry: user.playerCountry,
        Jerseyyno: user.Jerseyyno,
        playerAge:user.playerage,
        sixes:user.sixes,
        playerPhoneno:user.playerPhoneNo,
        fours:user.fours,
        iningsplayed:user.iningsplayed,
        Fiftys:user.Fiftys,
        Hundreds:user.Hundreds,
        score:user.score,
        averagescore:user.avgscore
        
      }).then((response)=>{
      
     
      }).catch((error=>{
          console.log(error);
      }))
      
      setS([...s,{
        playername: user.playername,
        playerPhoneno:user.playerPhoneNo,
        playerAge:user.playerage,
        Jerseyyno: user.Jerseyyno,
        playerCountry: user.playerCountry,
        sixes:user.sixes,
        fours:user.fours,
        Fiftys:user.Fiftys,
        Hundreds:user.Hundreds,
        score:user.score,
        averagescore:user.avgscore,
        iningsplayed:user.iningsplayed

     }])
     console.log(s,"abc");
    setUser({
      playername:"",
      playerPhoneNo:"",
      playerage:"",
      Jerseyyno:"",
      playerCountry:"",
      sixes:0,
      fours:0,
      Fiftys:0,
      Hundreds:0,
      score:0,
      avgscore:0,
      iningsplayed:0
    })
   
  }
}
    const arr=["Player name","Player PhoneNo", "Player Age","JerseyyNo","PlayerCountry","sixes","fours","fiftys","Hundreds","Score","Avg score","inings played"];
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
