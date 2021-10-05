import { Route, Redirect } from "react-router";
import { isAuth } from "../services/auth";

export const PrivateRoute = ({ component: Component, ...rest }) => {
 <Route {...rest} render={props =>(
     isAuth() ? (
         <Component {...props}/>
     )
     : (
         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
     )
 )} />
};

