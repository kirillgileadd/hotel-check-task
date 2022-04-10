import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteName} from "../routes";
import {useTypeSelector} from "../hooks/useTypeSelector";

const AppRouter: FC = () => {
    const {isAuth} = useTypeSelector(state => state.auth)

    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)}
                <Route path='*' element={<Navigate to={RouteName.HOME}/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>
                )}
                <Route path='*' element={<Navigate to={RouteName.LOGIN}/>}/>
            </Routes>
    );
};

export default AppRouter;