import { getData } from "Redux/Actions/playerActions";
import { playerTableHeading } from "Shared/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "../../Components/Cells/customTable";

function Main() {
  const data = useSelector((state) => state.player.players);
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
      {/* <Temp /> */}
    </div>
  );
}

export default Main;
