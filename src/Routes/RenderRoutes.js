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
  <>
{routes.map((route, routeIdx) => (
      <Route path={route.path} key={routeIdx} component={route.component} exact={route.exact} />
    ))}
  </>
    
);
export default RenderRoutes;
