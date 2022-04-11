import {all} from "redux-saga/effects"
import {authWatcher} from "./authSaga";
import {hotelWatcher} from "./hotelSaga";

export function* rootWatcher() {
    yield all([authWatcher(), hotelWatcher()])
}