import { ADDTEAM, SETTEAMDATA } from "./actionStates";

export const setTeamData = (data) => {
    return {
        type: SETTEAMDATA,
        data,
    };
};
export const addTeamData = (data) => {
    return {
        type: ADDTEAM,
        data,
    };
};