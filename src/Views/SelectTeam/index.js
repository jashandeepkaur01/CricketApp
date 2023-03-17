import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomTable from 'Components/Cells/customTable';
import CustomModal from 'Components/Atoms/customModal';
import TeamForm from 'Components/Cells/addTeamForm';
import { Button } from 'react-bootstrap';
import { addTeamData } from 'Redux/Actions/loginActions';
import { updatePlayersTeam } from 'Redux/Actions/updateTeamActions';
import Select from 'react-select';


function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState([]);
  const [teamPlayers,setTeamPlayers] = useState([]);
  const[removeDupTeams,setDupTeams]=useState([]);
 
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loginReducer.players)
  let teamsData=useSelector((state)=>state.loginReducer.teams);
  let teamNames=[];
  
  const playerLoggedInData = useSelector((state) => state.loginReducer.token)[0];
  console.log("LoginData",playerLoggedInData);
  console.log("LoginData teamNames.....",playerLoggedInData.Team);
  useEffect(() => {
    setTeamPlayers(playerLoggedInData.Team)
  


  },[playerLoggedInData])

  useEffect(()=>{
    console.log(teamsData,"teamData is..........")
    for(let i of teamsData){
      teamNames.push(i.teamName);
      teamNames=[... new Set(teamNames)];
      console.log(teamNames,"uniq")
      setDupTeams(teamNames);
      console.log(removeDupTeams)
    }
    
  },[])
  
  const [teamData, setteamsData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",

  })

  const handleShow = () => setShowModal(true);

  const submitModal = () => {
    let playersInTeam = [playerLoggedInData.key]
    console.log('logged in as ...',playersInTeam);
    playersInTeam = playersInTeam.concat(players.map(player=>player.key)) // selected players keys
    const selectedPlayersData = playersInTeam.map(k=>{
      for(let playerData of data){
        if(k === playerData.key){
          return playerData;
        }
      }
    })

    const selectedTeam = teamsData.teamName;
    let playersInTeamObj = {}
    playersInTeamObj[selectedTeam] = selectedPlayersData;
    dispatch(updatePlayersTeam(playersInTeamObj));
    dispatch(addTeamData({ ...teamsData }));
    setShowModal(false);

  }

let Teams=[];

let j =0
for(let i of teamPlayers){
  Teams[j] = {"value":i,"label":i}
  j++;
}


let OppTeam = [];
let k =0;

const handleInputChange=(e)=>{
 teamNames=teamNames.filter((e,index)=>e.indexOf===index);
console.log(teamNames)

console.log("data of players",data)
  return (
    <>
      <div className='container text-center w-50 border bg-light'>
      <h2 className=''>Select Team</h2>
      <b><p className='d-flex text-lg-left text-success fs-3'>{playerLoggedInData.Name}</p></b><br/>
      <Select className=' text-center' options={Teams} onChange = {handleInputChange} value={} /><br/>
      <div className="d-flex justify-content-around"><Button variant="success" onClick={handleShow}>
        Add Team
      </Button>
      
      <CustomModal footer={true} header={true} visible={showModal} showModal={showModal} setShowModal={setShowModal} title={"Add New Team"} onSubmitModal={submitModal}>
        <TeamForm allPlayers={data} teamsData={teamsData} setteamsData={setteamsData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
      </CustomModal>  
      <Button variant='success'>Next</Button>
      </div>  <br/>
    </div>
    <div className='container text-center w-50 border  bg-light'>
      <h2 className=''>Select Team</h2>
      {/* <b><p className='d-flex text-lg-left text-success fs-3'>{playerLoggedInData.Name}</p></b><br/> */}
      <Select className=' text-center' options={OppTeam} onChange = {handleInputChange} /><br/>
      <div className="d-flex justify-content-around"><Button variant="success" onClick={handleShow}>
        Add Team
      </Button>
      
      <CustomModal footer={true} header={true} visible={showModal} showModal={showModal} setShowModal={setShowModal} title={"Add New Team"} onSubmitModal={submitModal}>
        <TeamForm allPlayers={data} teamsData={teamsData} setteamsData={setteamsData} players={players} setPlayers={setPlayers} captain={captain} setCaptain={setCaptain} />
      </CustomModal>  
      <Button variant='success'>Next</Button>
      </div>  <br/>
    </div>
    </>
  )
}
}

export default SelectTeam










