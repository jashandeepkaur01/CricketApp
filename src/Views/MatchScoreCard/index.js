import { bowlingScoreCardHeading } from 'Shared/Constants';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MatchScoreCard() {
    const [inningCount, setInningCount] = useState(0);
    const params = useParams()
    const { matchUniqueKey } = params;


    const currMatches = useSelector((state) => state.match.currMatch);
    const currMatch = currMatches.find(match => match.key === matchUniqueKey);
    const BatsmansData = currMatch?.innings[inningCount]?.battingTeam?.currBatters;
    const bowler = currMatch?.innings[inningCount]?.bowlingTeam?.currBowler;
    useEffect(() => {
        if (currMatch)
            setInningCount(currMatch.inningCount);
    }, [currMatch])

    return (
        <div>
            <div className="container bg-light border border-1 border-dark rounded">
                <h3>Scorecard</h3>
                <h5>Inning {inningCount + 1}</h5>
                <h6 className='pt-2'>Batting Team ({currMatch?.teams[inningCount]})</h6>
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
                        {BatsmansData?.map((batsman, index) => {
                            return (
                                <>
                                    <tr key={index}>
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

                    </tbody>
                </Table>
                <h6 className='pt-2'>Bowling Team ({currMatch?.teams[+!inningCount]})</h6>
                <Table>
                    <thead>
                        <tr>
                            {bowlingScoreCardHeading.map((heading, index) => <th key={index}>{heading}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {<tr>
                            <td>{bowler?.label}</td>
                            <td>{bowler?.oversThrown}</td>
                            <td>{bowler?.runsConceded}</td>
                            <td>{bowler?.wkts}</td>
                            <td>{bowler?.NB}</td>
                            <td>{bowler?.WB}</td>
                            <td>{bowler?.Econ}</td>
                        </tr>}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default MatchScoreCard
