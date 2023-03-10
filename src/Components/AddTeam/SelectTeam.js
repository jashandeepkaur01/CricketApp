import React from 'react'
import { useState ,useEffect} from 'react';
import { Modal } from 'Components/Custom Components/customModal/Modal';
import TeamForm from './TeamForm';
import CustomTable from 'Components/Custom Components/customTable/Table';
import axios from 'axios';
function SelectTeam() {
    const [showModal, setShowModal] = useState(false);
    const [allplayers, setAllPlayers] = useState([]);
    const [players,setPlayers] = useState([]);
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




    const [teamData,setTeamData] = useState({
        teamName:"",
        teamType:"",
        teamPlayers:[],
        teamCaptain:"",
        
    })



    const handleClick = () => {
        setShowModal(!showModal);
      };

    const handleSubmitModal=(data)=>{
        console.log("Submitted")
        console.log("data ",data)

    }


  return (
    <div>
        <button
        type="button"
        id="btn"
        class="btn btn-outline-primary"
        onClick={handleClick}
      >
        Select Team
      </button>
      <Modal visible={showModal} title="Team Selection" toggleModal={handleClick} onSubmitModal = {handleSubmitModal}>
          <TeamForm teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers}/>
      </Modal>
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={allplayers} />
    </div>
  )
}

export default SelectTeam