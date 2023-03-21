import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "Components/Atoms/customModal";
import TeamForm from "Components/Cells/addTeamForm";
import { Button } from "react-bootstrap";
import { addTeamData, getData } from "Redux/Actions/loginActions";
import { updatePlayersTeam } from "Redux/Actions/updateTeamActions";

import Select from "react-select";
import { useHistory } from "react-router-dom";

function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [captain, setCaptain] = useState([]);
  const [uniqueTeams, setUniqueTeams] = useState([]);
  const [team, setTeam] = useState("");
  const [oppTeam, setOppTeam] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useHistory();
  const [err1,setErr1] = useState("");
  const [showErr1,setShowErr1] = useState(false);
  const [err2,setErr2] = useState("");
  const [showErr2,setShowErr2] = useState(false);
  const [err3,setErr3] = useState("");
  const [showErr3,setShowErr3] = useState(false);
  const [err4,setErr4] = useState("");
  const [showErr4,setShowErr4] = useState(false);

  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.loginReducer.players);
  let teamsData = useSelector((state) => state.loginReducer.teams);
  const playerLoggedIn = useSelector(
    (state) => state.loginReducer.loggedInPlayer
  );

  const playerLoggedInData = data.find(player=>{
    return player.key === playerLoggedIn.key;
  })
  console.log('playerLoggedIN teams....',playerLoggedInData.Team)
  const loggedInPlayer = {
    label: playerLoggedInData.Name,
    value: playerLoggedInData.Name,
    key: playerLoggedInData.key,
  };
  const [players, setPlayers] = useState([loggedInPlayer]);
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",
  });
  console.log("logged in player key....", playerLoggedInData);
  const remainingPlayersData = data.filter((playerData) => {
    if (playerLoggedInData.key !== playerData.key) return playerData;
  });
  console.log("players...", players);
  const handleShow = () => setShowModal(true);

  const submitModal = () => {
    if(((teamData.teamName).length === 0) || ((teamData.teamType).length === 0) || ((teamData.teamPlayers).length <3) || ((teamData.teamCaptain).length == 0))
    {
      if((teamData.teamName).length == 0)
      {
        setErr1("Field is required")
        setShowErr1(true);
      }
      else if((teamData.teamType).length == 0)
      {
        setErr2("Field is required")
        setShowErr2(true);
      }
      else if((teamData.teamPlayers).length < 3)
      {
        setErr3("atleast 3 players required")
        setShowErr3(true);
      }
      else if((teamData.teamCaptain).length == 0)
      {
        setErr4("Field is required")
        setShowErr4(true);
      }
      return false;
    }
    else{
    let playersInTeam = [playerLoggedInData.key];
    playersInTeam = playersInTeam.concat(players.map((player) => player.key)); // selected players keys
    const selectedPlayersData = playersInTeam.map((k) => {
      for (let playerData of data) {
        if (k === playerData.key) {
          return playerData;
        }
      }
    });
    const selectedTeam = teamData.teamName;
    let playersInTeamObj = {};
    playersInTeamObj[selectedTeam] = selectedPlayersData;
    dispatch(updatePlayersTeam(playersInTeamObj));
    dispatch(addTeamData({ ...teamData }));
    setTimeout(()=>{
      dispatch(getData([]));
    },1000);
    console.log("playerLoggedinData...", playerLoggedInData.Team);
    setShowModal(false);
  }
  };
  useEffect(() => {
    let teamNames = teamsData.map((e) => {
      return e.teamName;
    });

    teamNames = [...new Set(teamNames)];
    const options = teamNames.map((e) => {
      return {
        label: `${e}`,
        value: `${e}`,
      };
    });
    setOptions(options);
  }, []);

  const handleInputChange1 = (selectedValue) => {
    const teamNames = options;

    setTeam(selectedValue);

    const filteredItems = teamNames.filter(
      (e, index) => e.value.search(selectedValue.value) === -1
    );
    console.log({ filteredItems });
    setUniqueTeams(filteredItems);
  };
  const handleInputChange2 = (selectedValue) => {
    setOppTeam(selectedValue);
  };

  return (
    <div>
      {/* <CustomModal
        footer={true}
        header={true}
        visible={showModal}
        showModal={showModal}
        setShowModal={setShowModal}
        title={"Add New Team"}
        onSubmitModal={submitModal}
      >
        <TeamForm
          allPlayers={remainingPlayersData}
          teamData={teamData}
          setTeamData={setTeamData}
          players={players}
          setPlayers={setPlayers}
          captain={captain}
          setCaptain={setCaptain}
        />
      </CustomModal> */}
      <div className="container selectTeamWrapper text-left bg-light rounded border-dark pb-5">
        <div className="d-flex justify-content-between mt-3 pt-4 pb-5">
          <h3 className="">Select Your Team</h3>
          <Button variant="btn btn-outline-primary" onClick={handleShow}>
            Make a New Team
          </Button>
          <CustomModal
            footer={true}
            header={true}
            visible={showModal}
            showModal={showModal}
            setShowModal={setShowModal}
            title={"Add New Team"}
            onSubmitModal={submitModal}
          >
            <TeamForm
              allPlayers={data}
              teamData={teamData}
              setTeamData={setTeamData}
              players={players}
              setPlayers={setPlayers}
              captain={captain}
              setCaptain={setCaptain}
              Error1 = {err1}
              teamNameErr = {showErr1}
              setTeamErr = {setShowErr1}
              Error2 = {err2}
              teamTypeErr = {showErr2}
              setTeamTypeErr ={setShowErr2}
              Error3 ={err3}
              playerErr = {showErr3}
              setPlayerErr = {setShowErr3}
              Error4 = {err4}
              captainErr = {showErr4}
              setCaptainErr = {setShowErr4}
            
            />
          </CustomModal>
        </div>
        <Select
          className="text-center"
          options={playerLoggedInData.Team}
          onChange={handleInputChange1}
          value={team}
        />
        <br />
        <p className="text-center">VS</p>
        <h3 className="pt-3">Select Your Opponent's Team</h3>

        {/* <div className="d-flex justify-content-around">
          <Button variant="success" onClick={handleShow}>
            Add Team
          </Button>
          
        </div>{" "} */}
        {/* <br /> */}
        <Select
          className=" text-center"
          options={uniqueTeams}
          onChange={handleInputChange2}
          value={oppTeam}
        />
        <div className="text-center mt-5">
          <Button
            variant="info"
            onClick={() => navigate.push("/scheduleMatch")}
          >
            Start a Match
          </Button>
        </div>
    </div>
    </div>
  );
}

export default SelectTeam;
