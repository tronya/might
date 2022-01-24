import "./App.scss";
import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import Intro from "./views/Intro/Intro";
import StepperView from "./views/stepper/Stepper";
import { Box } from "@material-ui/core";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./store/reducer";
import { TableView } from "./views/table/Table";
import TargetView from "./views/target/target";
import { FC } from "react";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

const App: FC = () => {
  store.subscribe(() => {
    localStorage.setItem("store", JSON.stringify(store.getState()));
  });

  return (
    <Provider store={store}>
      <Router>
        <Box
          display="flex"
          height="100%"
          boxSizing="border-box"
          padding={2}
          maxWidth={640}
          margin="auto"
          p={{ xs: 2, sm: 3, md: 4 }}
        >
          <Box className="wrapper">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/stepper/:id" element={<StepperView />} />
              <Route path="/table" element={<TableView />} />
              <Route path="/target" element={<TargetView />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </Provider>
  );
};

export default App;
