import axios from 'axios'
import { takeLatest,put, call} from 'redux-saga/effects'
import { setData } from 'Redux/Actions/loginActions'
import { SETDATA } from 'Redux/Actions/loginActions/actionStates';
// const baseurl='https://jsonplaceholder.typicode.com/todos';
function* users(payload){

    try{
   
  
   
    const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json");
    yield put(setData(Object.values(response.data)));
    
        // console.log(body,"response");
        // yield put(setData(body));
        // console.log(body,"rrrr");
        //aaaa
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }
function* Sagaa(){
   
yield takeLatest(SETDATA,users);
}
export default Sagaa;
// export default userss;