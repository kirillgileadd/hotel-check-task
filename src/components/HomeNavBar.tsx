import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import exitIcon from '../assets/images/exitIcon.svg'
import {useActions} from "../hooks/useActions";

const HomeNavBar:FC = () => {
    const {logoutAction} = useActions()
    return (
        <Box display='flex' sx={{p: '16px 32px'}}>
            <Typography variant='h5' fontWeight='500'>
                Simple Hotel Check
            </Typography>
            <Box
                display='flex'
                alignItems='center'
                sx={{ml: 'auto', cursor: "pointer"}}
                onClick={logoutAction}
            >
                <Typography sx={{mr: '12px'}}>
                    Выйти
                </Typography>
                <img src={exitIcon} alt=""/>
            </Box>
        </Box>
    );
};

export default HomeNavBar;