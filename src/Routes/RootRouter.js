import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

import { updateAuthToken } from "Shared/Axios";
import AppLayout from "Components/Core/AppLayout";
import { AUTH_ROUTES } from "./AuthRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import DocumentTitle from "./DocumentTitle";
import PublicLayout from "Components/Core/PublicLayout";
import PrivateLayout from "Components/Core/PrivateLayout";
import RenderRoutes from "./RenderRoutes";
import loginStore from "Redux/loginStore";
import { getData } from "Redux/Actions/loginActions";

const DEFAULT_AUTHENTICATED_ROUTE = "/";
const DEFAULT_GUEST_ROUTE = "/";

const GuestRoutes = () => {
  return (
    <Switch>
      <Route exact path={AUTH_ROUTES.map((route) => route.path)}>
        <RenderRoutes routes={AUTH_ROUTES} />
      </Route>
      <Route exact path={PUBLIC_ROUTES.map((route) => route.path)}>
        <PublicLayout>
          <RenderRoutes routes={PUBLIC_ROUTES} />
        </PublicLayout>
      </Route>
      <Redirect from="*" to={DEFAULT_GUEST_ROUTE} />
    </Switch>
  );
};

const AuthenticatedRoutes = () => {
  const routes = PUBLIC_ROUTES.concat(PRIVATE_ROUTES);
  
  return (
    <PrivateLayout>
      <Switch>
        <Route path={routes.map((route) => route.path)}>
          <RenderRoutes routes={routes} />
        </Route>
        <Redirect from="*" to={DEFAULT_AUTHENTICATED_ROUTE} />
      </Switch>
    </PrivateLayout>
  );
};

const RootRouter = () => {
 const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getData());
  }, [])

  const token = useSelector((state) => state.user.token);
console.log(token);
  const baseName = process.env.REACT_APP_BASE_NAME;
  const isAuthenticated = !!token;
  return (


    <BrowserRouter basename={baseName}>
      <DocumentTitle isAuthenticated={isAuthenticated} />
      <AppLayout isAuthenticated={isAuthenticated}>{token ? <AuthenticatedRoutes /> : <GuestRoutes />}</AppLayout>
    </BrowserRouter>

  );
};

export default RootRouter;
