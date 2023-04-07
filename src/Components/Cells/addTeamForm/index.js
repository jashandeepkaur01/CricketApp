import { InputField } from "Components/Atoms/customInput";
import CreateRadio from "Components/Atoms/customRadio";
import { useState } from "react";
import Select from "react-select";

function TeamForm({ teamData, setTeamData, players, setPlayers, captain, setCaptain, allPlayers, Error1, teamNameErr, setTeamErr, Error2, teamTypeErr, setTeamTypeErr, Error3, playerErr, setPlayerErr, Error4, captainErr, setCaptainErr }) {
  const [Err1, setErr1] = useState("");
  const [Err2, setErr2] = useState("");
  const [Err3, setErr3] = useState("");

  const handleInput = (data) => {
    setTeamData({
      ...teamData,
      [data.target.name]: data.target.value,
    });
    if (data.target.value.length === 0) {
      setErr1("field is required");
      setTeamErr(false);
    } else {
      setErr1("");
      setTeamErr(false);
    }
  };
  const handleChange = (e) => {
    setCaptain(e);
    setTeamData({
      ...teamData,
      teamCaptain: e.value,
    });
    if (e.value.length === 0) {
      setErr3("field is required");
      setCaptainErr(false);
    } else {
      setErr3("");
      setCaptainErr(false);
    }
  };

  const handlePlayers = (players) => {
    if (players.length <= 11) {
      setPlayers(players || []);
      setTeamData({
        ...teamData,
        teamPlayers: players,
      });
    }
    if (players.length < 3) {
      setErr2("atleast 3 players required");
      setPlayerErr(false);
    } else {
      setErr2("");
      setPlayerErr(false);
    }
  };
  const handleRadio = (event) => {
    setTeamData({
      ...teamData,
      teamType: event,
    });
    setTeamTypeErr(false);
  };


  return (
    <div>
      <form>
        <InputField name="teamName" type="text" label="Team Name" placeholder="Enter the Team Name" value={teamData["teamName"]} onChange={handleInput} />
        <span className="text-danger">{teamNameErr ? Error1 : Err1}</span>
        <br />
        <label>
          <b>Select the type of team</b>
        </label>
        <br />
        <CreateRadio values={[" IPL", " International"]} name={"Type of team"} state={teamData.teamType} setState={handleRadio} />
        <span className="text-danger">{teamTypeErr ? Error2 : null}</span>
        <br />
        <label>
          <b>Select the Players</b>
        </label>
        {players.length > 10 ? (
          <div className="text-success">11 players selected</div>
        ) : null}
        <div><span className="text-danger">{playerErr ? Error3 : Err2}</span></div>
        <br />
        <Select
          options={allPlayers.map((val) => ({
            label: val.Name,
            value: val.Name,
            key: val.key,
          }))}
          onChange={handlePlayers}
          name="teamPlayers"
          value={players}
          closeMenuOnSelect={false}
          noOptionsMessage={() => 'Player not Found'}
          isMulti
        />

        <label className="mt-2">
          <b>Select Captain for the team</b>
        </label>
        <Select
          options={players.map((val) => ({
            label: val.label,
            value: val.value,
          }))}
          onChange={handleChange}
          name="teamCaptain"
          value={captain}
        />
        <span className="text-danger">{captainErr ? Error4 : Err3}</span>
        <br />
        <br />
      </form>
    </div>
  );
}

export default TeamForm;
