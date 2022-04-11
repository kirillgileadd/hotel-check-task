import {SearchFormValue} from "../../components/HotelForm";
import {
    ClearHotelsData,
    FetchHotelsAction,
    FetchHotelsErrorAction,
    FetchHotelsSuccessAction,
    HotelActionEnum
} from "../reducers/hotel/types";
import {IHotel} from "../../types/IHotel";

export const HotelActionCreators = {
    fetchHotels: (value: SearchFormValue): FetchHotelsAction => ({
        type: HotelActionEnum.FETCH_HOTELS,
        payload: value
    }),
    fetchHotelsSuccess: (hotels: IHotel[]): FetchHotelsSuccessAction => ({
        type: HotelActionEnum.FETCH_HOTELS_SUCCESS,
        payload: hotels
    }),
    fetchHotelsError: (error: string): FetchHotelsErrorAction => ({
        type: HotelActionEnum.FETCH_HOTELS_ERROR,
        payload: error
    }),
    clearHotelsData: (): ClearHotelsData => ({
        type: HotelActionEnum.CLEAR_HOTELS_DATA,
    })
}