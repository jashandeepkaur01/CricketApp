import { REHYDRATE } from "redux-persist";

import {
  SETDATA,
  GETDATA,
  LOGIN,
  SETTEAMDATA,
  DEADBALL,
  NOBALL,
  REMOVE,
  SCOREFOUR,
  SCOREONE,
  SCORESIX,
  SCORETHREE,
  SCORETWO,
  SCOREZERO,
  WICKET,
  WIDEBALL,
} from "Redux/Actions/loginActions/actionStates";


const obj = {
  singleOver: [],
  totalScore: 0,
  oversPlayed: 0.0,
  currentScore: 0,
  myWicket: 0,
  ballCount: 0,
}

const initialData = {
  players: [],
  teams: [],
  loggedInPlayer: null,
  score: 0,
  objs: obj,
};


const loginReducer = (data = initialData, action) => {
  let count = 5;
  // console.log(data?.objs);
  // debugger;
  if (action.type === WIDEBALL || action.type === NOBALL) {
    count++;
  } else {
    if (data.objs?.singleOver.length > count) {
      data.objs.singleOver = [];
      data.objs.oversPlayed = Math.ceil(data.objs.oversPlayed);
    }
  }
  switch (action.type) {
    case GETDATA:
      return data;
    case SETDATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };
    case SETTEAMDATA:
      return { ...data, teams: action.data.map((data) => ({ ...data })) };

    case LOGIN:
      return { ...data, loggedInPlayer: action.loggedInPlayer };

    case SCOREZERO:
      // data.objs.totalScore += action.score;
      data.objs.oversPlayed = data.objs.oversPlayed + 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
      };

    case SCOREONE:
      data.objs.totalScore += action.score;
      data.objs.oversPlayed += 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
      };

    case SCORETWO:
      data.objs.totalScore += action.score;
      data.objs.currentScore = action.score;
      data.objs.oversPlayed += 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
      };

    case SCORETHREE:
      data.objs.totalScore += action.score;
      data.objs.oversPlayed += 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
      };

    case SCOREFOUR:
      data.objs.totalScore += action.score;
      data.objs.oversPlayed += 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
      };

    case SCORESIX:
      data.objs.totalScore += action.score;
      data.objs.oversPlayed += 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
      };

    case WIDEBALL:
      data.objs.totalScore += 1;
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
      };

    case WICKET:

      data.objs.singleOver = [...data.objs.singleOver, action.score];
      data.objs.oversPlayed += 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      if (data.objs.myWicket < 10) {
        data.objs.myWicket += 1;
      } else {
        alert("Match Over");
      }

      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
        myWicket: data.objs.myWicket,
      };

    case DEADBALL:
      return {
        ...data,
        score: action.score,
        totalScore: data.objs.totalScore,
      };

    case NOBALL:
      data.objs.totalScore += 1;
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      return { ...data, score: action.score, singleOver: data.objs.singleOver, totalScore: data.objs.totalScore };

    case REMOVE:

      data.objs.totalScore -= data.objs.currentScore;
      data.objs.oversPlayed = data.objs.oversPlayed - 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver.pop();

      return { ...data, score: action.score, totalScore: data.objs.totalScore, oversPlayed: data.objs.oversPlayed };

    default:
      return {...data}
  }

};

export default loginReducer;
