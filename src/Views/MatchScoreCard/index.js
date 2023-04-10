import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MatchScoreCard() {
    const params = useParams()
    const { matchUniqueKey } = params;

    const currMatches = useSelector((state) => state.match.currMatch);
    // console.log(currMatchData);
    console.log('current matches....', currMatches);
    console.log('match scorecard......', matchUniqueKey)
    const currMatch = currMatches.find(match => match.key === matchUniqueKey);
    // console.log(currMatch);
    // debugger;
    const BatsmansData = currMatch?.innings[0]?.battingTeam.currBatters;
    // const BowlerData = currMatch?.firstInnings?.bowlingTeam?.currBowler;
    // console.log(BatsmansData);
    // console.log(currMatch?.firstInnings.battingTeam.teamName);
    console.log(currMatch?.innings[0]?.bowlingTeam);
    return (
        <div>
            <div className="container bg-light border border-1 border-dark rounded">
                <h3>Scorecard</h3>
                <h5 className='teamPlaying'>India Innings</h5>
                <h6 className='pt-2'>Batting Team ({currMatch?.innings[0].battingTeam.teamName})</h6>
                <Table>
                    <thead>
                        <tr>
                            <th>Batter</th>
                            <th>R</th>
                            <th>B</th>
                            <th>4s</th>
                            <th>6s</th>
                            <th>SR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BatsmansData?.map(batsman => {
                            return (
                                <>
                                    <tr>
                                        <td>{batsman.name}</td>
                                        <td>{batsman.runs}</td>
                                        <td>{batsman.ballsPlayed}</td>
                                        <td>{batsman.fours}</td>
                                        <td>{batsman.sixes}</td>
                                        <td>{batsman.strikeRate}</td>
                                    </tr>
                                </>
                            )
                        })}
                        {/* <tr>
                            <td>Mark Twain</td>
                            <td>28</td>
                            <td>20</td>
                            <td>4</td>
                            <td>1</td>
                            <td>3.5</td>
                        </tr>
                        <tr>
                            <td>Virat Kohli</td>
                            <td>52</td>
                            <td>29</td>
                            <td>12</td>
                            <td>3</td>
                            <td>5.2</td>
                        </tr> */}
                        {/* <tr>
                            <td>2</td>
                            <td>Rohit Sharma</td>
                            <td>52</td>
                            <td>29</td>
                            <td>12</td>
                            <td>3</td>
                            <td>5.2</td>
                        </tr> */}

                    </tbody>
                </Table>
                <h6 className='pt-2'>Bowling Team ({currMatch?.innings[0].bowlingTeam.teamName})</h6>
                <Table>
                    <thead>
                        <tr>
                            <th>Bowler</th>
                            <th>O</th>
                            <th>R</th>
                            <th>W</th>
                            <th>NB</th>
                            <th>WD</th>
                            <th>ECO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {BowlerData.map((bowler)=> {
                            return (
                                <>
                                    <tr>
                                        <td>{bowler.label}</td>
                                        <td>{bowler.runsConceded}</td>
                                        <td>{bowler.wkts}</td>
                                        <td>{bowler.wb}</td>
                                        <td>{bowler.nb}</td>
                                        <td>{bowler.eco}</td>
                                    </tr>
                                </>
                            )
                        })} */}
                        <tr>
                            <td>Ravindra Jadeja</td>
                            <td>3</td>
                            <td>23</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>3.3</td>
                        </tr>
                        <tr>
                            <td>Hardik Pandeya</td>
                            <td>1</td>
                            <td>12</td>
                            <td>0</td>
                            <td>0</td>
                            <td>1</td>
                            <td>2.5</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MatchScoreCard
