import { SETDATA,SETDATAS, Token} from "./actionStates"
export const getData=()=>{

    return {
        type :SETDATA,
        data:"apple"
       
    }
}
export const setData=(data)=>{
  
    return {
        type :SETDATAS,
        data
       
    }
}
export const setToken=(token)=>{
   return {
       type:Token,
       token
   }
}
