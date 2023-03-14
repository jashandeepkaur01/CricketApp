import { Token } from "Redux/Actions/loginActions/actionStates";

import { SETDATA,SETDATAS } from "Redux/Actions/loginActions/actionStates";

const initalData = {
  users: [],
  token:0
}
const user=(data=initalData,action)=>{
switch (action.type) {
  case  SETDATA:
    return data;
    case SETDATAS:
      

      return {...data, users: action.data.map((data) => ({...data})) };
      
      case Token:
        
        return {...data, token:action.token}
        default:
            return data;
}
}

export default user;