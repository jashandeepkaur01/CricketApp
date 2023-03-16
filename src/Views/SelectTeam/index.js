import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'Components/Cells/customTable';
import CustomModal from 'Components/Atoms/customModal';
import TeamForm from 'Components/Cells/addTeamForm';
import { Button } from 'react-bootstrap';
import { addTeamData } from 'Redux/Actions/loginActions';


function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState([]);


  const dispatch = useDispatch();

  const data=useSelector((state)=>state.loginReducer.players)
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",

  })

  const handleShow = () => setShowModal(true);

  const submitModal = () => {
    dispatch(addTeamData({...teamData}));
    setShowModal(false);
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Team
      </Button>
      <CustomModal footer={true} header={true} visible={showModal} showModal={showModal} setShowModal={setShowModal} title={"Team Selection"} onSubmitModal={submitModal}>
        <TeamForm allPlayers={data} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
      </CustomModal>
      {/* <CallingTeamModal visible={showModal} showModal={showModal} setShowModal={setShowModal} title="Team Selection" allPlayers={data} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain ={captain} setCaptain={setCaptain}/> */}
      <CustomTable headingDetails={['JerseyNo', 'PlayerCountry', 'playerage', 'playername']} tableContent={data} />
    </div>
  )
}

export default SelectTeam











