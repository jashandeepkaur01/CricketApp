
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
  ballCount:0,
}
// const bowlerChanged = {
//   name:'',
//   oversBowled:0,
//   wicketsTaken:0,
// }
const initalData = {
  players: [],
  token: 0,
  score: 0,
  objs:obj,
  // bowlerChanged:bowlerChanged,

};
let count = 5;
const data = (data = initalData, action) => {
 

  if (action.type === WIDEBALL || action.type === NOBALL) {
    count++;
  } else {
    if (data.objs.singleOver.length > count) {
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
    // data.objs.totalScore += action.score;
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
        data.objs.myWicket += 1;
      }else{
        alert("Match Over");
      }
      
      return {
        ...data,
        score: 0,
        singleOver:  data.objs.singleOver,
        totalScore: data.objs.totalScore,
        oversPlayed: data.objs.oversPlayed,
        myWicket:data.objs.myWicket,
      };

      case DEADBALL:
      return {
        ...data,
        score: action.score,
        totalScore:data.objs.totalScore,
      };

    case NOBALL:
    data.objs.totalScore += 1;
    data.objs.singleOver = [...data.objs.singleOver, action.score];
      return { ...data, score: action.score, singleOver: data.objs.singleOver, totalScore:data.objs.totalScore };

    case REMOVE:

    data.objs.totalScore -= data.objs.currentScore;
      data.objs.oversPlayed = data.objs.oversPlayed - 0.1;
      data.objs.oversPlayed = data.objs.oversPlayed.toFixed(1);
      data.objs.oversPlayed = parseFloat(data.objs.oversPlayed);
      data.objs.singleOver.pop();
      

      return { ...data, score: action.score ,totalScore:data.objs.totalScore, oversPlayed:data.objs.oversPlayed};

    default:
      return data;
  }

};

export default data;
