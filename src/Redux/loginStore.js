import {configureStore} from "@reduxjs/toolkit"
import rootreducer from "./Reducers/RootReducer/loginRootReducer";
import Sagaa from "./Sagas/loginSaga";
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware=createSagaMiddleware();
const loginStore=configureStore({reducer:rootreducer,
middleware:()=>[sagaMiddleware]});
sagaMiddleware.run(Sagaa);
export default loginStore;