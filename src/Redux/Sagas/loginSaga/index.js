import axios from 'axios'
import { takeLatest,put, call, all} from 'redux-saga/effects'
import { setData, setPostData } from 'Redux/Actions/loginActions'
import { GETDATAS, POSTDATA ,SETPOSTDATA} from 'Redux/Actions/loginActions/actionStates';

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


function* teamsData(payload){

  try{
  const response =  yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/teams.json");
  yield put(setPostData(Object.values(response.data)));
     
} 
catch(error){
if(payload && payload?.fail) {
  payload.fail(error)
}
}
}

function* teamPlayer(payload){
  try{
 
      yield call(axios.post,'https://customcricketmatch-default-rtdb.firebaseio.com/teams.json',payload.data);
     
     
  }
  catch(error){
    console.log(error)
  }
}

function* Sagaa(){
   yield all([takeLatest(GETDATAS, players), takeLatest(GETDATAS, teamsData),takeLatest(POSTDATA, teamPlayer)]);

}

export default Sagaa;
