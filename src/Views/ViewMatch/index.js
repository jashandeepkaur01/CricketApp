import { getMatchData } from "Redux/Actions/matchActions";
import MatchScoreCard from "Views/MatchScoreCard";
import ViewCurrentMatch from "Views/ViewCurrentMatch";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

function ViewMatch() {
    const dispatch = useDispatch();
    const params = useParams()
    const { matchUniqueKey } = params;
    // console.log(matchUniqueKey)
    const currMatches = useSelector((state) => state.match.currMatch);
    const currMatch = currMatches.find(match => match.key === matchUniqueKey);
    // console.log(currMatch);
    useEffect(() => {
        dispatch(getMatchData());
    }, [])

    return (
        <div className="container d-flex w-100">
            <ViewCurrentMatch matchData={currMatch} />
            <MatchScoreCard />
        </div>
    )
}

export default ViewMatch
