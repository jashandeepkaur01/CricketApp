import ShowPlayer from "../Views/ShowPlayer";
import ShowTeam from "../Views/ShowTeam";
import Home from "../Views/Home";
// import Login from "../Views/Login/Login"
// import ScheduleMatch from "../Views/ScheduleMatch";
<<<<<<< HEAD

=======
import SelectTeam from "Views/SelectTeam";
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c

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
<<<<<<< HEAD
=======
  },
  {
    path: "/selectTeam",
    component: SelectTeam,
    title: "Select Team",
>>>>>>> ddb40c81fb7e8104cb332ce4ab2e118c0180573c
  },
  
];
