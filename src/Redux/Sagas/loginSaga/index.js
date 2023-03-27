import axios from "axios";
import { takeLatest, put, all } from "redux-saga/effects";
import { UPDATETEAM } from "Redux/Actions/updateTeamActions/actionStates";
import { GETDATA } from "Redux/Actions/playerActions/actionStates";
import { setData } from "Redux/Actions/playerActions";
import { setTeamData } from "Redux/Actions/teamActions";
import { ADDTEAM } from "Redux/Actions/teamActions/actionStates";
function* players(payload) {
  try {
    const response = yield axios.get(
      "https://customcricketmatch-default-rtdb.firebaseio.com/playerData.json"
    );
    const playersDataWithKey = [];
    for (let key in response.data) {
      playersDataWithKey.push({ ...response.data[key], key: key });
    }
    yield put(setData(playersDataWithKey));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* teams(payload) {
  try {
    const response = yield axios.get(
      "https://customcricketmatch-default-rtdb.firebaseio.com/teamData.json"
    );
    const teamsDataWithKey = [];
    for (let key in response.data) {
      teamsDataWithKey.push({ ...response.data[key], key: key });
    }
    yield put(setTeamData(teamsDataWithKey));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* addTeam(payload) {
  try {
    yield axios.post(
      "https://customcricketmatch-default-rtdb.firebaseio.com/teamData.json",
      payload.data
    );
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* updatePlayersTeam(payload) {
  try {
    const teamName = Object.keys(payload.data)[0];
    const teamObj = {
      label: teamName,
      value: teamName,
    };
    let teamArr;
    const requests = payload.data[teamName].map((playerData) => {
      teamArr = [...playerData.Team, { ...teamObj }];

      return axios.patch(
        `https://customcricketmatch-default-rtdb.firebaseio.com/playerData/${playerData.key}.json`,
        { Team: teamArr }
      );
    });
    yield axios.all(requests);
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* Sagaa() {
  yield all([
    takeLatest(GETDATA, players),
    takeLatest(GETDATA, teams),
    takeLatest(ADDTEAM, addTeam),
    takeLatest(UPDATETEAM, updatePlayersTeam),
  ]);
}



export default Sagaa;
