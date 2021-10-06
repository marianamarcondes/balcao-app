import { Route, BrowserRouter, Switch } from "react-router-dom";

import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import Demand from "../pages/demand";
import Ready from "../pages/ready";
import Chef from "../pages/chef";
import NotFound from "../pages/notfound";
import PrivateRoutes from "../router/privateRoutes";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/" exact />
        <Route component={NotFound} path="/notfound" />
        <PrivateRoutes component={Register} path="/register" />
        <PrivateRoutes component={Home} path="/home" />
        <PrivateRoutes component={Demand} path="/demand" />
        <PrivateRoutes component={Ready} path="/ready" />
        <PrivateRoutes component={Chef} path="/chef" />
      </Switch>
    </BrowserRouter>
  );
}
