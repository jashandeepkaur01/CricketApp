import { DEADBALL, GETDATA, NOBALL, REMOVE, SCOREFOUR, SCOREONE, SCORESIX, SCORETHREE, SCORETWO, SCOREZERO, SETDATA, Token, WICKET, WIDEBALL } from "./actionStates";
export const getData = (data) => {
  console.log("getData action called...");
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

export const setToken = (token) => {
  return {
    type: Token,
    token,
  };
};

export const scoreZero = (score) =>{
    return {
        type: SCOREZERO,
        score:score,      
    };
};
export const scoreOne = (score) =>{
    return {
        type: SCOREONE,
        score:score,
    };
};
export const scoreTwo = (score) =>{
    return {
        type: SCORETWO,
        score:score,
    };
};
export const scoreThree = (score) =>{
    return {
        type: SCORETHREE,
        score:score,
    };
};
export const scoreFour = (score) =>{
    return {
        type: SCOREFOUR,
        score:score,
    };
};
export const scoreSix = (score) =>{
    return {
        type: SCORESIX,
        score:score,
    };
};
export const wideBall = (score) =>{
    return {
        type: WIDEBALL,
        score:score,
    };
};
export const wicket = (score) =>{
    return {
        type: WICKET,
        score:score,
    };
};
export const deadBall = (score) =>{
    return {
        type: DEADBALL,
        score:score,
    };
};
export const noBall = (score) =>{
    return {
        type: NOBALL,
        score:score,
    };
};
export const remove = (score) =>{
    return {
        type: REMOVE,
        score:score,
    };
};