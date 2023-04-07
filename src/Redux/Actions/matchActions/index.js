import { ADDMATCHDATA, GETMATCHDATA, MATCHTEAMS, SETMATCHDATA, UPDATECURRMATCHDATA } from "./actionStates";

export const matchTeams = (data) => {
    return {
        type: MATCHTEAMS,
        data,
    };
};
export const getMatchData = (payload) => {
    return {
        type: GETMATCHDATA,
        payload,
    }
}
export const setMatchData = (data) => {
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
    return {
        type: UPDATECURRMATCHDATA,
        data
    }
}