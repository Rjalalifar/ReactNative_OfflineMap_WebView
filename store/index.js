import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
// import { getCourses } from "./../actions/index";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

//* Store Dispatch
// store.dispatch(getCourses());
