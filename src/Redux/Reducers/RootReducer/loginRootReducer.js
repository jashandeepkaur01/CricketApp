import { combineReducers } from "redux";
import loginReducer from "../loginReducer";
import playerReducer from "../playerReducer";
import teamReducer from "../teamReducer";

const appReducer = combineReducers({
  login: loginReducer,
  player: playerReducer,
  team: teamReducer
});
const rootreducer = (state, action) => {
  return appReducer(state, action);
};
export default rootreducer;
