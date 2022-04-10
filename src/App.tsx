import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {IUser} from "./types/IUser";
import {useActions} from "./hooks/useActions";

function App() {
    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setUser({email: localStorage.getItem('email' ?? '')} as IUser)
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
