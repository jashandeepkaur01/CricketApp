const { MATCHTEAMS, GETMATCHDATA, ADDMATCHDATA, SETMATCHDATA } = require("Redux/Actions/matchActions/actionStates");

const initialData = {
    matches:[],
    currMatch: []
}
const matchReducer = (data = initialData, action) => {
    // console.log('matchReducer action.data...' + action.data);
    switch (action.type) {
        case MATCHTEAMS:
            // console.log('data...',data.currMatch);
            return { ...data, currMatch: { ...data.matches, myTeam: action.data[0], oppTeam: action.data[1] } };
        //   return { ...data, match: action.data.map((data) => ({ ...data })) };
        case SETMATCHDATA:
            // console.log('setmatchdata reducer...')
            // console.log('data....'+ data);
            // console.log('action.data...'+ action.data)
            // return { ...data, currMatch: action.data };
            return { ...data, currMatch: action.data.map((data) => ({ ...data }))};
        // case GETMATCHDATA:
        //     console.log('match reducer. data...', data)
        //     return data;
        // case ADDMATCHDATA:
        //     console.log('match reducer ADDMATCHDATA called....')
        //     return { ...data, currMatch: { ...data.currMatch, myTeam: action.data[0], oppTeam: action.data[1] } }
        default:
            return data;
    }
}
export default matchReducer;