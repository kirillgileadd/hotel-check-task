import React, {FC} from 'react';
import HotelItem from "./HotelItem";
import {IHotel} from "../types/IHotel";
import {Box, Typography} from "@mui/material";

interface HotelListProps {
    hotels: IHotel[];
    isLoading: boolean;
}

//@ts-ignore
const HotelList: FC<HotelListProps> = ({hotels, isLoading}) => {
    return (
        !isLoading && hotels.length ?
            <Box>
                {hotels.map(hotel =>
                    <HotelItem key={hotel.hotelId} {...hotel}/>
                )}
            </Box>
            :
            <Typography>По данному запросу ничего не найдено!</Typography>
    );
};

export default HotelList;