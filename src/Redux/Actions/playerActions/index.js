import { GETDATA, SETDATA } from "./actionStates"

export const getData = (data) => {
    return {
        type: GETDATA,
        data,
    };
};

export const setData = (data) => {
    return {
        type: SETDATA,
        data,
    };
};