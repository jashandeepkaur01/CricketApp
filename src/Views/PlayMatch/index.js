import SelectBowlerModal from 'Components/Atoms/BowlerModal';
import MatchControlBtn from 'Components/Atoms/MatchControlBtn';
import NewBatsmanModal from 'Components/Atoms/NewBatsmanModal';
import SelectPlayerModal from 'Components/Atoms/SelectBatsmanModal';
import { getMatchData, updateCurrMatchData } from 'Redux/Actions/matchActions';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import './style.css';

function PlayMatch() {
    const [show, setShow] = useState(false);
    const [inningCount, setInningCount] = useState(0);
    const [currScore, setCurrScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(0);
    const [overs, setOvers] = useState(0);
    const [wickets, setWickets] = useState(0);
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
    const [playerOut, setPlayerOut] = useState('');
    const [newBatsman, setNewBatsman] = useState('');
    const [isShowNewBatsmanModal, setIsShowNewBatsmanModal] = useState(false);
    const [errMsg, setErrMsg] = useState(' ');


    const onStrikeValue = useRef(0);

    const controlButtons = [0, 1, 2, 3, 4, 6, 'NB', 'WB', 'WC', 'DB', 'Undo'];

    const params = useParams()
    const { matchUniqueKey } = params;

    const dispatch = useDispatch();
    const teamsData = useSelector((state) => state.team.teams);
    const currMatchData = useSelector((state) => state.match.currMatch);


    const currentGoingMatch = currMatchData.find(match => match.key === matchUniqueKey);

    // setInningCount(currentGoingMatch?.inningCount);
    console.log('inningCount...' + currentGoingMatch);

    let isPlayersSelected = batsman1.value && batsman2.value && bowler.value;
    console.log(bowler);
    // let currentOverBalls;
    useEffect(() => {
        dispatch(getMatchData([]))
    }, [])

    useEffect(() => {
        if (currentGoingMatch !== undefined) {
            setInningCount(currentGoingMatch?.inningCount);

            if (currentGoingMatch.innings[inningCount].battingTeam.currBatters[0].name === '' ||
                currentGoingMatch.innings[inningCount].battingTeam.currBatters[1].name === ''
            ) {
                setTimeout(() => {
                    setIsShowBatsmanModal(true)
                }, 100);
            }
        }
        debugger;
        // for (let team of teamsData) {
        //     if (currentGoingMatch?.innings[inningCount]?.battingTeam?.teamName === team.teamName) {
        //         setMyTeamPlayers(team.teamPlayers);
        //     }
        //     if (currentGoingMatch?.innings[inningCount]?.bowlingTeam.teamName === team.teamName) {
        //         setOppTeamPlayers(team.teamPlayers);
        //     }
        // }

        if (currentGoingMatch !== undefined) {
            const currentMatchData = JSON.parse(JSON.stringify(currentGoingMatch));
            setMyTeamPlayers(currentMatchData?.team1Players);
            setOppTeamPlayers(currentMatchData?.team2Players);
            setCurrScore(currentMatchData?.innings[inningCount]?.battingTeam?.totalRuns);
            setOvers(currentMatchData?.innings[inningCount]?.bowlingTeam.currOver);
            setWickets(currentMatchData?.innings[inningCount]?.battingTeam.wkts);
            setRemainingBatsmans(currentMatchData?.innings[inningCount]?.battingTeam?.yetToBat);

            const currentBatsmans = {
                currBatsman1: {
                    name: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.name,
                    value: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.name,
                    key: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.key,
                    runs: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.runs,
                    ballsPlayed: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.ballsPlayed,
                    fours: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.fours,
                    sixes: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.sixes,
                    halfCenturies: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.halfCenturies,
                    strikeRate: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0].strikeRate,
                },
                currBatsman2: {
                    name: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.name,
                    value: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.name,
                    key: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.key,
                    runs: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.runs,
                    ballsPlayed: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.ballsPlayed,
                    fours: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.fours,
                    sixes: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.sixes,
                    halfCenturies: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1]?.halfCenturies,
                    strikeRate: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1].strikeRate,
                }
            }
            const currentBowler = {
                value: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.value,
                label: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.label,
                key: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.key,
                currOverBalls: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.currOverBalls,
                runsConceded: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.runsConceded,
                wkts: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.wkts,
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
            if (currentMatchData?.innings[inningCount]?.bowlingTeam?.currOverBalls) {
                // currentOverBalls = currentMatchData?.innings[inningCount]?.bowlingTeam?.currOverBalls;
                setCurrOver(currentMatchData?.innings[inningCount]?.bowlingTeam?.currOverBalls)
            }
            console.log(currentMatchData?.innings[inningCount]?.bowlingTeam?.currOverBalls);
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
            if (currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0].out.outStatus) {
                setIsShowNewBatsmanModal(true);
                setPlayerOut(currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0].name)
            }
            if (currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1].out.outStatus) {
                setPlayerOut(currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1].name)
            }
        }
    }, [currMatchData])
    // let currentOverBalls;
    if (isOverCompleted) {
        setTimeout(() => {
            setIsShowBowlerModal(true);
            isPlayersSelected = false;
            setIsOverCompleted(false);
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
        let currentOverBalls = (matchData.innings[inningCount].bowlingTeam.currOverBalls) ? matchData.innings[inningCount].bowlingTeam.currOverBalls : [];
        // let strikeRate = matchData.innings[inningCount].battingTeam.currBatters[onStrike]
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
            // matchData.innings[inningCount].bowlingTeam.currBowler = bowler;
            matchData.innings[inningCount].bowlingTeam.currOver = currentOver;
            // matchData.innings[inningCount].bowlingTeam.currOverBalls = currOver;

            // console.log('matchData.innings[inningCount].bowlingTeam.currOver....', matchData.innings[inningCount].bowlingTeam.currOverBalls)
        }
        if (btnValue === 'WB' || btnValue === 'NB') {
            let currentScore = currScore + 1;
            setCurrScore(currentScore)
            if (btnValue === 'WB') {
                setDisplayScore('Wide Ball')
                currentOverBalls.push('WB');
                setCurrOver(currentOverBalls)
                // setCurrOver([...currOver, 'WB'])
            }
            else {
                setDisplayScore('No Ball')
                currentOverBalls.push('NB');
                setCurrOver(currentOverBalls)
                // setCurrOver([...currOver, 'NB'])
            }
            matchData.innings[inningCount].battingTeam.totalRuns = currentScore;
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
                // setBowler({...bowler,wickets: wickets+1})
                let totalWickets = wickets;
                totalWickets += 1;
                setWickets(totalWickets)
                setDisplayScore('OUT')
                currentOverBalls.push('WC');
                setCurrOver(currentOverBalls)
                matchData.innings[inningCount].battingTeam.wkts += 1;
                console.log(matchData.innings[inningCount].battingTeam.wkts);
                matchData.innings[inningCount].bowlingTeam.currBowler = bowler;
                if (matchData.innings[inningCount].bowlingTeam.currBowler.wkts === undefined)
                    matchData.innings[inningCount].bowlingTeam.currBowler.wkts = 1;
                else
                    matchData.innings[inningCount].bowlingTeam.currBowler.wkts += 1;

                matchData.innings[inningCount].battingTeam.currBatters[onStrike] = {
                    ...matchData.innings[inningCount].battingTeam.currBatters[onStrike],
                    out: {
                        outAtBall: parseFloat((overs + 0.1).toFixed(1)),
                        outByBowler: bowler.label,
                        outStatus: true,
                    }
                }
                if (matchData.innings[inningCount].battingTeam.playersPlayed === undefined)
                    matchData.innings[inningCount].battingTeam.playersPlayed = [matchData.innings[inningCount].battingTeam.currBatters[onStrike]];
                else {
                    matchData.innings[inningCount].battingTeam.playersPlayed = [
                        ...matchData.innings[inningCount].battingTeam.playersPlayed,
                        matchData.innings[inningCount].battingTeam.currBatters[onStrike]
                    ]
                }
            }
            else {
                setDisplayScore('Dead Ball')
                currentOverBalls.push('DB');
                setCurrOver(currentOverBalls)
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
            // debugger;
            matchData.innings[inningCount].battingTeam.totalRuns = currentScore;
            if (bowler.runsConceded === undefined)
                matchData.innings[inningCount].bowlingTeam.currBowler.runsConceded = btnValue;
            else
                matchData.innings[inningCount].bowlingTeam.currBowler.runsConceded = bowler.runsConceded + btnValue;

            setCurrScore(currentScore)
            setDisplayScore(btnValue)
            currentOverBalls.push(btnValue);
            console.log('currentOver Balls: ', currentOverBalls);
            setCurrOver(currentOverBalls)
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
            if (btnValue === 4) {
                shot = 'fours';
            }
            else if (btnValue === 6) {
                shot = 'sixes';
            }
            if (btnValue === 4 || btnValue === 6)
                matchData.innings[inningCount].battingTeam.currBatters[onStrike][shot] += 1;

            matchData.innings[inningCount].battingTeam.currBatters[onStrike] = {
                ...matchData.innings[inningCount].battingTeam.currBatters[onStrike],
                runs: matchData.innings[inningCount].battingTeam.currBatters[onStrike].runs + btnValue,
                ballsPlayed: matchData.innings[inningCount].battingTeam.currBatters[onStrike].ballsPlayed + 1,
                strikeRate: parseFloat(((matchData.innings[inningCount].battingTeam.currBatters[onStrike].runs + btnValue) / (matchData.innings[inningCount].battingTeam.currBatters[onStrike].ballsPlayed + 1)).toFixed(2))
                // out: {
                //     outAtBall : matchData.innings[inningCount].bowlingTeam
                // }
                // fours: matchData.innings[inningCount].battingTeam.currBatters[onStrike].fours + 1
            }

            if (onStrike) {
                setBatsman2Data(
                    {
                        ...batsman2Data,
                        runs: batsman2Data.runs + btnValue,
                        ballsPlayed: batsman2Data.ballsPlayed + 1,
                        strikeRate: parseFloat(((batsman2Data.runs + btnValue) / (batsman2Data.ballsPlayed + 1)).toFixed(2)),
                        // strikeRate: Number(((batsman2Data.runs + btnValue)/(batsman2Data.ballsPlayed + 1 )).toFixed(2)),

                    })
            }
            else {
                console.log('first')
                setBatsman1Data(
                    {
                        ...batsman1Data,
                        runs: batsman1Data.runs + btnValue,
                        ballsPlayed: batsman1Data.ballsPlayed + 1,
                        strikeRate: parseFloat(((batsman1Data.runs + btnValue) / (batsman1Data.ballsPlayed + 1)).toFixed(2)),
                        // strikeRate: Number(((batsman1Data.runs + btnValue)/(batsman1Data.ballsPlayed + 1 )).toFixed(2)),
                    })
            }

        }

        matchData.innings[inningCount].bowlingTeam.currOverBalls = currentOverBalls;
        dispatch(updateCurrMatchData(matchData));
    }
    const handleBatsman1 = (selectedBatsman) => {
        setBatsman1(selectedBatsman);
        setErrMsg(' ');
        const matchInfo = currentGoingMatch;
        matchInfo.innings[inningCount].battingTeam.currBatters[0] = {
            ...(matchInfo.innings[inningCount].battingTeam.currBatters[0] ?? {}),
            name: selectedBatsman.label,
            key: selectedBatsman.key,
            strikeRate: 0,

        }
        matchInfo.innings[inningCount].battingTeam.teamPlayers = myTeamPlayers;
        dispatch(updateCurrMatchData(matchInfo))

        setDisplayBatsman1(selectedBatsman);
        setRemainingTeamPlayers(myTeamPlayers.filter(player => player !== selectedBatsman));
    }
    debugger;
    const handleBatsman2 = (selectedBatsman) => {
        setBatsman2(selectedBatsman);
        setErrMsg(' ');
        const matchInfo = currentGoingMatch;
        matchInfo.innings[inningCount].battingTeam.currBatters[1] = {
            ...(matchInfo.innings[inningCount].battingTeam.currBatters[1] ?? {}),
            name: selectedBatsman.label,
            key: selectedBatsman.key,
            strikeRate: 0,
        }

        const remainingBatters = remainingTeamPlayers.filter(player => player !== selectedBatsman);
        setRemainingBatsmans(remainingBatters);
        matchInfo.innings[inningCount].battingTeam.yetToBat = remainingBatters;
        dispatch(updateCurrMatchData(matchInfo))
        setDisplayBatsman2(selectedBatsman);
    }
    const handleBowler = (selectedBowler) => {
        setBowler(selectedBowler);

        isPlayersSelected = true;
    }
    const selectPlayerModal = () => {
        if (batsman1.value === '' || batsman2.value === '') {
            console.log('not happening...');
            setErrMsg('Please select the batsmans')
        }
        console.log('lhlidf');
    }
    const selectBowlerModal = (e) => {
        setDisplayBowler(bowler);
        const matchInfo = currentGoingMatch;
        matchInfo.innings[inningCount].bowlingTeam.currBowler = {
            ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
            label: bowler.label,
            key: bowler.key,
            value: bowler.value,
            runsConceded: 0,
            wkts: 0,
        }
        matchInfo.innings[inningCount].bowlingTeam.currOverBalls = [];
        dispatch(updateCurrMatchData(matchInfo))
        setCurrOver([]);
        setIsShowBowlerModal(false);
    }
    const selectNewBatsmanModal = () => {
        if ((overs * 10) % 10 === 0) {
            setIsOverCompleted(true);
        }
        setDisplayScore('');
        debugger;
        console.log(newBatsman);
        const matchInfo = currentGoingMatch;
        matchInfo.innings[inningCount].battingTeam.currBatters[onStrike] = {
            ...(matchInfo.innings[inningCount].battingTeam.currBatters[onStrike] ?? {}),
            name: newBatsman.label,
            key: newBatsman.key,
            runs: 0,
            ballsPlayed: 0,
            sixes: 0,
            fours: 0,
            centuries: 0,
            doubleCenturies: 0,
            centuries: 0,
            halfCenturies: 0,
            out: {
                outStatus: false,
                outByBowler: '',
                outAtBall: 0,
            }
        }
        const remainingBatters = remainingBatsmans.filter(player => player !== newBatsman);
        setRemainingBatsmans(remainingBatters);
        matchInfo.innings[inningCount].battingTeam.yetToBat = remainingBatters;
        if (onStrike) {
            setBatsman2(newBatsman);
            setDisplayBatsman2(newBatsman);
            console.log(batsman2Data);
            if (batsman2Data.runs >= 200) {
                const doubleCenturies = parseInt(batsman2Data.runs / 200);
                matchInfo.innings[inningCount].battingTeam.doubleCenturies += doubleCenturies;
                setBatsman2Data({ ...batsman2Data, doubleCenturies: doubleCenturies });
            }
            else if (batsman2Data.runs >= 100) {
                const centuries = parseInt(batsman2Data.runs / 100);
                matchInfo.innings[inningCount].battingTeam.centuries += centuries;
                setBatsman2Data({ ...batsman2Data, centuries: centuries });
            }
            else if (batsman2Data.runs >= 50) {
                const halfCenturies = parseInt(batsman2Data.runs / 50);
                matchInfo.innings[inningCount].battingTeam.halfCenturies += halfCenturies;
                setBatsman2Data({ ...batsman2Data, halfCenturies: halfCenturies });
            }
        }
        else {
            console.log(batsman1Data);
            setBatsman1(newBatsman);
            setDisplayBatsman1(newBatsman);
            if (batsman1Data.runs >= 200) {
                const doubleCenturies = parseInt(batsman1Data.runs / 200);
                matchInfo.innings[inningCount].battingTeam.doubleCenturies += doubleCenturies;
                setBatsman1Data({ ...batsman1Data, doubleCenturies: doubleCenturies });
            }
            else if (batsman1Data.runs >= 100) {
                const centuries = parseInt(batsman1Data.runs / 100);
                matchInfo.innings[inningCount].battingTeam.centuries += centuries;
                setBatsman1Data({ ...batsman1Data, centuries: centuries });
            }
            else if (batsman1Data.runs >= 50) {
                const halfCenturies = parseInt(batsman1Data.runs / 50);
                matchInfo.innings[inningCount].battingTeam.halfCenturies += halfCenturies;
                setBatsman1Data({ ...batsman1Data, halfCenturies: halfCenturies });
            }
        }
        setNewBatsman('');
        setIsShowNewBatsmanModal(false);
        dispatch(updateCurrMatchData(matchInfo))
    }
    const handleNewBatsman = (selectedBatsman) => {
        setNewBatsman(selectedBatsman);
    }
    return (
        <div className='w-75 me-3'>
            <div className="playMatchContainer border border-dark shadow p-2">
                <div className="scoredisplay border border-2 rounded border-outline-info d-flex justify-content-around pt-2 mb-4">
                    <div className="displayLeft">
                        <p>{(displayBatsman1.value) ? ((!onStrike) ? '*' : '') + displayBatsman1.value + ' (' + batsman1Data.runs + '/' + batsman1Data.ballsPlayed + ')' : '(Select Batsman 1)'}</p>
                        <p>{(displayBatsman2.value) ? ((onStrike) ? '*' : '') + displayBatsman2.value + ' (' + batsman2Data.runs + '/' + batsman2Data.ballsPlayed + ')' : '(Select Batsman 2)'}</p>
                        <p>Total Score: ({currScore} / {wickets})</p>
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
                            title='Select Batsman' setIsShowPlayerModal={setIsShowBatsmanModal} openAnotherModal={setIsShowBowlerModal} onSubmit={(e) => selectPlayerModal()}>
                            <div className="batting  w-50 mx-auto text-center">
                                <label>Select Batsman 1</label>
                                <Select options={myTeamPlayers} onChange={handleBatsman1} value={batsman1} />
                                <label>Select Batsman 2</label>
                                <Select options={remainingTeamPlayers} onChange={handleBatsman2} value={batsman2} />
                                <span className="text-danger mt-2 mb-0">{errMsg}</span>
                            </div>
                        </SelectPlayerModal> : null}
                    {isShowBowlerModal ? <SelectBowlerModal title='Select Bowler' setIsShowBowlerModal={setIsShowBowlerModal} onSubmit={(e) => selectBowlerModal()}>
                        <div className="bowling w-50 mx-auto text-center">
                            <label>Select Bowler {isShowBowlerModal}</label>
                            <Select options={oppTeamPlayers} onChange={handleBowler} value={bowler} />
                        </div>
                    </SelectBowlerModal> : null}
                    {isShowNewBatsmanModal ?
                        <NewBatsmanModal
                            title='Select Batsman' playerOut={playerOut} setIsShowPlayerModal={setIsShowNewBatsmanModal} onSubmit={selectNewBatsmanModal}>
                            <div className="batting  w-50 mx-auto text-center">
                                <Select options={remainingBatsmans} onChange={handleNewBatsman} value={newBatsman} />
                            </div>
                        </NewBatsmanModal> : null}
                    {isPlayersSelected ?
                        <div className="control-box text-center">
                            {controlButtons.map(controlButton => {
                                if (controlButton === 2 || controlButton === 6 || controlButton === 'WC') {
                                    if (controlButton === 'WC')
                                        return <><MatchControlBtn paddingVal='px-3' control={handleScoreClick} label={controlButton} /><br /></>
                                    return <><MatchControlBtn paddingVal='px-4' control={handleScoreClick} label={controlButton} /><br /></>
                                }
                                else {
                                    if (controlButton === 'NB' || controlButton === 'WB')
                                        return <MatchControlBtn paddingVal='px-3' control={handleScoreClick} label={controlButton} />
                                }
                                return <MatchControlBtn paddingVal='px-4' control={handleScoreClick} label={controlButton} />
                            })}
                        </div> : null}
                </div>
            </div>
        </div>
    )
}

export default PlayMatch;

