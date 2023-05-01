export const UTILITIES = {};


export const UPDATE_BOWLER_DATA = (inningCount, matchInfo, bowler) => {
    if (matchInfo.innings[inningCount].bowlingTeam.bowlers) {
        const bowlerIndex = matchInfo.innings[inningCount].bowlingTeam.bowlers.findIndex((bowler) => bowler.key === matchInfo.innings[inningCount].bowlingTeam.currBowler.key)
        if (bowlerIndex !== -1) {
            matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex] = {
                ...matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex],
                runsConceded: matchInfo.innings[inningCount].bowlingTeam.currBowler.runsConceded,
                wkts: matchInfo.innings[inningCount].bowlingTeam.currBowler.wkts,
                WB: matchInfo.innings[inningCount].bowlingTeam.currBowler.WB,
                NB: matchInfo.innings[inningCount].bowlingTeam.currBowler.NB,
                oversThrown: matchInfo.innings[inningCount].bowlingTeam.currBowler.oversThrown,
                Econ: matchInfo.innings[inningCount].bowlingTeam.currBowler.Econ,
                // oversThrown: matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex].oversThrown + 1,
            }
            // matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex] = {
            //     ...matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex],
            //     Econ: parseFloat((matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex].runsConceded / matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex].oversThrown).toFixed(2)),
            // }
        }
        else {
            // matchInfo.innings[inningCount].bowlingTeam.currBowler = {
            //     ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
            //     Econ: parseFloat((matchInfo.innings[inningCount].bowlingTeam.currBowler.runsConceded / matchInfo.innings[inningCount].bowlingTeam.currBowler.oversThrown).toFixed(2)),
            // }
            matchInfo.innings[inningCount].bowlingTeam.bowlers.push(matchInfo.innings[inningCount].bowlingTeam.currBowler)
        }

        let index = matchInfo.innings[inningCount].bowlingTeam.bowlers.findIndex(bowl => bowl.key === bowler.key)
        if (index !== -1)
            matchInfo.innings[inningCount].bowlingTeam.currBowler = {
                ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
                label: bowler.label,
                key: bowler.key,
                value: bowler.value,
                runsConceded: matchInfo.innings[inningCount].bowlingTeam.bowlers[index].runsConceded,
                wkts: matchInfo.innings[inningCount].bowlingTeam.bowlers[index].wkts,
                WB: matchInfo.innings[inningCount].bowlingTeam.bowlers[index].WB,
                NB: matchInfo.innings[inningCount].bowlingTeam.bowlers[index].NB,
                Econ: matchInfo.innings[inningCount].bowlingTeam.bowlers[index].Econ,
                oversThrown: matchInfo.innings[inningCount].bowlingTeam.bowlers[index].oversThrown,
            }
        else {
            matchInfo.innings[inningCount].bowlingTeam.currBowler = {
                ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
                label: bowler.label,
                key: bowler.key,
                value: bowler.value,
                runsConceded: 0,
                wkts: 0,
                WB: 0,
                NB: 0,
                Econ: 0,
                oversThrown: 0,
            }
        }
    }
    else {
        if (matchInfo.innings[inningCount].bowlingTeam.currBowler.label) {
            // matchInfo.innings[inningCount].bowlingTeam.currBowler = {
            //     ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
            //     Econ: (parseFloat(matchInfo.innings[inningCount].bowlingTeam.currBowler.runsConceded / matchInfo.innings[inningCount].bowlingTeam.currBowler.oversThrown).toFixed(2))
            // }
            matchInfo.innings[inningCount].bowlingTeam = {
                ...matchInfo.innings[inningCount].bowlingTeam,
                bowlers: [matchInfo.innings[inningCount].bowlingTeam.currBowler]
            }
        }
        matchInfo.innings[inningCount].bowlingTeam.currBowler = {
            ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
            label: bowler.label,
            key: bowler.key,
            value: bowler.value,
            runsConceded: 0,
            wkts: 0,
            WB: 0,
            NB: 0,
            Econ: 0,
            oversThrown: 0,
        }
    }
    return matchInfo;
}

export const CALC_PARTNERSHIP = (currBatters, onStrike, previousData) => {
    let player1Runs = currBatters[0].runs;
    let player2Runs = currBatters[1].runs;
    let player1Balls = currBatters[0].ballsPlayed;
    let player2Balls = currBatters[1].ballsPlayed;
    let prevRuns = previousData.runs;
    let prevBalls = previousData.balls;
    let totalRuns = player1Runs + player2Runs - prevRuns;
    let totalBalls = player1Balls + player2Balls - prevBalls;

    if (previousData.strike) {
        player1Runs = player1Runs - previousData.runs;
        player1Balls = player1Balls - previousData.balls;
    }
    else {
        player2Runs = player2Runs - previousData.runs;
        player2Balls = player2Runs - previousData.balls;
    }

    let partnershipObj = {
        totalRuns: totalRuns,
        totalBalls: totalBalls,
        player1: {
            name: currBatters[0].name,
            runs: player1Runs,
            ballsPlayed: player1Balls,
        },
        player2: {
            name: currBatters[1].name,
            runs: player2Runs,
            ballsPlayed: player2Balls,
        }
    }
    return partnershipObj;
}
export const PARTNERSHIP = (matchData, onStrike, inningCount, previousData, setPreviousData) => {
    let currPartnership = CALC_PARTNERSHIP(matchData.innings[inningCount].battingTeam.currBatters, onStrike, previousData);
    // setPreviousRuns(matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].runs);
    setPreviousData({
        runs: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].runs,
        balls: matchData.innings[inningCount].battingTeam.currBatters[+!onStrike].ballsPlayed,
        strike: onStrike,
    })
    matchData.innings[inningCount].battingTeam = {
        ...matchData.innings[inningCount].battingTeam,
        partnership: matchData.innings[inningCount].battingTeam.partnership ?
            [...matchData.innings[inningCount].battingTeam.partnership, currPartnership] :
            [currPartnership]
    }
}
export const addPlayersPlayed = (matchData, inningCount, onStrike) => {
    if (matchData.innings[inningCount].battingTeam.playersPlayed === undefined)
        matchData.innings[inningCount].battingTeam.playersPlayed = [matchData.innings[inningCount].battingTeam.currBatters[onStrike]];
    else {
        matchData.innings[inningCount].battingTeam.playersPlayed = [
            ...matchData.innings[inningCount].battingTeam.playersPlayed,
            matchData.innings[inningCount].battingTeam.currBatters[onStrike]
        ]
    }
}
export const addCurrentPlayers = (matchData, inningCount) => {
    addPlayersPlayed(matchData, inningCount, 0);
    addPlayersPlayed(matchData, inningCount, 1);
}