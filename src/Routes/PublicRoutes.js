import ShowPlayer from "../Views/ShowPlayer";
import ShowTeam from "../Views/ShowTeam";
import Home from "../Views/Home";
import PlayerInfo from "Views/PlayerInfo";
import Match from "Views/Match";

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
  {
    path: "/match/:matchUniqueKey",
    component: Match,
    title: "match",
  },
];
