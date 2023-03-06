import { call, put } from "redux-saga/effects";

import { STATUS_CODES } from "Services/Api/Constants";
import { STRINGS } from "Shared/Constants";
import { LOGOUT } from "Redux/Actions/Auth";
import { ACTION_STATES } from "Redux/Actions/ActionStates";

function* requestSaga(fn = () => {}, action = { type: "ACTION_TYPE" }) {
  if (!navigator.onLine) {
    return;
  }
  const { type } = action;
  yield put({
    type: type + ACTION_STATES.REQUEST,
  });
  try {
    const response = yield call(fn, action);
    switch (response.status) {
      case STATUS_CODES.SUCCESS: {
        yield put({
          type: type + ACTION_STATES.SUCCESS,
          data: response.data,
        });
        break;
      }
      case STATUS_CODES.UNAUTHORIZED: {
        yield put({
          type: LOGOUT + ACTION_STATES.SUCCESS,
        });
        break;
      }
      case STATUS_CODES.BAD_REQUEST: {
        yield put({
          type: type + ACTION_STATES.FAILURE,
          msg: response.data.msg,
        });
        break;
      }
      default: {
        yield put({
          type: type + ACTION_STATES.FAILURE,
          msg: STRINGS.SOMETHING_WENT_WRONG,
        });
      }
    }
  } catch (error) {
    yield put({
      type: type + ACTION_STATES.FAILURE,
      msg: STRINGS.SOMETHING_WENT_WRONG,
    });
  }
}

export default requestSaga;
