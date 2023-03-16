import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import { useState } from 'react';
import { postdata } from 'Redux/Actions/loginActions';
import CustomTable from 'Components/Cells/customTable';

import { Button } from 'react-bootstrap';


import CustomModal from 'Components/Atoms/customModal';
import TeamForm from 'Components/Cells/addTeamForm';


function SelectTeam() {
  const [showModal, setShowModal] = useState(false);

  const [players, setPlayers] = useState([]);
  const [captain,setCaptain]=useState([]);

   const data=useSelector((state)=>state.data.players)
   const dispatch = useDispatch()


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
      <CustomModal footer={true} header={true} visible={showModal} showModal={showModal} setShowModal={setShowModal} title={"Team Selection"} onSubmitModal={()=>dispatch(postdata(teamData))}>
                <TeamForm allPlayers={data} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
            </CustomModal>
   
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={data} />
    </div>
  )
}

export default SelectTeam











