import MatchCard from 'Views/MatchCard';
import { useSelector } from 'react-redux';

function AllMatches() {
    const allMatches = useSelector((state) => state.match.currMatch);
    console.log(allMatches);
    return (
        <div className='container'>
            <h3>Matches</h3><hr />
            <div className='AllMatchesDisplay d-flex'>
                {allMatches.map(match => <MatchCard matchData={match} />)}
                {/* <MatchCard /> */}
            </div>
        </div>
    )
}

export default AllMatches