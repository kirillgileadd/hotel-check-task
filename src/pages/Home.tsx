import React, {FC, useEffect} from 'react';
import HomeNavBar from "../components/HomeNavBar";
import {Box, Grid, styled} from "@mui/material";
import {CustomPaper} from "../UI/CustomPaper";
import HotelBlock from "../components/HotelBlock";
import HotelForm from "../components/HotelForm";
import {useActions} from "../hooks/useActions";
import {useTypeSelector} from "../hooks/useTypeSelector";

const HomeWrapper = styled(Box)`
  background-color: #f4f4f4;
  width: 100vw;
  height: 100vh;
`

const HomeContainer = styled(Box)`
  max-width: 1078px;
  padding: 0 15px;
  margin: auto;
`

const Home: FC = () => {
    const {fetchHotels} = useActions()
    const {date, daysQuantity, location} = useTypeSelector(state => state.hotel)

    useEffect(() => {
        fetchHotels({date, daysQuantity, location})
    }, [])

    return (
        <HomeWrapper>
            <HomeNavBar/>
            <HomeContainer>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <HotelForm/>
                            </Grid>
                            <Grid item xs={12}>
                                <CustomPaper>Favorites</CustomPaper>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={8}>
                        <HotelBlock/>
                    </Grid>
                </Grid>
            </HomeContainer>
        </HomeWrapper>
    );
};

export default Home;