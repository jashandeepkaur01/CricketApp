<<<<<<< HEAD
import { SETDATA,GETDATAS, Token, POSTDATA,SETPOSTDATA} from "./actionStates"

export const getData=(data)=>{

    return {
        type :GETDATAS,
=======
import { GETDATA,SETDATA, Token} from "./actionStates"
export const getData=(data)=>{
    console.log('getData action called...')
    return {
        type :GETDATA,
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
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
<<<<<<< HEAD

export const postdata =(data)=>{
    return{
        type:POSTDATA,
        data
    }
}

export const setPostData=(data)=>{
    return{
        type:SETPOSTDATA,
        data
    }
}
=======
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
