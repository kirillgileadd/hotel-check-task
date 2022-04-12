import {HotelAction, HotelActionEnum, HotelState} from "./types";
import carouselImage1 from "../../../assets/images/carousel/img1.png";
import carouselImage2 from "../../../assets/images/carousel/img2.png";
import carouselImage3 from "../../../assets/images/carousel/img3.png";
import carouselImage4 from "../../../assets/images/carousel/img4.png";
import {IHotel} from "../../../types/IHotel";

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
    favourites: [],
    error: '',
    isLoading: false,
    location: "Москва",
    date: new Date(),
    daysQuantity: 1
}

const changeFavourValue = (hotels: IHotel[], hotel: IHotel) => {
    return hotels.map(item => {
        if(item.hotelId === hotel.hotelId) {
            return {
                ...item,
                favourite: hotel.favourite
            }
        }
        return item
    })
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
            return {
                ...state,
                hotels: action.payload.map((hotel) => {
                    return {
                        ...hotel,
                        favourite: false
                    }
                }),
                isLoading: false,
            }
        case HotelActionEnum.ADD_TO_FAVOURITES:
            action.payload.noImg = true
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
                hotels: changeFavourValue(state.hotels, action.payload),
            }
        case HotelActionEnum.DELETE_FROM_FAVOURITES:
            return {
                ...state,
                favourites: state.favourites.filter(i => i.hotelId !== action.payload.hotelId),
                hotels: changeFavourValue(state.hotels, action.payload),
            }
        case HotelActionEnum.FETCH_HOTELS_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case HotelActionEnum.CLEAR_HOTELS_DATA:
            return {...state, hotels: [], isLoading: false}
        default:
            return state;
    }
}