import { combineReducers } from "redux";
import loginReducer from "../loginReducer";
import matchReducer from "../matchReducer";
import playerReducer from "../playerReducer";
import teamReducer from "../teamReducer";

const appReducer = combineReducers({
  login: loginReducer,
  player: playerReducer,
  team: teamReducer,
  match: matchReducer,
});
const rootreducer = (state, action) => {
  return appReducer(state, action);
};
export default rootreducer;
