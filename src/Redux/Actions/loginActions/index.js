<<<<<<< HEAD
import { GETDATAS, Token} from "./actionStates"
=======
import { GETDATA,SETDATA, Token} from "./actionStates"
>>>>>>> handling_login
export const getData=(data)=>{
    console.log('getData action called...')
    return {
        type :GETDATA,
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
