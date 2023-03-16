import axios from 'axios'
import { takeLatest, put, call, all } from 'redux-saga/effects'
import { setData, setTeamData } from 'Redux/Actions/loginActions'
import { ADDTEAM, GETDATA } from 'Redux/Actions/loginActions/actionStates';

function* players(payload) {

  try {
    const response = yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/players.json");
    const playersDataWithKey = []
    for (let key in response.data) {
      playersDataWithKey.push({ ...response.data[key], "key": key })
    }

    yield put(setData(playersDataWithKey));

  }




  catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error)
    }
  }
}
function* teams(payload) {

  try {
    const response = yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/teams.json");
    console.log(response)
    const teamsDataWithKey = []
    for (let key in response.data) {
      teamsDataWithKey.push({ ...response.data[key], "key": key })
    }
    
    yield put(setTeamData(teamsDataWithKey));

  }
  catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error)
    }
  }
}
function* addTeam(payload) {
  try {
    console.log('payload ', payload)
    
    yield call(axios.post, "https://customcricketmatch-default-rtdb.firebaseio.com/teams.json", payload.data);
  }
  catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error)
    }
  }
}
function* Sagaa() {
  yield all([takeLatest(GETDATA, players), takeLatest(GETDATA, teams), takeLatest(ADDTEAM, addTeam)]);
}



export default Sagaa;
