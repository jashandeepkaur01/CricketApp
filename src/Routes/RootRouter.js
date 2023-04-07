import { getMatchData } from "Redux/Actions/matchActions";
import { getData } from "Redux/Actions/playerActions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AppLayout from "../Components/Core/AppLayout";
import { AUTH_ROUTES } from "./AuthRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";

const DEFAULT_AUTHENTICATED_ROUTE = "/selectTeam";
const DEFAULT_GUEST_ROUTE = "/authmessage";

const GuestRoutes = ({ token }) => {
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
    dispatch(getMatchData({}));
  }, []);

  const token = useSelector((state) => state.login.loggedInPlayer);
  const baseName = process.env.REACT_APP_BASE_NAME;

  return (
    <HashRouter basename={baseName}>
      <AppLayout>
        {token ? <AuthenticatedRoutes /> : <GuestRoutes token={token} />}
      </AppLayout>
    </HashRouter>
  );
};

export default RootRouter;
