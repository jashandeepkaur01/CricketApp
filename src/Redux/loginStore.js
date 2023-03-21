import { createStore, applyMiddleware, compose } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootreducer from "./Reducers/RootReducer/loginRootReducer";
import Sagaa from "./Sagas/loginSaga";
import createSagaMiddleware from "redux-saga";

const rootPersistConfig = {
  key: "rootdata",
  storage: storage,
  whitelist: ["loginReducer"],
};

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
const persistedReducer = persistReducer(rootPersistConfig, rootreducer);
const sagaMiddleware = createSagaMiddleware();

const loginStore = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(Sagaa);
export default loginStore;

export const persistorlogin = persistStore(loginStore);
