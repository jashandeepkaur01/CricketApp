import React, { useEffect, useState } from 'react'

function PlayMatch() {
    const [currScore, setCurrScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(0);
    const [overs,setOvers] = useState(0);
    const [currOver,setCurrOver] = useState([2,4,5]);
    function handleScoreClick(e) {
        let btnValue = e.target.innerText;
        console.log(e.target.innerText)
        console.log('currScore...' + currScore);
        // let overCopy = overs;
        // overCopy = overCopy.toFixed(1);
        // console.log(overCopy);
        // setOvers(overs.toFixed(1))
        // if((overs*10)%10 === 6){
        //     console.log('over completed...');
        // }
        if(overs === 0.6){
            setOvers(1);
        }
        setOvers(overs+0.1);
        if (btnValue === 'WB' || btnValue === 'NB') {
            console.log('wide ball')
            setCurrScore(currScore + 1)
            setDisplayScore(currScore)
            if (btnValue === 'WB') {
                setDisplayScore('Wide Ball')
                setCurrOver([...currOver,'WB'])
            }
            else {
                setDisplayScore('No Ball')
                setCurrOver([...currOver,'NB'])
            }
        }
        else if (btnValue === 'WC' || btnValue === 'DB') {
            console.log('Out');
            console.log(currScore);
            if (btnValue === 'WC'){
                setDisplayScore('OUT')
                setCurrOver([...currOver,'WC'])
            }
            else{
                setDisplayScore('Dead Ball')
                setCurrOver([...currOver,'DB'])
            }
        }
        else if (btnValue === 'Undo') {
            console.log('undo...');
        }
        else {
            console.log(typeof currScore);
            console.log(typeof btnValue);
            btnValue = +btnValue;
            setCurrScore(currScore + btnValue)
            setDisplayScore(currScore + btnValue)
            setCurrOver([...currOver,btnValue])
        }
    }
    // useEffect(() => {
    //   alert('choose batsman first...')
    // }, [])

    return (
        <div className='w-75'>
            <div className="container bg-secondary p-2">
                {/* <h2>match controls here</h2> */}
                <div className="scoredisplay border border-2 rounded border-outline-info d-flex justify-content-around mb-4">
                    <div className="displayLeft">
                        <p>Batsman 1</p>
                        <p>Batsman 2</p>
                        <p>Total Score: {currScore}</p>
                        <p>Overs: {overs}</p>
                    </div>
                    <div className="displayCenter my-auto">
                        <h2>{displayScore}</h2>
                    </div>
                    <div className="displayRight">
                        <p>Bowler</p>
                        <p>Overs: {currOver.map(currBall=>currBall +' ')}</p>
                    </div>
                </div>
                <div className="controls">
                    <div className="control-box text-center">
                        <div>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>0</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>1</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>2</button>
                        </div>
                        <div>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>3</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>4</button>
                            <button className='btn btn-light btn-outline-primary px-4 py-2' onClick={(e) => handleScoreClick(e)}>6</button>
                        </div>
                        <div>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>NB</button>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>WB</button>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>WC</button>
                        </div>
                        <div>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>DB</button>
                            <button className='btn btn-light btn-outline-primary px-3 py-2' onClick={(e) => handleScoreClick(e)}>Undo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayMatch
