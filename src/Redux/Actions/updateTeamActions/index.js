import { UPDATE_TEAM } from "./actionStates";
export const updatePlayersTeam = (data) => {
  return {
    type: UPDATE_TEAM,
    data,
  };
};
