import { battingScoreCardHeading, bowlingScoreCardHeading } from "Shared/Constants"
import { Link } from "react-router-dom"

function ScoreCard({ match }) {
    return (
        <div className='scorecard'>
            {
                match?.innings.map((inning, idx) => {
                    return (
                        <div className="teamScoreCard w-75 mx-auto">
                            <table className="table">
                                <caption className='caption-top bg-dark border-2 border-dark text-white ps-2'>
                                    <div className='d-flex justify-content-between pe-3'>
                                        <div>{match?.teams[idx]} Innings</div>
                                        <div>{inning.battingTeam.totalRuns} - {inning.battingTeam.wkts} ( {inning.bowlingTeam.currOver} Ov )</div>
                                    </div>
                                </caption>
                                <thead className="table-secondary">
                                    <tr>
                                        {battingScoreCardHeading.map(heading => <th scope='col'>{heading}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {inning.battingTeam.playersPlayed.map(player => {
                                        return (
                                            <tr>
                                                <td><Link to={'/playerInfo/' + player.name} className="playerNameLink">{player.name}</Link></td>
                                                {player.out.outByBowler ?
                                                    <td className='text-secondary'>b {player.out.outByBowler}</td> :
                                                    <td className='text-secondary'>not out</td>
                                                }
                                                <td>{player.runs}</td>
                                                <td>{player.ballsPlayed}</td>
                                                <td>{player.fours}</td>
                                                <td>{player.sixes}</td>
                                                <td>{player.strikeRate}</td>
                                            </tr>
                                        )
                                    })}
                                    <tr>
                                        <td>Total</td>
                                        <td></td>
                                        <td colSpan={5}>{inning.battingTeam.totalRuns} ({inning.battingTeam.wkts} wkts, {inning.bowlingTeam.currOver} Ov)</td>
                                    </tr>
                                    {inning.battingTeam.yetToBat ?
                                        <tr>
                                            <td>Did Not Bat</td>
                                            <td></td>
                                            <td colSpan={5} className='text-wrap'>{inning.battingTeam.yetToBat.map(batsman => { return batsman.label + ", " })}</td>
                                        </tr>
                                        : null
                                    }
                                </tbody>
                                {(inning.battingTeam.playersPlayed.length > 2) ?
                                    <>
                                        <thead className="table-secondary">
                                            <tr>
                                                <th scope="col" colSpan={7}>Fall of wickets</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={7}>{inning.battingTeam.playersPlayed.map(player => {
                                                    return player.out.outStatus ?
                                                        player.teamRuns + '-' + player.wktCount + ' (' + player.name + ',' + player.out.outAtBall + ' ),' :
                                                        null
                                                })}</td>
                                            </tr>
                                        </tbody>
                                    </>
                                    : null}
                            </table>
                            <table className="table mb-5">
                                <thead className="table-secondary">
                                    <tr>
                                        {bowlingScoreCardHeading.map(heading => <th scope='col'>{heading}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {inning.bowlingTeam.bowlers.map(bowler => {
                                        return (
                                            <tr>
                                                <td>{bowler.label}</td>
                                                <td>{bowler.oversThrown}</td>
                                                <td>{bowler.runsConceded}</td>
                                                <td>{bowler.wkts}</td>
                                                <td>{bowler.NB}</td>
                                                <td>{bowler.WB}</td>
                                                <td>{bowler.Econ}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ScoreCard
