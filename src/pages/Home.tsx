import React, {FC} from 'react';
import HomeNavBar from "../components/HomeNavBar";
import {Box, Grid, styled} from "@mui/material";
import {CustomPaper} from "../UI/CustomPaper";
import HotelBlock from "../components/HotelBlock";

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
    return (
        <HomeWrapper>
            <HomeNavBar/>
            <HomeContainer>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <CustomPaper>Search Form</CustomPaper>
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