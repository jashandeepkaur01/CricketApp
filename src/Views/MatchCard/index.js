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
        <div className='matchCard p-3 m-2 d-flex flex-column justify-content-evenly fw-bold'>
            <div>
                <div className='d-flex justify-content-between'>
                    <p>{matchData.teams[0]}</p>
                    {matchData.isCompleted ? <p>{matchData?.innings[0].battingTeam.totalRuns} - {matchData?.innings[0].battingTeam.wkts} ({matchData?.innings[0].bowlingTeam.currOver})</p> : null}
                </div>
                <div className='d-flex justify-content-between'>
                    <p>{matchData.teams[1]}</p>
                    {matchData.isCompleted ? <p>{matchData?.innings[1].battingTeam.totalRuns} - {matchData?.innings[1].battingTeam.wkts} ({matchData?.innings[1].bowlingTeam.currOver})</p> : null}
                </div>
                {matchData.isCompleted ? <p className='text-success fw-normal'>{matchData?.status}</p> : <p className='text-danger fw-normal'>(Live)</p>}
            </div>
            <div>
                {matchData?.isCompleted ? <button className='btn btn-primary' onClick={() => viewScoreCard(matchData)}>View ScoreCard</button> :
                    <button className='btn btn-primary' onClick={() => viewMatch(matchData)}>View Match</button>}
            </div>
        </div>
    )
}

export default MatchCard
