import React, {FC, useEffect} from 'react';
import HomeNavBar from "../components/HomeNavBar";
import {Box, Grid, styled} from "@mui/material";
import {CustomPaper} from "../UI/CustomPaper";
import HotelBlock from "../components/HotelBlock";
import HotelForm from "../components/HotelForm";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";
import FavoritesBlock from "../components/FavoritesBlock";
import {useDate} from "../hooks/useDate";

const HomeWrapper = styled(Box)`
  background-color: #f4f4f4;
  //width: 100vw;
  min-height: calc(100vh - 64px);
  padding: 32px;
`

const HomeContainer = styled(Box)`
  max-width: 1078px;
  padding: 0 15px;
  margin: auto;
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
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <HotelForm
                                    date={date}
                                    location={location}
                                    daysQuantity={daysQuantity}
                                    favourites={favourites}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FavoritesBlock/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <HotelBlock
                            favouritesQuantity={favouritesQuantity}
                            currentDate={currentDate}
                            hotelState={hotelState}
                        />
                    </Grid>
                </Grid>
            </HomeContainer>
        </HomeWrapper>
    );
};

export default Home;