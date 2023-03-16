

import { useState } from "react";
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


var singleOver = [];
var totalScore = 0;
var oversPlayed = 0.0;
var currentScore = 0;
var myWicket = 0;
const initalData = {
  players: [],
  token: 0,
  score: 0,
  singleOver: [],
  oversPlayed: oversPlayed,
  totalScore: totalScore,
  myWicket: myWicket,
};
let count = 5;
const data = (data = initalData, action) => {
 

  if (action.type === WIDEBALL || action.type === NOBALL) {
    count++;
  } else {
    if (singleOver.length > count) {
      singleOver = [];
      oversPlayed = Math.ceil(oversPlayed);
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
      totalScore += action.score;
      currentScore = action.score;
      oversPlayed = oversPlayed + 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);
      singleOver = [...singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
        oversPlayed,
      };
      
    case SCOREONE:
      totalScore += action.score;
      currentScore = action.score;
      oversPlayed += 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);
      singleOver = [...singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
        oversPlayed,
      };

    case SCORETWO:
      totalScore += action.score;
      currentScore = action.score;
      oversPlayed += 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);
      singleOver = [...singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
        oversPlayed,
      };

    case SCORETHREE:
      totalScore += action.score;
      currentScore = action.score;
      oversPlayed += 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);
      singleOver = [...singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
        oversPlayed,
      };

    case SCOREFOUR:
      totalScore += action.score;
      currentScore = action.score;
      oversPlayed += 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);
      singleOver = [...singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
        oversPlayed,
      };

    case SCORESIX:
      totalScore += action.score;
      currentScore = action.score;
      oversPlayed += 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);
      singleOver = [...singleOver, action.score];
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
        oversPlayed,
      };

    case WIDEBALL:
    totalScore += 1;
    
      singleOver = [...singleOver, action.score];
      currentScore = action.score;
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
      };

    case WICKET:
      singleOver = [...singleOver, action.score];
      oversPlayed += 0.1;
      oversPlayed = oversPlayed.toFixed(1);
      oversPlayed = parseFloat(oversPlayed);
      if(myWicket<10){
        myWicket += 1;
      }else{
        alert("Match Over");
      }
      
      return {
        ...data,
        score: action.score,
        singleOver: singleOver,
        totalScore,
        oversPlayed,
        myWicket,
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
