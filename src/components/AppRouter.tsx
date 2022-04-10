import React, {FC} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteName} from "../routes";

const AppRouter: FC = () => {
    const isAuth = false
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