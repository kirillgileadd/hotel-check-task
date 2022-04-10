import Auth from "../pages/Auth";
import Home from "../pages/Home";

export interface IRoute {
    path: string;
    element: JSX.Element
}

export enum RouteName {
    LOGIN = '/auth',
    HOME = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteName.LOGIN, element: <Auth/>}
]

export const privateRoutes: IRoute[] = [
    {path: RouteName.HOME, element: <Home/>}
]