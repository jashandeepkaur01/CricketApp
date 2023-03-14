import { MATCHES } from "Redux/Actions/ActionStates";

export const matchReducer = (payload=[],action)=>{
    console.log("in reducer : ",action)
    switch(action.type){
        case MATCHES.STADIUMS:
            return [...action.payload];
        default:
            return null;
    }
}