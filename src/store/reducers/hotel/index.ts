import {HotelState} from "./types";
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
        {src: carouselImage2, id: 4},
        {src: carouselImage1, id: 4},
        {src: carouselImage3, id: 4},
        {src: carouselImage4, id: 4},
    ],
    hotels: [
        {hotelId: 1, hotelName: 'Best Hotel', location: {name: 'Moscow', country: 'Russia'}, stars: 5, priceAvg: 6000},
        {hotelId: 2, hotelName: 'Best Hotel1', location: {name: 'Piter', country: 'Russia'}, stars: 5, priceAvg: 3000},
        {hotelId: 3, hotelName: 'Best Hotel2', location: {name: 'Kaluga', country: 'Russia'}, stars: 4, priceAvg: 7000},
        {hotelId: 4, hotelName: 'Best Hotel3', location: {name: 'Krim', country: 'Russia'}, stars: 5, priceAvg: 12000},
    ],
    error: '',
    isLoading: false,
}

export default function hotelReducer(state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}