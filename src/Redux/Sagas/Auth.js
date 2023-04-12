import { takeLatest, all } from "redux-saga/effects";

import { LOGIN, LOGOUT } from "../Actions/Auth";
import { login, logout } from "Services/Api/Auth";
import requestSaga from "Shared/RequestSaga";

function* watchAuth() {
  yield all([
    takeLatest(LOGIN, requestSaga),
    takeLatest(LOGOUT, requestSaga),
  ]);
}

export default watchAuth;
