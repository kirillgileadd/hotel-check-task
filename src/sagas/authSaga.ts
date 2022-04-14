import {call, put, takeEvery, StrictEffect} from "redux-saga/effects"
import {AuthActionEnum, LoginAction} from "../store/reducers/auth/types";
import {AuthActionCreators} from "../store/action-creators/auth";
import UserService from "../api/UserService";
import {IUser} from "../types/IUser";
import {AxiosResponse} from "axios";

function* login(action: LoginAction): Generator<StrictEffect, void, AxiosResponse<IUser[]>> {
    try {
        const {payload: {email, password}} = action
        yield put(AuthActionCreators.setIsLoading(true))
        const response = yield call(UserService.getUsers)
        const mockUser = response.data.find((user: IUser) => user.email === email && user.password === password)
        if(mockUser) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('email', email);
            yield put(AuthActionCreators.setUser( {email: email, password: password}))
            yield put(AuthActionCreators.setIsAuth(true))
        } else {
            yield put(AuthActionCreators.setError('Неправильный логин или пароль!'))
        }
        yield put(AuthActionCreators.setIsLoading(false))
    } catch (err) {
        yield put(AuthActionCreators.setError('something error'))
    }
}

function* logout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('email')
}

export function* authWatcher() {
    yield takeEvery(AuthActionEnum.LOGIN, login)
    yield takeEvery(AuthActionEnum.LOGOUT, logout)
}