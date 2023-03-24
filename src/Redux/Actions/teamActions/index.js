import { ADDTEAM, SETTEAMDATA } from "./actionStates";

export const setTeamData = (data) => {
    return {
        type: SETTEAMDATA,
        data,
    };
};
export const addTeamData = (data) => {
    console.log("addteamdata called", data);
    return {
        type: ADDTEAM,
        data,
    };
};