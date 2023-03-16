import SelectTeam from "Views/SelectTeam";
import ScheduleMatch from "../Views/ScheduleMatch";
import Logout from "Views/Logout";
import scoreComponent from "Views/scoreComponent";
import ScheduledMatches from "Views/ScheduledMatches";
export const PRIVATE_ROUTES = [
  // {
  //   path: "/selectTeam",
  //   component: SelectTeam,
  //   title: "Select Team",
  // },
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
    path: "/scoreComponent",
    component: scoreComponent,
    title: "scoreCard",
  },
  {
    path: "/scheduledMatches",
    component: ScheduledMatches,
    title: "ScheduledMatches",
  },
];
