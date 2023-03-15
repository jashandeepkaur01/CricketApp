import { useSelector } from 'react-redux';
import React from 'react'
import { useState, useEffect } from 'react';
import CustomTable from 'Components/Cells/customTable';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import CallingTeamModal from 'Components/Cells/callingTeamModal';


function SelectTeam() {
  const [showModal, setShowModal] = useState(false);

  const [players, setPlayers] = useState([]);
  const [captain,setCaptain]=useState([]);

   const data=useSelector((state)=>state.data.players)



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
      <CallingTeamModal visible={showModal} showModal={showModal} setShowModal={setShowModal} title="Team Selection" allPlayers={data} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain ={captain} setCaptain={setCaptain}/>
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={data} />
    </div>
  )
}

export default SelectTeam











