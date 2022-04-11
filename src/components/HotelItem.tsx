import React, {FC} from 'react';
import {Box, Rating, styled, Typography} from "@mui/material";
import houseImg from '../assets/images/hotelItemSvg.svg'
import heart from '../assets/images/HeartVector.svg'
import {IHotel, ILocation} from "../types/IHotel";


const HotelItemWrapper = styled(Box)`
  padding: 16px;
  padding-left: 0px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
`

interface HotelListProps {
    hotelId: number;
    location: ILocation;
    stars: number;
    hotelName: string;
    priceAvg: number
}

const HotelItem: FC<HotelListProps> = ({hotelName,priceAvg,stars}) => {
    return (
        <HotelItemWrapper>
            <img src={houseImg} alt=""/>
            <Box display='flex' justifyContent='space-between' sx={{width: "100%"}}>
                <Box sx={{ml: '24px'}}>
                    <Typography>
                        {hotelName}
                    </Typography>
                    <Typography variant='body2'>
                        7 июля 2020 - 1 день
                    </Typography>
                    <Rating name="read-only" defaultValue={stars} readOnly/>
                </Box>
                <Box display='flex' flexDirection='column' justifyContent='space-between'>
                    <img style={{width: "21px", height: '17px', alignSelf: 'flex-end'}} src={heart} alt=""/>
                    <Box display='flex' alignItems='center'>
                        <Typography variant='body2' sx={{mr: 1}}>
                            Price:
                        </Typography>
                        <Typography>
                            {priceAvg} ₽
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>

            </Box>
        </HotelItemWrapper>
    );
};

export default HotelItem;