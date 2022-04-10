import React, {FC} from 'react';
import {Box, Paper, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import backgroundImg from '../assets/images/authBg.png'
import {CustomButton} from "../UI/CustomButton";

const AuthBackground = styled(Box)`
  width: 100vw;
  height: 100vh;
  background-image: url("${backgroundImg}");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`



const Auth: FC = () => {
    return (
        <AuthBackground>
            <Paper sx={{p: '32px'}}>
                <Typography sx={{mb: '32px'}} textAlign='center' variant='h5' fontWeight='bold'>
                    Simple Hotel Check
                </Typography>
                <Box
                    sx={{
                        '& .MuiTextField-root': { mb: "32px" },
                    }}
                    component='form'
                >
                    <TextField
                        fullWidth
                        id="standard-search"
                        label="Логин"
                    />
                    <TextField
                        fullWidth
                        id="standard-search"
                        label="Пароль"
                    />
                    <CustomButton
                        variant='contained'
                        fullWidth
                        type='button'
                    >
                        Войти
                    </CustomButton>
                </Box>
            </Paper>
        </AuthBackground>
    );
};

export default Auth;