import axios from 'axios'
import { takeLatest,put, call, all} from 'redux-saga/effects'
import { setData, setPostData } from 'Redux/Actions/loginActions'
import { GETDATAS, POSTDATA ,SETPOSTDATA} from 'Redux/Actions/loginActions/actionStates';

function* players(payload){
debugger
    try{
    const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json");
    yield put(setData(Object.values(response.data)));
           
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }

function* teamPlayer(payload){
  try{
      console.log(payload)
      yield call(axios.post,'https://customcricketmatch-default-rtdb.firebaseio.com/teams.json',payload.data);
      const res = yield axios.get('https://customcricketmatch-default-rtdb.firebaseio.com/teams.json');
      console.log(res)
      console.log(res.data)
      yield put(setPostData(res.data));
  }
  catch(error){
    console.log(error)
  }
}

function* Sagaa(){
   yield all([takeLatest(GETDATAS, players), takeLatest(POSTDATA, teamPlayer)]);
// yield takeLatest(GETDATAS,players);
// yield takeLatest(POSTDATA,teamPlayer)
}

export default Sagaa;
