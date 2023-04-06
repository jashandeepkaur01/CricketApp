import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "Components/Atoms/customModal";
import TeamForm from "Components/Cells/addTeamForm";
import { Button } from "react-bootstrap";
import { getData } from "Redux/Actions/playerActions";
import { updatePlayersTeam } from "Redux/Actions/updateTeamActions";
import { addTeamData } from "Redux/Actions/teamActions";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { addMatchData, getMatchData, matchTeams } from "Redux/Actions/matchActions";

function SelectTeam() {
  const [showModal, setShowModal] = useState(false);    // console.log('myMatchData....',myMatchData);
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

  const dispatch = useDispatch();

  const data = useSelector((state) => state.player.players);
  let teamsData = useSelector((state) => state.team.teams);
  const playerLoggedIn = useSelector((state) => state.login.loggedInPlayer);
  // console.log('playerLoggedIn...',playerLoggedIn)
  const playerLoggedInData = data.find(player => {
    return player.key === playerLoggedIn.key;
  })
  // console.log('playerLoggedInData...',playerLoggedIn.key);
  // console.log('players data...',data);
  // console.log('playerLoggedIN teams....',playerLoggedInData?.Team)
  const loggedInPlayer = {
    label: playerLoggedInData?.Name,
    value: playerLoggedInData?.Name,
    key: playerLoggedInData?.key,
  };
  const [players, setPlayers] = useState([loggedInPlayer]);
  const [teamData, setTeamData] = useState({
    teamName: "",
    teamType: "",
    teamPlayers: [],
    teamCaptain: "",
  });
  // console.log("logged in player key....", playerLoggedInData);
  const remainingPlayersData = data.filter((playerData) => {
    if (playerLoggedInData.key !== playerData.key) return playerData;
  });
  // console.log("players...", players);
  // console.log("remainingPlayersData...", remainingPlayersData);
  const handleShow = () => setShowModal(true);

  const submitModal = () => {
    if (((teamData.teamName).length === 0) || ((teamData.teamType).length === 0) || ((teamData.teamPlayers).length < 3) || ((teamData.teamCaptain).length == 0)) {
      if ((teamData.teamName).length == 0) {
        setErr1("Field is required")
        setShowErr1(true);
      }
      if ((teamData.teamType).length == 0) {
        setErr2("Field is required")
        setShowErr2(true);
      }
      if ((teamData.teamPlayers).length < 3) {
        setErr3("atleast 3 players required")
        setShowErr3(true);
      }
      if ((teamData.teamCaptain).length == 0) {
        setErr4("Field is required")
        setShowErr4(true);
      }
      return false;
    }
    else {
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
      setTimeout(() => {
        dispatch(getData([]));
      }, 1000);
      // console.log("playerLoggedinData...", playerLoggedInData.Team);
      setShowModal(false);
    }
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
    const teamNames = options;
    console.log(selectedValue);
    setTeam(selectedValue);
    // let teamNames = teamsData.map((e) => {
    //   if(e.teamName)
    //   return e.teamName;
    // });
    const filteredItems = teamNames.filter(
      (e, index) => e.value.search(selectedValue.value) === -1
    );
    console.log('handleInputchange 1 called...');
    console.log('filtered items....', filteredItems);
    setUniqueTeams(filteredItems);
    setOppTeam('');
  };
  const handleInputChange2 = (selectedValue) => {
    setOppTeam(selectedValue);
  };
  // const generateID = () => {
  //   return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  // };
  const startMatchNow = () => {
    console.log('Team: ', team)
    console.log('OppTeam: ', oppTeam);
    // dispatch(matchTeams([team.label,oppTeam.label]));
    const matchData = {
      name: team.label + 'vs' + oppTeam.label,
      date: '30 March 2023',
      venue: 'Australia',
      status: true,
      isCompleted: false,
      matchOrganiser: playerLoggedIn.key,
      wonBy: '',
      onStrike: 0,
      firstInnings: {
        battingTeam: {
          teamName: team.label,
          totalRuns: 0,
          doubleCenturies: 0,
          centuries: 0,
          halfCenturies: 0,
          sixes: 0,
          fours: 0,
          players: [],
          wkts: 0,
          yetToBat: [],
          currBatters: [{
            name: '',
            key: '',
            runs: 0,
            ballsPlayed: 0,
            sixes: 0,
            fours: 0,
            hundreds: 0,
            doubleCenturies: 0,
            centuries: 0,
            halfCenturies: 0,
            out: {
              outStatus: false,
              outByBowler: '',
              outAtBall: 0,
            }
          },
          {
            name: '',
            key: '',
            runs: 0,
            ballsPlayed: 0,
            sixes: 0,
            fours: 0,
            hundreds: 0,
            doubleCenturies: 0,
            centuries: 0,
            halfCenturies: 0,
            out: {
              outStatus: false,
              outByBowler: '',
              outAtBall: 0,
            }
          }],
        },
        bowlingTeam: {
          teamName: oppTeam.label,
          currBowler: {
            name: '',
            wkts: 0,
            WB: 0,
            NB: 0,
            Econ: 0,
            runsConceded: 0,
          },
          bowlers: [],
          overs: [],
          currOver: 0,
          currOverBalls: [],
        }
      },
      secondInnings: {
        battingTeam: {
          teamName: oppTeam.label,
          totalRuns: 0,
          // totalBalls: '',
          doubleCenturies: 0,
          centuries: 0,
          halfCenturies: 0,
          sixes: 0,
          fours: 0,
          players: [],
          wkts: 0,
          yetToBat: [],
          currBatters: [{
            name: '',
            key: '',
            runs: 0,
            ballsPlayed: 0,
            sixes: 0,
            fours: 0,
            hundreds: 0,
            doubleCenturies: 0,
            centuries: 0,
            halfCenturies: 0,
            out: {
              outStatus: false,
              outByBowler: '',
              outAtBall: 0,
            }
          },
          {
            name: '',
            key: '',
            runs: 0,
            ballsPlayed: 0,
            sixes: 0,
            fours: 0,
            hundreds: 0,
            doubleCenturies: 0,
            centuries: 0,
            halfCenturies: 0,
            out: {
              outStatus: false,
              outByBowler: '',
              outAtBall: 0,
            }
          }],
        },
        bowlingTeam: {
          teamName: team.label,
          currBowler: {
            name: '',
            balls: 0,
          },
          overs: [],
          currOver: 0,
          currOverBalls: [],
        }
    }
  }
    // currBatsman = [{
    //   name: '',
    //   key: '',
    //   runs: '',
    //   ballsPlayed: 0,
    //   sixes: 0,
    //   fours: 0,
    //   doubleCenturies: 0,
    //   centuries: 0,
    //   halfCenturies: 0,
    //   out: {
    //     outByBowler: '',
    //     outAtBall: 0,
    //   }
    // },{}]
    // const matchData = {
    //   name: team.label + 'vs' + oppTeam.label,
    //   date: '30 March 2023',
    //   venue: 'Australia',
    //   status: true,
    //   isCompleted: false,
    //   matchOrganiser : playerLoggedIn.key,
    //   myTeam: team.label,
    //   oppTeam: oppTeam.label,
    //   wonBy: '',
    //   myTeamData: {
    //     name: team.label,
    //     runs: 0,
    //     sixes: 0,
    //     fours: 0,
    //     twos: 0,
    //     twoHundreds: 0,
    //     hundreds: 0,
    //     fifties: 0,
    //     overs: [{}],
    //     batters: [{
    //       name: '',
    //       runs: 0,
    //       balls: 0,
    //       fours: 0,
    //       sixes: 0,
    //       strikeRate: 0,
    //       outBy: '',
    //     }],
    //     bowlers: [{
    //       name: '',
    //       runsConceded: 0,
    //       balls: '',
    //       strikeRate: 0,
    //       wkts: 0,
    //     }]
    //   },
    // }
    // overs: [{
    //   bowler:
    //   runs:
    //   6s,
    //   4s,
    //   WB,
    //   wkts,
    // }]

    // id: generateID(),
    console.log('matchData...', matchData);
    dispatch(addMatchData({
      data: matchData,
      success: (response) => {
        console.log('response..', response);
        console.log('current match key .....', response.data.name);
        navigate.push("/match/" + response.data.name)
        // navigate.push("/match/" + playerLoggedIn.key)
      },
      fail: () => {
        console.warn('Cannot find page...')
      }
    }))

  }

  return (
    <div>
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
        />
        <br />
        <p className="text-center">VS</p>
        <h3 className="pt-3">Select Your Opponent's Team</h3>

        <Select
          className=" text-center"
          options={uniqueTeams}
          onChange={handleInputChange2}
          value={oppTeam}
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
