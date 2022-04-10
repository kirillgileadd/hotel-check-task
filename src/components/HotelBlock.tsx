import React, {FC} from 'react';
import {Box, styled, Typography} from "@mui/material";
import ImagesCarousel from "./ImagesCarousel";
import HotelList from "./HotelList";
import {CustomPaper} from "../UI/CustomPaper";
import breadcrumbsArrow from '../assets/images/bradArrow.svg'

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

const HotelBlock: FC = () => {
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
            <Typography>
                Добавлено в Избранное: <strong>3</strong> отеля
            </Typography>
            <HotelList/>
        </CustomPaper>
    );
};

export default HotelBlock;