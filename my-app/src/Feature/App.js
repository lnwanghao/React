import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import NoMatch from "../Component/NoMatch";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch style={{ height: "100%" }}>
        <Route
          exact
          path="/"
          render={() => {
            const online = JSON.parse(localStorage.getItem("online"));
            return online === true ? <Home /> : <Redirect to="/login" />;
          }}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route render={() => <NoMatch />} />
      </Switch>
    </Router>
  );
};

export default App;
