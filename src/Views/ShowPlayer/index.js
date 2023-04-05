import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "Redux/Actions/playerActions";
import { playerTableHeading } from "Shared/Constants";
import CustomTable from "../../Components/Cells/customTable";

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
