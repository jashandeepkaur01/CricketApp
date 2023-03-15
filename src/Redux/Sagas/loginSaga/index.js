import axios from 'axios'
import { takeLatest,put, call} from 'redux-saga/effects'
import { setData } from 'Redux/Actions/loginActions'
import { GETDATA } from 'Redux/Actions/loginActions/actionStates';

function* players(payload){

    try{
    const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/players.json");
    yield put(setData(Object.values(response.data)));
           
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }
function* Sagaa(){
   
yield takeLatest(GETDATA,players);
}
export default Sagaa;
