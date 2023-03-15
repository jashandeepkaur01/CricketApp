<<<<<<< HEAD
import { SETPOSTDATA, Token } from "Redux/Actions/loginActions/actionStates";

import { SETDATA, GETDATAS } from "Redux/Actions/loginActions/actionStates";

const initalData = {
  players: [],
  teamData:[],
  token: 0,
  
  
}



const data = (data = initalData, action) => {
  switch (action.type) {

    case GETDATAS:
      return { ...data, players: action.data.map((data) => ({ ...data })) };
    
      case SETDATA:
        return { ...data, teamData: action.data.map((data) => ({ ...data })) };

    case Token:
      return { ...data, token: action.token }

    // case POSTDATA:
    //   console.log("reducer data",data)
    //   return {data}

    case SETPOSTDATA:
      return {...data,players:action.data.map((data) => ({...data}))};
    
=======
import { Token } from "Redux/Actions/loginActions/actionStates";

import { SETDATA, GETDATA} from "Redux/Actions/loginActions/actionStates";

const initalData = {
  players: [],
  token: 0
  
}
const data = (data = initalData, action) => {
  switch (action.type) {
     case GETDATA:
        return data
    case SETDATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };

    case Token:
      return { ...data, token: action.token }
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
    default:
      return data;
  }
}

<<<<<<< HEAD


=======
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
export default data;