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

          <Route exact path="/:lang"
            render={(lang) => (<Home props={lang} />)} />

          <Route exact path="/about/:lang"
            render={(lang) => (<About props={lang} />)} />

          <Route exact path="/contact/:lang"
            render={(lang) => (<Contact props={lang} />)} />

          <Route exact path="/portfolio/:lang"
            render={(lang) => (<Portfolio props={lang} />)} />

          <Redirect to="/spa" />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default ReactRouter;
