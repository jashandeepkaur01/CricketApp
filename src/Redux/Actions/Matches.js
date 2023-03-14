import { MATCHES } from "./ActionStates"

export const stadiums = (payload)=>{
    return {
        type:MATCHES.STADIUMS,
        payload
    }
}