import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "Components/Cells/customTable";
import { getData } from "Redux/Actions/playerActions";
import { teamHeadings } from "Shared/Constants";

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
