import { REHYDRATE } from "redux-persist";


import { SETDATA, GETDATA, Token, SETTEAMDATA} from "Redux/Actions/loginActions/actionStates";

const initalData = {
  players: [],
  teams: [],
  token: [],
}





const loginReducer = (data = initalData, action) => {
  switch (action.type) {
     case GETDATA:
        return data
    case SETDATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };
    case SETTEAMDATA:
      return { ...data, teams: action.data.map((data) => ({ ...data })) };

    case Token:
      return { ...data, token: action.token}

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
}

export default loginReducer;