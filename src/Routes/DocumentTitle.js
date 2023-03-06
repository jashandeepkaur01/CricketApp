import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import { AUTH_ROUTES } from "./AuthRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";

const pathToRegexp = require("path-to-regexp");

const DocumentTitle = ({ isAuthenticated = false }) => {
  const location = useLocation();
  const matchedRoute = PUBLIC_ROUTES.concat(isAuthenticated ? PRIVATE_ROUTES : AUTH_ROUTES).find((route) =>
    pathToRegexp(route.path).test(location.pathname)
  );
  const title = matchedRoute ? matchedRoute.title : "";
  return (
    <Helmet>
      <title>{title}</title>
      <meta></meta>
    </Helmet>
  );
};

export default DocumentTitle;
