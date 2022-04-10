import React, {FC} from 'react';
import {Box, Paper, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import backgroundImg from '../assets/images/authBg.png'
import {CustomButton} from "../UI/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, Navigate} from 'react-router-dom'
import {AuthActionCreators} from "../store/action-creators/auth";
import {RouteName} from "../routes";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

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
    const {isAuth} = useTypeSelector(state => state.auth)
    const {loginAction} = useActions()

    if (isAuth) {
        return <Navigate to={RouteName.HOME}/>
    }

    return (
        <AuthBackground>
            <Paper sx={{p: '32px'}}>
                <Typography sx={{mb: '32px'}} textAlign='center' variant='h5' fontWeight='bold'>
                    Simple Hotel Check
                </Typography>
                <Box
                    sx={{
                        '& .MuiTextField-root': {mb: "32px"},
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
                        onClick={() => loginAction({username: 'user', password: '123'})}
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