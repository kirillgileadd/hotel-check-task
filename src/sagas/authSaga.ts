import {call, put, takeEvery} from "redux-saga/effects"
import {AuthActionEnum, LoginAction} from "../store/reducers/auth/types";
import {AuthActionCreators} from "../store/action-creators/auth";
import UserService from "../api/UserService";
import {IUser} from "../types/IUser";

function* login(action: LoginAction) {
    try {
        const {payload: {email, password}} = action
        yield put(AuthActionCreators.setIsLoading(true))
        // @ts-ignore
        const response = yield call(UserService.getUsers)
        const mockUser = response.data.find((user: IUser) => user.email === email && user.password === password)
        if(mockUser) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('email', email);
            yield put(AuthActionCreators.setUser( {email: email, password: password}))
            yield put(AuthActionCreators.setIsAuth(true))
        } else {
            yield put(AuthActionCreators.setError('Не правильный логин или пароль!'))
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
    //@ts-ignore
    yield takeEvery(AuthActionEnum.LOGIN, login)
    yield takeEvery(AuthActionEnum.LOGOUT, logout)
}