import {IHotel} from "../../../types/IHotel";
import {ICarouselItem} from "../../../types/ICarouselItem";
import {SearchFormValue} from "../../../components/HotelForm";

export interface HotelState {
    hotels: IHotel[];
    isLoading: boolean;
    error: string;
    carousel: ICarouselItem[],
    location: string;
    date: Date;
    daysQuantity: number;
}

export enum HotelActionEnum {
    FETCH_HOTELS = 'FETCH_HOTELS',
    FETCH_HOTELS_SUCCESS = 'FETCH_HOTELS_SUCCESS',
    FETCH_HOTELS_ERROR = 'FETCH_HOTELS_ERROR',
    CLEAR_HOTELS_DATA = 'CLEAR_HOTELS_DATA'
}

export interface FetchHotelsAction {
    type: HotelActionEnum.FETCH_HOTELS,
    payload: SearchFormValue
}

export interface FetchHotelsSuccessAction {
    type: HotelActionEnum.FETCH_HOTELS_SUCCESS,
    payload: IHotel[]
}

export interface FetchHotelsErrorAction {
    type: HotelActionEnum.FETCH_HOTELS_ERROR,
    payload: string
}

export interface ClearHotelsData {
    type: HotelActionEnum.CLEAR_HOTELS_DATA,
}

export type HotelAction = FetchHotelsAction | FetchHotelsSuccessAction | FetchHotelsErrorAction | ClearHotelsData