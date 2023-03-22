import SelectTeam from "Views/SelectTeam";
import ScheduleMatch from "Views/ScheduleMatch";
import Logout from "Views/Logout";
import Match from "Views/Match";
import PlayerInfo from "Views/PlayerInfo";

export const PRIVATE_ROUTES = [
  // {
  //   path: "/selectTeam",
  //   component: SelectTeam,
  //   title: "Select Team",
  // },
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
    path: "/logout",
    component: Logout,
    title: "logout",
  },
  {
    path: "/selectTeam",
    component: SelectTeam,
    title: "Select Team",
  },
  {
    path: "/match",
    component: Match,
    title: "match",
  },
  {
    path: "/playerInfo",
    component: PlayerInfo,
    title: "playerInfo",
  },
];
