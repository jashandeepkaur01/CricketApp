import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "Redux/Actions/playerActions";
import { teamHeadings } from "Shared/Constants";
import CustomTable from "../../Components/Cells/customTable";

function ShowTeam() {
  const teamsData = useSelector((state) => state.team.teams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
  }, []);

  
  return (
    <>
      <CustomTable
        tableContent={teamsData}
        headingDetails={teamHeadings}
        btnText="View Players"
        component="teamName"
      />
    </>
  );
}

export default ShowTeam;
