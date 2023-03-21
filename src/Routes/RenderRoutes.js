import { Route, Switch } from "react-router-dom";

const RenderRoutes = ({
  routes = [
    {
      path: "/",
      component: () => <></>,
      exact: false,
    },
  ],
}) => (
  <Switch>
    {routes.map((route, routeIdx) => (
      <Route
        path={route.path}
        key={routeIdx}
        component={route.component}
        exact={route.exact}
      />
    ))}
  </Switch>
);
export default RenderRoutes;
