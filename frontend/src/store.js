import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

//import reducers
import {productListReducer} from "./reducers/products.reducers";

const reducer = combineReducers({
  productsList: productListReducer
});
const middleWare = [thunk];
const initialState = {};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;
