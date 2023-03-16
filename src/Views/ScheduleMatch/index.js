import Select from 'react-select'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DateTimePicker from 'react-datetime-picker';
import { useHistory } from 'react-router-dom';

import { addMatch } from 'Redux/Actions/loginActions';


function ScheduleMatch() {
  const [venue, setVenue] = useState("")
  const [selectedATeam, setSelectedATeam] = useState([])
  const [selectedBTeam, setSelectedBTeam] = useState([])
  const [errorMessage, setErrorMessage] = useState("")
  const dispatch = useDispatch()
  const navigate = useHistory()
  const [value, onChange] = useState(new Date());
  const arr = (value || "").toString().split(" ")
  // const g = { "day": arr[0], "month": arr[1], "date": arr[2], "year": arr[3], "time": arr[4] }
  const matchData=[{venue:venue,teamA:selectedATeam,teamB:selectedBTeam,date:arr[2],month:arr[1],day:arr[0],year:arr[3],time:arr[4]}]

  const teamData1 = useSelector(state => state.loginReducer.teams)


  function handleChangeTeamA(e) {
    setSelectedATeam(e)
  }
  function handleChangeTeamB(e) {
    setSelectedBTeam(e)
  }

  function handleStartMatch() {
    if (venue != "" && selectedATeam != [] && selectedBTeam != [] && value != null) {
         dispatch(addMatch(matchData))

      navigate.push("/scoreComponent")
    }
    else {
      setErrorMessage("Enter all Fields")
    }

  }

  return (

    <div className='d-flex justify-content-center w-100'>

      <div className=' m-5 border border-dark round rounded-4 w-50 '>

        <div className="d-flex justify-content-center round rounded-4 rounded-bottom border border-success bg-success text-white">
          <h4 className='m-2 mx-5 px-5 '>Match between Team A and Team B</h4>
        </div>
        <table>
          <tr>
            <td>
              <h4 className=' m-2 '>Select Date and time</h4>
            </td>
            <td >
              <div className="ms-5 ps-5">

                <DateTimePicker onChange={onChange} value={value} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className=' m-2  '>Select Venue</h4>
            </td>
            <td>
              <div className="ms-5 ps-5">
                <input className="w-75" type="text" value={venue} placeholder="Enter venue" onChange={(e) => {setVenue(e.target.value) }}></input>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className=' m-2  '>Select Your Team</h4>
            </td>
            <td>
              <div className="ms-5 ps-5">
                <Select options={teamData1?.map(val => ({ label: val.teamName, value: val.teamName }))} onChange={handleChangeTeamA} name="teamCaptain" value={selectedATeam} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className=' m-2  '>Select Oponend's Team</h4>
            </td>
            <td>
              <div className="ms-5 ps-5">
                <Select options={teamData1?.map(val => ({ label: val.teamName, value: val.teamName }))} onChange={handleChangeTeamB} name="teamCaptain" value={selectedBTeam} />
              </div>
            </td>
          </tr>


        </table>
        <div className="d-flex p-2 mt-4 round rounded-4 rounded-top border border-success bg-success">
          <h4 className="text-warning w-50">{errorMessage}</h4>
          <div className="d-flex justify-content-end w-100 ">

            <button className="btn btn-outline-light" onClick={handleStartMatch}>Start Match</button>
          </div>
        </div>



      </div>
    </div>
  )
}

export default ScheduleMatch