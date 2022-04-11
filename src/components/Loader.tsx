import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";

const Loader:FC = () => {
    return (
        <Box sx={{height: '100%'}} display='flex' justifyContent='center' alignItems='center'>
            <CircularProgress />
        </Box>
    );
};

export default Loader;