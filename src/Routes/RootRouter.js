import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppLayout from "../Components/Core/AppLayout";
import { AUTH_ROUTES } from "./AuthRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";

const DEFAULT_AUTHENTICATED_ROUTE = "/pageNotFound";
const DEFAULT_GUEST_ROUTE = "/pageNotFound";

const GuestRoutes = () => {
  return (
    <Switch>
      {[...PUBLIC_ROUTES, ...AUTH_ROUTES].map((route, routeIdx) => (
        <Route path={route.path} key={routeIdx} component={route.component} exact={route.exact} />
      ))}
      <Redirect from="*" to={DEFAULT_GUEST_ROUTE} />
    </Switch>
  );
};

const AuthenticatedRoutes = () => {
  return (
    <Switch>
      {[...PUBLIC_ROUTES, ...PRIVATE_ROUTES].map((route, routeIdx) => (
        <Route path={route.path} key={routeIdx} component={route.component} exact={route.exact} />
      ))}
      <Redirect from="*" to={DEFAULT_AUTHENTICATED_ROUTE} />
    </Switch>
  );
};

const RootRouter = () => {

  const token = useSelector((state) => state.login.loggedInPlayer);

  return (
    <BrowserRouter>
      <AppLayout>
        {token ? <AuthenticatedRoutes /> : <GuestRoutes />}
      </AppLayout>
    </BrowserRouter >
  );
};

export default RootRouter;
