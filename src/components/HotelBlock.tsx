import React, {FC, useEffect} from 'react';
import {Box, CircularProgress, styled, Typography} from "@mui/material";
import ImagesCarousel from "./ImagesCarousel";
import HotelList from "./HotelList";
import {CustomPaper} from "../UI/CustomPaper";
import breadcrumbsArrow from '../assets/images/bradArrow.svg'
import {useTypeSelector} from "../hooks/useTypeSelector";
import Loader from "./Loader";
import {useActions} from "../hooks/useActions";
import dayjs from "dayjs";
import {HotelState} from "../store/reducers/hotel/types";

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
  height: calc(100vh - 435px);
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
    hotelState: HotelState
}

const HotelBlock: FC<HotelBlockProps> = ({hotelState: {hotels, date, isLoading, location, daysQuantity}}) => {
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
                    <BreadcrumbsItem variant='h4'>
                        Москва
                    </BreadcrumbsItem>
                </Box>
                <Typography fontSize='24px' lineHeight='28px'>
                    07 июля 2020
                </Typography>
            </Box>
            <Box sx={{mb: '28px'}}>
                <ImagesCarousel/>
            </Box>
            <Typography sx={{mb: "12px"}}>
                Добавлено в Избранное: <strong>3</strong> отеля
            </Typography>
            <HotelListInner>
                {isLoading ? <Loader/> : <HotelList hotels={hotels}/>}
            </HotelListInner>
        </CustomPaper>
    );
};

export default HotelBlock;