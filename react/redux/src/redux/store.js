import { combineReducers, createStore } from "redux";
import counterReducer from "./Counter";

let combineAllReducers=combineReducers({
    counter:counterReducer
})

export let store=createStore(combineAllReducers)
