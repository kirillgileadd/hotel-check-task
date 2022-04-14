import React, {FC} from 'react';
import {Box, styled, Typography} from "@mui/material";
import ImagesCarousel from "./ImagesCarousel";
import HotelList from "./HotelList";
import {CustomPaper} from "../UI/CustomPaper";
import breadcrumbsArrow from '../assets/images/bradArrow.svg'
import Loader from "./Loader";
import {HotelState} from "../store/reducers/hotel/types";
import {useDeclination} from "../hooks/useDeclination";

const BreadcrumbsItem = styled(Typography)`
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  position: relative;
  padding-right: 52px;

  &:last-child {
    &:after {
      display: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    right: 20px;
    top: 10px;
    width: 10.67px;
    height: 20.33px;
    background-image: url("${breadcrumbsArrow}");
  }
`

const HotelListInner = styled(Box)`
  height: 563px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #41522E;
  }

  &::-webkit-scrollbar-track {
    background-color: #E7E7E7;
  }
`

interface HotelBlockProps {
    hotelState: HotelState;
    currentDate: string;
    favouritesQuantity: number;
}

const HotelBlock: FC<HotelBlockProps> =
    (
        {
            hotelState: {
                hotels,
                isLoading,
                location
            },
            currentDate,
            favouritesQuantity,
        }) => {

        const hotelDeclination = useDeclination(favouritesQuantity, ['отель', "отеля", "отелей"])

        return (
            <CustomPaper>
                <Box
                    sx={{mb: "28px"}}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Box display='flex'>
                        <BreadcrumbsItem variant='h4'>
                            Отели
                        </BreadcrumbsItem>
                        <BreadcrumbsItem variant='h4' sx={{maxWidth: "320px"}} noWrap>
                            {location}
                        </BreadcrumbsItem>
                    </Box>
                    <Typography fontSize='24px' lineHeight='28px'>
                        {currentDate}
                    </Typography>
                </Box>
                <Box sx={{mb: '28px'}}>
                    <ImagesCarousel/>
                </Box>
                <Typography sx={{mb: "12px"}}>
                    Добавлено в Избранное: <strong>{favouritesQuantity}</strong> {hotelDeclination}
                </Typography>
                <HotelListInner>
                    {isLoading ? <Loader/> :
                        <HotelList
                            isLoading={isLoading}
                            hotels={hotels}
                        />
                    }
                </HotelListInner>
            </CustomPaper>
        );
    };

export default HotelBlock;