import AuthMessage from "Views/AuthMessage";
import Login from "Views/Login";

export const AUTH_ROUTES = [
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/authmessage",
    component: AuthMessage,
    title: "Authmessage",
  },
];
