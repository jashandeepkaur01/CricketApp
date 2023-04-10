import NewTeamAdded from "Components/Atoms/NewTeamAdded";
import CustomModal from "Components/Atoms/customModal";
import TeamForm from "Components/Cells/addTeamForm";
import { addMatchData } from "Redux/Actions/matchActions";
import { getData } from "Redux/Actions/playerActions";
import { addTeamData } from "Redux/Actions/teamActions";
import { updatePlayersTeam } from "Redux/Actions/updateTeamActions";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Select from "react-select";

function SelectTeam() {
  const [showModal, setShowModal] = useState(false);
  const [captain, setCaptain] = useState([]);
  const [uniqueTeams, setUniqueTeams] = useState([]);
  const [team, setTeam] = useState("");
  const [oppTeam, setOppTeam] = useState("");
  const [options, setOptions] = useState([]);
  const navigate = useHistory();
  const [err1, setErr1] = useState("");
  const [showErr1, setShowErr1] = useState(false);
  const [err2, setErr2] = useState("");
  const [showErr2, setShowErr2] = useState(false);
  const [err3, setErr3] = useState("");
  const [showErr3, setShowErr3] = useState(false);
  const [err4, setErr4] = useState("");
  const [showErr4, setShowErr4] = useState(false);
  const [isNewTeamAdded, setIsNewTeamAdded] = useState(false);
  const [team1Players, setTeam1Players] = useState([]);
  const [team2Players, setTeam2Players] = useState([]);
  const [selectedTeam1Players, setSelectedTeam1Players] = useState([]);
  const [selectedTeam2Players, setSelectedTeam2Players] = useState([]);
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",
  });
  const [newTeam, setNewTeam] = useState('');
  const dispatch = useDispatch();

  const data = useSelector((state) => state.player.players);
  let teamsData = useSelector((state) => state.team.teams);
  const playerLoggedIn = useSelector((state) => state.login.loggedInPlayer);
  const playerLoggedInData = data.find(player => {
    return player.key === playerLoggedIn.key;
  })
  const loggedInPlayer = {
    label: playerLoggedIn?.Name,
    value: playerLoggedIn?.Name,
    key: playerLoggedIn?.key,
  };
  const [players, setPlayers] = useState([loggedInPlayer]);

  // const remainingPlayersData = data.filter((playerData) => {
  //   if (playerLoggedInData.key !== playerData.key) return playerData;
  // });
  const handleShow = () => setShowModal(true);

  const submitModal = () => {
    if (((teamData.teamName).length === 0) || ((teamData.teamType).length === 0) || ((teamData.teamPlayers).length < 3) || ((teamData.teamCaptain).length === 0)) {
      if ((teamData.teamName).length === 0) {
        setErr1("Field is required")
        setShowErr1(true);
      }
      if ((teamData.teamType).length === 0) {
        setErr2("Field is required")
        setShowErr2(true);
      }
      if ((teamData.teamPlayers).length < 3) {
        setErr3("atleast 3 players required")
        setShowErr3(true);
      }
      if ((teamData.teamCaptain).length === 0) {
        setErr4("Field is required")
        setShowErr4(true);
      }
      return false;
    }
    else {
      let playersInTeam = [playerLoggedInData.key];
      playersInTeam = playersInTeam.concat(players.map((player) => player.key));
      const selectedPlayersData = playersInTeam.map((k) => {
        for (let playerData of data) {
          if (k === playerData.key) {
            return playerData;
          }
        }
      });
      const selectedTeam = teamData.teamName;
      setNewTeam(selectedTeam);
      let playersInTeamObj = {};
      playersInTeamObj[selectedTeam] = selectedPlayersData;
      dispatch(updatePlayersTeam(playersInTeamObj));
      dispatch(addTeamData({ ...teamData }));
      setTimeout(() => {
        dispatch(getData([]));
      }, 1000);
      setIsNewTeamAdded(true);
      setShowModal(false);
      setTeamData({
        teamName: "",
        teamType: "",
        teamPlayers: [],
        teamCaptain: "",
      })
    }
    setTimeout(() => {
      setIsNewTeamAdded(false);
    }, 2000);
  };

  useEffect(() => {
    dispatch(getData([]));
  }, [])

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

  }, [teamsData]);

  const handleInputChange1 = (selectedValue) => {
    debugger;
    const teamNames = options;
    const selectedTeam = teamsData.find((e) => e.teamName === selectedValue.value);
    setTeam1Players(selectedTeam.teamPlayers);
    setTeam(selectedValue);
    const filteredItems = teamNames.filter((e) => e.value.search(selectedValue.value) === -1);
    setUniqueTeams(filteredItems);
    setOppTeam('');
  };
  const handleInputChange2 = (selectedValue) => {
    setOppTeam(selectedValue);
    const selectedTeam = teamsData.find((e) => e.teamName === selectedValue.value);
    setTeam2Players(selectedTeam.teamPlayers);

  };
  const handleSelectedPlayers = (players) => {
    console.log(players);
    setSelectedTeam1Players(players || []);
  }
  const handleSelectedPlayers2 = (players) => {
    console.log(players);
    setSelectedTeam2Players(players || []);
  }
  const dateObj = new Date();
  const currentDate = dateObj.getDate() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getFullYear();
  const currBatsmanData = {
    name: '',
    key: '',
    runs: 0,
    ballsPlayed: 0,
    sixes: 0,
    fours: 0,
    centuries: 0,
    doubleCenturies: 0,
    halfCenturies: 0,
    strikeRate: 0,
    out: {
      outStatus: false,
      outByBowler: '',
      outAtBall: 0,
    }
  }
  const inningData = {
    battingTeam: {
      teamName: '',
      totalRuns: 0,
      doubleCenturies: 0,
      centuries: 0,
      halfCenturies: 0,
      sixes: 0,
      fours: 0,
      players: [],
      wkts: 0,
      yetToBat: [],
      fallOfWickets: [],
      currBatters: [currBatsmanData, currBatsmanData]
    },
    bowlingTeam: {
      teamName: '',
      currBowler: {
        name: '',
        wkts: 0,
        WB: 0,
        NB: 0,
        Econ: 0,
        runsConceded: 0,
      },
      bowler: [],
      overs: [],
      currOver: 0,
      currOverBalls: [],
    }
  }
  const startMatchNow = () => {
    const matchData = {
      name: team.label + 'vs' + oppTeam.label,
      date: currentDate,
      status: true,
      isCompleted: false,
      matchOrganiser: playerLoggedIn.key,
      wonBy: '',
      onStrike: 0,
      team1Players: selectedTeam1Players,
      team2Players: selectedTeam2Players,
      inningCount: 0,
      innings: [inningData, inningData],
    }
    // {
    //   battingTeam: {
    //     teamName: '',
    //     totalRuns: 0,
    //     doubleCenturies: 0,
    //     centuries: 0,
    //     halfCenturies: 0,
    //     sixes: 0,
    //     fours: 0,
    //     players: [],
    //     wkts: 0,
    //     yetToBat: [],
    //     fallOfWickets: [],
    //     currBatters: [{
    //       name: '',
    //       key: '',
    //       runs: 0,
    //       ballsPlayed: 0,
    //       sixes: 0,
    //       fours: 0,
    //       hundreds: 0,
    //       doubleCenturies: 0,
    //       halfCenturies: 0,
    //       strikeRate: 0,
    //       out: {
    //         outStatus: false,
    //         outByBowler: '',
    //         outAtBall: 0,
    //       }
    //     }]

    //   },
    //   bowlingTeam: {
    //     teamName: '',
    //     currBowler: {
    //       name: '',
    //       wkts: 0,
    //       WB: 0,
    //       NB: 0,
    //       Econ: 0,
    //       runsConceded: 0,
    //     },
    //     bowler: [],
    //     overs: [],
    //     currOver: 0,
    //     currOverBalls: [],
    //   }
    // }


    // const matchData = {
    //   name: team.label + 'vs' + oppTeam.label,
    //   date: currentDate,
    //   venue: 'Australia',
    //   status: true,
    //   isCompleted: false,
    //   matchOrganiser: playerLoggedIn.key,
    //   wonBy: '',
    //   onStrike: 0,
    //   firstInnings: {
    //     battingTeam: {
    //       teamName: team.label,
    //       totalRuns: 0,
    //       doubleCenturies: 0,
    //       centuries: 0,
    //       halfCenturies: 0,
    //       sixes: 0,
    //       fours: 0,
    //       players: [],
    //       wkts: 0,
    //       yetToBat: [],
    //       fallOfWickets: [],
    //       currBatters: [{
    //         name: '',
    //         key: '',
    //         runs: 0,
    //         ballsPlayed: 0,
    //         sixes: 0,
    //         fours: 0,
    //         hundreds: 0,
    //         doubleCenturies: 0,
    //         centuries: 0,
    //         halfCenturies: 0,
    //         strikeRate: 0,
    //         out: {
    //           outStatus: false,
    //           outByBowler: '',
    //           outAtBall: 0,
    //         }
    //       },
    //       {
    //         name: '',
    //         key: '',
    //         runs: 0,
    //         ballsPlayed: 0,
    //         sixes: 0,
    //         fours: 0,
    //         hundreds: 0,
    //         doubleCenturies: 0,
    //         centuries: 0,
    //         halfCenturies: 0,
    //         strikeRate: 0,
    //         out: {
    //           outStatus: false,
    //           outByBowler: '',
    //           outAtBall: 0,
    //         }
    //       }],
    //     },
    //     bowlingTeam: {
    //       teamName: oppTeam.label,
    //       currBowler: {
    //         name: '',
    //         wkts: 0,
    //         WB: 0,
    //         NB: 0,
    //         Econ: 0,
    //         runsConceded: 0,
    //       },
    //       bowlers: [],
    //       overs: [],
    //       currOver: 0,
    //       currOverBalls: [],
    //     }
    //   },
    //   secondInnings: {
    //     battingTeam: {
    //       teamName: oppTeam.label,
    //       totalRuns: 0,
    //       // totalBalls: '',
    //       doubleCenturies: 0,
    //       centuries: 0,
    //       halfCenturies: 0,
    //       sixes: 0,
    //       fours: 0,
    //       players: [],
    //       wkts: 0,
    //       yetToBat: [],
    //       currBatters: [{
    //         name: '',
    //         key: '',
    //         runs: 0,
    //         ballsPlayed: 0,
    //         sixes: 0,
    //         fours: 0,
    //         hundreds: 0,
    //         doubleCenturies: 0,
    //         centuries: 0,
    //         halfCenturies: 0,
    //         strikeRate: 0,
    //         out: {
    //           outStatus: false,
    //           outByBowler: '',
    //           outAtBall: 0,
    //         }
    //       },
    //       {
    //         name: '',
    //         key: '',
    //         runs: 0,
    //         ballsPlayed: 0,
    //         sixes: 0,
    //         fours: 0,
    //         hundreds: 0,
    //         doubleCenturies: 0,
    //         centuries: 0,
    //         halfCenturies: 0,
    //         strikeRate: 0,
    //         out: {
    //           outStatus: false,
    //           outByBowler: '',
    //           outAtBall: 0,
    //         }
    //       }],
    //     },
    //     bowlingTeam: {
    //       teamName: team.label,
    //       currBowler: {
    //         name: '',
    //         balls: 0,
    //       },
    //       overs: [],
    //       currOver: 0,
    //       currOverBalls: [],
    //     }
    //   }
    // }
    dispatch(addMatchData({
      data: matchData,
      success: (response) => {
        navigate.push("/match/" + response.data.name)
      },
      fail: () => {
        console.warn('Cannot find page...')
      }
    }))

  }

  return (
    <div>
      <div className="position-absolute" style={{ top: '70px', width: '100%' }}>
        {isNewTeamAdded ? <NewTeamAdded teamName={newTeam} /> : null}

      </div>

      <div className="container selectTeamWrapper text-left bg-light rounded border-dark pb-5">
        <div className="d-flex justify-content-between mt-3 pt-4">
          <h3 className="">Select Your Team</h3>
          <Button variant="btn btn-outline-primary mb-2" onClick={handleShow}>
            Make a New Team
          </Button>
          <CustomModal
            footer={true}
            header={true}
            visible={showModal}
            showModal={showModal}
            setShowModal={setShowModal}
            title={"Add New Team"}
            btnText={"Add"}
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
              Error1={err1}
              teamNameErr={showErr1}
              setTeamErr={setShowErr1}
              Error2={err2}
              teamTypeErr={showErr2}
              setTeamTypeErr={setShowErr2}
              Error3={err3}
              playerErr={showErr3}
              setPlayerErr={setShowErr3}
              Error4={err4}
              captainErr={showErr4}
              setCaptainErr={setShowErr4}

            />
          </CustomModal>
        </div>
        <Select
          className="text-center"
          options={playerLoggedInData?.Team}
          onChange={handleInputChange1}
          value={team}
        /><br />
        <Select
          options={team1Players}
          onChange={handleSelectedPlayers}
          name="selectedTeamPlayers"
          value={selectedTeam1Players}
          closeMenuOnSelect={false}
          noOptionsMessage={() => 'Player not Found'}
          isMulti
        />
        <br />
        <p className="text-center">VS</p>
        <h3 className="pt-3">Select Your Opponent's Team</h3>

        <Select
          className=" text-center"
          options={uniqueTeams}
          onChange={handleInputChange2}
          value={oppTeam}
        /><br />
        <Select
          options={team2Players}
          onChange={handleSelectedPlayers2}
          name="selectedTeamPlayers"
          value={selectedTeam2Players}
          closeMenuOnSelect={false}
          noOptionsMessage={() => 'Player not Found'}
          isMulti
        />
        <div className="text-center mt-5">
          <Button
            variant="info"
            onClick={startMatchNow}
          >
            Start a Match
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SelectTeam;
