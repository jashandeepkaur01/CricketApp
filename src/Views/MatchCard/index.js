import Button from 'Components/Atoms/Button';
import { useHistory } from 'react-router-dom';
import './style.css';
function MatchCard({ matchData }) {
    const navigate = useHistory();

    function viewScoreCard() {
        console.log(matchData?.key);
        navigate.push("/matchInfo/" + matchData?.name + "/" + matchData?.key);
    }
    function viewMatch() {
        navigate.push("/viewMatch/" + matchData.name + "/" + matchData.key);
    }
    return (
        <div className="matchCard_Border_Wrap my-3 mx-3">
            <div className='matchCard d-flex flex-column justify-content-evenly fw-bold'>
                <div className="matchCardInfo m-1 text-light px-2 pt-3">

                    <div className='d-flex justify-content-between'>
                        <p>{matchData.teams[0]}</p>
                        <p>{matchData.teams[1]}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        {matchData.isCompleted ? <p>{matchData?.innings[0].battingTeam.totalRuns} - {matchData?.innings[0].battingTeam.wkts} ({matchData?.innings[0].bowlingTeam.currOver})</p> : null}
                        {matchData.isCompleted ? <p>{matchData?.innings[1].battingTeam.totalRuns} - {matchData?.innings[1].battingTeam.wkts} ({matchData?.innings[1].bowlingTeam.currOver})</p> : null}
                    </div>
                </div>
                {matchData.isCompleted ? <p className='text-success text-center my-2 fw-bold'>{matchData?.status}</p> : <p className='text-danger text-center my-2 fw-bold'>(Live)</p>}
                <div className='my-2 mx-auto'>
                    {matchData?.isCompleted ? <Button onClick={() => viewScoreCard(matchData)}>View ScoreCard</Button> :
                        <Button onClick={() => viewMatch(matchData)}>View Match</Button>}
                </div>

            </div>
        </div>
    )
}

export default MatchCard
