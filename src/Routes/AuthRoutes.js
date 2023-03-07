import Login from "Views/Login";
import SignUp from "Views/SignUp";
import ForgotPassword from "Views/ForgotPassword";
import Matches from "Views/Matches";

export const AUTH_ROUTES = [
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  {
    path: "/signup",
    component: SignUp,
    title: "Signup",
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    title: "Forgot Password",
  },
  {
    path: "/Matches",
    component: Matches,
    title: "Matches",
  },
];
