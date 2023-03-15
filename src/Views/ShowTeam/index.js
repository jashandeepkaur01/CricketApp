import React from 'react'
import { useSelector } from 'react-redux'
function ShowTeam() {
  const data = useSelector((state)=>state.data.player)
  return (
    <>
      
      <h2>{data}</h2>
    </>
    
  )
}

export default ShowTeam