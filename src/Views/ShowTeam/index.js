import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "Components/Cells/customTable";
import { getData } from "Redux/Actions/loginActions";
import { teamHeadings } from "Shared/Constants";
function ShowTeam() {
  const data = useSelector((state) => state.loginReducer.teams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
  }, []);

 
  return (
    <>
      <CustomTable
        tableContent={data}
        headingDetails={teamHeadings}
        btnText="View Players"
        component="teamName"
      />
    </>
  );
}

export default ShowTeam;
