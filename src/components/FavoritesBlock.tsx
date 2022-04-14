import React, {FC} from 'react';
import {CustomPaper} from "../UI/CustomPaper";
import {Box, styled, ToggleButtonGroup, Typography} from "@mui/material";
import {CustomToggleButton} from "../UI/CustomToggleButton";
import {useTypeSelector} from "../hooks/useTypeSelector";
import HotelItem from "./HotelItem";
import {useSortedItems} from "../hooks/useSort";

const FavoritesTitle = styled(Typography)`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`

const FavouriteListInner = styled(Box)`
  height: 347px;
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

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
    marginBottom: "32px",
    '& .MuiToggleButtonGroup-grouped': {
        backgroundColor: 'transparent',
        opacity: 0.4,
        color: "#41522E",
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&.Mui-selected': {
            opacity: 1,
        },
        '&:not(:first-of-type)': {
            border: '1px solid #41522E',
            borderRadius: "4px",
        },
        '&:first-of-type': {
            border: '1px solid #41522E',
            borderRadius: "4px",
        },
    },
}));


const FavoritesBlock: FC = () => {
    const [alignment, setAlignment] = React.useState<'priceAvg' | 'stars'>('stars');
    const {favourites} = useTypeSelector(state => state.hotel)
    const sortedFavouritesItems = useSortedItems(favourites, alignment)

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: 'priceAvg' | 'stars',
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    return (
        <CustomPaper>
            <FavoritesTitle variant='h4' mb={'32px'}>
                Избранное
            </FavoritesTitle>
            <Box>
                <StyledToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <CustomToggleButton sx={{mr: 1}} value={"stars"}>Рейтинг</CustomToggleButton>
                    <CustomToggleButton value={"priceAvg"}>Цена</CustomToggleButton>
                </StyledToggleButtonGroup>
            </Box>
            <FavouriteListInner>
                {sortedFavouritesItems.length ?
                    sortedFavouritesItems.map(hotel => <HotelItem key={`${hotel.hotelId} + ${hotel.priceAvg}`} {...hotel}/>)
                    :
                    <Typography>Список избранного пуст</Typography>
                }
            </FavouriteListInner>
        </CustomPaper>
    );
};

export default FavoritesBlock;