import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './reducers/RootReducer'; 
import HttpService from 'app/services/HttpService';
import rootSaga from './sagas/RootSaga';


const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  thunk,
  axiosMiddleware(HttpService.getAxiosClient()),
  sagaMiddleware, 
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
  RootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);


sagaMiddleware.run(rootSaga);


