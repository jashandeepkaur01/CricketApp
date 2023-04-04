import SummaryCard from 'Components/Atoms/SummaryCard'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { battingSummaryHeading, } from 'Shared/Constants'
import { bowlingSummaryHeading } from 'Shared/Constants'
import './style.css'

function PlayerInfo() {
    const params = useParams()
    const { name } = params
    const allPlayers = useSelector((state) => state.player.players)
    console.log(allPlayers);
    const player = allPlayers.find(playerObj => playerObj.Name === name)
    console.log('player : ', player)
    return (
        <div>
            {/* <p>Player Name {name}</p> */}
            <div className="container playerContainer rounded shadow border border-2 border-secondary pb-4">
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

                <div className="summary d-flex justify-content-evenly mt-5">
                    <div className="battingSummary bg-light">
                        <h4>Batting Career Summary</h4>
                        <div className="bsDetailsLeft">
                            {battingSummaryHeading.map(heading =>
                                <SummaryCard label={heading.label} value={player.BattingCareer[heading.key]} />
                            )}
                        </div>
                    </div>
                    <div className="bowlingSummary bg-light">
                        <h4>Bowling Career Summary</h4>
                        <div className="bsDetailsRight">
                            {bowlingSummaryHeading.map(heading =>
                                <SummaryCard label={heading.label} value={player.BowlingCareer[heading.key]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PlayerInfo
