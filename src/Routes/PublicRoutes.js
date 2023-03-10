import AddPlayer from "../Views/AddPlayer";
import AddTeam from "../Views/AddTeam";
import Home from "../Views/Home";
import ScheduleMatch from "../Views/ScheduleMatch";

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
    title: "Homepage",
    exact: true,
  },
  {
    path: "/AddPlayer",
    component: AddPlayer,
    title: "Add Player",
  },
  {
    path: "/AddTeam",
    component: AddTeam,
    title: "Add Team",
  },
  {
    path: "/ScheduleMatch",
    component: ScheduleMatch,
    title: "Schedule Match",
  },
];
