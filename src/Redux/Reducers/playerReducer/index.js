import { GET_DATA, SET_DATA } from "Redux/Actions/playerActions/actionStates";

const initialData = {
  players: [],
};

const playerReducer = (data = initialData, action) => {
  switch (action.type) {
    case GET_DATA:
      return data;
    case SET_DATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };

    default:
      return data;
  }
};

export default playerReducer;
