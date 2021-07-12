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
import {Box, SwipeableDrawer} from "@material-ui/core";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from './store/reducer';
import {TableView} from "./views/table/Table";

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    ),
);

function App() {
    const [state, setState] = React.useState(true);

      const toggleDrawer = (anchor: string, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setState( state );
      };

    store.subscribe(() => {
        localStorage.setItem('store', JSON.stringify(store.getState()));
    });

    return (
        <Provider store={store}>
        <SwipeableDrawer
            anchor="top"
            open={state}
            onClose={toggleDrawer("top", false)}
            onOpen={toggleDrawer("top", true)}
          >Hello            </SwipeableDrawer>
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
                            <Route path="/stepper/:id">
                                <StepperView/>
                            </Route>
                            <Route path="/table">
                                <TableView/>
                            </Route>
                        </Switch>
                    </Box>
                </Router>
            </Box>

        </Provider>
    );
}

export default App;
