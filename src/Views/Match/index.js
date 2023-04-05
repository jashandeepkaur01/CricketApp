import React from 'react'
import MatchScoreCard from 'Views/MatchScoreCard'
import PlayMatch from 'Views/PlayMatch'

function Match() {
  return (
    <div>
      <div className="container d-flex w-100">
        <PlayMatch />
        <MatchScoreCard />
      </div>
    </div>
  )
}

export default Match
