import { Route, BrowserRouter, Switch } from "react-router-dom";

import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import Demand from "../pages/demand";
import Ready from "../pages/ready";
import Chef from "../pages/chef";
import NotFound from "../pages/notfound";
import { PrivateRoute } from "../router/privateRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <Route component={NotFound} path="/notfound" />
        <PrivateRoute component={Register} path="/register" />
        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={Demand} path="/demand" />
        <PrivateRoute component={Ready} path="/ready" />
        <PrivateRoute component={Chef} path="/chef" />
      </Switch>
    </BrowserRouter>
  );
}
