import { MATCHES } from "Redux/Actions/ActionStates";

export const matchReducer = (data=[12,22],action)=>{
console.log("in reducer : ",action)
    switch(action.type){
        case MATCHES.STADIUMS:
            return [...action.data];
        default:
            return null;
    }
}
//matchReducer