import React, {FC} from 'react';
import {Box, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";
import backgroundImg from '../assets/images/authBg.png'
import {Navigate} from 'react-router-dom'
import {RouteName} from "../routes";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";
import AuthForm from "../components/AuthForm";

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
                <AuthForm loginAction={loginAction}/>
            </Paper>
        </AuthBackground>
    );
};

export default Auth;