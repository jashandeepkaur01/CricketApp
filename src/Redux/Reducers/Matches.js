import { MATCHES } from "Redux/Actions/ActionStates";

export const matchReducer = (state,action)=>{
    switch(action.type){
        case MATCHES.STADIUMS:
            return [...action];
        default:
            return null;
    }
}