import { SETTEAMDATA } from "Redux/Actions/teamActions/actionStates";

const initialData = {
  teams: [],
};

const teamReducer = (data = initialData, action) => {
  switch (action.type) {
    case SETTEAMDATA:
      return { ...data, teams: action.data.map((data) => ({ ...data })) };
    default:
      return data;
  }
};

export default teamReducer;
