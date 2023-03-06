import { all, fork } from "redux-saga/effects";

import watchAuth from "./Auth";

function* rootSaga() {
  yield all([fork(watchAuth)]);
}

export default rootSaga;
