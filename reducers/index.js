import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { usersReducer } from "./usersReducer";
import {layersReducer} from './layersReducer'

export const reducers = combineReducers({
    courses: coursesReducer,
    user: usersReducer,
    layers:layersReducer,
    
});
