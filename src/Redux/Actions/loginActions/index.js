import { GETDATAS, Token} from "./actionStates"
export const getData=(data)=>{

    return {
        type :GETDATAS,
        data
       
    }
}

export const setToken=(token)=>{
   return {
       type:Token,
       token
   }
}
