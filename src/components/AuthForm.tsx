import React, {FC, useEffect} from 'react';
import {Box, styled, TextField, Typography} from "@mui/material";
import {CustomButton} from "../UI/CustomButton";
import {IUser} from "../types/IUser";
import {SubmitHandler, useForm} from "react-hook-form";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const HelpText = styled(Typography)(({theme}) => ({
    color: theme.palette.success.main,
    fontWeight: 500,
    marginLeft: "5px"

}))

interface AuthFormProps {
    loginAction: (user: IUser) => void;
}

const schema = yup.object({
    email: yup.string().email('Некорректный Имейл').required('Введите Имейл'),
    password: yup.string().matches(
        /[A-Za-z0-9]/,
        'Пароль может содержать только латинские символы и цифры.'
    ).min(8, 'Слишком короткий пароль, мин 8 символов').required('Введите пароль'),
});

const AuthForm: FC<AuthFormProps> = ({loginAction}) => {
    const {error, isLoading} = useTypeSelector(state => state.auth)
    const {setError} = useActions()

    const {register, handleSubmit, watch, formState: {errors}} = useForm<IUser>({
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IUser> = (data) => {
        loginAction({email: data.email, password: data.password})
    }

    useEffect(() => {
        return () => {
            setError('')
        }
    }, [])

    return (
        <Box
            sx={{
                width: '450px',
                position: "relative",
                '& .MuiTypography-root': {mb: "28px"},
            }}
            component='form'
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                fullWidth
                {...register("email")}
                id="standard-search"
                label="Имейл"
                name='email'
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <HelpText>Email: user@gmail.com</HelpText>
            <TextField
                fullWidth
                {...register("password")}
                id="standard-search"
                label="Пароль"
                name='password'
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <HelpText>Password: 1234567a</HelpText>
            <Box>
                {error && <Typography
                    sx={{position: "absolute", bottom: "16px", left: "5px", color: 'error.main'}}>{error}</Typography>}
            </Box>
            <CustomButton
                type='submit'
                variant='contained'
                fullWidth
                disabled={isLoading}
            >
                Войти
            </CustomButton>
        </Box>
    );
};

export default AuthForm;