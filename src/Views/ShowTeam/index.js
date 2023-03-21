import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTable from "Components/Cells/customTable";
import { getData } from "Redux/Actions/loginActions";

function ShowTeam() {
  const data = useSelector((state) => state.loginReducer.teams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData([]));
  }, []);

  const teamHeadings = [
    {
      label: "TeamName",
      key: "teamName",
    },
    {
      label: "TeamCaptain",
      key: "teamCaptain",
    },
    {
      label: "TeamType",
      key: "teamType",
    },
    {
      label: "TeamPlayers",
      key: "teamPlayers",
    },
  ];
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
