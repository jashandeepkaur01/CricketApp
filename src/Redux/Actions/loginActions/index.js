import { LOGIN } from "./actionStates";
export const setLogin = (loggedInPlayer) => {
  return {
    type: LOGIN,
    loggedInPlayer,
  };
};
