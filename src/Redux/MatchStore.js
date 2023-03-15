// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import productSaga from './productSaga'
import MatchSaga from './Sagas/MatchSaga.js'
import createSagaMiddleware from 'redux-saga';
import { rootReducerJP } from './Reducers/rootReducerJP';

// const store = createStore(rootReducer);
// const sagaMiddleware = createSagaMiddleware();
const MatchStore  = configureStore({
    reducer:rootReducerJP
    // middleware:()=>[sagaMiddleware]
});

// sagaMiddleware.run(MatchSaga);

export default MatchStore;