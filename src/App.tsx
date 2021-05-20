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

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <div className="wrapper">
                    <Switch>
                        <Route exact path="/">
                            <Intro/>
                        </Route>
                        <Route path="/stepper">
                            <StepperView/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
