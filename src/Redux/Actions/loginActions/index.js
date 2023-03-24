import { LOGIN } from "./actionStates";
// export const getData = (data) => {
//   return {
//     type: GETDATA,
//     data,
//   };
// };
// export const setData = (data) => {
//   return {
//     type: SETDATA,
//     data,
//   };
// };
// export const setTeamData = (data) => {
//   return {
//     type: SETTEAMDATA,
//     data,
//   };
// };
// export const addTeamData = (data) => {
//   console.log("addteamdata called", data);
//   return {
//     type: ADDTEAM,
//     data,
//   };
// };
export const setLogin = (loggedInPlayer) => {
  return {
    type: LOGIN,
    loggedInPlayer,
  };
};
