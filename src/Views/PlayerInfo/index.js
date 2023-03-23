import CustomTable from 'Components/Cells/customTable'
import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function PlayerInfo() {
    const params = useParams()
    const { name } = params
    // console.log(params)
    // console.log(name);
    const allPlayers = useSelector((state) => state.loginReducer.players)
    console.log(allPlayers);
    const player = allPlayers.find(playerObj => playerObj.Name === name)
    console.log(player);
    const battingSummary = [player.BattingCareer];
    const bowlingSummary = [player.BowlingCareer];
    console.log(battingSummary);
    const battingSummaryHeading = [
        {
            label: "Innings Battled",
            key: "inningsBattled",
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
                    </div>
                    <div className="playerDetailsRight">
                        <p><b>Country: </b> {player.Country}</p>
                        <p><b>PhoneNo: </b> {player.PhoneNo}</p>
                    </div>
                </div>
                <div className="summary">
                    <div className="battingSummary">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerInfo
