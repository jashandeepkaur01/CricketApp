import { ADD_TEAM, SET_TEAM_DATA } from "./actionStates";

export const setTeamData = (data) => {
    return {
        type: SET_TEAM_DATA,
        data,
    };
};
export const addTeamData = (data) => {
    return {
        type: ADD_TEAM,
        data,
    };
};