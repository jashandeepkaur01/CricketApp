import { ADDMATCHDATA, GETMATCHDATA, MATCHTEAMS, SETMATCHDATA, UPDATECURRMATCHDATA } from "./actionStates";

export const matchTeams = (data) => {
    console.log('mydata....',data)
    return {
        type: MATCHTEAMS,
        data,
    };
};
export const getMatchData = (payload) => {
    console.log('getting match dataa...',payload);
    return {
        type: GETMATCHDATA,
        payload,
    }
}
export const setMatchData = (data) => {
    console.log('setting match data..(data with key).',data);
    return {
        type: SETMATCHDATA,
        data,
    }
}
export const addMatchData = (payload) => {
    return {
        type: ADDMATCHDATA,
        payload,
    }
}
export const updateCurrMatchData = (data) => {
    console.log('action me data.....',data);
    return {
        type: UPDATECURRMATCHDATA,
        data
    }
}