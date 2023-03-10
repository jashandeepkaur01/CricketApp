import CreateRadio from "Components/Core/customRadio";
import { InputField } from "Components/Core/customInput";
import React, { useState } from "react";
import Select from "react-select";



function TeamForm({teamData,setTeamData,players,setPlayers,captain,setCaptain,allPlayers}) {

 
  const [countryData,setCountryDate] = useState([]);

   const handleInput = (data)=>{
      setTeamData({...teamData,
        [data.target.name] : data.target.value
      })
   }

    const handleChange = (e) => {
      console.log(e)
          setCaptain(e)
      };

    
    const handlePlayers=(players)=>{
     
     if(players.length<11){

       setPlayers(players||[]);
       setTeamData({...teamData,
        teamPlayers:players
      })
    }
    else if(players.length>10) {
        return;
    }
      
    }
    const handleRadio=(event)=>{
       console.log("event" ,event)
        setTeamData({...teamData,
            teamType:event
        })
        
    }
    // function selectFunction(e){
    // return e.playername;
    // }

    const filterOption = (option, inputValue) => {
      const { label, value } = option;
      // looking if other options with same label are matching inputValue
      const otherKey = option.filter(
        opt => opt.label === label && opt.value.includes(inputValue)
      );
      return value.includes(inputValue) || otherKey.length > 0;
    };
    
  return (
    <div>
      <form>
      <InputField
            name="teamName"
            type="text"
            label="Team Name"
            placeholder="Enter the Team Name"
            value={teamData["teamName"]}
            onChange={handleInput}
          />
          <br />
      <label><b>Select the type of team</b></label><br/>
        <CreateRadio values={["ipl","international"]} name={"Type of team"} state={teamData.teamType} setState={handleRadio}/>
        
        <label><b>Select the Players</b></label>

        <Select options={allPlayers.map(val=>({label:val.playername,value:val.playername}))} onChange={handlePlayers}   name="teamPlayers" value={players} isMulti />
        {players.length>9?<div className="text-danger">11 players selected</div>:null}
        <label><b>Select Captain for the team</b></label>
        <Select options={players.map(val=>({label:val.label,value:val.value}))} onChange={handleChange}  name="teamCaptain" value={captain} />
      </form>
    </div>
  );
}

export default TeamForm;
