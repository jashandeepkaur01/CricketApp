import CustomTable from 'Components/Cells/customTable'
import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function PlayerInfo() {
    const params = useParams()
    const { name } = params
    const allPlayers = useSelector((state) => state.loginReducer.players)
    console.log(allPlayers);
    const player = allPlayers.find(playerObj => playerObj.Name === name)
    console.log('player : ', player);
    const battingSummary = [player.BattingCareer];
    const bowlingSummary = [player.BowlingCareer];
    // console.log(battingSummary);
    const battingSummaryHeading = [
        {
            label: "Innings Batted",
            key: "inningsBatted",
        },
        {
            label: "Runs Scored",
            key: "runsScored",
        },
        {
            label: "Highest Score",
            key: "highestScore",
        },
        {
            label: "Avg Score",
            key: "avgScore",
        },
        {
            label: "Balls Faced",
            key: "ballsFaced",
        },
        {
            label: "Batting Strike Rate",
            key: "battingStrikeRate",
        },
        {
            label: "100s",
            key: "centuries",
        },
        {
            label: "200s",
            key: "doubleCenturies",
        },
        {
            label: "50s",
            key: "halfCenturies",
        },
        {
            label: "4s",
            key: "fours",
        },
        {
            label: "6s",
            key: "sixes",
        },
    ]
    const bowlingSummaryHeading = [
        {
            label: "Innings Bowled",
            key: "inningsBowled",
        },
        {
            label: "Balls Bowled",
            key: "ballsBowled",
        },
        {
            label: "Runs Conceded",
            key: "runsConceded",
        },
        {
            label: "Wickets",
            key: "wkts",
        },
        {
            label: "Bowling Average",
            key: "bowlingAvg",
        },
        {
            label: "Bowling Strike Rate",
            key: "bowlingStrikeRate",
        },
        // {
        //     label: "Eco",
        //     key: "eco",
        // },
    ]
    return (
        <div>
            {/* <p>Player Name {name}</p> */}
            <div className="container">
                <div className="nameHeading text-center py-3">
                    <h2>{player.Name}</h2>
                </div>
                <div className="playerDetails d-flex justify-content-around">
                    <div className="playerDetailsLeft">
                        <p><b>Age: </b> {player.Age}</p>
                        <p><b>JerseyNo:</b> {player.JerseyNo}</p>
                        <div className="playerTeams">
                            <p><b>Teams: </b>
                                <ul class="list-group float-end ms-2 list-group-horizontal">
                                    {player.Team.map(team => <li class="list-group-item">{team.value}</li>)}
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="playerDetailsRight">
                        <p><b>Country: </b> {player.Country}</p>
                        <p><b>PhoneNo: </b> {player.PhoneNo}</p>
                    </div>
                </div>

                <div className="summary d-flex justify-content-around mt-5">
                    {/* <div className="battingSummary">
                        <h4 className='px-5'>Batting Career Summary</h4>
                        <CustomTable
                            tableContent={battingSummary}
                            headingDetails={battingSummaryHeading}
                            btnText="View Team"
                            component="Name"
                        />
                    </div>
                    <div className="bowlingSummary">
                        <h4 className='px-5'>Bowling Career Summary</h4>
                        <CustomTable
                            tableContent={bowlingSummary}
                            headingDetails={bowlingSummaryHeading}
                            btnText="View Team"
                            component="Name"
                        />
                    </div> */}
                    <div className="battingSummary">
                        <h4>Batting Career Summary</h4>
                        <div className="bsDetailsleft">
                            <div className='batSummary'><b>Innings Batted: </b> {player.BattingCareer.inningsBatted}</div>
                            <div className='batSummary'><b>Runs Scored: </b> {player.BattingCareer.runsScored}</div>
                            <div className='batSummary'><b>Highest Score: </b> {player.BattingCareer.highestScore}</div>
                            <div className='batSummary'><b>Average Score: </b> {player.BattingCareer.avgScore}</div>
                            <div className='batSummary'><b>Balls Faced: </b> {player.BattingCareer.ballsFaced}</div>
                            <div className='batSummary'><b>Batting Strike Rate: </b> {player.BattingCareer.battingStrikeRate}</div>
                            <div className='batSummary'><b>100s: </b> {player.BattingCareer.centuries}</div>
                            <div className='batSummary'><b>200s: </b> {player.BattingCareer.doubleCenturies}</div>
                            <div className='batSummary'><b>50s: </b> {player.BattingCareer.halfCenturies}</div>
                            <div className='batSummary'><b>4s: </b> {player.BattingCareer.fours}</div>
                            <div className='batSummary'><b>6s: </b> {player.BattingCareer.sixes}</div>
                        </div>
                    </div>
                    <div className="bowlingSummary">
                        <h4>Bowling Career Summary</h4>
                        <div className="bsDetailsright">
                            <div className='batSummary'><b>Innings Batted: </b> {player.BattingCareer.inningsBatted}</div>
                            <div className='batSummary'><b>Runs Scored: </b> {player.BattingCareer.runsScored}</div>
                            <div className='batSummary'><b>Highest Score: </b> {player.BattingCareer.highestScore}</div>
                            <div className='batSummary'><b>Average Score: </b> {player.BattingCareer.avgScore}</div>
                            <div className='batSummary'><b>Balls Faced: </b> {player.BattingCareer.ballsFaced}</div>
                            <div className='batSummary'><b>Batting Strike Rate: </b> {player.BattingCareer.battingStrikeRate}</div>
                            <div className='batSummary'><b>100s: </b> {player.BattingCareer.centuries}</div>
                            <div className='batSummary'><b>200s: </b> {player.BattingCareer.doubleCenturies}</div>
                            <div className='batSummary'><b>50s: </b> {player.BattingCareer.halfCenturies}</div>
                            <div className='batSummary'><b>4s: </b> {player.BattingCareer.fours}</div>
                            <div className='batSummary'><b>6s: </b> {player.BattingCareer.sixes}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PlayerInfo
