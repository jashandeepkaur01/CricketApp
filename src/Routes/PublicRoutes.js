import ShowPlayer from "../Views/ShowPlayer";
import ShowTeam from "../Views/ShowTeam";
import SelectTeam from "Views/SelectTeam";
import Home from "../Views/Home";
import Login from "../Views/Login/Login"
import ScheduleMatch from "../Views/ScheduleMatch";


export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/showPlayer",
    component: ShowPlayer,
    title: "Show Player",
  },
  {
    path: "/showTeam",
    component: ShowTeam,
    title: "Show Team",
  },
  {
    path: "/selectTeam",
    component: SelectTeam,
    title: "Select Team",
  },
  {
    path: "/scheduleMatch",
    component: ScheduleMatch,
    title: "Schedule Match",
  },
  {
    path: "/login",
    component: Login,
    title: "Login",
  },
  
];
