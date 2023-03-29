import BowlerModal from 'Components/Atoms/BowlerModal';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getMatchData, matchTeams } from 'Redux/Actions/matchActions';
import { getData } from 'Redux/Actions/playerActions';
import './style.css'

function PlayMatch() {
    const [show, setShow] = useState(false);
    const [currScore, setCurrScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(0);
    const [overs, setOvers] = useState(0);
    const [isOverCompleted, setIsOverCompleted] = useState(false);
    const [currOver, setCurrOver] = useState([]);
    const [myTeamPlayers, setMyTeamPlayers] = useState([]);
    const [oppTeamPlayers, setOppTeamPlayers] = useState([]);
    const [remainingTeamPlayers, setRemainingTeamPlayers] = useState([]);
    const [batsman1, setBatsman1] = useState('');
    const [batsman2, setBatsman2] = useState('');
    const [bowler, setBowler] = useState('');
    const [displayBatsman1, setDisplayBatsman1] = useState('Select Batsman');
    const [displayBatsman2, setDisplayBatsman2] = useState('Select Batsman');
    const [displayBowler, setDisplayBowler] = useState('Select Bowler');
    // let myTeamPlayers = [];
    // let oppTeamPlayers = [];
    // let remainingTeamPlayers = [];
    // const [teamPlayers,setTeamPlayers] = useState({
    //     myTeamPlayers: [],
    //     oppTeamPlayers: [],
    //     remainingTeamPlayers: [],
    // })

    const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  function handleBowlerModal() {
    console.log('handling bowler')
    handleShow();
  }



    const dispatch = useDispatch();
    const teamsData = useSelector((state) => state.team.teams);
    const currMatchData = useSelector((state) => state.match.currMatch);
    // const currMatchData = {
    //     myTeam: 'RCB',
    //     oppTeam: 'MI',
    // }
    console.log('teamsData...',teamsData);
    console.log('currMatchData: ' + currMatchData)
    // for(let i in currMatchData){
    //     console.log('dd...',currMatchData[i]);
    // }
    // const isPlayersSelected = batsman1.value && batsman2.value && bowler.value;
    const isPlayersSelected = batsman1.value && batsman2.value;
    const isBatsmanSelected = batsman1.value && batsman2.value;
    console.log('isBatsman Selected...',isBatsmanSelected);
    console.log('selected...' + isPlayersSelected);
    let myMatchData;
    useEffect(() => {
        dispatch(getMatchData({}))
        
        for (let team of teamsData) {
            if (currMatchData.myTeam === team.teamName) {
                console.log(team);
                setMyTeamPlayers(team.teamPlayers);
                console.log('myTeam...', myTeamPlayers);
            }
            if (currMatchData.oppTeam === team.teamName) {
                console.log(team)
                setOppTeamPlayers(team.teamPlayers)
            }
        }
        handleBowlerModal();
        // dispatch(matchTeams([team.label, oppTeam.label]));
        // dispatch(getMatchData({
        //     success: (data)=>{
        //         myMatchData = data;
        //         console.log(data);
        //     },
        //     fail: () =>{}
        // }));
    }, [])
    console.log('myMatchData....',myMatchData);
    console.log(myTeamPlayers, 'kkkkk')

    if (isOverCompleted) {
        setTimeout(() => {
            // alert('over completed...');
            handleBowlerModal();
            setIsOverCompleted(false);
            setCurrOver([]);
        }, 200)
    }
    function handleScoreClick(e) {
        let btnValue = e.target.innerText;
        if (btnValue !== 'WB' && btnValue !== 'NB') {
            if ((overs * 10) % 10 === 5) {
                console.log('over completed...');
                setIsOverCompleted(true);
                setOvers(parseFloat((overs + 0.5).toFixed(1)))
            }
            else {
                setOvers(parseFloat((overs + 0.1).toFixed(1)))
            }
        }
        if (btnValue === 'WB' || btnValue === 'NB') {
            console.log('wide ball')
            setCurrScore(currScore + 1)
            setDisplayScore(currScore)
            if (btnValue === 'WB') {
                setDisplayScore('Wide Ball')
                setCurrOver([...currOver, 'WB'])
            }
            else {
                setDisplayScore('No Ball')
                setCurrOver([...currOver, 'NB'])
            }
        }
        else if (btnValue === 'WC' || btnValue === 'DB') {
            console.log('Out');
            console.log(currScore);
            if (btnValue === 'WC') {
                setDisplayScore('OUT')
                setCurrOver([...currOver, 'WC'])
            }
            else {
                setDisplayScore('Dead Ball')
                setCurrOver([...currOver, 'DB'])
            }
        }
        else if (btnValue === 'Undo') {
            console.log('undo...');

        }
        else {
            // console.log(typeof currScore);
            // console.log(typeof btnValue);
            btnValue = +btnValue;
            setCurrScore(currScore + btnValue)
            setDisplayScore(currScore + btnValue)
            setCurrOver([...currOver, btnValue])
        }
    }
    const handleBatsman1 = (selectedBatsman) => {
        setBatsman1(selectedBatsman);
        console.log(selectedBatsman);
        setDisplayBatsman1(selectedBatsman);
        setRemainingTeamPlayers(myTeamPlayers.filter(player => player !== selectedBatsman));
    }
    const handleBatsman2 = (selectedBatsman) => {
        setBatsman2(selectedBatsman);
        // console.log(selectedBatsman);
        setDisplayBatsman2(selectedBatsman);
    }
    const handleBowler = (selectedBowler) => {
        setBowler(selectedBowler);
        setDisplayBowler(selectedBowler)
    }

    return (
        <div className='w-75'>
            <div className="playMatchContainer border border-dark p-2">
                {/* <h2>match controls here</h2> */}
                <div className="scoredisplay border border-2 rounded border-outline-info d-flex justify-content-around pt-2 mb-4">
                    <div className="displayLeft">
                        <p>{(displayBatsman1.value) ? displayBatsman1.value : '(Select Batsman 1)'}</p>
                        <p>{(displayBatsman2.value) ? displayBatsman2.value : '(Select Batsman 2)'}</p>
                        <p>Total Score: {currScore}</p>
                        <p>Overs: {overs}</p>
                    </div>
                    <div className="displayCenter my-auto">
                        <h2>{displayScore}</h2>
                    </div>
                    <div className="displayRight">
                        <p>{(displayBowler.value) ? 'Bowler: ' + displayBowler.value : '(Select Bowler)'}</p>
                        <p>Overs: {currOver.map(currBall => currBall + ' ')}</p>
                    </div>
                </div>
                <div className="controls d-flex justify-content-between">
                    <div className="batting w-25">
                        <label>Select Batsman 1</label>
                        <Select options={myTeamPlayers} onChange={handleBatsman1} value={batsman1} />
                        <label>Select Batsman 2</label>
                        <Select options={remainingTeamPlayers} onChange={handleBatsman2} value={batsman2} />
                    </div>
                    <div className="bowling w-25">
                        <label>Select Bowler</label>
                        {/* <Select options={oppTeamPlayers} onChange={handleBowler} value={bowler} /> */}
                        <BowlerModal show={show} handleClose={handleClose} title='Choose Bowler' oppTeamPlayers={oppTeamPlayers} handleBowler={handleBowler} bowler={bowler}/>
                    </div>
                    {isPlayersSelected ?
                        <div className="control-box text-center">
                            <div>
                                <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>0</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>1</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>2</button>
                            </div>
                            <div>
                                <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>3</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>4</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>6</button>
                            </div>
                            <div>
                                <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>NB</button>
                                <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>WB</button>
                                <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>WC</button>
                            </div>
                            <div>
                                <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>DB</button>
                                <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>Undo</button>
                            </div>
                        </div> : null}
                </div>
            </div>
        </div>
    )
}

export default PlayMatch
