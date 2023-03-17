
import {
  DEADBALL,
  NOBALL,
  REMOVE,
  SCOREFOUR,
  SCOREONE,
  SCORESIX,
  SCORETHREE,
  SCORETWO,
  SCOREZERO,
  Token,
  WICKET,
  WIDEBALL,
} from "Redux/Actions/loginActions/actionStates";

import { SETDATA, GETDATA } from "Redux/Actions/loginActions/actionStates";


const obj={
  singleOver:[],
  totalScore:0,
  oversPlayed:0.0,
  currentScore:0,
  myWicket:0,  
}
const initalData = {
  players: [],
  token: 0,
  score: 0,
  objs:obj
};
let count = 5;
const data = (data = initalData, action) => {
 

  if (action.type === WIDEBALL || action.type === NOBALL) {
    count++;
  } else {
    if (data.objs.singleOvers.length > count) {
      data.objs.singleOver = [];
      data.objs.oversPlayed = Math.ceil(data.objs.oversPlayed);
    }
  }


  
  
  switch (action.type) {
    case GETDATA:
      return data;
    case SETDATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };

    case Token:
      return { ...data, token: action.token };

    case SCOREZERO:
    data.objs.totalScore += action.score;
    data.objs.currentScore = action.score;
    data.objs.oversPlayed = data.objs.oversPlayed + 0.1;
    data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
    data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
    data.objs.singleOver = [...data.objs.singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore:data.objs.totalScore,
        oversPlayed:data.objs.oversPlayed,
      };
      
    case SCOREONE:
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
        totalScore:data.objs.totalScore,
        oversPlayed:data.objs.oversPlayed,
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
        totalScore:data.objs.totalScore,
        oversPlayed:data.objs.oversPlayed,
      };

    case SCORETHREE:
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
        totalScore:data.objs.totalScore,
        oversPlayed:data.objs.oversPlayed,
      };

    case SCOREFOUR:
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
        totalScore:data.objs.totalScore,
        oversPlayed:data.objs.oversPlayed,
      };

    case SCORESIX:
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
        totalScore:data.objs.totalScore,
        oversPlayed:data.objs.oversPlayed,
      };

    case WIDEBALL:
    data.objs.totalScore += 1;
    
    data.objs.singleOver = [...data.objs.singleOver, action.score];
    data.objs.currentScore = action.score;
      return {
        ...data,
        score: action.score,
        singleOver: data.objs.singleOver,
        totalScore:data.objs.totalScore,
      };

    case WICKET:
      data.objs.singleOver = [...data.objs.singleOver, action.score];
      data.objs.oversPlayed += 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      if( data.objs.myWicket<10){
      if( data.objs.myWicket<10){
        data.objs.myWicket += 1;
      }else{
        alert("Match Over");
      }
      
      return {
        ...data,
        score: action.score,
        singleOver:  data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
        myWicket:data.objs.myWicket,
      };

    case DEADBALL:
      return {
        ...data,
        score: action.score,
        totalScore,
      };

    case NOBALL:
    totalScore += 1;
    currentScore = action.score;
      singleOver = [...singleOver, action.score];
      return { ...data, score: action.score, singleOver: singleOver,totalScore };

    case REMOVE:

      totalScore -= currentScore;
      console.log(action.score,"remove")
      oversPlayed = oversPlayed - 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);

      singleOver.pop();
      

      return { ...data, score: action.score ,totalScore, oversPlayed};

    default:
      return data;
  }
};

export default data;
