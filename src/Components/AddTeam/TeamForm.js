import CreateRadio from "Components/Custom Components/customRadio/CustomRadio";
import { InputField } from "Components/Custom Components/customInput/customInput";
import React, { useState } from "react";
import Select from "react-select";


const options = [
    {value:"vjkf" , label:"jkhfgh"},
    {value:"kljd",label:"fggft"},
    {value:"kjhjfg",label:"dfgh"},
];
function TeamForm({teamData,setTeamData,players,setPlayers}) {
 

   

 

    const handleChange = (e) => {
       
        setTeamData({...teamData,
          [e.target.name]: e.target.value,
        });
      };

    const handlePlayers=(players)=>{
        setPlayers(players||[]);
        setTeamData({...teamData,
            teamPlayers:players
        })
    }
    const handleRadio=(event)=>{
        console.log(event)
        setTeamData({...teamData,
            teamType:event
        })
    }

console.log(teamData)
  return (
    <div>
      <form>
      <InputField
            name="teamName"
            type="text"
            label="Team Name"
            placeholder="Enter the Team Name"
            value={teamData["teamName"]}
            onChange={handleChange}
          />
          <br />
      <label><b>Select the type of team</b></label><br/>
        <CreateRadio values={["ipl","international","local"]} name={"Type of team"} state={teamData.teamType} setState={handleRadio}/>
        <label><b>Select the Players</b></label>
        <Select options={options} onChange={handlePlayers} name="teamPlayers" value={teamData.players} isMulti /><br/>
        <label><b>Select Captain for the team</b></label>
        <Select options={options} onChange={handleChange}  name="teamCaptain" value={teamData.captain} />
      </form>
    </div>
  );
}

export default TeamForm;
