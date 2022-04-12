import {AuthActionCreators} from "./auth";
import {HotelActionCreators} from "./hotel";

export const allActionCreators = {
    ...AuthActionCreators,
    ...HotelActionCreators,
}