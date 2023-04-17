import { saveMatchData, updateCurrMatchData } from "Redux/Actions/matchActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function InningModal({ title, currentMatchData, inningCount, setInningCount, setCurrOver, winningData, setIsShowInningModal }) {
    const dispatch = useDispatch();
    const ButtonText = inningCount ? 'Back' : 'Start';
    const navigate = useHistory();
    debugger;
    function closeModal() {
        if (inningCount) {
            console.log('match is over ...');
            navigate.push("/");
            dispatch(saveMatchData(currentMatchData));
        }
        else {
            setIsShowInningModal(false)
            setInningCount(1);
            setCurrOver([]);
            currentMatchData.inningCount = 1;
            currentMatchData.innings[inningCount].bowlingTeam.currOverBalls = [];
            dispatch(updateCurrMatchData(currentMatchData));
        }
    }
    return (
        <>
            <div id='playerContainer' className="selectPlayerContainer shadow border rounded text-center">
                <div className="selectPlayerTitle">
                    <h4 className='text-success'>{title}</h4>
                </div>
                <hr />
                {inningCount ?
                    <div>
                        <h4>{winningData.winningTeam} wins by {winningData.winningDifference}</h4>
                    </div> :
                    <div>
                        <div>
                            <h4>{currentMatchData.teams[inningCount]}</h4>
                            <h5>Runs Scored: {currentMatchData.innings[inningCount].battingTeam.totalRuns}</h5>
                            <h5>Wickets: {currentMatchData.innings[inningCount].battingTeam.wkts}</h5>
                        </div>
                        <div>
                            <p className="mt-2">Now start Second Inning</p>
                        </div>
                    </div>
                }
                <div className="selectPlayerFooter text-end">
                    <button className='btn btn-outline-primary' id='okBtn' onClick={() => closeModal()}>{ButtonText}</button>
                </div>
            </div>

        </>
    )
}

export default InningModal;
