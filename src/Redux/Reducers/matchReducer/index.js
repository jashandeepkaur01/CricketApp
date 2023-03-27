const { MATCHTEAMS } = require("Redux/Actions/matchActions/actionStates");

const initialData = {
    currMatch : {
        myTeam : '',
        oppTeam : '',
        date: '27 March',
    },
}
const matchReducer = (data = initialData, action) =>{
    console.log(action.data);
    switch (action.type) {
        case MATCHTEAMS:
            // console.log('data...',data.currMatch);
          return { ...data, currMatch: {...data.currMatch, myTeam :action.data[0],oppTeam: action.data[1]}};
        //   return { ...data, match: action.data.map((data) => ({ ...data })) };
        default:
          return data;
      }
}
export default matchReducer;