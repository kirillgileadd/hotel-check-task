import React, {FC} from 'react';
import HotelItem from "./HotelItem";
import {IHotel} from "../types/IHotel";
import {Box} from "@mui/material";

interface HotelListProps {
    hotels: IHotel[]
}

const HotelList:FC<HotelListProps> = ({hotels}) => {
    return (
        <Box>
            {hotels.map(hotel =>
                <HotelItem key={hotel.hotelId} {...hotel}/>
            )}
        </Box>
    );
};

export default HotelList;