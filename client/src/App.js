import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./landingpage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
