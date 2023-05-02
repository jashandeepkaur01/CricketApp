import MatchCard from 'Views/MatchCard';
import { useSelector } from 'react-redux';

function AllMatches() {
    const allMatches = useSelector((state) => state.match.currMatch);
    console.log(allMatches);
    return (
        <div className='container d-flex'>
            {allMatches.map(match => <MatchCard matchData={match} />)}
            {/* <MatchCard /> */}
        </div>
    )
}

export default AllMatches