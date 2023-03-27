import { MATCHTEAMS } from "./actionStates";

export const matchTeams = (data) => {
    console.log('mydata....',data)
    return {
        type: MATCHTEAMS,
        data,
    };
};