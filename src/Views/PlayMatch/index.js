import InningModal from 'Components/Atoms/InningsModal';
import MatchControlBtn from 'Components/Atoms/MatchControlBtn';
import NewBatsmanModal from 'Components/Atoms/NewBatsmanModal';
import SelectBatsmanModal from 'Components/Atoms/SelectBatsmanModal';
import SelectBowlerModal from 'Components/Atoms/SelectBowlerModal';
import { getMatchData, updateCurrMatchData } from 'Redux/Actions/matchActions';
import { INNING_COMPLETED, MATCH_COMPLETED, TOTAL_OVERS, controlButtons } from 'Shared/Constants';
import { PARTNERSHIP, UPDATE_BOWLER_DATA, addCurrentPlayers, addPlayersPlayed } from 'Shared/Utilities';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import './style.css';

function PlayMatch() {
    const [isPlayersSelected, setIsPlayersSelected] = useState(false);
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
    const [isInningCompleted, setIsInningCompleted] = useState(false);
    const [isMatchCompleted, setIsMatchCompleted] = useState(false);
    const [winningData, setWinningData] = useState({});
    const onStrikeValue = useRef(0);
    // const [previousRuns, setPreviousRuns] = useState(0);

    const [previousData, setPreviousData] = useState({
        runs: 0,
        balls: 0,
        strike: 0,
    });


    const params = useParams()
    const { matchUniqueKey } = params;

    const dispatch = useDispatch();
    // const teamsData = useSelector((state) => state.team.teams);
    const currMatchData = useSelector((state) => state.match.currMatch);

    const currentGoingMatch = currMatchData.find(match => match.key === matchUniqueKey);

    useEffect(() => {
        dispatch(getMatchData([]))
    }, [])

    function InningCompleted(currentMatchData) {
        setIsInningCompleted(true);
        addCurrentPlayers(currentMatchData, inningCount);
        UPDATE_BOWLER_DATA(inningCount, currentMatchData, bowler);
        setPreviousData({
            runs: 0,
            balls: 0,
            strike: 0
        })
        dispatch(updateCurrMatchData(currentMatchData));
    }

    function MatchCompleted(currentMatchData) {
        // debugger;
        currentMatchData.isCompleted = true;
        addCurrentPlayers(currentMatchData, inningCount);
        UPDATE_BOWLER_DATA(inningCount, currentMatchData, bowler);
        setPreviousData({
            runs: 0,
            balls: 0,
            strike: 0
        })
        // PARTNERSHIP(currentMatchData, onStrike, inningCount, previousData, setPreviousData)


        if (currentMatchData.innings[0].battingTeam.totalRuns > currentMatchData.innings[1].battingTeam.totalRuns) {
            currentMatchData.wonBy = currentMatchData.teams[0];
            setWinningData({
                winningTeam: currentMatchData.teams[0],
                winningDifference: ((currentMatchData.innings[0].battingTeam.totalRuns - currentMatchData.innings[1].battingTeam.totalRuns) + ' runs ')
            })
        }
        else if (currentMatchData.innings[0].battingTeam.totalRuns < currentMatchData.innings[1].battingTeam.totalRuns) {
            currentMatchData.wonBy = currentMatchData.teams[1];
            setWinningData({
                winningTeam: currentMatchData.teams[1],
                winningDifference: ((currentMatchData.innings[1].battingTeam.teamPlayers.length - currentMatchData.innings[1].battingTeam.wkts - 1) + ' wickets '),
            })
        }
        else {
            console.log("it's a draw...");
        }
        setIsMatchCompleted(true);
    }

    useEffect(() => {
        if (currentGoingMatch) {
            setInningCount(currentGoingMatch?.inningCount);
            // debugger;

            if (currentGoingMatch.innings[inningCount].battingTeam.currBatters[0].name === '' ||
                currentGoingMatch.innings[inningCount].battingTeam.currBatters[1].name === ''
            ) {
                setTimeout(() => {
                    setIsShowBatsmanModal(true)
                }, 100);
            }
            const currentMatchData = JSON.parse(JSON.stringify(currentGoingMatch));
            if (inningCount) {
                setMyTeamPlayers(currentMatchData?.team2Players);
                setOppTeamPlayers(currentMatchData?.team1Players);
            }
            else {
                setMyTeamPlayers(currentMatchData?.team1Players);
                setOppTeamPlayers(currentMatchData?.team2Players);
            }
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
                    doubleCenturies: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.doubleCenturies,
                    centuries: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.centuries,
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
                    doubleCenturies: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.doubleCenturies,
                    centuries: currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0]?.centuries,
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
                WB: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.WB,
                NB: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.NB,
                Econ: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.Econ,
                oversThrown: currentMatchData?.innings[inningCount]?.bowlingTeam?.currBowler?.oversThrown,
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
            setIsPlayersSelected(currentBatsmans.currBatsman1.value && currentBatsmans.currBatsman2.value && currentBowler.value)
            setDisplayBatsman1(currentBatsmans.currBatsman1);
            setDisplayBatsman2(currentBatsmans.currBatsman2);
            setBowler(currentBowler);
            setDisplayBowler(currentBowler);
            if (currentMatchData?.innings[inningCount]?.bowlingTeam?.currOverBalls) {
                setCurrOver(currentMatchData?.innings[inningCount]?.bowlingTeam?.currOverBalls)
            }
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
            console.log('remainingBatsmans...', remainingBatsmans);
            if (remainingBatsmans?.length) {
                if (currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0].out.outStatus) {
                    setIsShowNewBatsmanModal(true);
                    setPlayerOut(currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[0].name)
                }
                if (currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1].out.outStatus) {
                    setIsShowNewBatsmanModal(true);
                    setPlayerOut(currentMatchData?.innings[inningCount]?.battingTeam?.currBatters[1].name)
                }
            }
        }
    }, [currMatchData])

    useEffect(() => {
        if (isOverCompleted) {
            console.log(overs);
            setTimeout(() => {
                setIsShowBowlerModal(true);
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
    }, [isOverCompleted])

    function handleScoreClick(e) {
        const matchData = JSON.parse(JSON.stringify(currentGoingMatch));
        let currentOverBalls = (matchData.innings[inningCount].bowlingTeam.currOverBalls) ? matchData.innings[inningCount].bowlingTeam.currOverBalls : [];
        let btnValue = e.target.innerText;
        if (btnValue !== 'WB' && btnValue !== 'NB') {
            let currentOver = 0;
            if ((overs * 10) % 10 === 5) {
                if (btnValue !== 'WC')
                    setIsOverCompleted(true);
                currentOver = parseFloat((overs + 0.5).toFixed(1))
                setOvers(currentOver)
                matchData.innings[inningCount].bowlingTeam.currBowler.oversThrown = parseFloat((matchData.innings[inningCount].bowlingTeam.currBowler.oversThrown + 0.5).toFixed(1));
            }
            else {
                currentOver = parseFloat((overs + 0.1).toFixed(1))
                setOvers(currentOver)
                matchData.innings[inningCount].bowlingTeam.currBowler.oversThrown = parseFloat((matchData.innings[inningCount].bowlingTeam.currBowler.oversThrown + 0.1).toFixed(1));
            }
            setBowler({
                ...bowler,
                oversThrown: matchData.innings[inningCount].bowlingTeam.currBowler.oversThrown,
            })
            matchData.innings[inningCount].bowlingTeam.currOver = currentOver;

        }
        if (btnValue === 'WB' || btnValue === 'NB') {
            let currentScore = currScore + 1;
            setCurrScore(currentScore)
            if (btnValue === 'WB') {
                setDisplayScore('Wide Ball')
                currentOverBalls.push('WB');
                // matchData.innings[inningCount].bowlingTeam.totalOvers[overs] = {
                //     ...matchData.innings[inningCount].bowlingTeam.totalOvers[overs],
                //     runs: matchData.innings[inningCount].bowlingTeam.totalOvers[overs] + 1,
                //     // balls: matchData.innings[inningCount].bowlingTeam.totalOvers[overs].balls.push('WB'),
                // }

                // [
                //     ...matchData.innings[inningCount].bowlingTeam.balls,
                //     matchData.innings[inningCount].bowlingTeam.balls[overs] = {

                //     }
                // ]
                setCurrOver(currentOverBalls)
                matchData.innings[inningCount].bowlingTeam.currBowler.WB += 1;
            }
            else {
                setDisplayScore('No Ball')
                currentOverBalls.push('NB');
                setCurrOver(currentOverBalls)
                matchData.innings[inningCount].bowlingTeam.currBowler.NB += 1;
            }
            // matchData.innings[inningCount].bowlingTeam.totalOvers[overs] = {
            //     ...matchData.innings[inningCount].bowlingTeam.totalOvers[overs],
            //     runs: matchData.innings[inningCount].bowlingTeam.totalOvers[overs] + 1,
            // }
            matchData.innings[inningCount].battingTeam.totalRuns = currentScore;
        }
        else if (btnValue === 'WC' || btnValue === 'DB') {
            if (btnValue === 'WC') {
                if (onStrike) {
                    setPlayerOut(batsman2.label)
                    setBatsman2('');
                }
                else {
                    setPlayerOut(batsman1.label)
                    setBatsman1('');
                }
                if (remainingBatsmans.length !== 0) {
                    setIsShowNewBatsmanModal(true);
                }
                let totalWickets = wickets + 1;
                setWickets(totalWickets)
                setDisplayScore('OUT')
                currentOverBalls.push('WC');
                setCurrOver(currentOverBalls);
                matchData.innings[inningCount].battingTeam.wkts += 1;
                matchData.innings[inningCount].battingTeam.currBatters[onStrike].ballsPlayed += 1;
                // matchData.innings[inningCount].bowlingTeam.currBowler = bowler;
                if (matchData.innings[inningCount].bowlingTeam.currBowler.wkts === undefined)
                    matchData.innings[inningCount].bowlingTeam.currBowler.wkts = 1;
                else {
                    matchData.innings[inningCount].bowlingTeam.currBowler.wkts += 1;
                }


                let playerOutRuns = matchData.innings[inningCount].battingTeam.currBatters[onStrike].runs;

                if (playerOutRuns >= 200) {
                    const doubleCenturies = parseInt(playerOutRuns / 200);
                    matchData.innings[inningCount].battingTeam.currBatters[onStrike].doubleCenturies += doubleCenturies;
                }
                else if (playerOutRuns >= 100) {
                    const centuries = parseInt(playerOutRuns / 100);
                    matchData.innings[inningCount].battingTeam.currBatters[onStrike].centuries += centuries;
                }
                else if (playerOutRuns >= 50) {
                    const halfCenturies = parseInt(playerOutRuns / 50);
                    matchData.innings[inningCount].battingTeam.currBatters[onStrike].halfCenturies += halfCenturies;
                }

                matchData.innings[inningCount].battingTeam.currBatters[onStrike] = {
                    ...matchData.innings[inningCount].battingTeam.currBatters[onStrike],
                    out: {
                        outAtBall: parseFloat((overs + 0.1).toFixed(1)),
                        outByBowler: bowler.label,
                        outStatus: true,
                    }
                }
                addPlayersPlayed(matchData, inningCount, onStrike)
                // if (matchData.innings[inningCount].battingTeam.playersPlayed === undefined)
                //     matchData.innings[inningCount].battingTeam.playersPlayed = [matchData.innings[inningCount].battingTeam.currBatters[onStrike]];
                // else {
                //     matchData.innings[inningCount].battingTeam.playersPlayed = [
                //         ...matchData.innings[inningCount].battingTeam.playersPlayed,
                //         matchData.innings[inningCount].battingTeam.currBatters[onStrike]
                //     ]
                // }

                console.log(matchData.innings[inningCount].battingTeam.currBatters[onStrike])
                debugger;
                // let partnership = {
                //     totalRuns: 0,
                //     prevRuns: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].runs,
                // }
                PARTNERSHIP(matchData, onStrike, inningCount, previousData, setPreviousData)
                // let currPartnership = CALC_PARTNERSHIP(matchData.innings[inningCount].battingTeam.currBatters, onStrike, previousData);
                // // setPreviousRuns(matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].runs);
                // setPreviousData({
                //     runs: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].runs,
                //     balls: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].ballsPlayed,
                //     strike: onStrike,
                // })
                // matchData.innings[inningCount].battingTeam = {
                //     ...matchData.innings[inningCount].battingTeam,
                //     partnership: matchData.innings[inningCount].battingTeam.partnership ?
                //         [...matchData.innings[inningCount].battingTeam.partnership, currPartnership] :
                //         [currPartnership]
                // }
                // console.log(currPartnership);
                // console.log(previousData);

                // matchData.innings[inningCount].battingTeam = {
                //     ...matchData.innings[inningCount].battingTeam,
                //     partnership: matchData.innings[inningCount].battingTeam.partnership ?
                //         matchData.innings[inningCount].battingTeam.partnership = [
                //             ...matchData.innings[inningCount].battingTeam.partnership,
                //             {
                //                 // playerOutRuns: matchData.innings[inningCount].battingTeam.currBatters[onStrike].runs,
                //                 // // playerOutBalls: matchData.innings[inningCount].battingTeam.currBatters[onStrike].ballsPlayed,
                //                 // anotherPlayerRuns: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].runs,
                //                 // // anotherPlayerBalls: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].ballsPlayed,
                //                 // tempRuns: 0,
                //                 // // tempBalls: 0,
                //                 // totalRuns: 0,
                //                 // // totalBalls: 0,
                //                 // currentRuns: [matchData.innings[inningCount].battingTeam.currBatters[0].runs, matchData.innings[inningCount].battingTeam.currBatters[1].runs],
                //                 // previousRuns: [0, 0],
                //                 // partnership: [(matchData.innings[inningCount].battingTeam.currBatters[0].runs)]



                //                 firstPlayerCurrentRuns: matchData.innings[inningCount].battingTeam.currBatters[0].runs,
                //                 secondPlayerCurrentRuns: matchData.innings[inningCount].battingTeam.currBatter[1].runs,
                //                 firstPlayerPreviousRuns: [onStrike] ? matchData.innings[inningCount].battingTeam.currBatters[0].runs : 0,
                //                 secondPlayerPreviousRuns: [onStrike] ? 0 : matchData.innings[inningCount].battingTeam.currBatters[1].runs,
                //                 totalRuns: matchData.innings[inningCount].battingTeam.currBatters[0].runs + matchData.innings[inningCount].battingTeam.currBatters[1].runs,
                //             }
                //         ] :
                //         matchData.innings[inningCount].battingTeam.partnership = [{
                //             playerOutRuns: matchData.innings[inningCount].battingTeam.currBatters[onStrike].runs,
                //             // playerOutBalls: matchData.innings[inningCount].battingTeam.currBatters[onStrike].ballsPlayed,
                //             anotherPlayerRuns: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].runs,
                //             // anotherPlayerBalls: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].ballsPlayed,
                //             tempRuns: 0,
                //             // tempBalls: 0,
                //             totalRuns: 0,
                //             // totalBalls: 0,
                //             firstPlayerCurrentRuns: matchData.innings[inningCount].battingTeam.currBatters[0].runs,
                //             secondPlayerCurrentRuns: matchData.innings[inningCount].battingTeam.currBatter[1].runs,
                //             firstPlayerPreviousRuns: [onStrike] ? matchData.innings[inningCount].battingTeam.currBatters[0].runs : 0,
                //             secondPlayerPreviousRuns: [onStrike] ? 0 : matchData.innings[inningCount].battingTeam.currBatters[1].runs,
                //             totalRuns: matchData.innings[inningCount].battingTeam.currBatters[0].runs + matchData.innings[inningCount].battingTeam.currBatters[1].runs,
                //         }]
                // }
                // debugger;
                console.log(matchData);
                if (remainingBatsmans.length === 0) {
                    if (inningCount === 0) {
                        matchData.innings[inningCount].bowlingTeam.currOverBalls = currentOverBalls;
                        InningCompleted(matchData);
                    }
                    else {
                        MatchCompleted(matchData);
                    }
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
            matchData.innings[inningCount].battingTeam.totalRuns = currentScore;
            if (bowler.runsConceded === undefined)
                matchData.innings[inningCount].bowlingTeam.currBowler.runsConceded = btnValue;
            else
                matchData.innings[inningCount].bowlingTeam.currBowler.runsConceded = bowler.runsConceded + btnValue;

            debugger;
            setCurrScore(currentScore)
            setDisplayScore(btnValue)
            currentOverBalls.push(btnValue);
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
            else if (btnValue === 2) {
                shot = 'twos';
            }
            else if (btnValue === 3) {
                shot = 'threes';
            }

            if (btnValue === 4 || btnValue === 6) {
                matchData.innings[inningCount].battingTeam.currBatters[onStrike][shot] += 1;
                matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)][shot] += 1;
            }
            else if (btnValue === 2 || btnValue === 3) {
                matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)][shot] += 1;
            }

            let playerOnStrike = matchData.innings[inningCount].battingTeam.currBatters[onStrike];
            matchData.innings[inningCount].battingTeam.currBatters[onStrike] = {
                ...matchData.innings[inningCount].battingTeam.currBatters[onStrike],
                runs: playerOnStrike.runs + btnValue,
                ballsPlayed: playerOnStrike.ballsPlayed + 1,
                strikeRate: parseFloat((((playerOnStrike.runs + btnValue) * 100) / (playerOnStrike.ballsPlayed + 1)).toFixed(2))
            }
            // debugger;
            // matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)] = {
            //     ...matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)],
            //     runs: matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].runs + btnValue,
            //     // balls: matchData.innings[inningCount].bowlingTeam.totalOvers[overs].balls.push('WB'),

            //     balls: matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls ?
            //         matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls = [
            //             ...matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls,
            //             {
            //                 event: btnValue,
            //                 batsmanPlayed: matchData.innings[inningCount].battingTeam.currBatters[onStrike].name,
            //             }
            //         ] :
            //         matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls = [{
            //             event: btnValue,
            //             batsmanPlayed: matchData.innings[inningCount].battingTeam.currBatters[onStrike].name,
            //         }]
            // }

            if (onStrike) {
                setBatsman2Data(
                    {
                        ...batsman2Data,
                        runs: batsman2Data.runs + btnValue,
                        ballsPlayed: batsman2Data.ballsPlayed + 1,
                    })
            }
            else {
                setBatsman1Data(
                    {
                        ...batsman1Data,
                        runs: batsman1Data.runs + btnValue,
                        ballsPlayed: batsman1Data.ballsPlayed + 1,
                    })
            }

        }
        if (matchData.innings[inningCount].bowlingTeam.currOver === TOTAL_OVERS) {
            PARTNERSHIP(matchData, onStrike, inningCount, previousData, setPreviousData)
            if (inningCount === 0) {
                InningCompleted(matchData);
            }
            else {
                MatchCompleted(matchData);
            }
            setIsOverCompleted(false);
        }
        if (matchData.innings[1].battingTeam.totalRuns > matchData.innings[0].battingTeam.totalRuns) {
            MatchCompleted(matchData);
        }
        let runsScored = btnValue;
        if (btnValue === 'NB' || btnValue === 'WB' || btnValue === 'WC' || btnValue === 'DB') {
            runsScored = 0;
        }
        matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)] = {
            ...matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)],
            runs: matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].runs + runsScored,

            balls: matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls ?
                matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls = [
                    ...matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls,
                    {
                        event: btnValue,
                        batsmanPlayed: matchData.innings[inningCount].battingTeam.currBatters[onStrike].name,
                    }
                ] :
                matchData.innings[inningCount].bowlingTeam.totalOvers[Math.floor(overs)].balls = [{
                    event: btnValue,
                    batsmanPlayed: matchData.innings[inningCount].battingTeam.currBatters[onStrike].name,
                }]
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
    }
    const selectPlayerModal = () => {
        if (batsman1.value === '' || batsman2.value === '') {
            setErrMsg('Please select the batsmans')
        }
    }
    const selectBowlerModal = (e) => {
        setDisplayBowler(bowler);
        const matchInfo = currentGoingMatch;
        UPDATE_BOWLER_DATA(inningCount, matchInfo, bowler);
        debugger;
        matchInfo.innings[inningCount].bowlingTeam.currOverBalls = [];
        if (matchInfo.innings[inningCount].bowlingTeam.totalOvers === undefined)
            matchInfo.innings[inningCount].bowlingTeam.totalOvers = [{
                overNum: overs + 1,
                bowler: bowler,
                runs: 0,
                sixes: 0,
                fours: 0,
                twos: 0,
                threes: 0,
                balls: [],
            }]
        else
            matchInfo.innings[inningCount].bowlingTeam.totalOvers = [
                ...matchInfo.innings[inningCount].bowlingTeam.totalOvers,
                matchInfo.innings[inningCount].bowlingTeam.totalOvers[overs] = {
                    overNum: overs + 1,
                    bowler: bowler,
                    runs: 0,
                    sixes: 0,
                    fours: 0,
                    twos: 0,
                    threes: 0,
                }
            ]
        dispatch(updateCurrMatchData(matchInfo))
        setIsPlayersSelected(true);
        setCurrOver([]);
        setIsShowBowlerModal(false);
        setDisplayScore('');
    }
    const selectNewBatsmanModal = () => {
        if ((overs * 10) % 10 === 0) {
            setIsOverCompleted(true);
        }
        setDisplayScore('');
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
            halfCenturies: 0,
            strikeRate: 0,
            out: {
                outStatus: false,
                outByBowler: '',
                outAtBall: 0,
            }
        }
        const remainingBatters = remainingBatsmans.filter(player => player !== newBatsman);
        setRemainingBatsmans(remainingBatters);
        matchInfo.innings[inningCount].battingTeam.yetToBat = remainingBatters;
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
                        {inningCount ? <p>Target : {currentGoingMatch.innings[0].battingTeam.totalRuns + 1}</p> : null}
                    </div>
                </div>
                <div className="controls d-flex justify-content-around">
                    {isShowBatsmanModal ?
                        <SelectBatsmanModal
                            title='Select Batsman' setIsShowPlayerModal={setIsShowBatsmanModal} openAnotherModal={setIsShowBowlerModal} onSubmit={(e) => selectPlayerModal()}>
                            <div className="batting  w-50 mx-auto text-center">
                                <label>Select Batsman 1</label>
                                <Select options={myTeamPlayers} onChange={handleBatsman1} value={batsman1} />
                                <label>Select Batsman 2</label>
                                <Select options={remainingTeamPlayers} onChange={handleBatsman2} value={batsman2} />
                                <span className="text-danger mt-2 mb-0">{errMsg}</span>
                            </div>
                        </SelectBatsmanModal> : null}
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
                    {isInningCompleted ?
                        <InningModal title={INNING_COMPLETED} currentMatchData={currentGoingMatch} setIsShowInningModal={setIsInningCompleted} inningCount={inningCount} setInningCount={setInningCount} setCurrOver={setCurrOver} />
                        : null}
                    {isMatchCompleted ?
                        <InningModal title={MATCH_COMPLETED} currentMatchData={currentGoingMatch} setIsShowInningModal={setIsMatchCompleted} inningCount={inningCount} setInningCount={setInningCount} setCurrOver={setCurrOver} winningData={winningData} isMatchCompleted={isMatchCompleted} />
                        : null}
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

