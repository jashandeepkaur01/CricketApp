import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'Components/Cells/customTable';
import CustomModal from 'Components/Atoms/customModal';
import TeamForm from 'Components/Cells/addTeamForm';
import { Button } from 'react-bootstrap';
import { addTeamData } from 'Redux/Actions/loginActions';
import { updatePlayersTeam } from 'Redux/Actions/updateTeamActions';


function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState([]);

  var mainPlayerKey;
  const dispatch = useDispatch();

  const data = useSelector((state) => state.loginReducer.players)
  const playerLoggedInData = useSelector((state) => state.loginReducer.token)[0];
  // console.log(playerLoggedInData);
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",

  })

  const handleShow = () => setShowModal(true);

  const submitModal = () => {
    console.log(playerLoggedInData);
    console.log('select Team Players....', players);
    let playersInTeam = [playerLoggedInData.key]
    playersInTeam = playersInTeam.concat(players.map(player=>player.key)) // selected players keys
    const selectedPlayersData = playersInTeam.map(k=>{
      for(let playerData of data){
        if(k === playerData.key){
          // console.log('selected Player Data: ',playerData)
          return playerData;
        }
      }
    })

    // console.log('selectedPlayersData......................',selectedPlayersData);

    const selectedTeam = teamData.teamName;
    let playersInTeamObj = {}
    playersInTeamObj[selectedTeam] = selectedPlayersData;
    // mainPlayerKey = playersInTeam[0];
    dispatch(updatePlayersTeam(playersInTeamObj));
    console.log('players selected key', playersInTeam);
    dispatch(addTeamData({ ...teamData }));
    setShowModal(false);

  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Team
      </Button>
      <CustomModal footer={true} header={true} visible={showModal} showModal={showModal} setShowModal={setShowModal} title={"Add New Team"} onSubmitModal={submitModal}>
        <TeamForm allPlayers={data} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
      </CustomModal>
      {/* <CallingTeamModal visible={showModal} showModal={showModal} setShowModal={setShowModal} title="Team Selection" allPlayers={data} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain ={captain} setCaptain={setCaptain}/> */}
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={data} />
    </div>
  )
}

export default SelectTeam











