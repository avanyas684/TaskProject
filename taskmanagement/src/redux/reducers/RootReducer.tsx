import { combineReducers } from "redux";
import Reducer from "./Reducer";

export const rootReducer = combineReducers({
    userReducer: Reducer

});
