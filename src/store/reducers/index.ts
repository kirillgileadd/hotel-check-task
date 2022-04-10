import {combineReducers} from "redux";
import authReducer from "./auth";
import hotelReducer from "./hotel";

export const rootReducer = combineReducers({
    auth: authReducer,
    hotel: hotelReducer
})