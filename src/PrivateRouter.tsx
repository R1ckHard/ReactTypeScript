import { Route, Redirect } from "react-router-dom";
import React from "react";

const PrivateRoute = (props: any) => {
    return (
        localStorage.getItem('accessToken') ? (
            <Route path={props.path} exact={props.exact} component={props.component} />
        ) : (
            <Redirect to="/sign" />
        )
    );
};
export default PrivateRoute;
