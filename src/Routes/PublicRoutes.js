import PlayerInfo from "Views/PlayerInfo";
import Home from "../Views/Home";
import ShowPlayer from "../Views/ShowPlayer";
import ShowTeam from "../Views/ShowTeam";

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
    path: "/playerInfo/:name",
    component: PlayerInfo,
    title: "Show Team",
  },

];
