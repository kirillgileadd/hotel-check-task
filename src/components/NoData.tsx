import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";

const NoData:FC = () => {
    return (
        <Box sx={{height: '100%'}} display='flex' justifyContent='center' alignItems='center'>
            <Box>
                <Typography variant='h5' textAlign='center' >
                    По вашему запросу ничего не найдено ☹️
                </Typography>
                <Typography variant='subtitle1' textAlign='center' >
                    (попробуйте изменить параметры поиска)
                </Typography>
            </Box>
        </Box>
    );
};

export default NoData;