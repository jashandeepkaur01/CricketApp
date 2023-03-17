
import React from 'react'
import { useSelector } from 'react-redux'

export default function ScheduledMatches() {
    const matchData=useSelector((state=>state.loginReducer.matches))
   
  return (
    <div className='d-flex-column justify-content-center w-100 pt-5 p-5'>

            <h2>venue:{matchData[0].venue}</h2>
            <h2>date:{matchData[0].date}/{matchData[0].month}/{matchData[0].year}</h2>
            <h2>teamA:{matchData[0].teamA.value}</h2>
            <h2>teamB:{matchData[0].teamB.value}</h2>
     
    
    </div>
  )
}
