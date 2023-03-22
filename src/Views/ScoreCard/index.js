import React from "react";
import {
  deadBall,noBall,remove,scoreFour,scoreOne,scoreSix,
  scoreThree,scoreTwo,scoreZero,wicket,wideBall,
} from "Redux/Actions/loginActions";

import "./style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Select from "react-select";

function ScoreCard() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [batsman1,setBatsman1] = useState([]);
  const [batsman2,setBatsman2] = useState([]);
  const [bowler,setBowler] = useState([]);
  const [players,setPlayer] = useState([]);
  const [score1,setScore1] = useState(0);
  const [score2,setScore2] = useState(0);
  const [count,setCount] = useState(0);
  const[stars,setStar]=useState(true);
  const [ball1,setBall1] = useState(-1);
  const [ball2,setBall2] = useState(0);
  const myScore = useSelector((state) => state.data.score);
  const myOver = useSelector((state) => state.data.objs.singleOver);
  const totalScore = useSelector((state) => state.data.objs.totalScore);
  const oversPlayed = useSelector((state) => state.data.objs.oversPlayed);
  const wickets = useSelector((state) => state.data.objs.myWicket);
  // const resetScore = useSelector((state) => state.data.score);

// console.log(resetScore)

  
  const inputs = batsman1.value&&batsman2.value&&bowler.value;
  let star="*";

  const out=()=>{
    if(stars===true){
      players.filter(e=>{
        if(e.Name !== batsman1.value){
          return e.Name
        }
        return null;
        
      })
      setBatsman1('');
      setBall1(-1);
      setScore1(0);
    }
    else if(stars===false){
      users.filter(e=>{
        if(e.Name !== batsman2.value){
          return e.Name
        }
        return null;
        
      })
      setBatsman2('');
      setBall2(-1);
      setScore2(0);
    }
    dispatch(wicket("Wc"))

    }
    // console.log(myScore)

// console.log(players,"players")
  const handleBatsman1 = (e) => {
    setPlayer(users.filter(val=>val.PhoneNo!==e.key))
    
    if(oversPlayed ===0.0){
      setBatsman1(e)
    }
    if(myScore === "Wc"){
      setBatsman1(e)
    }

  }
  
  const handleBatsman2 = (e) => {
    setUsers(players.filter(val=>val.Name!==e.value))
    if(oversPlayed ===0.0){
      setBatsman2(e)
    }
    if(myScore === "Wc"){
      setBatsman2(e)
    }

  }

  const handleBowler = (e) => {

    if(oversPlayed === 0.0){
      setBowler(e)
    }
    if((oversPlayed*10)%10===6){
      setBowler(e)
    }

    
    // if(oversPlayed !== 0.0){
    //   if(stars === false){
    //     setStar(true);
    //   }else if(stars){
    //     setStar(false)
    //   }
    // }
    
  }

  const fetchUserData = () => {
    fetch("https://customcricketmatch-default-rtdb.firebaseio.com/players.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(Object.values(data)) 
        setPlayer(Object.values(data))
      })
  }
  useEffect(() => {
      fetchUserData()
    }, [])
    
    // console.log(myScore);


  useEffect(()=>{
    if(myScore === 'Wc' ){
      if(stars){
        setScore1(0);
        setBall1(0)
      }else{
        setScore2(0);
        setBall2(0)
      }
      
    }else if(myScore === 'WB' || myScore === 'NB'){
     return null;
    }
    else{
      
      if(((myScore%2===0)&&(count%2===0) )){
        setScore1(score1+myScore);
        setBall1(ball1+1);
      }
      else if(myScore%2!==0 && count%2===0){
        setScore1(score1+myScore);
        setBall1(ball1+1)
        setCount(1);
      }
      else if(myScore%2===0 && count%2!==0){
        setScore2(score2+myScore);
        setBall2(ball2+1)
      }
      else if(myScore%2!==0 && count%2!==0){
        setScore2(score2+myScore);
        setBall2(ball2+1)
        setCount(0);
      }
    }

  if((oversPlayed*10)%10===6){
    // console.log("select bowler");
    setBowler('');

    // if(stars === true){
    //   setStar(false);
    // }else{
    //   setStar(true)
    // }
    // if(myScore === 1 || myScore === 3){
    //   setStar(true)
    // }else{
    //   setStar(false)
    // }
  }
},[myOver])

  return (
    <div className="score-main">
      <div className="view-container d-flex justify-content-evenly m-5">
        <div className="view-leftbox ">
          <div className="players">
            {stars?<p className="striker">{star}{batsman1.value} {score1} ({ball1})</p>:<p>{batsman1.value} {score1} ({ball1})</p>}
            {!stars?<p className="non-striker">{star}{batsman2.value} {score2} ({ball2})</p>:<p>{batsman2.value} {score2} ({ball2})</p>}
          </div>
          <div className="score-over">
            <p>Total Score : {totalScore}</p>
            <p>Overs Played: {oversPlayed}</p>
            <p>Wickets : {wickets}</p>
          </div>
        </div>

        <div className="view-centerbox">
          <p className="my-run">{myScore}</p>
        </div>

        <div className="view-rightbox">
          <div className="my-bowler">
            <p>{bowler.value} ({Math.floor(oversPlayed)} / {wickets})</p>
          </div>
          <div className="my-over">
            <div className="over-balls">
              <div>Over:</div>
              <div className="over-balls">
                {myOver.map((e, idx) => {
                  return <div key={idx} className="balls">{e}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
          
      <div className="teams-and-btn">
    
        <div className="bat-ball">
          <div className="Bating-team">
            <h3>Team A</h3>
            <div className="d-flex justify-content-between fs-3">
            <label>Batsman</label>
            <Select className="seletPlayer" options={users.map(val => ({ label:val.Name, value: val.Name, key:val.PhoneNo}))} onChange={handleBatsman1} name="teamPlayer1" value={batsman1} />
            </div>
            <div className="d-flex justify-content-between fs-3">
            <label>Batsman</label>
            <Select className="seletPlayer" options={players.map(val => ({ label:val.Name, value: val.Name,key:val.PhoneNo}))} onChange={handleBatsman2} name="teamPlayer2" value={batsman2} />
            </div>

          </div>

          <div className="Bowling-team">
            <h3>Team B</h3>
            <div className="d-flex justify-content-between fs-3">
            <label>Bowler</label>
            <Select className="seletBowler" options={users.map(val => ({ label:val.Name, value: val.Name }))} onChange={handleBowler} name="teamPlayer3" value={bowler} />
            </div>
          </div>
        </div>
        
        {inputs?<div className="btn-box">
          <div>
            <div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => dispatch(scoreZero(0))}
              >
                {" "}
                0{" "}
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() =>{ 
                  setStar(!stars);
                  dispatch(scoreOne(1))}}
              >
                {" "}
                1{" "}
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() =>
                {setStar(stars);
                 dispatch(scoreTwo(2))}}
              >
                {" "}
                2{" "}
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => {
                  setStar(!stars);
                  dispatch(scoreThree(3))}}
              >
                3{" "}
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => dispatch(scoreFour(4))}
              >
                {" "}
                4{" "}
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => dispatch(scoreSix(6))}
              >
                6{" "}
              </button>
            </div>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => dispatch(wideBall("WB"))}
            >
              {" "}
              WB{" "}
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => out()}
            >
              {" "}
              Wc{" "}
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => dispatch(deadBall("DB"))}
            >
              {" "}
              DB{" "}
            </button>
            <div>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => dispatch(noBall("NB"))}
              >
                {" "}
                NB{" "}
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => dispatch(remove(""))}
              >
                {" "}
                Remove{" "}
              </button>
            </div>
          </div>
        </div>:null}
      </div>
    </div>
  );
}

export default ScoreCard;
