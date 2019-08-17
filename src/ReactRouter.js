import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";

class ReactRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/portfolio" render={() => <Portfolio />} />

          <Redirect to="/" />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default ReactRouter;
