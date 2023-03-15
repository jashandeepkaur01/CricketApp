import SelectTeam from "Views/SelectTeam";
import ScheduleMatch from "../Views/ScheduleMatch";
import Logout from "Views/Logout";
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
];
