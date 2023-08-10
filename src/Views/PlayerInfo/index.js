import SummaryCard from 'Components/Atoms/SummaryCard'
import { getData } from 'Redux/Actions/playerActions'
import { battingSummaryHeading, bowlingSummaryHeading, } from 'Shared/Constants'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import person from '../../Assets/Images/person.png'
import './style.css'

function PlayerInfo() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData([]));
    }, []);

    const params = useParams()
    const { name } = params
    const allPlayers = useSelector((state) => state.player.players)
    const player = allPlayers.find(playerObj => playerObj.Name === name)
    return (
        <div>
            <div className="container playerContainer rounded shadow border border-2 border-secondary pb-4">
                <div className="playerImgIcon">
                    <img src={person} alt="player icon" />
                </div>
                <div className="nameHeading text-center py-3">
                    <h2>{player?.Name}</h2>
                </div>
                <div className="playerDetails d-flex justify-content-around">
                    <div className="playerDetailsLeft">
                        <p><b>Age: </b> {player?.Age}</p>
                        <p><b>JerseyNo:</b> {player?.JerseyNo}</p>
                        <div className="playerTeams">
                            <p><b>Teams: </b>
                                <ul className="list-group float-end ms-2 list-group-horizontal">
                                    {player?.Team.map(team => <li class="list-group-item">{team.value}</li>)}
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="playerDetailsRight">
                        <p><b>Country: </b> {player?.Country}</p>
                        <p><b>PhoneNo: </b> {player?.PhoneNo}</p>
                    </div>
                </div>

                <div className="summary d-flex justify-content-evenly mt-5">
                    <div className="battingSummary bg-light">
                        <h4>Batting Career Summary</h4>
                        <div className="bsDetailsLeft">
                            {battingSummaryHeading.map(heading =>
                                <SummaryCard label={heading.label} value={player?.BattingCareer[heading.key]} />
                            )}
                        </div>
                    </div>
                    <div className="bowlingSummary bg-light">
                        <h4>Bowling Career Summary</h4>
                        <div className="bsDetailsRight">
                            {bowlingSummaryHeading.map(heading =>
                                <SummaryCard label={heading.label} value={player?.BowlingCareer[heading.key]} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PlayerInfo
