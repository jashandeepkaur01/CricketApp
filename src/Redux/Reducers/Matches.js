import { MATCHES } from "Redux/Actions/ActionStates";

export const matchReducer = (payload=[12,22],action)=>{
    console.log("in reducer : ",action)
    switch(action.type){
        case MATCHES.STADIUMS:
            return [...action.payload];
        default:
            return null;
    }
}