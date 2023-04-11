
const { MATCH_TEAMS, SET_MATCH_DATA, UPDATE_CURR_MATCH_DATA } = require("Redux/Actions/matchActions/actionStates");

const initialData = {
    matches: [],
    currMatch: []
};

const matchReducer = (data = initialData, action) => {
    switch (action.type) {
        case MATCH_TEAMS:
            return { ...data, currMatch: { ...data.matches, myTeam: action.data[0], oppTeam: action.data[1] } };
        case SET_MATCH_DATA:
            return { ...data, currMatch: action.data.map((data) => ({ ...data })) };
        case UPDATE_CURR_MATCH_DATA:
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