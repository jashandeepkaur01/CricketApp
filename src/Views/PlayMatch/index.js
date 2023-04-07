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


    const onStrikeValue = useRef(0);

    const controlButtons = [0, 1, 2, 3, 4, 6, 'NB', 'WB', 'WC', 'DB', 'Undo'];

    const params = useParams()
    const { matchUniqueKey } = params;

    const dispatch = useDispatch();
    const teamsData = useSelector((state) => state.team.teams);
    const currMatchData = useSelector((state) => state.match.currMatch);

    const currentGoingMatch = currMatchData.find(match => match.key === matchUniqueKey);

    let isPlayersSelected = batsman1.value && batsman2.value && bowler.value;
    console.log(bowler);
    // let currentOverBalls;
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
            setWickets(currentMatchData?.firstInnings?.battingTeam.wkts);
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
                    strikeRate: currentMatchData?.firstInnings?.battingTeam?.currBatters[0].strikeRate,
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
                    strikeRate: currentMatchData?.firstInnings?.battingTeam?.currBatters[1].strikeRate,
                }
            }
            debugger;
            const currentBowler = {
                value: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.value,
                label: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.label,
                key: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.key,
                currOverBalls: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.currOverBalls,
                runsConceded: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.runsConceded,
                wkts: currentMatchData?.firstInnings?.bowlingTeam?.currBowler?.wkts,
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
            if (currentMatchData?.firstInnings?.bowlingTeam?.currOverBalls) {
                // currentOverBalls = currentMatchData?.firstInnings?.bowlingTeam?.currOverBalls;
                setCurrOver(currentMatchData?.firstInnings?.bowlingTeam?.currOverBalls)
            }
            console.log(currentMatchData?.firstInnings?.bowlingTeam?.currOverBalls);
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
            if (currentMatchData?.firstInnings?.battingTeam?.currBatters[0].out.outStatus) {
                setIsShowNewBatsmanModal(true);
                setPlayerOut(currentMatchData?.firstInnings?.battingTeam?.currBatters[0].name)
            }
            if (currentMatchData?.firstInnings?.battingTeam?.currBatters[1].out.outStatus) {
                setPlayerOut(currentMatchData?.firstInnings?.battingTeam?.currBatters[1].name)
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
        let currentOverBalls = (matchData.firstInnings.bowlingTeam.currOverBalls) ? matchData.firstInnings.bowlingTeam.currOverBalls : [];
        // let strikeRate = matchData.firstInnings.battingTeam.currBatters[onStrike]
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
            // matchData.firstInnings.bowlingTeam.currBowler = bowler;
            matchData.firstInnings.bowlingTeam.currOver = currentOver;
            // matchData.firstInnings.bowlingTeam.currOverBalls = currOver;

            // console.log('matchData.firstInnings.bowlingTeam.currOver....', matchData.firstInnings.bowlingTeam.currOverBalls)
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
            matchData.firstInnings.battingTeam.totalRuns = currentScore;
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
                matchData.firstInnings.battingTeam.wkts += 1;
                console.log(matchData.firstInnings.battingTeam.wkts);
                matchData.firstInnings.bowlingTeam.currBowler = bowler;
                if (matchData.firstInnings.bowlingTeam.currBowler.wkts === undefined)
                    matchData.firstInnings.bowlingTeam.currBowler.wkts = 1;
                else
                    matchData.firstInnings.bowlingTeam.currBowler.wkts += 1;

                matchData.firstInnings.battingTeam.currBatters[onStrike] = {
                    ...matchData.firstInnings.battingTeam.currBatters[onStrike],
                    out: {
                        outAtBall: parseFloat((overs + 0.1).toFixed(1)),
                        outByBowler: bowler.label,
                        outStatus: true,
                    }
                }
                if (matchData.firstInnings.battingTeam.playersPlayed === undefined)
                    matchData.firstInnings.battingTeam.playersPlayed = [matchData.firstInnings.battingTeam.currBatters[onStrike]];
                else {
                    matchData.firstInnings.battingTeam.playersPlayed = [
                        ...matchData.firstInnings.battingTeam.playersPlayed,
                        matchData.firstInnings.battingTeam.currBatters[onStrike]
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
            matchData.firstInnings.battingTeam.totalRuns = currentScore;
            if (bowler.runsConceded === undefined)
                matchData.firstInnings.bowlingTeam.currBowler.runsConceded = btnValue;
            else
                matchData.firstInnings.bowlingTeam.currBowler.runsConceded = bowler.runsConceded + btnValue;

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
                strikeRate: parseFloat(((matchData.firstInnings.battingTeam.currBatters[onStrike].runs + btnValue) / (matchData.firstInnings.battingTeam.currBatters[onStrike].ballsPlayed + 1)).toFixed(2))
                // out: {
                //     outAtBall : matchData.firstInnings.bowlingTeam
                // }
                // fours: matchData.firstInnings.battingTeam.currBatters[onStrike].fours + 1
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

        matchData.firstInnings.bowlingTeam.currOverBalls = currentOverBalls;
        dispatch(updateCurrMatchData(matchData));
    }
    const handleBatsman1 = (selectedBatsman) => {
        setBatsman1(selectedBatsman);
        const matchInfo = currentGoingMatch;
        debugger;
        matchInfo.firstInnings.battingTeam.currBatters[0] = {
            ...(matchInfo.firstInnings.battingTeam.currBatters[0] ?? {}),
            name: selectedBatsman.label,
            key: selectedBatsman.key,
            strikeRate: 0,

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
            strikeRate: 0,
        }
        debugger;


        const remainingBatters = remainingTeamPlayers.filter(player => player !== selectedBatsman);
        setRemainingBatsmans(remainingBatters);
        matchInfo.firstInnings.battingTeam.yetToBat = remainingBatters;
        dispatch(updateCurrMatchData(matchInfo))
        setBatsman2(selectedBatsman);
        setDisplayBatsman2(selectedBatsman);
    }
    const handleBowler = (selectedBowler) => {
        debugger;
        const matchInfo = currentGoingMatch;
        matchInfo.firstInnings.bowlingTeam.currBowler = {
            ...matchInfo.firstInnings.bowlingTeam.currBowler,
            label: selectedBowler.label,
            key: selectedBowler.key,
            value: selectedBowler.value,
            runsConceded: 0,
            wkts: 0,
        }
        dispatch(updateCurrMatchData(matchInfo))
        setDisplayBowler(selectedBowler);
        setBowler(selectedBowler);
        setCurrOver([]);
        isPlayersSelected = true;
    }
    const selectPlayerModal = () => {
        console.log('lhlidf');
    }
    const selectBowlerModal = (e) => {
        const matchInfo = currentGoingMatch;
        matchInfo.firstInnings.bowlingTeam.currOverBalls = [];
        setIsShowBowlerModal(false);
        dispatch(updateCurrMatchData(matchInfo))
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
            console.log(batsman2Data);
            if (batsman2Data.runs >= 200) {
                const doubleCenturies = parseInt(batsman2Data.runs / 200);
                matchInfo.firstInnings.battingTeam.doubleCenturies += doubleCenturies;
                setBatsman2Data({ ...batsman2Data, doubleCenturies: doubleCenturies });
            }
            else if (batsman2Data.runs >= 100) {
                const centuries = parseInt(batsman2Data.runs / 100);
                matchInfo.firstInnings.battingTeam.centuries += centuries;
                setBatsman2Data({ ...batsman2Data, centuries: centuries });
            }
            else if (batsman2Data.runs >= 50) {
                const halfCenturies = parseInt(batsman2Data.runs / 50);
                matchInfo.firstInnings.battingTeam.halfCenturies += halfCenturies;
                setBatsman2Data({ ...batsman2Data, halfCenturies: halfCenturies });
            }
        }
        else {
            console.log(batsman1Data);
            setBatsman1(selectedBatsman);
            setDisplayBatsman1(selectedBatsman);
            if (batsman1Data.runs >= 200) {
                const doubleCenturies = parseInt(batsman1Data.runs / 200);
                matchInfo.firstInnings.battingTeam.doubleCenturies += doubleCenturies;
                setBatsman1Data({ ...batsman1Data, doubleCenturies: doubleCenturies });
            }
            else if (batsman1Data.runs >= 100) {
                const centuries = parseInt(batsman1Data.runs / 100);
                matchInfo.firstInnings.battingTeam.centuries += centuries;
                setBatsman1Data({ ...batsman1Data, centuries: centuries });
            }
            else if (batsman1Data.runs >= 50) {
                const halfCenturies = parseInt(batsman1Data.runs / 50);
                matchInfo.firstInnings.battingTeam.halfCenturies += halfCenturies;
                setBatsman1Data({ ...batsman1Data, halfCenturies: halfCenturies });
            }
        }
        dispatch(updateCurrMatchData(matchInfo))
    }
    // console.log(remainingBatsmans);
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

