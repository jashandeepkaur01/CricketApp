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
                // oversThrown: matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex].oversThrown + 1,
            }
            matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex] = {
                ...matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex],
                Econ: parseFloat((matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex].runsConceded / matchInfo.innings[inningCount].bowlingTeam.bowlers[bowlerIndex].oversThrown).toFixed(2)),
            }
        }
        else {
            matchInfo.innings[inningCount].bowlingTeam.currBowler = {
                ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
                Econ: parseFloat((matchInfo.innings[inningCount].bowlingTeam.currBowler.runsConceded / matchInfo.innings[inningCount].bowlingTeam.currBowler.oversThrown).toFixed(2)),
            }
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
            matchInfo.innings[inningCount].bowlingTeam.currBowler = {
                ...matchInfo.innings[inningCount].bowlingTeam.currBowler,
                Econ: (parseFloat(matchInfo.innings[inningCount].bowlingTeam.currBowler.runsConceded / matchInfo.innings[inningCount].bowlingTeam.currBowler.oversThrown).toFixed(2))
            }
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