import React, {FC} from 'react';
import {Box, Rating, styled, Typography} from "@mui/material";
import houseImg from '../assets/images/hotelItemSvg.svg'
import heart from '../assets/images/HeartVector.svg'
import heartActive from '../assets/images/HeartVectorActive.svg'
import {IHotel, ILocation} from "../types/IHotel";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDate} from "../hooks/useDate";
import {useActions} from "../hooks/useActions";


const HotelItemWrapper = styled(Box)`
  padding: 16px;
  padding-left: 0px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
`

// interface deleteFavouriteItem {
//     hotelId: number;
//     location: ILocation;
//     stars: number;
//     hotelName: string;
//     priceAvg: number,
//     favourite?: boolean;
//     noImg?:
// }

const HotelItem: FC<IHotel> = ({hotelName, priceAvg, stars, hotelId, location, favourite, noImg}) => {
    const {date, daysQuantity} = useTypeSelector(state => state.hotel)
    const {addToFavourites, deleteFromFavourites} = useActions()
    const [currentDate, currentDaysQuantity] = useDate(date, daysQuantity)

    const addToFavouritesHandler = () => {
        let item: IHotel = {
            hotelId,
            stars,
            hotelName,
            priceAvg,
            location,
            favourite: true
        }
        addToFavourites(item)
    }
    const deleteFavouriteItem = () => {
        let item: IHotel = {
            hotelId,
            stars,
            hotelName,
            priceAvg,
            location,
            favourite: false
        }
        deleteFromFavourites(item)
    }

    return (
        <HotelItemWrapper>
            {!noImg && <img style={{marginRight: '24px'}} src={houseImg} alt=""/>}
            <Box display='flex' justifyContent='space-between' sx={{width: "100%"}}>
                <Box sx={{ maxWidth: '380px'}}>
                    <Typography>
                        {hotelName}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {currentDate} - {currentDaysQuantity}
                    </Typography>
                    <Rating sx={{color: '#CDBC1E'}} name="read-only" defaultValue={stars} readOnly/>
                </Box>
                <Box display='flex' flexDirection='column' justifyContent='space-between'>
                    {
                        favourite ?
                            <Box alignSelf='flex-end' onClick={deleteFavouriteItem}>
                                <img
                                    style={{width: "21px", height: '17px'}} src={heartActive}
                                />
                            </Box>
                            :
                            <Box alignSelf='flex-end' onClick={addToFavouritesHandler}>
                                <img
                                    style={{width: "21px", height: '17px'}} src={heart}
                                />
                            </Box>
                    }

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