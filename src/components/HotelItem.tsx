import React, {FC} from 'react';
import {Box, Rating, styled, Typography} from "@mui/material";
import houseImg from '../assets/images/hotelItemSvg.svg'
import heart from '../assets/images/HeartVector.svg'
import {ILocation} from "../types/IHotel";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDate} from "../hooks/useDate";


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
    priceAvg: number,
    favorite?: boolean;
}

const HotelItem: FC<HotelListProps> = ({hotelName, priceAvg, stars}) => {
    const {date, daysQuantity} = useTypeSelector(state => state.hotel)
    const [currentDate, currentDaysQuantity] = useDate(date, daysQuantity)

    return (
        <HotelItemWrapper>
            <img src={houseImg} alt=""/>
            <Box display='flex' justifyContent='space-between' sx={{width: "100%"}}>
                <Box sx={{ml: '24px', maxWidth: '380px'}}>
                    <Typography>
                        {hotelName}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {currentDate} - {currentDaysQuantity}
                    </Typography>
                    <Rating sx={{color: '#CDBC1E'}} name="read-only" defaultValue={stars} readOnly/>
                </Box>
                <Box display='flex' flexDirection='column' justifyContent='space-between'>
                    <img
                        style={{width: "21px", height: '17px', alignSelf: 'flex-end'}}
                        src={heart} alt=""
                    />
                    <Box display='flex' alignItems='center'>
                        <Typography
                            variant='body2'
                            sx={{mr: '12px'}}
                            color='text.secondary'
                            fontWeight={300}
                            fontSize='11px'
                        >
                            Price:
                        </Typography>
                        <Typography>
                            {priceAvg}₽
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