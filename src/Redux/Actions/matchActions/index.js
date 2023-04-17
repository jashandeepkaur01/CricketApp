import { ADD_MATCH_DATA, GET_MATCH_DATA, MATCH_TEAMS, SAVE_CURR_MATCH_DATA, SET_MATCH_DATA, UPDATE_CURR_MATCH_DATA } from "./actionStates";

export const matchTeams = (data) => {
    return {
        type: MATCH_TEAMS,
        data,
    };
};
export const getMatchData = (payload) => {
    return {
        type: GET_MATCH_DATA,
        payload,
    }
}
export const setMatchData = (data) => {
    return {
        type: SET_MATCH_DATA,
        data,
    }
}
export const addMatchData = (payload) => {
    return {
        type: ADD_MATCH_DATA,
        payload,
    }
}
export const updateCurrMatchData = (data) => {
    return {
        type: UPDATE_CURR_MATCH_DATA,
        data
    }
}
export const saveMatchData = (data) => {
    return {
        type: SAVE_CURR_MATCH_DATA,
        data
    }
}