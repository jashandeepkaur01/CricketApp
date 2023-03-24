import { REHYDRATE } from "redux-persist";

import { LOGIN } from "Redux/Actions/loginActions/actionStates";

const initialData = {
  // players: [],
  // teams: [],
  loggedInPlayer: null,
};

const loginReducer = (data = initialData, action) => {
  switch (action.type) {
    // case GETDATA:
    //   return data;
    // case SETDATA:
    //   return { ...data, players: action.data.map((data) => ({ ...data })) };
    // case SETTEAMDATA:
    //   return { ...data, teams: action.data.map((data) => ({ ...data })) };

    case LOGIN:
      return { ...data, loggedInPlayer: action.loggedInPlayer };

    // case REHYDRATE:
    //   let persistedData = ((action || {}).payload).loginReducer || initalData
    //   console.log(persistedData, action,data,"persistedData<><<><><>")
    //   return {
    //     ...data,
    //     token:persistedData.token
    //   }
    default:
      return data;
  }
};

export default loginReducer;
