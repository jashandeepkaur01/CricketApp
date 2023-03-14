import SelectTeam from "Views/SelectTeam";
import Logout from "Views/Logout";
import Matches from "Views/Matches";
export const PRIVATE_ROUTES = [
  {
    path: "/selectTeam",
    component: SelectTeam,
    title: "Select Team",
  },
  {
    path: "/Matches",
    component: Matches,
    title: "Match",
  },
  {
    path: "/Matches",
    component: Matches,
    title: "Schedule Match",
  },
  {
    path: "/logout",
    component: Logout,
    title: "logout",
  },
];
