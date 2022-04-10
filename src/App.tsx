import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {IUser} from "./types/IUser";
import {useActions} from "./hooks/useActions";

function App() {
    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username' ?? '')} as IUser)
            setIsAuth(true)
        }
    }, [])

    return (
        <div>
            <AppRouter/>
        </div>
    );
}

export default App;
