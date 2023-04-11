import { GET_DATA, SET_DATA } from "./actionStates";

export const getData = (data) => {
    return {
        type: GET_DATA,
        data,
    };
};

export const setData = (data) => {
    return {
        type: SET_DATA,
        data,
    };
};