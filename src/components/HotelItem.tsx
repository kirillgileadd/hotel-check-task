import React, {FC} from 'react';
import {Box, Rating, styled, Typography} from "@mui/material";
import heart from '../assets/images/HeartVector.svg'
import heartActive from '../assets/images/HeartVectorActive.svg'
import {IHotel} from "../types/IHotel";
import {useDate} from "../hooks/useDate";
import {useActions} from "../hooks/useActions";
import {useDeclination} from "../hooks/useDeclination";

const HotelItemWrapper = styled(Box)`
  padding: 16px;
  padding-left: 0px;
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(135, 135, 135, 0.2);
`

const FavourButton = styled("img")`
  width: 21px;
  height: 18px;
  cursor: pointer;
`

const HotelItem: FC<IHotel> =
    ({
         hotelName,
         priceAvg,
         stars,
         hotelId,
         location,
         favourite,
         noImg,
         checkIn,
        daysQuantity
     }) => {
        const {addToFavourites, deleteFromFavourites} = useActions()
        const [currentDate] = useDate(checkIn)
        const currentDaysQuantity = useDeclination(daysQuantity, ['день', 'дня', 'дней'])

        const addToFavouritesHandler = () => {
            let item: IHotel = {
                hotelId,
                stars,
                hotelName,
                priceAvg,
                location,
                checkIn,
                daysQuantity,
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
                checkIn,
                daysQuantity,
                favourite: false
            }
            deleteFromFavourites(item)
        }

        return (
            <HotelItemWrapper>
                {!noImg &&
                    <svg style={{marginRight: "24px"}} width="64" height="64" viewBox="0 0 64 64" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="32" fill="#41522E" fill-opacity="0.05"/>
                        <g clip-path="url(#clip0_2219_157)">
                            <path
                                d="M29.9359 14.335C29.1648 15.0605 26.0586 17.9801 23.0371 20.8213C20.0129 23.6596 17.1172 26.3847 16.5977 26.8722C16.0781 27.3598 15.3398 28.0534 14.957 28.4104C14.5742 28.7702 14.2023 29.1214 14.1312 29.1939L14 29.3245L14.9023 30.3983C15.3973 30.9875 15.8211 31.4692 15.8402 31.4692C15.8621 31.4663 17.4891 29.9572 19.4578 28.1143C29.7883 18.4444 31.4562 16.8889 31.4754 16.8947C31.4863 16.9005 32.7605 18.0933 34.3082 19.5472C35.8531 21.0012 39.3449 24.2806 42.0629 26.8374C44.7809 29.3942 47.0176 31.4866 47.0312 31.4866C47.0449 31.4866 47.0641 31.4721 47.0723 31.4576C47.0859 31.4344 47.1023 31.4373 47.1297 31.4605C47.1816 31.504 47.1023 31.5911 48.0566 30.4419C48.475 29.9398 48.8578 29.4813 48.9098 29.4232L49.0027 29.3187L46.7113 27.1741C45.4508 25.9929 42.4895 23.2184 40.127 21.0099C37.7672 18.7985 34.8797 16.0966 33.7094 15.0025L31.5875 13.0145H31.4645H31.3414L29.9359 14.335Z"
                                fill="#41522E"/>
                            <path
                                d="M29.6051 21.0071C28.6098 21.9416 25.859 24.5274 23.4938 26.7504L19.1953 30.7931L19.2008 39.1281L19.209 47.4631L19.2691 47.5821C19.302 47.6489 19.3812 47.7504 19.4441 47.8056C19.6711 48.0145 19.3785 48 23.7125 48H27.6172L27.6227 44.3056C27.6309 40.6315 27.6309 40.614 27.6883 40.4834C27.7594 40.3151 27.8961 40.17 28.0547 40.0946C28.1777 40.0336 28.1969 40.0336 31.4016 40.0249C34.9672 40.0162 34.8141 40.0104 35.0164 40.199C35.1586 40.3325 35.2379 40.4805 35.2707 40.6721C35.2926 40.7882 35.3008 41.9897 35.3008 44.4217V48L39.3586 47.9942L43.4191 47.9855L43.5012 47.9014C43.5477 47.8549 43.6242 47.7185 43.6734 47.5966L43.7637 47.3761L43.7691 39.0759L43.7746 30.7757L37.6496 25.044C34.177 21.7936 31.5 19.3093 31.4699 19.3093C31.4344 19.3064 30.7945 19.8897 29.6051 21.0071Z"
                                fill="#41522E"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2219_157">
                                <rect width="35" height="35" fill="white" transform="translate(14 13)"/>
                            </clipPath>
                        </defs>
                    </svg>
                }
                <Box display='flex' justifyContent='space-between' sx={{width: "100%"}}>
                    <Box sx={{maxWidth: '380px'}}>
                        <Typography>
                            {hotelName}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {currentDate} - {`${daysQuantity} ${currentDaysQuantity}`}
                        </Typography>
                        <Rating sx={{color: '#CDBC1E'}} name="read-only" defaultValue={stars} readOnly/>
                    </Box>
                    <Box display='flex' flexDirection='column' justifyContent='space-between'>
                        {
                            favourite ?
                                <Box alignSelf='flex-end' onClick={deleteFavouriteItem}>
                                    <FavourButton src={heartActive}/>
                                </Box>
                                :
                                <Box alignSelf='flex-end' onClick={addToFavouritesHandler}>
                                    <FavourButton src={heart}/>
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