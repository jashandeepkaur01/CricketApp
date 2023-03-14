import { SETDATA,GETDATAS, Token, POSTDATA} from "./actionStates"

export const getData=(data)=>{

    return {
        type :GETDATAS,
        data
       
    }
}
export const setData=(data)=>{

    return {
        type :SETDATA,
        data
       
    }
}

export const setToken=(token)=>{
   return {
       type:Token,
       token
   }
}

export const postdata =(data)=>{
    return{
        type:POSTDATA,
        data
    }
}