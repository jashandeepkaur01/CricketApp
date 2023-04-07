
const { MATCHTEAMS, SETMATCHDATA, UPDATECURRMATCHDATA } = require("Redux/Actions/matchActions/actionStates");

const initialData = {
    matches: [],
    currMatch: []
};

const matchReducer = (data = initialData, action) => {
    switch (action.type) {
        case MATCHTEAMS:
            return { ...data, currMatch: { ...data.matches, myTeam: action.data[0], oppTeam: action.data[1] } };
        case SETMATCHDATA:
            return { ...data, currMatch: action.data.map((data) => ({ ...data })) };
        case UPDATECURRMATCHDATA:
            const finalCurrentMatch = data.currMatch.map(currentMatch => {
                if (currentMatch.matchOrganiser === action.data.matchOrganiser) {
                    return {
                        ...currentMatch,
                        ...action.data
                    }
                }
                return currentMatch;
            });
            return {
                ...data,
                currMatch: finalCurrentMatch
            }
        default:
            return data;
    }
}
export default matchReducer;