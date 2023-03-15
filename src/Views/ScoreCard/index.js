import React from 'react'
import { deadBall, noBall, out, remove, scoreFour, scoreOne, scoreSix, scoreThree, scoreTwo, scoreZero, wicket, wideBall } from 'Redux/Actions/loginActions';
import './style.css';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
// import { useState,useEffect } from 'react';
// import Select from 'react-select';

function ScoreCard() {
    
    // const [users, setUsers] = useState([])

    // const fetchUserData = () => {
    //   fetch("https://customcricketmatch-default-rtdb.firebaseio.com/players.json")
    //     .then(response => {
    //       return response.json()
    //     })
    //     .then(data => {
    //       setUsers(Object.values(data))
    //     })
    // }
    // useEffect(() => {
    //     fetchUserData()
    //   }, [])
    
// console.log(users[0].Name,"data")
    const dispatch = useDispatch();
    const myScore = useSelector((state) => state.data.score);
    const myOver = useSelector((state) => state.data.singleOver);
    const totalScore = useSelector((state) => state.data.totalScore);
    // console.log("You Scored ", myScore);
    // console.log("You Scored ",totalScore);


  return (
    <div className='score-main'>
        <div className='view-container d-flex justify-content-evenly m-5'>
        <div className='view-leftbox '>
            <div className='players'>
            <p className='striker'>*Player A (Sc) Bl</p>
            <p className='non-striker'>Player B (Sc) Bl</p>
            </div>
            <div className='score-over'>
                <p>Total Team Score : {totalScore}</p>
                <p>Overs Played: 12.4</p>
            </div>
        </div>

        <div className='view-centerbox'>
        <p className='my-run'>{myScore}</p>
        </div>
        
        
        <div className='view-rightbox'>
            <div className='my-bowler'>
                <p>Bowler Name (0/W)</p>
            </div>
            <div className='my-over'>
                <div className='over-balls'>
                <div >Over:</div>
                <div className='over-balls'>{
                    myOver.map((e)=>{
                        return <div className='balls'>{e}</div>
                    })
                }</div>
                </div>
            </div>
        </div>
        </div>

        <div className='teams-and-btn'>
        
        <div className='bat-ball'>
        <div className='Bating-team'>
        <h3>Team A</h3>
        {/* <Select options={allPlayers.map(val => ({ label: val.Name, value: val.Name, key: val.PhoneNo }))} onChange={handlePlayers} name="teamPlayers" value={players} closeMenuOnSelect={false} isMulti /> */}
        <p>Batsman 1</p>
        <p>Batsman 2</p>
        </div>

        <div className='Bowling-team'>
        <h3>Team B</h3>
        <p>Bowler </p>
        </div>
        </div>

        <div className='btn-box'>
            <div>
            <div>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(scoreZero(0))}
            > 0 </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(scoreOne(1))}
            > 1 </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(scoreTwo(2))}
            > 2 </button>
            </div>
            <div>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(scoreThree(3))}
            >3 </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(scoreFour(4))}
            > 4 </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(scoreSix(6))}
            >6 </button>
                            
            </div>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(wideBall("WB"))}
            > WB </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(wicket("Wc"))}
            > Wc </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(deadBall("DB"))}
            > DB </button>
            <div>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(out("OUT"))}
            > Out </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(noBall("NB"))}
            > NB </button>
            <button type="button" className="btn btn-outline-success"
            onClick={()=>dispatch(remove(""))}
            > Remove </button>
            </div>
            </div>
        </div>

        </div>
        

    </div>
  )
}

export default ScoreCard