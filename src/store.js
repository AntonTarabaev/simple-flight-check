import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/root-reducer';
import { flightsSaga } from './reducers/saga';
import { checkAuth } from './actions/user';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
store.dispatch(checkAuth());

sagaMiddleware.run(flightsSaga);

export default store;
