import {SearchFormValue} from "../../components/HotelForm";
import {
    AddToFavouritesAction,
    ClearHotelsData, DeleteFromFavouritesAction,
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
    }),
    addToFavourites: (item: IHotel): AddToFavouritesAction => ({
        type: HotelActionEnum.ADD_TO_FAVOURITES,
        payload: item
    }),
    deleteFromFavourites: (item: IHotel): DeleteFromFavouritesAction => ({
        type: HotelActionEnum.DELETE_FROM_FAVOURITES,
        payload: item
    })
}