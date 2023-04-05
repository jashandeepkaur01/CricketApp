import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';

function MatchScoreCard() {
    const currMatchData = useSelector((state) => state.match.matches);

    return (
        <div>
            <div className="container bg-light border border-1 border-dark rounded">
                <h3>Scorecard</h3>
                <h5 className='teamPlaying'>India Innings</h5>
                <h6 className='pt-2'>Batting Team ({currMatchData.myTeam})</h6>
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
                        <tr>
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
                        </tr>
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
                <h6 className='pt-2'>Bowling Team ({currMatchData.oppTeam})</h6>
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
