import { useEffect, useState } from 'react';

import CustomTable from 'Components/Cells/customTable';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import CallingTeamModal from 'Components/Cells/callingTeamModal';


function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [allplayers, setAllPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState('');

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
      <CallingTeamModal visible={showModal} showModal={showModal} setShowModal={setShowModal} title="Team Selection" allPlayers={allplayers} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={allplayers} />
    </div>
  )
}

export default SelectTeam