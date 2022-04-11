import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyles, ThemeProvider} from "@mui/material";
import {theme} from "./theme";
import {Provider} from "react-redux";
import {store} from "./store";

const inputGlobalStyles = <GlobalStyles styles={{
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box"
    },
}} />

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {inputGlobalStyles}
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
