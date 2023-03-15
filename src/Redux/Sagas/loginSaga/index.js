import axios from 'axios'
import { takeLatest, put, call, all } from 'redux-saga/effects'
import { setData } from 'Redux/Actions/loginActions'
import { ADDTEAM, GETDATA } from 'Redux/Actions/loginActions/actionStates';

function* players(payload) {

  try {
    const response = yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Playerrecord.json");
    yield put(setData(Object.values(response.data)));

  }
  catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error)
    }
  }
}

function* addTeam(payload){
  try {
    console.log('payload ',payload)
    yield call( axios.post,"https://customcricketmatch-default-rtdb.firebaseio.com/VTeams.json",payload.data);
  }
  catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error)
    }
  }
}
function* Sagaa() {
  yield all([takeLatest(GETDATA, players),takeLatest(ADDTEAM, addTeam)]);
}
export default Sagaa;
