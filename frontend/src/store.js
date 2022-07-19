import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({});
const middleWare = [thunk];
const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
