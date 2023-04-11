import { SET_TEAM_DATA } from "Redux/Actions/teamActions/actionStates";

const initialData = {
  teams: [],
};

const teamReducer = (data = initialData, action) => {
  switch (action.type) {
    case SET_TEAM_DATA:
      return { ...data, teams: action.data.map((data) => ({ ...data })) };
    default:
      return data;
  }
};

export default teamReducer;
