import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';
import Demand from './pages/demand';
import Cart from './pages/cart';
import Ready from './pages/ready';
import Chef from './pages/chef';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Route component={Home} path="/home" />
      <Route component={Demand} path="/demand" />
      <Route component={Cart} path="/cart" />
      <Route component={Ready} path="/ready" />
      <Route component={Chef} path="/chef" />
    </BrowserRouter>
  );
};

export default Routes;
