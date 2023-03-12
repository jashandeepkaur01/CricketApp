import SelectTeam from "Views/SelectTeam";
import ScheduleMatch from "../Views/ScheduleMatch";

export const PRIVATE_ROUTES = [
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
];
