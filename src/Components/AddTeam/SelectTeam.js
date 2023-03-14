import React from 'react'
import { useState ,useEffect} from 'react';
import { Modal } from 'Components/Custom Components/customModal/Modal';
import TeamForm from './TeamForm';
import CustomTable from 'Components/Custom Components/customTable/Table';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { postdata } from 'Redux/Actions/Postaction';
import { teamData,setTeamData } from 'Redux/Reducers/postDataReducer';

function SelectTeam() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [allplayers, setAllPlayers] = useState([]);
    const [players,setPlayers] = useState([]);
    const [captain,setCaptain]=useState([])
    useEffect(() => {
      let s = [];
      axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json").then(val => {

          for (let key in val.data) {
              s.push({...val.data[key],key:key});

            
          }
          setAllPlayers(s)
      })
      let playerHeading = [];
      for (let heading of allplayers) {
       
      }
  }, [])
console.log(allplayers)



   



    const handleClick = () => {
        setShowModal(!showModal);
      };

    // const handleSubmitModal=(data)=>{
     

    // }


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
      
      <Modal visible={showModal} title="Team Selection" toggleModal={handleClick} onSubmitModal={()=>dispatch(postdata(teamData))}>
          <TeamForm allPlayers={allplayers} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain ={captain} setCaptain={setCaptain}/>
      </Modal>
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={allplayers} />
    </div>
  )
}

export default SelectTeam