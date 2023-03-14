import { Token } from "Redux/Actions/loginActions/actionStates";

import { SETDATA, GETDATAS } from "Redux/Actions/loginActions/actionStates";

const initalData = {
  players: [],
  token: 0
  
}
const data = (data = initalData, action) => {
  switch (action.type) {

    case GETDATAS:
      return { ...data, players: action.data.map((data) => ({ ...data })) };

    case Token:
      return { ...data, token: action.token }
    default:
      return data;
  }
}

export default data;