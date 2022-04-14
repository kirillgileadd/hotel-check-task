import {call, put, StrictEffect, takeEvery} from "redux-saga/effects";
import {FetchHotelsAction, HotelActionEnum} from "../store/reducers/hotel/types";
import axios, {AxiosResponse} from "axios";
import dayjs from "dayjs";
import {HotelActionCreators} from "../store/action-creators/hotel";
import {IHotel} from "../types/IHotel";

const createHotelWrapper = (hotels: AxiosResponse<IHotel[]>, checkIn: string, daysQuantity: number) => {
    return hotels.data.map((hotel: IHotel) => {
        return {
            ...hotel,
            checkIn,
            daysQuantity,
            favourite: false
        }
    })
}
const checkingForFavorites = (hotels: Array<IHotel>, favourites: IHotel[]) => {
    const currentHotels = hotels.map((item: IHotel) => {
        const favouriteItem = favourites.find((favourite: any) => favourite?.hotelId === item.hotelId)
        let idCheck = item.hotelId === favouriteItem?.hotelId
        let daysQuantityCheck = item.checkIn === favouriteItem?.checkIn
        let checkInCheck = item.daysQuantity === favouriteItem?.daysQuantity
        if (idCheck && daysQuantityCheck && checkInCheck) {
            return {
                ...item,
                favourite: true
            }
        } else {
            return {
                ...item,
                favourite: false
            }
        }
    })
    return currentHotels
}


function* fetchHotels(value: FetchHotelsAction): Generator<StrictEffect, void, AxiosResponse<IHotel[]>> {
    const {payload: {date, location, daysQuantity, favourites}} = value
    try {
        const currentDate = dayjs(date)
        const checkIn = currentDate.format('YYYY-MM-DD')
        const checkOut = currentDate.add(daysQuantity, "day").format('YYYY-MM-DD')
        const response = yield call(
            axios,
            `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&&language=ru&checkIn=${checkIn}&checkOut=${checkOut}&limit=10`)

        const hotelsWithWrapper = createHotelWrapper(response, checkIn, daysQuantity)
        const currentHotels = checkingForFavorites(hotelsWithWrapper, favourites)
        yield put(HotelActionCreators.fetchHotelsSuccess(currentHotels))

    } catch (e) {
        yield put(HotelActionCreators.clearHotelsData())
        yield put(HotelActionCreators.fetchHotelsError("Something Error"))
    }
}

export function* hotelWatcher() {
    yield takeEvery(HotelActionEnum.FETCH_HOTELS, fetchHotels)
}