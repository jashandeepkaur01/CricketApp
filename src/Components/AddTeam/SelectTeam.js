import React from 'react'
import { useState, useEffect } from 'react';
import TeamForm from './TeamForm';
import CustomTable from 'Components/Core/customTable';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import CustomModal from '../Core/customModal'


function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [allplayers, setAllPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [captain,setCaptain]=useState([]);

  useEffect(() => {
    let s = [];
    axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then(val => {

      for (let key in val.data) {
        s.push(val.data[key]);
        console.log(s);
      }
      setAllPlayers(s)
    })

    let playerHeading = [];
    for (let heading of allplayers) {
      console.log(heading, 'heading');
    }
  }, [])




  const [teamData, setTeamData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",

  })

  const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Team
      </Button>
      <CustomModal visible={showModal} showModal={showModal} setShowModal={setShowModal} title="Team Selection">
         <TeamForm allPlayers={allplayers} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain ={captain} setCaptain={setCaptain}/>    
      </CustomModal>
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={allplayers} />
    </div>
  )
}

export default SelectTeam












// import React from 'react'
// import { useState ,useEffect} from 'react';
// import TeamForm from './TeamForm';
// import { Button } from 'react-bootstrap';
// import CustomModal from '../Core/customModal'
// import CustomTable from 'Components/Custom Components/customTable/Table';
// import axios from 'axios';
// function SelectTeam() {
//     const [showModal, setShowModal] = useState(false);
//     const [allplayers, setAllPlayers] = useState([]);
//     const [players,setPlayers] = useState([]);
//     const [captain,setCaptain]=useState([])

    
//     useEffect(() => {
//       let s = [];
//       axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then(val => {

//           for (let key in val.data) {
//               s.push({...val.data[key],key:key});

            
//           }
//           setAllPlayers(s)
//       })
//       let playerHeading = [];
//       for (let heading of allplayers) {
       
//       }
//   }, [])




//     const [teamData,setTeamData] = useState({
//         teamName:"",
//         teamType:"",
//         teamPlayers:[],
//         teamCaptain:"",
        
//     })



//     const handleClick = () => {
//         setShowModal(!showModal);
//       };

//     const handleSubmitModal=(data)=>{
     

//     }


//   return (
//     <div>
//           <Button variant="primary" onClick={handleShow}>
//         Add Team
//       </Button>
//       
//     </div>
//   )
// }

// export default SelectTeam