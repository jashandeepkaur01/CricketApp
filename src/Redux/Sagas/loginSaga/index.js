import axios from 'axios'
import { takeLatest, put, call, all } from 'redux-saga/effects'
import { setData, setTeamData } from 'Redux/Actions/loginActions'
import { ADDTEAM, GETDATA } from 'Redux/Actions/loginActions/actionStates';
import { UPDATETEAM } from 'Redux/Actions/updateTeamActions/actionStates';

function* players(payload) {
  try {
    const response = yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Vplayers.json");
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
    const response = yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/Vteams.json");
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
    yield axios.post("https://customcricketmatch-default-rtdb.firebaseio.com/Vteams.json", payload.data);
  }
  catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error)
    }
  }
}

function* updatePlayersTeam(payload) {
  try {
    const teamName = Object.keys(payload.data)[0];
    const teamObj = {
      label: teamName,
      value: teamName,
    }
    let teamArr;
    debugger;
    const requests = payload.data[teamName].map((playerData) => {
      teamArr = [...playerData.Team,{...teamObj} ];
      
      return axios.patch(`https://customcricketmatch-default-rtdb.firebaseio.com/Vplayers/${playerData.key}.json`,
        { Team: teamArr },
      )
      
    })
    yield axios.all(requests)
  }
  catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error)
    }
  }
}

function* Sagaa() {
  yield all([takeLatest(GETDATA, players), takeLatest(GETDATA, teams), takeLatest(ADDTEAM, addTeam), takeLatest(UPDATETEAM, updatePlayersTeam)]);
}
export default Sagaa;
