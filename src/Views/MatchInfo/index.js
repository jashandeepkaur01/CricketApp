import { getMatchData } from 'Redux/Actions/matchActions';
import { getData } from 'Redux/Actions/playerActions';
import Analysis from 'Views/Analysis';
import ScoreCard from 'Views/ScoreCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function MatchInfo() {
    const params = useParams()
    const { matchKey } = params;
    const matches = useSelector((state) => state.match.currMatch)
    const match = matches?.find(matchObj => matchObj.key === matchKey)
    const dispatch = useDispatch();
    console.log(match);
    useEffect(() => {
        dispatch(getData([]));
        dispatch(getMatchData([]));

    }, [])


    return (
        <div className='container'>
            <div className='titleHeading d-flex justify-content-around mb-4'>
                <h2>{match?.teams[0]} vs {match?.teams[1]}</h2>
            </div>
            <h5 className='text-center text-primary'>{match?.status}</h5>
            <h3 className='mt-3 mx-auto w-75'>ScoreCard</h3>
            <ScoreCard match={match} />
            <h3 className='mt-3 mx-auto w-75'>Analysis</h3>
            {match ? <Analysis match={match} /> : null}
        </div >
    )
}

export default MatchInfo

