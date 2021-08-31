import React, {useState} from 'react';
import './App.scss';
import {
    // BrowserRouter as Router, solution for GH-Pages
    Route, Switch as RouterSwitcher
} from "react-router-dom";
import {HashRouter as Router} from 'react-router-dom'
import {Intro} from "./views/Intro/Intro";
import StepperView from "./views/stepper/Stepper";
import {Box} from "@material-ui/core";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from './store/reducer';
import {TableView} from "./views/table/Table";
import TargetView from "./views/target/target";

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);

function App() {
    store.subscribe(() => {
        localStorage.setItem('store', JSON.stringify(store.getState()));
    });

    return (
        <Provider store={store}>
            <Router>
                <Box
                    display="flex"
                    height='100%'
                    boxSizing='border-box'
                    padding={2}
                    maxWidth={640}
                    margin="auto"
                    p={{xs: 2, sm: 3, md: 4}}
                >
                    <Box
                        className="wrapper"
                    >
                        <RouterSwitcher>
                            <Route exact path="/">
                                <Intro/>
                            </Route>
                            <Route path="/stepper/:id">
                                <StepperView/>
                            </Route>
                            <Route path="/table">
                                <TableView/>
                            </Route>
                            <Route path="/target">
                                <TargetView/>
                            </Route>
                        </RouterSwitcher>
                    </Box>

                </Box>
            </Router>
        </Provider>
    );
}

export default App;
