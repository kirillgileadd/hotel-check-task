import {IUser} from "../../types/IUser";
import {
    AuthActionEnum,
    LoginAction,
    LogoutAction,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction
} from "../reducers/auth/types";

export const AuthActionCreators = {
    loginAction: (user: IUser): LoginAction => ({type: AuthActionEnum.LOGIN, payload: user}),
    logoutAction: (): LogoutAction => ({type: AuthActionEnum.LOGOUT}),
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
}