import { DEADBALL, NOBALL, OUT, REMOVE, SCOREFOUR, SCOREONE, SCORESIX, SCORETHREE, SCORETWO, SCOREZERO, Token, WICKET, WIDEBALL } from "Redux/Actions/loginActions/actionStates";

import { SETDATA, GETDATA } from "Redux/Actions/loginActions/actionStates";

var singleOver = [];

var totalScore=0;
var oversPlayed=0.0;
const initalData = {
  players: [],
  token: 0,
  score:0,
  singleOver:[],
  totalScore:totalScore,
  oversPlayed:oversPlayed
};
let count=5;
const data = (data = initalData, action) => {
  if(action.type===WIDEBALL||action.type===NOBALL){
    count++;
      // singleOver.length=singleOver.length+1;
  }
  else{
  if(singleOver.length>count){
    singleOver=[];
  }
}
  switch (action.type) {
    case GETDATA:
      return data;
    case SETDATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };

    case Token:
      return { ...data, token: action.token  };

    case SCOREZERO:
    totalScore+=action.score;
    oversPlayed+=0.1;
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver,totalScore }

    case SCOREONE:
    totalScore+=action.score;
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver ,totalScore}

    case SCORETWO:
    totalScore+=action.score;
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver ,totalScore}

    case SCORETHREE:
    totalScore+=action.score;
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver,totalScore }

    case SCOREFOUR:
    totalScore+=action.score;
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver,totalScore}

    case SCORESIX:
    totalScore+=action.score;
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver,totalScore }

    case WIDEBALL:
    totalScore+=1;
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver,totalScore }

    case WICKET:
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver,totalScore }

    case DEADBALL:
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver,totalScore }

    case OUT:
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver }

    case NOBALL:
    singleOver=[...singleOver,action.score];
    return { ...data, score: action.score,singleOver:singleOver }

    case REMOVE:
    return { ...data, score: action.score  }

    default:
      return data;
  }
};

export default data;
