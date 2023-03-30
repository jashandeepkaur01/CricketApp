import BowlerModal from 'Components/Atoms/BowlerModal';
import SelectPlayerModal from 'Components/Atoms/SelectBatsmanModal';
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { getMatchData, matchTeams, updateCurrMatchData } from 'Redux/Actions/matchActions';
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
    const [onStrike, setOnStrike] = useState(0);
    const isCurrentMatchRef = useRef(false)
    const [isShowBatsmanModal,setIsShowBatsmanModal] = useState(false);
    const [isShowBowlerModal,setIsShowBowlerModal] = useState(false);
    console.log(isShowBowlerModal);

    const params = useParams()
    const { matchOrganiserKey } = params;
    console.log(matchOrganiserKey);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // function handleBowlerModal() {
    //     console.log('handling bowler')
    //     handleShow();
    // }

    const showSelectPlayerModal = () =>{
        document.getElementById('playerContainer').style.display = 'block'
    }
    const hideSelectPlayerModal = () => {
        document.getElementById('playerContainer').style.display = 'none';
    }
    const dispatch = useDispatch();
    const teamsData = useSelector((state) => state.team.teams);
    const currMatchData = useSelector((state) => state.match.currMatch);

    const currentGoingMatch = currMatchData.find(match => match.matchOrganiser === matchOrganiserKey);
    console.log('currentGoingMatch....', currentGoingMatch)
    // console.log('currMatchData......',currMatchData);
    // for(let i in currMatchData){
    //     console.log('dd...',currMatchData[i]);
    // }
    // console.log('current going match details: ')
    // console.log('my Team data: name',currentGoingMatch?.myTeamData?.name)
    // console.log('my Team data: runs',currentGoingMatch?.myTeamData?.runs)
    // console.log('my Team data: 6s',currentGoingMatch?.myTeamData?.sixes)

    let isPlayersSelected = batsman1.value && batsman2.value && bowler.value;
    // const isPlayersSelected = batsman1.value && batsman2.value;
    const isBatsmanSelected = batsman1.value && batsman2.value;
    // console.log('isBatsman Selected...',isBatsmanSelected);
    console.log('selected...' + isPlayersSelected);
    useEffect(() => {
        dispatch(getMatchData([]))
    }, [])

    useEffect(() => {
        // if (isCurrentMatchRef.current) {
            setCurrScore(currentGoingMatch?.myTeamData?.runs);
        for (let team of teamsData) {
            if (currentGoingMatch?.myTeam === team.teamName) {
                // console.log(team);
                setMyTeamPlayers(team.teamPlayers);
                // console.log('myTeam...', myTeamPlayers);
            }
            if (currentGoingMatch?.oppTeam === team.teamName) {
                // console.log(team)
                setOppTeamPlayers(team.teamPlayers);
            }
        }
        // handleBowlerModal();
        // } else {
        //     isCurrentMatchRef.current = true
        // }
        setTimeout(() => {
            setIsShowBatsmanModal(true)
        }, 1000);
    }, [currMatchData])
    
    if (isOverCompleted) {
        setTimeout(() => {
            // alert('over completed...');
            // handleBowlerModal();
            setIsShowBowlerModal(true);
            console.log('select bowler...');
            isPlayersSelected = false;
            setIsOverCompleted(false);
            setCurrOver([]);
        }, 200)
    }
    function handleScoreClick(e) {
        const matchData = {...currentGoingMatch};
        let btnValue = e.target.innerText;
        if (btnValue !== 'WB' && btnValue !== 'NB') {
            let currentOver = 0; 
            if ((overs * 10) % 10 === 5) {
                console.log('over completed...');
                setIsOverCompleted(true);
                currentOver = parseFloat((overs + 0.5).toFixed(1)) 
                setOvers(currentOver)
            }
            else {
                currentOver = parseFloat((overs + 0.1).toFixed(1)) 
                setOvers(currentOver)
            }
            matchData.overs = currentOver;
        }
        if (btnValue === 'WB' || btnValue === 'NB') {
            console.log('wide ball')
            setCurrScore(currScore + 1)
            // setDisplayScore(currScore)
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
            // console.log(currScore);
            let playerOut;
            if (btnValue === 'WC') {
                if (onStrike) {
                    console.log('batsman out : ', batsman2);
                    playerOut = batsman2;        
                    setBatsman2('');
                }
                else {
                    console.log('batsman out : ', batsman1);
                    playerOut = batsman1;
                    setBatsman1('');
                }
                setDisplayScore('OUT')
                setCurrOver([...currOver, 'WC'])
            }
            else {
                setDisplayScore('Dead Ball')
                setCurrOver([...currOver, 'DB'])
            }
            setMyTeamPlayers(myTeamPlayers.filter(player => player !== playerOut));
            setRemainingTeamPlayers(myTeamPlayers.filter(player => player !== playerOut));

        }
        else if (btnValue === 'Undo') {
            console.log('undo...');
        }
        else {
            // console.log(typeof currScore);
            // console.log(typeof btnValue);
            btnValue = +btnValue;
            let currentScore = currScore + btnValue;
            matchData.myTeamData.runs = currentScore;
            setCurrScore(currentScore)
            setDisplayScore(btnValue)
            setCurrOver([...currOver, btnValue])
            if (btnValue === 1 || btnValue === 3)
            setOnStrike(!onStrike);
        }
        dispatch(updateCurrMatchData(matchData));
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
        setDisplayBowler(selectedBowler);
        isPlayersSelected = true;
    }

    return (
        <div className='w-75'>
            <div className="playMatchContainer border border-dark p-2">
                {/* <h2>match controls here</h2> */}
                <div className="scoredisplay border border-2 rounded border-outline-info d-flex justify-content-around pt-2 mb-4">
                    <div className="displayLeft">
                        <p>{(displayBatsman1.value) ? ((!onStrike) ? '*' : '') + displayBatsman1.value + '(21/12)': '(Select Batsman 1)'}</p>
                        <p>{(displayBatsman2.value) ? ((onStrike) ? '*' : '') + displayBatsman2.value + '(54/36)': '(Select Batsman 2)'}</p>
                        <p>Total Score: {currScore}</p>
                        <p>Overs: {overs}</p>
                    </div>
                    <div className="displayCenter my-auto">
                        <h2>{displayScore}</h2>
                    </div>
                    <div className="displayRight">
                        <p>{(displayBowler.value) ? 'Bowler: ' + displayBowler.value : '(Select Bowler)'}</p>
                        <p>Over: {currOver.map(currBall => currBall + ' ')}</p>
                        <p>{currMatchData.myTeam}</p>
                        <p>{currMatchData.oppTeam}</p>
                    </div>
                </div>
                <div className="controls d-flex justify-content-around">
                    {/* <SelectBatsmanModal> */}
                    {/* <button className="btn btn-outline-primary" onClick={showSelectPlayerModal}>Select Batsmans</button> */}
                    {isShowBatsmanModal?
                    <SelectPlayerModal
                     title = 'Select Batsman' setIsShowPlayerModal={setIsShowBatsmanModal} openAnotherModal={setIsShowBowlerModal}>
                        <div className="batting  w-50 mx-auto text-center">
                            <label>Select Batsman 1</label>
                            <Select options={myTeamPlayers} onChange={handleBatsman1} value={batsman1} />
                            <label>Select Batsman 2</label>
                            <Select options={remainingTeamPlayers} onChange={handleBatsman2} value={batsman2} />
                        </div>
                    </SelectPlayerModal>:null}
                    {/* </SelectBatsmanModal> */}
                    {/* <button className="btn btn-outline-dark" onClick={()=>setIsShowBowlerModal(true)}>Select Bowler</button> */}
                    {isShowBowlerModal?<SelectPlayerModal title = 'Select Bowler' setIsShowPlayerModal={setIsShowBowlerModal}>
                    <div className="bowling w-50 mx-auto text-center">
                        <label>Select Bowler {isShowBowlerModal}</label>
                        <Select options={oppTeamPlayers} onChange={handleBowler} value={bowler} />
                        {/* <BowlerModal show={show} handleClose={handleClose} title='Choose Bowler' oppTeamPlayers={oppTeamPlayers} handleBowler={handleBowler} bowler={bowler} /> */}
                    </div>
                    </SelectPlayerModal>:null}
                    {isPlayersSelected ?
                        <div className="control-box text-center">
                            <div>
                                <button className='btn btn-light btn-outline-primary px-4 py-2 m-1' onClick={(e) => handleScoreClick(e)}>0</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2 m-1' onClick={(e) => handleScoreClick(e)}>1</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2 m-1' onClick={(e) => handleScoreClick(e)}>2</button>
                            </div>
                            <div>
                                <button className='btn btn-light btn-outline-primary px-4 py-2 m-1' onClick={(e) => handleScoreClick(e)}>3</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2 m-1' onClick={(e) => handleScoreClick(e)}>4</button>
                                <button className='btn btn-light btn-outline-primary px-4 py-2 m-1' onClick={(e) => handleScoreClick(e)}>6</button>
                            </div>
                            <div>
                                <button className='btn btn-light btn-outline-primary px-3 py-2 m-1' onClick={(e) => handleScoreClick(e)}>NB</button>
                                <button className='btn btn-light btn-outline-primary px-3 py-2 m-1' onClick={(e) => handleScoreClick(e)}>WB</button>
                                <button className='btn btn-light btn-outline-primary px-3 py-2 m-1' onClick={(e) => handleScoreClick(e)}>WC</button>
                            </div>
                            <div>
                                <button className='btn btn-light btn-outline-primary px-3 py-2 m-1' onClick={(e) => handleScoreClick(e)}>DB</button>
                                <button className='btn btn-light btn-outline-primary px-3 py-2 m-1' onClick={(e) => handleScoreClick(e)}>Undo</button>
                            </div>
                        </div> : null}
                </div>
            </div>
                {/* <div>
                    <button onClick={showSelectPlayerModal}>click</button>
                    
                </div> */}
        </div>
    )
}

export default PlayMatch


export const Popup = ({ children }) => {
    return <div>
        {children}
    </div>
}

