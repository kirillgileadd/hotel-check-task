import {IHotel} from "../../../types/IHotel";
import {ICarouselItem} from "../../../types/ICarouselItem";

export interface HotelState {
    hotels: IHotel[];
    isLoading: false;
    error: string;
    carousel: ICarouselItem[]
}