import PageNotFound from "Views/404PageNotFound";
import MatchInfo from "Views/MatchInfo";
import PlayerInfo from "Views/PlayerInfo";
import ShowAllMatches from "Views/ShowAllMatches";
import ViewMatch from "Views/ViewMatch";
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
  {
    path: "/allMatchDetails/",
    component: ShowAllMatches,
    title: "All Matches"
  },
  {
    path: "/matchInfo/:matchName/:matchKey",
    component: MatchInfo,
    title: "MatchInfo"
  },
  {
    path: "/viewMatch/:matchName/:matchUniqueKey",
    component: ViewMatch,
    title: "viewMatch"
  },
  {
    path: "/pageNotFound",
    component: PageNotFound,
    title: "Page Not Found"
  }
];
