import Select from 'react-select'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom';
import { addMatch } from 'Redux/Actions/loginActions';


function ScheduleMatch() {
  const [state,setState]=useState({venue:"",selectedATeam:[],selectedBTeam:[],errorMessage:""})
  const dispatch = useDispatch()
  const navigate = useHistory()
  const teamData1 = useSelector(state => state.loginReducer.teams)
  const playerData=useSelector(state=>state.loginReducer.players)
  const loginPlayer=useSelector(state=>state.loginReducer.token)
  
  const teamCheck=playerData?.filter(val=>(val.key==loginPlayer[0].key))
  const loginPlayerTeam=teamCheck
    console.log("player",loginPlayerTeam)

  const matchData = [{ venue: state.venue, teamA: state.selectedATeam, teamB:  state.selectedBTeam}]
  const date = new Date();
  function handleStartMatch() {
    if (state.venue != ""&&state.selectedATeam!=[]&&state.selectedBTeam!=[]) {
        matchData[0].date=date.getDate()
        matchData[0].month=date.getMonth()+1
        matchData[0].year=date.getFullYear()
        dispatch(addMatch(matchData))
        navigate.push("/scoreComponent")
      
    
    }
    else {
      setState({...state,  errorMessage:"Enter all Fields"})
     }

  }

  function table(label, content) {
    return (
      <tr>
        <td>
          <h4 className=' m-2 '>{label}</h4>
        </td>
        <td >
          <div className="ms-5 ps-5">
            {content}
          </div>
        </td>
      </tr>
    )
  }




  return (

    <div className='d-flex justify-content-center w-100'>
      <div className=' m-5 border border-dark round rounded-4 w-50 '>
        <div className="d-flex justify-content-center round rounded-4 rounded-bottom border border-success bg-success text-white">
          <h4 className='m-2 mx-5 px-5 '>Match between Team A and Team B</h4>
        </div>
        <table>
          {table("Select Venue", <input className="w-75" type="text" value={state.venue} placeholder="Enter venue" onChange={(e) => { setState({...state,venue:e.target.value}) }}></input>)}
          {table("Select Your Team", <Select options={teamCheck?.map(val => ({ label: val.Team, value: val.Team }))} onChange={(e)=> setState({...state,selectedATeam:e})} name="teamCaptain" value={state.selectedATeam} />)}
          {table("Select Oponend's Team", <Select options={teamData1?.map(val => ({ label: val.teamName, value: val.teamName }))} onChange={(e)=> setState({...state,selectedBTeam:e})} name="teamCaptain" value={state.selectedBTeam} />)}
        </table>
        <div className="d-flex p-2 mt-4 round rounded-4 rounded-top border border-success bg-success">
          <h4 className="text-warning w-50">{state.errorMessage}</h4>
          <div className="d-flex justify-content-end w-100 ">
            <button className="btn btn-outline-light" onClick={handleStartMatch}>Start Match</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScheduleMatch