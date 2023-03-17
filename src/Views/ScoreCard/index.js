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

  
  const inputs = batsman1.value&&batsman2.value&&bowler.value;
  let star="*";

// console.log(players,"players")
  const handleBatsman1 = (e) => {
    setPlayer(users.filter(val=>val.PhoneNo!==e.key))
    setBatsman1(e)
  }
  
  const handleBatsman2 = (e) => {
    setUsers(players.filter(val=>val.Name!==e.value))
    setBatsman2(e)
  }

  const handleBowler = (e) => {
    setBowler(e)
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
    
    // console.log(users);
 
  const dispatch = useDispatch();
  const myScore = useSelector((state) => state.data.score);
  const myOver = useSelector((state) => state.data.singleOver);
  const totalScore = useSelector((state) => state.data.totalScore);
  const oversPlayed = useSelector((state) => state.data.oversPlayed);
  const wickets = useSelector((state) => state.data.myWicket);
  
  // console.log("You Scored ", myScore);
//   console.log("You Scored000 ",player1.value);

  // console.log(startMatch)
 
  useEffect(()=>{

  if((myScore%2==0)&&(count%2==0)){
    setScore1(score1+myScore);
    setBall1(ball1+1)
  }
  else if(myScore%2!==0 && count%2==0){
    setScore1(score1+myScore);
    setBall1(ball1+1)
    setCount(1);
  }
  else if(myScore%2==0 && count%2!==0){
    setScore2(score2+myScore);
    setBall2(ball2+1)
  }
  else if(myScore%2!==0 && count%2!==0){
    setScore2(score2+myScore);
    setBall2(ball2+1)
    setCount(0);
  }
 
  console.log(count)
  
},[totalScore])


  
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
            <p>Overs Played:{oversPlayed}</p>
            <p>Wickets : {wickets}</p>
          </div>
        </div>

        <div className="view-centerbox">
          <p className="my-run">{myScore}</p>
        </div>

        <div className="view-rightbox">
          <div className="my-bowler">
            <p>{bowler.value} (0/{wickets})</p>
          </div>
          <div className="my-over">
            <div className="over-balls">
              <div>Over:</div>
              <div className="over-balls">
                {myOver.map((e) => {
                  return <div className="balls">{e}</div>;
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
              onClick={() => dispatch(wicket("Wc"))}
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
