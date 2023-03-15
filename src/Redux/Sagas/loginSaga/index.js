import axios from 'axios'
import { takeLatest,put} from 'redux-saga/effects'
import { getData } from 'Redux/Actions/loginActions'
import { GETDATAS } from 'Redux/Actions/loginActions/actionStates';

function* players(payload){

    try{
    const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json");
    yield put(getData(Object.values(response.data)));
           
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }
function* Sagaa(){
   
yield takeLatest(GETDATAS,players);
}
export default Sagaa;
