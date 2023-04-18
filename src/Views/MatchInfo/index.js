import { getMatchData } from 'Redux/Actions/matchActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MatchInfo() {
    const params = useParams()
    const { matchKey } = params;
    const matches = useSelector((state) => state.match.currMatch)
    const match = matches?.find(matchObj => matchObj.key === matchKey)
    const dispatch = useDispatch();

    console.log(match);
    useEffect(() => {
        dispatch(getMatchData([]));

    }, [])


    return (
        <div className='container'>
            <div className='titleHeading d-flex justify-content-around mb-4'>
                <h2>{match?.teams[0]}</h2>
                <h2>vs</h2>
                <h2>{match?.teams[1]}</h2>
            </div>
            <h3 className='text-cente ps-5 mt-3'>ScoreCard</h3>
            <div className='matchScorecards d-flex justify-content-around'>
                {
                    match.innings.map((inning, idx) => {
                        return (
                            <div className="teamScoreCard">
                                <table class="table">
                                    <caption className='caption-top bg-dark border-2 border-dark text-white ps-2'>{match?.teams[idx]} Innings</caption>
                                    <thead class="table-secondary">
                                        <tr>
                                            <th scope="col">Batter</th>
                                            <th scope="col"></th>
                                            <th scope="col">R</th>
                                            <th scope="col">B</th>
                                            <th scope="col">4s</th>
                                            <th scope="col">6s</th>
                                            <th scope="col">SR</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {inning.battingTeam.playersPlayed.map(player => {
                                            return (
                                                <tr>
                                                    <td>{player.name}</td>
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
                                    </tbody>
                                </table>
                            </div>
                        )
                    })
                }
                {/* <div className="teamScoreCard">
                    <table class="table">
                        <thead class="table-secondary">
                            <tr>
                                <th scope="col">Batter</th>
                                <th scope="col"></th>
                                <th scope="col">R</th>
                                <th scope="col">B</th>
                                <th scope="col">4s</th>
                                <th scope="col">6s</th>
                                <th scope="col">SR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {match.innings[0].battingTeam.playersPlayed.map(player => {
                                return (
                                    <tr>
                                        <td>{player.name}</td>
                                        <td className='text-secondary'>This is to be edited later.</td>
                                        <td>{player.runs}</td>
                                        <td>{player.ballsPlayed}</td>
                                        <td>{player.fours}</td>
                                        <td>{player.sixes}</td>
                                        <td>{player.strikeRate}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div> */}
                {/* <div className="teamScoreCard">
                    <table class="table">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col">Batter</th>
                                <th scope="col"></th>
                                <th scope="col">R</th>
                                <th scope="col">B</th>
                                <th scope="col">4s</th>
                                <th scope="col">6s</th>
                                <th scope="col">SR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>

        </div >
    )
}

export default MatchInfo
