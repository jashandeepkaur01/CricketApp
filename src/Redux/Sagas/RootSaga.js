import { all, fork } from "redux-saga/effects";

import watchAuth from "./Auth";
import loginSaga from "./loginSaga";

function* rootSaga() {
  yield all([fork(watchAuth)]);
}

export default rootSaga;
