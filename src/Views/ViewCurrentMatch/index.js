
function ViewCurrentMatch({ matchData }) {
    let inningCount = matchData?.inningCount;
    let onStrike = matchData?.onStrike;
    debugger;
    console.log(matchData);
    const firstBatsman = {
        name: matchData?.innings[inningCount].battingTeam.currBatters[0].name,
        runs: matchData?.innings[inningCount].battingTeam.currBatters[0].runs,
        ballsPlayed: matchData?.innings[inningCount].battingTeam.currBatters[0].ballsPlayed
    }
    const secondBatsman = {
        name: matchData?.innings[inningCount].battingTeam.currBatters[1].name,
        runs: matchData?.innings[inningCount].battingTeam.currBatters[1].runs,
        ballsPlayed: matchData?.innings[inningCount].battingTeam.currBatters[1].ballsPlayed
    }
    return (
        <div className='w-75 me-3'>
            <div className="playMatchContainer border border-dark shadow p-2">
                <div className="scoredisplay border border-2 rounded border-outline-info d-flex justify-content-around pt-2 mb-4">
                    <div className="displayLeft">
                        {/* <p>{(displayBatsman1.value) ? ((!onStrike) ? '*' : '') + displayBatsman1.value + ' (' + batsman1Data.runs + '/' + batsman1Data.ballsPlayed + ')' : '(Select Batsman 1)'}</p>
                        <p>{(displayBatsman2.value) ? ((onStrike) ? '*' : '') + displayBatsman2.value + ' (' + batsman2Data.runs + '/' + batsman2Data.ballsPlayed + ')' : '(Select Batsman 2)'}</p>
                        <p>Total Score: ({currScore} / {wickets})</p>
                        <p>Overs: {overs}</p> */}
                        <p>{(onStrike ? '' : '*') + firstBatsman.name + ' (' + firstBatsman.runs + '/' + firstBatsman.ballsPlayed + ')'}</p>
                        <p>{(onStrike ? '*' : '') + secondBatsman.name + ' (' + secondBatsman.runs + '/' + secondBatsman.ballsPlayed + ')'}</p>
                        {/* <p>Batsman 2 (23/4)</p> */}
                        <p>Total Score: {matchData?.innings[inningCount].battingTeam.totalRuns}</p>
                        <p>Overs: {matchData?.innings[inningCount].bowlingTeam.currOver}</p>
                    </div>
                    <div className="displayCenter my-auto">
                        {/* <h2>{displayScore}</h2> */}
                        <h2>0</h2>
                    </div>
                    <div className="displayRight">
                        {/* <p>{(displayBowler.value) ? 'Bowler: ' + displayBowler.value : '(Select Bowler)'}</p> */}
                        <p>{matchData?.innings[inningCount].bowlingTeam.currBowler.label}</p>
                        <p>Over: {matchData?.innings[inningCount].bowlingTeam.currOverBalls?.map(currBall => currBall + ' ')}</p>
                        {inningCount ? <p>Target : {matchData.innings[0].battingTeam.totalRuns + 1}</p> : null}
                        {/* <p>Over: 3 7 3 7 3 3</p> */}
                        {/* {inningCount ? <p>Target : {currentGoingMatch.innings[0].battingTeam.totalRuns + 1}</p> : null} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCurrentMatch
