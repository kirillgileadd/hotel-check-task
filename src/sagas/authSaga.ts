import {call, put, takeEvery} from "redux-saga/effects"
import {AuthActionEnum, LoginAction} from "../store/reducers/auth/types";
import {AuthActionCreators} from "../store/action-creators/auth";
import UserService from "../api/UserService";
import {IUser} from "../types/IUser";

function* fetchUserWorker(action: LoginAction) {
    try {
        const {payload: {username, password}} = action
        yield put(AuthActionCreators.setIsLoading(true))
        // @ts-ignore
        const response = yield call(UserService.getUsers)
        const mockUser = response.data.find((user: IUser) => user.username === username && user.password === password)
        if(mockUser) {
            localStorage.setItem('auth', 'true')
            localStorage.setItem('username', 'user');
            yield put(AuthActionCreators.setUser( {username: username, password: password}))
            yield put(AuthActionCreators.setIsAuth(true))
        } else {
            yield put(AuthActionCreators.setError('Не правильный логин или пароль!'))
        }
        yield put(AuthActionCreators.setIsLoading(false))
    } catch (err) {
        yield put(AuthActionCreators.setError('somithing error'))
    }
}

export function* authWatcher() {
    //@ts-ignore
    yield takeEvery(AuthActionEnum.LOGIN, fetchUserWorker)
}