import { combineReducers, createStore } from "redux";
import signupReducer from "./signup-reducer";

let reducers = combineReducers({
  signupPage: signupReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
