import { LOGIN } from "Redux/Actions/loginActions/actionStates";

const initialData = {
  loggedInPlayer: null,
};

const loginReducer = (data = initialData, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...data, loggedInPlayer: action.loggedInPlayer };
    default:
      return data;
  }
};

export default loginReducer;
