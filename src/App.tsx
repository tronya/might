import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Header} from "./components/header/header";
import {Intro} from "./views/Intro/Intro";
import StepperView from "./views/stepper/Stepper";
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {orange} from '@material-ui/core/colors';
import {Box} from "@material-ui/core";

const outerTheme = createMuiTheme({
    palette: {
        background: {
            paper: '#2a2a3a'
        },
        text: {
            primary: '#fff',
            secondary: '#fff',
        },
        primary: {
            main: '#2F80ED',
            contrastText: '#fff',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={outerTheme}>
            <Box
                color="primary.contrastText"
                bgcolor="background.paper"
                display="flex"
                height='100%'
                boxSizing='border-box'
                p={{xs: 2, sm: 3, md: 4}}
            >
                <Router>
                    <Box
                        className="wrapper"
                    >
                        <Switch>
                            <Route exact path="/">
                                <Intro/>
                            </Route>
                            <Route path="/stepper">
                                <StepperView/>
                            </Route>
                        </Switch>
                    </Box>
                </Router>
            </Box>
        </ThemeProvider>
    );
}

export default App;
