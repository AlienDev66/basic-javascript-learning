import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Product from "./pages/Product";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/product/:id" component={Product} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
