import SelectPlayerModal from 'Components/Atoms/SelectBatsmanModal';
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import { getMatchData, matchTeams, updateCurrMatchData } from 'Redux/Actions/matchActions';
import { getData } from 'Redux/Actions/playerActions';
import './style.css'
import NewBatsmanModal from 'Components/Atoms/NewBatsmanModal';
import MatchControlBtn from 'Components/Atoms/MatchControlBtn';

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
    const [remainingBatsmans, setRemainingBatsmans] = useState('');
    const [bowler, setBowler] = useState('');
    const [displayBatsman1, setDisplayBatsman1] = useState('Select Batsman');
    const [displayBatsman2, setDisplayBatsman2] = useState('Select Batsman');
    const [displayBowler, setDisplayBowler] = useState('Select Bowler');
    const [batsman1Data, setBatsman1Data] = useState({ runs: 0, ballsPlayed: 0 });
    const [batsman2Data, setBatsman2Data] = useState({ runs: 0, ballsPlayed: 0 });
    const [onStrike, setOnStrike] = useState(0);
    const [isShowBatsmanModal, setIsShowBatsmanModal] = useState(false);
    const [isShowBowlerModal, setIsShowBowlerModal] = useState(false);
    const [playerOut,setPlayerOut] = useState('');
    const [newBatsman, setNewBatsman] = useState('');
    const [isShowNewBatsmanModal, setIsShowNewBatsmanModal] = useState(false);


    const onStrikeValue = useRef(0);

    const controlButtons = [0,1,2,3,4,6,'NB','WB','WC','DB','Undo'];

    const params = useParams()
    const { matchOrganiserKey } = params;

    const dispatch = useDispatch();
    const teamsData = useSelector((state) => state.team.teams);
    const currMatchData = useSelector((state) => state.match.currMatch);

    const currentGoingMatch = currMatchData.find(match => match.matchOrganiser === matchOrganiserKey);

    let isPlayersSelected = batsman1.value && batsman2.value && bowler.value;

    useEffect(() => {
        dispatch(getMatchData([]))
    }, [])

    useEffect(() => {
        if (currentGoingMatch !== undefined) {
            if (currentGoingMatch.firstInnings.battingTeam.currBatters[0].name === '') {
                setTimeout(() => {
                    setIsShowBatsmanModal(true)
                }, 100);
            }
        }

        for (let team of teamsData) {
            if (currentGoingMatch?.firstInnings?.battingTeam?.teamName === team.teamName) {
                setMyTeamPlayers(team.teamPlayers);
            }
            if (currentGoingMatch?.firstInnings?.bowlingTeam.teamName === team.teamName) {
                setOppTeamPlayers(team.teamPlayers);
            }
        }

        if (currentGoingMatch !== undefined) {
            const currentMatchData = JSON.parse(JSON.stringify(currentGoingMatch));

            setCurrScore(currentMatchData?.firstInnings?.battingTeam?.totalRuns);
            setOvers(currentMatchData?.firstInnings?.bowlingTeam.currOver);
            setRemainingBatsmans(currentMatchData?.firstInnings?.battingTeam?.yetToBat);

            const currentBatsmans = {
                currBatsman1: {
                    name: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.name,
                    value: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.name,
                    key: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.key,
                    runs: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.runs,
                    ballsPlayed: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.ballsPlayed,
                    fours: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.fours,
                    sixes: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.sixes,
                    halfCenturies: currentMatchData?.firstInnings?.battingTeam?.currBatters[0]?.halfCenturies,
                },
                currBatsman2: {
                    name: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.name,
                    value: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.name,
                    key: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.key,
                    runs: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.runs,
                    ballsPlayed: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.ballsPlayed,
                    fours: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.fours,
                    sixes: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.sixes,
                    halfCenturies: currentMatchData?.firstInnings?.battingTeam?.currBatters[1]?.halfCenturies,
                }
            }
            const currentBowler = {
                value: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.name,
                label: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.name,
                key: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.key,
                currOverBalls: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.currOverBalls,
                // runsConceded :  currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.runs,
            }
            setBatsman1({
                value: currentBatsmans.currBatsman1.name,
                label: currentBatsmans.currBatsman1.name,
                key: currentBatsmans.currBatsman1.key,
            })
            setBatsman2({
                value: currentBatsmans.currBatsman2.name,
                label: currentBatsmans.currBatsman2.name,
                key: currentBatsmans.currBatsman2.key,
            })
            setDisplayBatsman1(currentBatsmans.currBatsman1);
            setDisplayBatsman2(currentBatsmans.currBatsman2);
            // setPlayerOut('');
            setBowler(currentBowler);
            setDisplayBowler(currentBowler);
            setBatsman1Data({
                ...batsman1Data,
                runs: currentBatsmans.currBatsman1.runs,
                ballsPlayed: currentBatsmans.currBatsman1.ballsPlayed,
                fours: currentBatsmans.currBatsman1.fours,
                sixes: currentBatsmans.currBatsman1.sixes,
                halfCenturies: currentBatsmans.currBatsman1.halfCenturies,
            })
            setBatsman2Data({
                ...batsman2Data,
                runs: currentBatsmans.currBatsman2.runs,
                ballsPlayed: currentBatsmans.currBatsman2.ballsPlayed,
                fours: currentBatsmans.currBatsman2.fours,
                sixes: currentBatsmans.currBatsman2.sixes,
                halfCenturies: currentBatsmans.currBatsman2.halfCenturies,
            })
        }
    }, [currMatchData])

    if (isOverCompleted) {
        setTimeout(() => {
            setIsShowBowlerModal(true);
            isPlayersSelected = false;
            setIsOverCompleted(false);
            // const overScore = currOver.reduce(
            //     (accumulator, runs) => accumulator + runs
            // );
            // console.log('total score...',overScore);
            setCurrOver([]);
            if (onStrikeValue.current) {
                onStrikeValue.current = 0;
                setOnStrike(onStrikeValue.current);
            }
            else {
                onStrikeValue.current = 1;
                setOnStrike(onStrikeValue.current);
            }
        }, 20)
    }
    function handleScoreClick(e) {
        const matchData = JSON.parse(JSON.stringify(currentGoingMatch));

        let btnValue = e.target.innerText;
        if (btnValue !== 'WB' && btnValue !== 'NB') {
            let currentOver = 0;
            if ((overs * 10) % 10 === 5) {
                if (btnValue !== 'WC')
                    setIsOverCompleted(true);
                currentOver = parseFloat((overs + 0.5).toFixed(1))
                setOvers(currentOver)
            }
            else {
                currentOver = parseFloat((overs + 0.1).toFixed(1))
                setOvers(currentOver)
            }
            matchData.firstInnings.bowlingTeam.currOver = currentOver;
            matchData.firstInnings.bowlingTeam.currOverBalls = currOver;

            // console.log('matchData.firstInnings.bowlingTeam.currOver....', matchData.firstInnings.bowlingTeam.currOverBalls)
        }
        if (btnValue === 'WB' || btnValue === 'NB') {
            setCurrScore(currScore + 1)
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
            if (btnValue === 'WC') {
                if (onStrike) {
                    setPlayerOut(batsman2.label)
                    setBatsman2('');
                    setIsShowNewBatsmanModal(true);
                }
                else {
                    setPlayerOut(batsman1.label)
                    setBatsman1('');
                    setIsShowNewBatsmanModal(true);
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
            btnValue = +btnValue;
            let currentScore = currScore + btnValue;
            matchData.firstInnings.battingTeam.totalRuns = currentScore;
            setCurrScore(currentScore)
            setDisplayScore(btnValue)
            setCurrOver([...currOver, btnValue])
            if (btnValue === 1 || btnValue === 3) {
                if (onStrikeValue.current) {
                    onStrikeValue.current = 0;
                    setOnStrike(onStrikeValue.current);
                }
                else {
                    onStrikeValue.current = 1;
                    setOnStrike(onStrikeValue.current);
                }
            }
            let shot = '';
            let shotScore = 0;
            if (btnValue === 4) {
                shot = 'fours';
                shotScore = 4;
            }
            else if (btnValue === 6) {
                shot = 'sixes';
                shotScore = 6;
            }
            if (btnValue === 4 || btnValue === 6)
                matchData.firstInnings.battingTeam.currBatters[onStrike][shot] += 1;

            matchData.firstInnings.battingTeam.currBatters[onStrike] = {
                ...matchData.firstInnings.battingTeam.currBatters[onStrike],
                runs: matchData.firstInnings.battingTeam.currBatters[onStrike].runs + btnValue,
                ballsPlayed: matchData.firstInnings.battingTeam.currBatters[onStrike].ballsPlayed + 1,
                // fours: matchData.firstInnings.battingTeam.currBatters[onStrike].fours + 1
            }

            if (onStrike) {
                setBatsman2Data(
                    {
                        ...batsman2Data,
                        runs: batsman2Data.runs + btnValue,
                        ballsPlayed: batsman2Data.ballsPlayed + 1,
                    })
            }
            else {
                console.log('first')
                setBatsman1Data(
                    {
                        ...batsman1Data,
                        runs: batsman1Data.runs + btnValue,
                        ballsPlayed: batsman1Data.ballsPlayed + 1,
                    })
            }

        }
        dispatch(updateCurrMatchData(matchData));
    }
    const handleBatsman1 = (selectedBatsman) => {
        setBatsman1(selectedBatsman);
        const matchInfo = currentGoingMatch;
        matchInfo.firstInnings.battingTeam.currBatters[0] = {
            ...(matchInfo.firstInnings.battingTeam.currBatters[0] ?? {}),
            name: selectedBatsman.label,
            key: selectedBatsman.key,
        }
        matchInfo.firstInnings.battingTeam.teamPlayers = myTeamPlayers;
        dispatch(updateCurrMatchData(matchInfo))

        setDisplayBatsman1(selectedBatsman);
        setRemainingTeamPlayers(myTeamPlayers.filter(player => player !== selectedBatsman));
    }
    const handleBatsman2 = (selectedBatsman) => {

        const matchInfo = currentGoingMatch;
        matchInfo.firstInnings.battingTeam.currBatters[1] = {
            ...(matchInfo.firstInnings.battingTeam.currBatters[1] ?? {}),
            name: selectedBatsman.label,
            key: selectedBatsman.key,
        }
        const remainingBatters = remainingTeamPlayers.filter(player => player !== selectedBatsman);
        setRemainingBatsmans(remainingBatters);
        matchInfo.firstInnings.battingTeam.yetToBat = remainingBatters;
        dispatch(updateCurrMatchData(matchInfo))
        setBatsman2(selectedBatsman);
        setDisplayBatsman2(selectedBatsman);
    }
    const handleBowler = (selectedBowler) => {
        const matchInfo = currentGoingMatch;
        matchInfo.firstInnings.bowlingTeam.currBowler = {
            ...(matchInfo.firstInnings.battingTeam.currBowler ?? {}),
            name: selectedBowler.label,
            key: selectedBowler.key,
        }
        dispatch(updateCurrMatchData(matchInfo))
        setBowler(selectedBowler);
        setDisplayBowler(selectedBowler);
        isPlayersSelected = true;
    }
    const selectNewBatsmanModal = () => {
        setNewBatsman('');
        setIsShowNewBatsmanModal(false);
        if ((overs * 10) % 10 === 0) {
            setIsOverCompleted(true);
        }
    }
    const handleNewBatsman = (selectedBatsman) => {
        setNewBatsman(selectedBatsman);
        const matchInfo = currentGoingMatch;
        matchInfo.firstInnings.battingTeam.currBatters[onStrike] = {
            ...(matchInfo.firstInnings.battingTeam.currBatters[onStrike] ?? {}),
            name: selectedBatsman.label,
            key: selectedBatsman.key,
            runs: 0,
            ballsPlayed: 0,
            sixes: 0,
            fours: 0,
            hundreds: 0,
            doubleCenturies: 0,
            centuries: 0,
            halfCenturies: 0,
            out: {
                outStatus: false,
                outByBowler: '',
                outAtBall: 0,
            }
        }
        const remainingBatters = remainingBatsmans.filter(player => player !== selectedBatsman);
        setRemainingBatsmans(remainingBatters);
        matchInfo.firstInnings.battingTeam.yetToBat = remainingBatters;
        setDisplayScore('');
        if (onStrike) {
            setBatsman2(selectedBatsman);
            setDisplayBatsman2(selectedBatsman);
            if (batsman2Data.runs >= 200) {
                const doubleCenturies = batsman2Data.runs % 200;
                matchInfo.firstInnings.battingTeam.doubleCenturies += doubleCenturies;
                setBatsman2Data({ ...batsman2Data, doubleCenturies: doubleCenturies });
            }
            else if (batsman2Data.runs >= 100) {
                const centuries = batsman2Data.runs % 100;
                matchInfo.firstInnings.battingTeam.centuries += centuries;
                setBatsman2Data({ ...batsman2Data, centuries: centuries });
            }
            else if (batsman2Data.runs >= 50) {
                const halfCenturies = batsman2Data.runs % 50;
                matchInfo.firstInnings.battingTeam.halfCenturies += halfCenturies;
                setBatsman2Data({ ...batsman2Data, halfCenturies: halfCenturies });
            }
        }
        else {
            setBatsman1(selectedBatsman);
            setDisplayBatsman1(selectedBatsman);
            if (batsman1Data.runs >= 200) {
                const doubleCenturies = batsman1Data.runs % 200;
                matchInfo.firstInnings.battingTeam.doubleCenturies += doubleCenturies;
                setBatsman1Data({ ...batsman1Data, doubleCenturies: doubleCenturies });
            }
            else if (batsman1Data.runs >= 100) {
                const centuries = batsman1Data.runs % 100;
                matchInfo.firstInnings.battingTeam.centuries += centuries;
                setBatsman1Data({ ...batsman1Data, centuries: centuries });
            }
            else if (batsman1Data.runs >= 50) {
                const halfCenturies = batsman1Data.runs % 50;
                matchInfo.firstInnings.battingTeam.halfCenturies += halfCenturies;
                setBatsman1Data({ ...batsman1Data, halfCenturies: halfCenturies });
            }
        }
        dispatch(updateCurrMatchData(matchInfo))
    }
    console.log(remainingBatsmans);
    return (
        <div className='w-75 me-3'>
            <div className="playMatchContainer border border-dark shadow p-2">
                <div className="scoredisplay border border-2 rounded border-outline-info d-flex justify-content-around pt-2 mb-4">
                    <div className="displayLeft">
                        <p>{(displayBatsman1.value) ? ((!onStrike) ? '*' : '') + displayBatsman1.value + ' (' + batsman1Data.runs + '/' + batsman1Data.ballsPlayed + ')' : '(Select Batsman 1)'}</p>
                        <p>{(displayBatsman2.value) ? ((onStrike) ? '*' : '') + displayBatsman2.value + ' (' + batsman2Data.runs + '/' + batsman2Data.ballsPlayed + ')' : '(Select Batsman 2)'}</p>
                        <p>Total Score: {currScore}</p>
                        <p>Overs: {overs}</p>
                    </div>
                    <div className="displayCenter my-auto">
                        <h2>{displayScore}</h2>
                    </div>
                    <div className="displayRight">
                        <p>{(displayBowler.value) ? 'Bowler: ' + displayBowler.value : '(Select Bowler)'}</p>
                        <p>Over: {currOver.map(currBall => currBall + ' ')}</p>
                    </div>
                </div>
                <div className="controls d-flex justify-content-around">
                    {isShowBatsmanModal ?
                        <SelectPlayerModal
                            title='Select Batsman' setIsShowPlayerModal={setIsShowBatsmanModal} openAnotherModal={setIsShowBowlerModal}>
                            <div className="batting  w-50 mx-auto text-center">
                                <label>Select Batsman 1</label>
                                <Select options={myTeamPlayers} onChange={handleBatsman1} value={batsman1} />
                                <label>Select Batsman 2</label>
                                <Select options={remainingTeamPlayers} onChange={handleBatsman2} value={batsman2} />
                            </div>
                        </SelectPlayerModal> : null}
                    {isShowBowlerModal ? <SelectPlayerModal title='Select Bowler' setIsShowPlayerModal={setIsShowBowlerModal}>
                        <div className="bowling w-50 mx-auto text-center">
                            <label>Select Bowler {isShowBowlerModal}</label>
                            <Select options={oppTeamPlayers} onChange={handleBowler} value={bowler} />
                        </div>
                    </SelectPlayerModal> : null}
                    {isShowNewBatsmanModal ?
                        <NewBatsmanModal
                            title='Select Batsman' playerOut={playerOut} setIsShowPlayerModal={setIsShowNewBatsmanModal} onSubmit={selectNewBatsmanModal}>
                            <div className="batting  w-50 mx-auto text-center">
                                <Select options={remainingBatsmans} onChange={handleNewBatsman} value={newBatsman} />
                            </div>
                        </NewBatsmanModal> : null}
                    {isPlayersSelected ?
                        <div className="control-box text-center">
                            {controlButtons.map(controlButton=>{
                                if(controlButton === 2 || controlButton === 6 || controlButton === 'WC'){
                                    if(controlButton === 'WC')
                                        return <><MatchControlBtn paddingVal = 'px-3' control={handleScoreClick} label={controlButton} /><br /></>
                                    return <><MatchControlBtn  paddingVal = 'px-4' control={handleScoreClick} label={controlButton} /><br /></>
                                }
                                else{
                                    if(controlButton === 'NB' || controlButton === 'WB')
                                        return <MatchControlBtn  paddingVal = 'px-3' control={handleScoreClick} label={controlButton} />
                                }
                                    return <MatchControlBtn  paddingVal = 'px-4' control={handleScoreClick} label={controlButton} />
                            })}
                        </div> : null}
                </div>
            </div>
        </div>
    )
}

export default PlayMatch


export const Popup = ({ children }) => {
    return <div>
        {children}
    </div>
}

