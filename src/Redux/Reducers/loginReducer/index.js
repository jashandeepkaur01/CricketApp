import { REHYDRATE } from "redux-persist";
import { Token } from "Redux/Actions/loginActions/actionStates";

import { SETDATA, GETDATA} from "Redux/Actions/loginActions/actionStates";

const initalData = {
  players: [],
  token: []
  
}





const loginReducer = (data = initalData, action) => {
  switch (action.type) {

  



     case GETDATA:
        return data
    case SETDATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };

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