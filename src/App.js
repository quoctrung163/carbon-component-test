import React from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Introduce from "./components/Introduce";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={AppHeader} />
      <Route exact path="/introduce" component={Introduce} />
    </Switch>
  );
};

export default App;
