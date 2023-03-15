import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";
import AppLayout from "Components/Core/AppLayout";
import { AUTH_ROUTES } from "./AuthRoutes";
import { PUBLIC_ROUTES } from "./PublicRoutes";
import { PRIVATE_ROUTES } from "./PrivateRoutes";
import DocumentTitle from "./DocumentTitle";
import PublicLayout from "Components/Core/PublicLayout";
import PrivateLayout from "Components/Core/PrivateLayout";
import RenderRoutes from "./RenderRoutes";
import { getData } from "Redux/Actions/loginActions";

const DEFAULT_AUTHENTICATED_ROUTE = "/selectTeam";
<<<<<<< HEAD
const DEFAULT_GUEST_ROUTE = "/login";
=======
const DEFAULT_GUEST_ROUTE = "/authmessage";
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c

const GuestRoutes = ({token}) => {
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
  return (
    <Switch>
        <Route exact path={PUBLIC_ROUTES.map((route) => route.path)}>
        <PublicLayout>
          <RenderRoutes routes={PUBLIC_ROUTES} />
        </PublicLayout>
      </Route>

        <Route path={PRIVATE_ROUTES.map((route) => route.path)}>
        <PrivateLayout>
          <RenderRoutes routes={PRIVATE_ROUTES} />
       </PrivateLayout>
        </Route>
<<<<<<< HEAD
=======
     
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
     <Redirect from="*" to={DEFAULT_AUTHENTICATED_ROUTE} />
    
      </Switch>
  );
};

const RootRouter = () => {

 const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getData([]));
  }, [])

  const token = useSelector((state) => state.data.token);
<<<<<<< HEAD
=======

>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
  const baseName = process.env.REACT_APP_BASE_NAME;
  const isAuthenticated = !!token;
  return (


    <BrowserRouter basename={baseName}>
      <DocumentTitle isAuthenticated={isAuthenticated} />
<<<<<<< HEAD
      <AppLayout isAuthenticated={isAuthenticated}>{token? <AuthenticatedRoutes /> : <GuestRoutes />}</AppLayout>
=======
      <AppLayout isAuthenticated={isAuthenticated}>{token? <AuthenticatedRoutes /> : <GuestRoutes token={token}/>}</AppLayout>
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
    </BrowserRouter>

  );
};

export default RootRouter;
