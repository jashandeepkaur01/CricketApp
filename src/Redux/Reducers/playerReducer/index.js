import { GETDATA, SETDATA } from "Redux/Actions/playerActions/actionStates";

const initialData = {
  players: [],
};

const playerReducer = (data = initialData, action) => {
  switch (action.type) {
    case GETDATA:
      return data;
    case SETDATA:
      return { ...data, players: action.data.map((data) => ({ ...data })) };

    default:
      return data;
  }
};

export default playerReducer;
