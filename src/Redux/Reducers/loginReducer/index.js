


import { SETDATA, GETDATA, Token, SETTEAMDATA,ADDMATCH} from "Redux/Actions/loginActions/actionStates";

const initalData = {
  players: [],
  teams: [],
  matches:[],
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

    case ADDMATCH:
  
      return {...data,matches:action.matches.map((data) => ({ ...data }))}
    default:
      return data;
  }
}

export default loginReducer;