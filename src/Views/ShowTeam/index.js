import React from "react";
import { useSelector } from "react-redux";
import CustomTable from "Components/Cells/customTable";
// import CustomModal from 'Components/Atoms/customModal';

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

  console.log("hello",data);
  return (
    <>
      <CustomTable tableContent={data} headingDetails={teamHeadings} />
    </>
  );
}

export default ShowTeam;
