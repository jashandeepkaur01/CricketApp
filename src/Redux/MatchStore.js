// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';
import productSaga from './productSaga'
import MatchSaga from './Sagas/MatchSaga.js'
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootReducer);
// const sagaMiddleware = createSagaMiddleware();
const MatchStore  = configureStore({
    reducer:rootReducer
    // middleware:()=>[sagaMiddleware]
});

// sagaMiddleware.run(MatchSaga);

export default MatchStore;