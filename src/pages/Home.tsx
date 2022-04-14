import React, {FC, useEffect} from 'react';
import HomeNavBar from "../components/HomeNavBar";
import {Box, Grid, styled} from "@mui/material";
import HotelBlock from "../components/HotelBlock";
import HotelForm from "../components/HotelForm";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";
import FavoritesBlock from "../components/FavoritesBlock";
import {useDate} from "../hooks/useDate";

const HomeWrapper = styled(Box)`
  background-color: #f4f4f4;
  min-height: 100vh;
  padding: 32px;
  @media (max-width: 600px) {
    padding: 5px 0;
  }
`

const HomeContainer = styled(Box)`
  max-width: 1078px;
  padding: 0 15px;
  margin: auto;
  @media (max-width: 600px) {
    padding: 0 5px;;
  }
`

const Home: FC = () => {
    const hotelState = useTypeSelector(state => state.hotel)
    const {date, location, daysQuantity, favourites} = useTypeSelector(state => state.hotel)
    const {fetchHotels} = useActions()
    const [currentDate] = useDate(date)
    const favouritesQuantity = favourites.length

    useEffect(() => {
        fetchHotels({date, location, daysQuantity, favourites})
    }, [])

    return (
        <HomeWrapper>
            <HomeNavBar/>
            <HomeContainer>
                <Grid container spacing={{ xs: 1, md: 3 }}>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={{ xs: 1, md: 3 }}>
                            <Grid item xs={12}>
                                <HotelForm
                                    date={date}
                                    location={location}
                                    daysQuantity={daysQuantity}
                                    favourites={favourites}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{display: {xs: 'none', md: 'block'}}}>
                                <FavoritesBlock/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <HotelBlock
                                    favouritesQuantity={favouritesQuantity}
                                    currentDate={currentDate}
                                    hotelState={hotelState}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{display: {xs: 'block', md: 'none'}}}>
                                <FavoritesBlock/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </HomeContainer>
        </HomeWrapper>
    );
};

export default Home;