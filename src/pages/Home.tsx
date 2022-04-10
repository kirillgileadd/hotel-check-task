import React, {FC} from 'react';
import HomeNavBar from "../components/HomeNavBar";
import {Box, styled} from "@mui/material";

const HomeWrapper = styled(Box)`
  background-color: #f4f4f4;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

const Home:FC = () => {
    return (
        <HomeWrapper>
            <HomeNavBar/>
            Home
        </HomeWrapper>
    );
};

export default Home;