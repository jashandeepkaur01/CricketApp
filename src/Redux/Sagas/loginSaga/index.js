import axios from 'axios'
<<<<<<< HEAD
import { takeLatest,put, call, all} from 'redux-saga/effects'
import { setData, setPostData } from 'Redux/Actions/loginActions'
import { GETDATAS, POSTDATA ,SETPOSTDATA} from 'Redux/Actions/loginActions/actionStates';

function* players(payload){
debugger
    try{
    const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json");
=======
import { takeLatest,put, call} from 'redux-saga/effects'
import { setData } from 'Redux/Actions/loginActions'
import { GETDATA } from 'Redux/Actions/loginActions/actionStates';

function* players(payload){

    try{
    const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/players.json");
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
    yield put(setData(Object.values(response.data)));
           
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }
<<<<<<< HEAD

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

=======
function* Sagaa(){
   
yield takeLatest(GETDATA,players);
}
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
export default Sagaa;
