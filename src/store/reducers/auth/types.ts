import {IUser} from "../../../types/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;
}

export enum AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    LOGIN = 'LOGIN',
    LOGOUT = "LOGOUT"
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}
export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}
export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}
export interface SetIsLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export interface LoginAction {
    type: AuthActionEnum.LOGIN,
    payload: IUser
}

export interface LogoutAction {
    type: AuthActionEnum.LOGOUT,
}

export type AuthAction =
    SetAuthAction |
    SetUserAction |
    SetErrorAction |
    LoginAction |
    LogoutAction |
    SetIsLoadingAction