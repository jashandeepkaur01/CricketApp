import CustomTable from "Components/Cells/customTable";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "Redux/Actions/playerActions";

// const arr = ["Player name", "Player PhoneNo", "Player Age", "JerseyyNo", "PlayerCountry", "sixes", "fours", "fiftys", "Hundreds", "Score", "Avg score", "inings played"];
const playerTableHeading = [
  {
    label: "Name",
    key: "Name",
  },
  {
    label: "Age",
    key: "Age",
  },
  {
    label: "JerseyNo",
    key: "JerseyNo",
  },
  {
    label: "PhoneNo",
    key: "PhoneNo",
  },
  {
    label: "Country",
    key: "Country",
  },
  {
    label: "Fours",
    key: "Fours",
  },
  {
    label: "Sixes",
    key: "Sixes",
  },
  {
    label: "Half Centuries",
    key: "Fifties",
  },
  {
    label: "Centuries",
    key: "Hundreds",
  },
  {
    label: "Total Score",
    key: "Score",
  },
  {
    label: "Avg score",
    key: "AvgScore",
  },
  {
    label: "Innings",
    key: "InningsPlayed",
  },
  {
    label: "Team",
    key: "Team",
  },
];
function Main() {
  const data = useSelector((state) => state.player.players);
  console.log(".....show player dataa.....", data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
  }, []);

  return (
    <div>
      <CustomTable
        tableContent={data}
        headingDetails={playerTableHeading}
        btnText="View Team"
        component="Name"
      />
    </div>
  );
}

export default Main;
