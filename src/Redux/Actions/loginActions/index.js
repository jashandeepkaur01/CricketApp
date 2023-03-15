import { SETDATA,GETDATAS, Token} from "./actionStates"
export const getData=(data)=>{
    console.log('getData action called...')
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
