import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {defaultTheme} from "./theme";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <MuiThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <App/>
        </MuiThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();