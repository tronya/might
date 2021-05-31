import React from 'react';
import './App.scss';
import {
    // BrowserRouter as Router, solution for GH-Pages
    Switch,
    Route
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

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    ));

function App() {
    return (
        <Provider store={store}>
            <Box
                display="flex"
                height='100%'
                boxSizing='border-box'
                padding={2}
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
        </Provider>
    );
}

export default App;