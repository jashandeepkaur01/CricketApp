import React from "react";
import { useSelector } from "react-redux";
import CustomTable from "Components/Cells/customTable";

function ShowTeam() {
  const  data = useSelector((state) => state.loginReducer.teams);
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
      <CustomTable tableContent={data} headingDetails={teamHeadings} btnText='View Players' component='teamName'/>
    </>
  );
}

export default ShowTeam;