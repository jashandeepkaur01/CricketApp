
import React from 'react'
import { useSelector } from 'react-redux'

export default function ScheduledMatches() {
    const matchData=useSelector((state=>state.loginReducer.matches))
   
  return (
    <div>
        <h1>
            <h1>{matchData[0].venue}</h1>
           
        </h1>
    </div>
  )
}
