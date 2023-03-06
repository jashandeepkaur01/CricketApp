import { LOGIN } from "../Actions/Auth";
import { ACTION_STATES } from "../Actions/ActionStates";

const initialState = {
  token: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN + ACTION_STATES.SUCCESS: {
      return {
        ...state,
        token: action.token,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
