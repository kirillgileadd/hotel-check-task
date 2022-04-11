import {call, put, takeEvery} from "redux-saga/effects";
import {FetchHotelsAction, HotelActionEnum} from "../store/reducers/hotel/types";
import axios from "axios";
import dayjs from "dayjs";
import {HotelActionCreators} from "../store/action-creators/hotel";

// http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2022-12-10&checkOut=2022-12-12&limit=10

function* fetchHotels(value: FetchHotelsAction) {
    const {payload: {date, location, daysQuantity}} = value
    try {
        const currentDate = dayjs(date)
        const checkIn = currentDate.format('YYYY-MM-DD')
        const checkOut = currentDate.add(daysQuantity, "day").format('YYYY-MM-DD')
        console.log(checkIn, checkOut);
        //@ts-ignore
        const response = yield call(
            axios,
            `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)
        yield put(HotelActionCreators.fetchHotelsSuccess(response.data))
    } catch (e) {
        yield put(HotelActionCreators.fetchHotelsError("Something Error"))
    }
}

export function* hotelWatcher() {
    yield takeEvery(HotelActionEnum.FETCH_HOTELS, fetchHotels)
}