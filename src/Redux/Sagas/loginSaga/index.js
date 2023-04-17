import { setMatchData } from "Redux/Actions/matchActions";
import { ADD_MATCH_DATA, GET_MATCH_DATA, SAVE_CURR_MATCH_DATA, UPDATE_CURR_MATCH_DATA } from "Redux/Actions/matchActions/actionStates";
import { setData } from "Redux/Actions/playerActions";
import { GET_DATA } from "Redux/Actions/playerActions/actionStates";
import { setTeamData } from "Redux/Actions/teamActions";
import { ADD_TEAM } from "Redux/Actions/teamActions/actionStates";
import { UPDATE_TEAM } from "Redux/Actions/updateTeamActions/actionStates";
import { API, BASE_URL } from "Shared/Constants";
import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
function* players(payload) {
  try {
    const response = yield axios.get(BASE_URL + API.PLAYER_DATA);
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
    const response = yield axios.get(BASE_URL + API.TEAM_DATA);
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
    yield axios.post(BASE_URL + API.TEAM_DATA,
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
        BASE_URL + API.UPDATE_PLAYER_DATA.replace('<key>', playerData.key),
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
function* addMatch({ payload }) {
  try {
    const response = yield axios.post(BASE_URL + API.MATCH_DATA,
      payload.data
    );
    if (payload.success) {
      payload.success(response);
    }
  } catch (error) {
    if (payload?.fail) {
      payload.fail(error);
    }
  }
}
function* matchData(payload) {
  try {
    const response = yield axios.get(BASE_URL + API.MATCH_DATA);
    const matchDataWithKey = [];
    for (let key in response.data) {
      matchDataWithKey.push({ ...response.data[key], key: key });
    }
    yield put(setMatchData(matchDataWithKey));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}
function* updateMatchData(payload) {
  try {
    return axios.patch(BASE_URL + API.UPDATE_MATCH_DATA.replace('<key>', payload.data.key),
      payload.data
    );
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}
function* saveMatchData(payload) {
  try {
    yield axios.post(BASE_URL + API.MATCHES,
      payload.data
    );
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}
function* Sagaa() {
  yield all([
    takeLatest(GET_DATA, players),
    takeLatest(GET_DATA, teams),
    takeLatest(ADD_TEAM, addTeam),
    takeLatest(UPDATE_TEAM, updatePlayersTeam),
    takeLatest(ADD_MATCH_DATA, addMatch),
    takeLatest(GET_MATCH_DATA, matchData),
    takeLatest(UPDATE_CURR_MATCH_DATA, updateMatchData),
    takeLatest(SAVE_CURR_MATCH_DATA, saveMatchData),
  ]);
}



export default Sagaa;
