import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "Components/Atoms/customModal";
import TeamForm from "Components/Cells/addTeamForm";
import { Button } from "react-bootstrap";
import { addTeamData } from "Redux/Actions/loginActions";
import { updatePlayersTeam } from "Redux/Actions/updateTeamActions";
import {useHistory} from "react-router-dom";
import Select from "react-select";
function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState([]);
  const [captain, setCaptain] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);
  const [uniqueTeams, setUniqueTeams] = useState([]);
  const [team, setTeam] = useState("");
  const [oppTeam, setOppTeam] = useState("");
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

  const [options, setOptions] = useState([]);
  const navigate = useHistory();

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

    const playerLoggedInData = useSelector(
    (state) => state.loginReducer.token
  )[0];
  console.log("LoginData", playerLoggedInData);
  console.log("LoginData teamNames.....", playerLoggedInData.Team);
  useEffect(() => {
    setTeamPlayers(playerLoggedInData.Team);
  }, [playerLoggedInData]);

  const [teamData, setTeamData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",
  });

  const handleShow = () => setShowModal(true);

  const submitModal = () => {
    console.log("teamName.........",teamData.teamName);
    console.log("teamtype...",teamData.teamType)

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
    setShowModal(false);
  }
  };

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

  console.log("data of players", data);
  return (
    <>
      <div className="container text-center w-50 border bg-light">
        <h2 className="">Select Team</h2>
        <b>
          <p className="d-flex text-lg-left text-success fs-3">
            {playerLoggedInData.Name}
          </p>
        </b>
        <br />
        <Select
          className=" text-center"
          options={playerLoggedInData.Team}
          onChange={handleInputChange1}
          value={team}
        />
        <br />
        <div className="d-flex justify-content-around">
          <Button variant="success" onClick={handleShow}>
            Add Team
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
        </div>{" "}
        <br />
      </div>
      <div className="container text-center w-50 border  bg-light">
        <h2 className="">Opponent Team</h2>
        <Select
          className=" text-center"
          options={uniqueTeams}
          onChange={handleInputChange2}
          value={oppTeam}
        />
        <br />
        <div className="d-flex justify-content-around">
          <Button variant="success" onClick={()=>navigate.push("/scheduleMatch")}>Next</Button>
        </div>{" "}
        <br />
      </div>
    </>
  );
}
export default SelectTeam;
