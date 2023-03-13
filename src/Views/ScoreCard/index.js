import React from 'react'
import './style.css';
// import { Link } from 'react-router-dom';

function ScoreCard() {
  return (
    <div>
        <div className='view-container d-flex justify-content-evenly m-5'>
        <div className='view-leftbox '>
            <div className='players'>
            <p className='striker'>*Player A (Sc) Bl</p>
            <p className='non-striker'>Player B (Sc) Bl</p>
            </div>
            <div className='score-over'>
                <p>Total Team Score : 195</p>
                <p>Overs Played: 12.4</p>
            </div>
        </div>

        <div className='view-centerbox'>
        <p className='my-run'>4</p>
        </div>
        
        
        <div className='view-rightbox'>
            <div className='my-bowler'>
                <p>Bowler Name (0/W)</p>
            </div>
            <div className='my-over'>
                <p>Over: 1 2 3 4 5 6</p>
            </div>
        </div>
        </div>

        <div className='teams-and-btn'>
        
        <div className='bat-ball'>
        <div className='Bating-team'>
        <h3>Team A</h3>
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
            <button type="button" class="btn btn-outline-success"> 0 </button>
            <button type="button" class="btn btn-outline-success"> 1 </button>
            <button type="button" class="btn btn-outline-success"> 2 </button>
            </div>
            <div>
            <button type="button" class="btn btn-outline-success"> 3 </button>
            <button type="button" class="btn btn-outline-success"> 4 </button>
            <button type="button" class="btn btn-outline-success"> 6 </button>
                            
            </div>
            <button type="button" class="btn btn-outline-success"> WB </button>
            <button type="button" class="btn btn-outline-success"> Wc </button>
            <button type="button" class="btn btn-outline-success"> Dead Ball </button>
            <div>
            <button type="button" class="btn btn-outline-success"> Out </button>
            <button type="button" class="btn btn-outline-success"> No Ball </button>
            <button type="button" class="btn btn-outline-success"> Remove </button>
            </div>
            </div>
        </div>

        </div>
        

    </div>
  )
}

export default ScoreCard