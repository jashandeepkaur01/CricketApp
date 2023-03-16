import axios from 'axios'
import { takeLatest, put, call, all } from 'redux-saga/effects'
import { setData, setTeamData } from 'Redux/Actions/loginActions'
import { ADDTEAM, GETDATA } from 'Redux/Actions/loginActions/actionStates';
import { UPDATETEAM } from 'Redux/Actions/updateTeamActions/actionStates';

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
    const response = yield axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/VTeams.json");
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
    // console.log('payload ', payload)
    yield call(axios.post, "https://customcricketmatch-default-rtdb.firebaseio.com/VTeams.json", payload.data);
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
    // const selectedPlayersKeys = Object.values(payload.data);
    let teamArr;
    console.log('payload ', payload);
    console.log(payload.data[teamName]);
    // payload.data[teamName].map(playerData=>{
    //   console.log('initial Teams...',playerData.Team);
    //   teamArr = [...playerData.Team,teamName];
    //   console.log('after adding teams: ',teamArr);
    //   console.log('playerData.key...',playerData);
    //   yield call(axios.patch(`https://customcricketmatch-default-rtdb.firebaseio.com/players/${playerData.key}.json`,
    //     { Team: teamArr },
    //   ))
    // })
    for(let playerData of payload.data[teamName]){
      console.log('initial Teams...',playerData.Team);
      teamArr = [...playerData.Team,teamName];
      console.log('after adding teams: ',teamArr);
      console.log('playerData.key...',playerData);
      yield call(axios.patch(`https://customcricketmatch-default-rtdb.firebaseio.com/players/${playerData.key}.json`,
        { Team: teamArr },
      ))
    }
    // yield selectedPlayersKeys.map(k => {
    //   call(axios.patch(`https://customcricketmatch-default-rtdb.firebaseio.com/players/-NQdCjTbFUgS-rIiwfvf.json`,
    //     { Team: tempArr },
    //   ))
    // }
    // )
    // console.log('allplayersData', payload.allPlayersData);
    // console.log('teamSelected', teamName);
    // console.log('players keys....', selectedPlayersKeys);
    // const selectedPlayersData = payload.allPlayersData.filter(player=>{
    //   selectedPlayersKeys.map(splayer=>{
    //     if(player.key === splayer)
    //       return player;
    //   })
    // })
    // console.log('selectedPlayersData...',selectedPlayersData);
    // const selectedPlayersKeys = payload.data[teamName];
    // console.log('selectedPlayersKeys ...', selectedPlayersKeys)
    // console.log('selectedPlayersKey[0] ...', selectedPlayersKeys[0])

    
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
