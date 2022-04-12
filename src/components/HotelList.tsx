import React, {FC} from 'react';
import HotelItem from "./HotelItem";
import {IHotel} from "../types/IHotel";
import {Box} from "@mui/material";
import NoData from "./NoData";

interface HotelListProps {
    hotels: IHotel[];
    isLoading: boolean;
}

const HotelList: FC<HotelListProps> = ({hotels, isLoading}) => {
    return (
        !isLoading && hotels.length
            ?
            <Box>
                {hotels.map(hotel =>
                    <HotelItem key={hotel.hotelId} {...hotel}/>
                )}
            </Box>
            :
            <NoData/>
    );
};

export default HotelList;