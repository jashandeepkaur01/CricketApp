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
          allPlayers={remainingPlayersData}
          teamData={teamData}
          setTeamData={setTeamData}
          players={players}
          setPlayers={setPlayers}
          captain={captain}
          setCaptain={setCaptain}
        />
      </CustomModal>
      <div className="container selectTeamWrapper text-left bg-light rounded border-dark pb-5">
        <div className="d-flex justify-content-between mt-3 pt-4 pb-5">
          <h3 className="">Select Your Team</h3>
          <Button variant="btn btn-outline-primary" onClick={handleShow}>
            Make a New Team
          </Button>
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
        <Select
          className="text-center"
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
