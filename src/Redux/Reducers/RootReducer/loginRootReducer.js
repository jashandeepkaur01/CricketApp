import loginReducer from "../loginReducer";
import {combineReducers} from "redux";


const appReducer = combineReducers({
    loginReducer

  });
const rootreducer=(state,action)=>{
  
    return appReducer(state, action);
};
export default rootreducer;