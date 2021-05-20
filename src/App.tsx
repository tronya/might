import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {Header} from "./components/header/header";

function App() {
    return (
        <Router>
            <Header/>
            <div className="wrapper">
                <Switch>
                    <Route exact path="/">
                        <h1>Home</h1>
                    </Route>
                    <Route path="/about">
                        <h1>About</h1>
                    </Route>
                    <Route path="/dashboard">
                        <h1>Dash</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
