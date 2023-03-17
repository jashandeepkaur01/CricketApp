import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'Components/Cells/customTable';
import CustomModal from 'Components/Atoms/customModal';
import TeamForm from 'Components/Cells/addTeamForm';
import { Button } from 'react-bootstrap';
import { addTeamData } from 'Redux/Actions/loginActions';
import Select from "react-select";

function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState([]);
  const playerLoggedInData = useSelector((state) => state.loginReducer.token)[0];
  console.log(playerLoggedInData);

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


const Teams = [
 {value:"RCB", label:"RCB"},
 {value:"ABC",label:"ABC"}


]
console.log("data of players",data)
  return (
    <div>
      
      <div className='container text-center w-50 border bg-light'>
      <h2 className=''>Select Team</h2>
      <b><p className='d-flex text-lg-left text-success fs-3'>{playerLoggedInData.Name}</p></b><br/>
      <Select className=' text-center' options={Teams} /><br/>
      <div className="d-flex justify-content-around"><Button variant="success" onClick={handleShow}>
        Add Team
      </Button><br/>
      <CustomModal footer={true} header={true} visible={showModal} showModal={showModal} setShowModal={setShowModal} title={"Team Selection"} onSubmitModal={submitModal}>
        <TeamForm allPlayers={data} teamData={teamData} setTeamData={setTeamData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
      </CustomModal>
      <Button variant="success"><i class="bi bi-forward"></i></Button><br/></div><br/>

      

      </div>
    
    </div>
  )
}

export default SelectTeam











