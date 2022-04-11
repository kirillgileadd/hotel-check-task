import {HotelAction, HotelActionEnum, HotelState} from "./types";
import carouselImage1 from "../../../assets/images/carousel/img1.png";
import carouselImage2 from "../../../assets/images/carousel/img2.png";
import carouselImage3 from "../../../assets/images/carousel/img3.png";
import carouselImage4 from "../../../assets/images/carousel/img4.png";

const initialState: HotelState = {
    carousel: [
        {src: carouselImage1, id: 1},
        {src: carouselImage2, id: 2},
        {src: carouselImage3, id: 3},
        {src: carouselImage4, id: 4},
        {src: carouselImage2, id: 5},
        {src: carouselImage1, id: 6},
        {src: carouselImage3, id: 7},
        {src: carouselImage4, id: 8},
    ],
    hotels: [],
    error: '',
    isLoading: false,
    location: "Moscow",
    date: new Date(),
    daysQuantity: 1
}

export default function hotelReducer(state = initialState, action: HotelAction): HotelState {
    switch (action.type) {
        case HotelActionEnum.FETCH_HOTELS:
            return {
                ...state,
                isLoading: true,
                location: action.payload.location,
                date: action.payload.date,
                daysQuantity: action.payload.daysQuantity
            }
        case HotelActionEnum.FETCH_HOTELS_SUCCESS:
            return {...state, hotels: action.payload, isLoading: false}
        case HotelActionEnum.FETCH_HOTELS_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}