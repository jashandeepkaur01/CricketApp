import { SETDATA,GETDATAS, Token, POSTDATA,SETPOSTDATA} from "./actionStates"

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
    console.log("PostData")
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
