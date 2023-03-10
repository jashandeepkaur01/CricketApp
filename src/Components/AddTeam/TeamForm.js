import CreateRadio from "Components/Custom Components/customRadio/CustomRadio";
import { InputField } from "Components/Custom Components/customInput/customInput";
import React, { useState } from "react";
import Select from "react-select";



function TeamForm({teamData,setTeamData,players,setPlayers,captain,setCaptain,allPlayers}) {
 

   

    const handleChange = (e) => {
       setCaptain(e)
      };

    const handlePlayers=(players)=>{
        setPlayers(players||[]);
        setTeamData({...teamData,
            teamPlayers:players
        })
      
    }
    const handleRadio=(event)=>{
       
        setTeamData({...teamData,
            teamType:event
        })
    }
    function selectFunction(e){
    return e.playername
    }
  console.log("captain<>",captain)
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
        <Select options={allPlayers.map(val=>({playername:val.playername,value:val.key}))} onChange={handlePlayers} formatOptionLabel={selectFunction} name="teamPlayers" value={players} isMulti /><br/>
        <label><b>Select Captain for the team</b></label>
        <Select options={allPlayers.map(val=>({playername:val.playername,value:val.key}))} onChange={handleChange} formatOptionLabel={selectFunction} name="teamCaptain" value={captain} />
      </form>
    </div>
  );
}

export default TeamForm;
